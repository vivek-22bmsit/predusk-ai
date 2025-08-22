import { Bot, Briefcase, History, Plus, X, Zap, Clock, Users, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./ui/badge";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface SidebarProps {
  onClose: () => void;
  isMobile: boolean;
}

interface RecentChat {
  id: number;
  title: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function Sidebar({ onClose, isMobile }: SidebarProps) {
  const [recentChats, setRecentChats] = useState<RecentChat[]>([
    { id: 1, title: "React Components", time: "2m ago", icon: Zap },
    { id: 2, title: "API Integration", time: "1h ago", icon: Clock },
    { id: 3, title: "Team Meeting", time: "3h ago", icon: Users },
  ]);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [chatToDelete, setChatToDelete] = useState<number | null>(null);

  const navigationItems = [
    { icon: Plus, label: "New Chat", active: false, color: "text-emerald-600 dark:text-green-400", bgColor: "hover:bg-emerald-50 dark:hover:bg-green-900/20" },
    { icon: Bot, label: "Agents", active: false, color: "text-orange-600 dark:text-blue-400", bgColor: "hover:bg-orange-50 dark:hover:bg-blue-900/20", badge: "3" },
    { icon: Briefcase, label: "Workspaces", active: true, color: "text-pink-600 dark:text-purple-400", bgColor: "hover:bg-pink-50 dark:hover:bg-purple-900/20" },
    { icon: History, label: "History", active: false, color: "text-indigo-600 dark:text-indigo-400", bgColor: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20" },
  ];

  const handleDeleteChat = (chatId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setChatToDelete(chatId);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteChat = () => {
    if (chatToDelete) {
      setRecentChats(prev => prev.filter(chat => chat.id !== chatToDelete));
      setDeleteDialogOpen(false);
      setChatToDelete(null);
    }
  };

  return (
    <>
      <motion.aside 
        className="h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-r border-orange-200/60 dark:border-slate-700/50 shadow-xl shadow-orange-100/50 dark:shadow-slate-900/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {/* Header */}
        <div className="p-4 border-b border-orange-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-800 dark:text-slate-200">Navigation</h2>
            {isMobile && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 hover:bg-red-50 dark:hover:bg-red-900/20"
                  onClick={onClose}
                >
                  <X className="h-4 w-4 text-slate-500" />
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-2">
          {navigationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 h-11 transition-all duration-200 ${item.bgColor} ${
                  item.active 
                    ? "bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-orange-200/60 dark:border-blue-700/50 shadow-md shadow-orange-100/50 dark:shadow-blue-900/50" 
                    : ""
                }`}
              >
                <item.icon className={`h-4 w-4 ${item.color}`} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge variant="secondary" className="h-5 text-xs bg-orange-100 text-orange-800 dark:bg-blue-900 dark:text-blue-200">
                    {item.badge}
                  </Badge>
                )}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Recent Chats */}
        <div className="p-4 border-t border-orange-200/50 dark:border-slate-700/50">
          <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">Recent Chats</h3>
          <div className="space-y-1">
            <AnimatePresence>
              {recentChats.map((chat, index) => (
                <motion.div
                  key={chat.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0, scale: 0.95 }}
                  transition={{ delay: (index + 4) * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="p-2 rounded-lg hover:bg-orange-50/50 dark:hover:bg-slate-800/50 cursor-pointer transition-all duration-200 group relative"
                >
                  <div className="flex items-center gap-2">
                    <chat.icon className="h-3 w-3 text-slate-400 group-hover:text-orange-500 transition-colors" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">{chat.title}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">{chat.time}</p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 hover:bg-red-100 dark:hover:bg-red-900/20 text-slate-400 hover:text-red-600 dark:hover:text-red-400"
                        onClick={(e: React.MouseEvent) => handleDeleteChat(chat.id, e)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.aside>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Chat</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this chat? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDeleteChat}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
