"use client";

import { Navigation } from "../components/Navigation";
import { Sidebar } from "../components/Sidebar";
import { ChatArea } from "../components/ChatArea";
import { RightPanel } from "../components/RightPanel";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [autoHideEnabled, setAutoHideEnabled] = useState(true);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setShowSidebar(false);
        setShowRightPanel(false);
        setAutoHideEnabled(false);
      } else {
        setAutoHideEnabled(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-hide functionality based on cursor position
  useEffect(() => {
    if (!autoHideEnabled || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      
      // Define edge zones (50px from each edge)
      const edgeZone = 50;
      const isNearLeftEdge = clientX < edgeZone;
      const isNearRightEdge = clientX > windowWidth - edgeZone;
      const isInChatArea = clientY > 64; // Below navigation bar
      
      // Show/hide sidebar based on left edge proximity
      if (isNearLeftEdge && isInChatArea) {
        setShowSidebar(true);
      } else if (!isNearLeftEdge && clientX > 320) { // Hide if not near edge and away from sidebar
        setTimeout(() => {
          if (!isNearLeftEdge) setShowSidebar(false);
        }, 1000);
      }
      
      // Show/hide right panel based on right edge proximity
      if (isNearRightEdge && isInChatArea) {
        setShowRightPanel(true);
      } else if (!isNearRightEdge && clientX < windowWidth - 320) { // Hide if not near edge and away from panel
        setTimeout(() => {
          if (!isNearRightEdge) setShowRightPanel(false);
        }, 1000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [autoHideEnabled, isMobile]);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
    }
  }, []);

  // Load panel preferences from localStorage on mount
  useEffect(() => {
    const savedSidebarState = localStorage.getItem('showSidebar');
    const savedRightPanelState = localStorage.getItem('showRightPanel');
    
    if (savedSidebarState !== null && !isMobile && !autoHideEnabled) {
      setShowSidebar(savedSidebarState === 'true');
    }
    
    if (savedRightPanelState !== null && !isMobile && !autoHideEnabled) {
      setShowRightPanel(savedRightPanelState === 'true');
    }
  }, [isMobile, autoHideEnabled]);

  // Apply theme to document and save preference
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Save panel preferences to localStorage (only when auto-hide is disabled)
  useEffect(() => {
    if (!autoHideEnabled) {
      localStorage.setItem('showSidebar', showSidebar.toString());
    }
  }, [showSidebar, autoHideEnabled]);

  useEffect(() => {
    if (!autoHideEnabled) {
      localStorage.setItem('showRightPanel', showRightPanel.toString());
    }
  }, [showRightPanel, autoHideEnabled]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleRightPanel = () => {
    setShowRightPanel(!showRightPanel);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      {/* Navigation Bar */}
      <Navigation 
        isDark={isDark} 
        onThemeToggle={toggleTheme}
        showSidebar={showSidebar}
        showRightPanel={showRightPanel}
        onToggleSidebar={toggleSidebar}
        onToggleRightPanel={toggleRightPanel}
        isMobile={isMobile}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMobile && (showSidebar || showRightPanel) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50 z-20 md:hidden"
              onClick={() => {
                setShowSidebar(false);
                setShowRightPanel(false);
              }}
            />
          )}
        </AnimatePresence>

        {/* Auto-hide indicator zones */}
        {autoHideEnabled && !isMobile && (
          <>
            {/* Left edge indicator */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-orange-400/20 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
              onMouseEnter={() => setShowSidebar(true)}
            />
            {/* Right edge indicator */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-pink-400/20 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
              onMouseEnter={() => setShowRightPanel(true)}
            />
          </>
        )}

        {/* Left Sidebar */}
        <AnimatePresence mode="wait">
          {showSidebar && (
            <motion.div
              key="sidebar"
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className={`${isMobile ? 'fixed left-0 top-16 bottom-0 z-30' : 'relative'} w-80 md:w-64`}
            >
              <Sidebar onClose={() => setShowSidebar(false)} isMobile={isMobile} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Chat Area */}
        <motion.div 
          className="flex-1 flex flex-col min-w-0"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <ChatArea />
        </motion.div>
        
        {/* Right Panel */}
        <AnimatePresence mode="wait">
          {showRightPanel && (
            <motion.div
              key="rightpanel"
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className={`${isMobile ? 'fixed right-0 top-16 bottom-0 z-30' : 'relative'} w-80`}
            >
              <RightPanel onClose={() => setShowRightPanel(false)} isMobile={isMobile} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}