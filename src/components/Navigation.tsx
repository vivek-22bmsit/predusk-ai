import { Search, Settings, User, Sun, Moon, PanelLeft, PanelRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SearchDialog } from "./SearchDialog";

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
  showSidebar: boolean;
  showRightPanel: boolean;
  onToggleSidebar: () => void;
  onToggleRightPanel: () => void;
  isMobile: boolean;
}

export function Navigation({ 
  isDark, 
  onThemeToggle, 
  showSidebar, 
  showRightPanel, 
  onToggleSidebar, 
  onToggleRightPanel,
  isMobile
}: NavigationProps) {
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-orange-200/60 dark:border-slate-700/50 flex items-center justify-between px-4 md:px-6 shadow-lg shadow-orange-100/50 dark:shadow-slate-900/50 z-50"
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 hover:bg-orange-50 dark:hover:bg-blue-900/20 transition-colors"
              onClick={onToggleSidebar}
            >
              <motion.div
                animate={{ rotate: showSidebar ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                <PanelLeft className={`h-4 w-4 transition-colors ${showSidebar ? 'text-orange-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`} />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-orange-600 dark:text-blue-400"
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Predusk AI
            </h1>
          </motion.div>
        </div>
        
        <div className="flex items-center space-x-1 md:space-x-2">
          {!isMobile && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 hover:bg-pink-50 dark:hover:bg-purple-900/20 transition-colors"
                onClick={onToggleRightPanel}
              >
                <motion.div
                  animate={{ rotate: showRightPanel ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <PanelRight className={`h-4 w-4 transition-colors ${showRightPanel ? 'text-pink-600 dark:text-purple-400' : 'text-slate-500 dark:text-slate-400'}`} />
                </motion.div>
              </Button>
            </motion.div>
          )}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
              onClick={onThemeToggle}
            >
              <motion.div
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-amber-500" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-600" />
                )}
              </motion.div>
            </Button>
          </motion.div>
          
          {!isMobile && (
            <>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-9 w-9 hover:bg-emerald-50 dark:hover:bg-green-900/20 transition-colors relative group"
                  onClick={() => setSearchDialogOpen(true)}
                >
                  <Search className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Enhanced Search
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                  <Settings className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </Button>
              </motion.div>
            </>
          )}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-1"
          >
            <Avatar className="h-8 w-8 ring-2 ring-orange-200 dark:ring-blue-800 transition-all hover:ring-orange-300 dark:hover:ring-blue-700">
              <AvatarFallback className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
        </div>
      </motion.nav>

      <SearchDialog open={searchDialogOpen} onOpenChange={setSearchDialogOpen} />
    </>
  );
}
