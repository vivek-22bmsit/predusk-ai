import { Mic, Paperclip, Send, Bot, User, Edit3, Trash2, Check, X, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";

interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: string;
  isEditing?: boolean;
  originalContent?: string;
}

export function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      content: "Hello! I'm your Predusk AI assistant. How can I help you today?", 
      isUser: false, 
      timestamp: "2:30 PM" 
    },
    { 
      id: 2, 
      content: "Can you help me understand React hooks better?", 
      isUser: true, 
      timestamp: "2:31 PM" 
    },
    { 
      id: 3, 
      content: "Absolutely! React hooks are functions that let you use state and other React features in functional components. Would you like me to explain specific hooks like useState, useEffect, or others?", 
      isUser: false, 
      timestamp: "2:31 PM" 
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<number | null>(null);
  const [editingContent, setEditingContent] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<number | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const editTextareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (editingMessageId && editTextareaRef.current) {
      editTextareaRef.current.focus();
      editTextareaRef.current.select();
    }
  }, [editingMessageId]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      content: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response with more realistic timing
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse: Message = {
        id: Date.now() + 1,
        content: "Thanks for your message! I'm processing your request and will provide a helpful response. This is a simulated real-time response to demonstrate the enhanced chat functionality.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEditMessage = (messageId: number, content: string) => {
    setEditingMessageId(messageId);
    setEditingContent(content);
  };

  const handleSaveEdit = (messageId: number) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, content: editingContent, originalContent: msg.content }
        : msg
    ));
    setEditingMessageId(null);
    setEditingContent("");
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditingContent("");
  };

  const handleDeleteMessage = (messageId: number) => {
    setMessageToDelete(messageId);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteMessage = () => {
    if (messageToDelete) {
      setMessages(prev => prev.filter(msg => msg.id !== messageToDelete));
      setDeleteDialogOpen(false);
      setMessageToDelete(null);
    }
  };

  return (
    <>
      <div className="flex-1 flex flex-col bg-gradient-to-b from-white/60 via-orange-50/30 to-pink-50/40 dark:from-slate-900/50 dark:to-slate-800/50">
        {/* Chat Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-4 border-b border-orange-200/60 dark:border-slate-700/50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 ring-2 ring-orange-200 dark:ring-blue-800">
              <AvatarFallback className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">Predusk AI Assistant</h3>
              <p className="text-xs text-emerald-600 dark:text-green-400 flex items-center gap-1">
                <motion.span 
                  className="w-2 h-2 bg-emerald-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Online & Ready
              </p>
            </div>
          </div>
        </motion.div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto scroll-smooth">
          <AnimatePresence initial={false}>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 25,
                  delay: index * 0.05 
                }}
                className={`flex gap-3 group ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                {!message.isUser && (
                  <Avatar className="h-8 w-8 ring-2 ring-orange-200 dark:ring-blue-800 mt-1">
                    <AvatarFallback className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`flex flex-col max-w-xs md:max-w-md lg:max-w-lg ${message.isUser ? "items-end" : "items-start"}`}>
                  {editingMessageId === message.id ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full"
                    >
                      <Textarea
                        ref={editTextareaRef}
                        value={editingContent}
                        onChange={(e) => setEditingContent(e.target.value)}
                        className="min-h-20 resize-none bg-white/90 dark:bg-slate-800/90 border-orange-300 dark:border-slate-600"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSaveEdit(message.id);
                          } else if (e.key === 'Escape') {
                            handleCancelEdit();
                          }
                        }}
                      />
                      <div className="flex gap-2 mt-2">
                        <Button 
                          size="sm" 
                          onClick={() => handleSaveEdit(message.id)}
                          className="h-7 px-3 bg-green-600 hover:bg-green-700"
                        >
                          <Check className="h-3 w-3 mr-1" />
                          Save
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={handleCancelEdit}
                          className="h-7 px-3"
                        >
                          <X className="h-3 w-3 mr-1" />
                          Cancel
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className={`px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-200 relative ${
                        message.isUser
                          ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-orange-200/50 dark:shadow-purple-900/50"
                          : "bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-orange-200/40 dark:border-slate-700/50 shadow-orange-100/50 dark:shadow-slate-900/50"
                      }`}
                    >
                      {message.content}
                      
                      {/* Message Actions */}
                      <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              size="icon"
                              variant="secondary"
                              className="h-6 w-6 rounded-full shadow-sm bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600"
                            >
                              <MoreHorizontal className="h-3 w-3" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditMessage(message.id, message.content)}>
                              <Edit3 className="h-3 w-3 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => handleDeleteMessage(message.id)}
                              className="text-red-600 dark:text-red-400"
                            >
                              <Trash2 className="h-3 w-3 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="flex items-center gap-2 mt-1 px-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {message.timestamp}
                    </span>
                    {message.originalContent && (
                      <span className="text-xs text-orange-500 dark:text-orange-400">
                        • Edited
                      </span>
                    )}
                  </div>
                </div>

                {message.isUser && (
                  <Avatar className="h-8 w-8 ring-2 ring-pink-200 dark:ring-purple-800 mt-1">
                    <AvatarFallback className="bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-3 justify-start"
              >
                <Avatar className="h-8 w-8 ring-2 ring-orange-200 dark:ring-blue-800 mt-1">
                  <AvatarFallback className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-white/90 dark:bg-slate-800/90 px-4 py-3 rounded-2xl border border-orange-200/40 dark:border-slate-700/50 shadow-lg shadow-orange-100/50 dark:shadow-slate-900/50">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        className="w-2 h-2 bg-orange-400 dark:bg-slate-500 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: dot * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="border-t border-orange-200/60 dark:border-slate-700/50 p-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm"
        >
          <div className="flex items-end space-x-2 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-orange-50 dark:hover:bg-blue-900/20 transition-colors">
                <Mic className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-emerald-50 dark:hover:bg-green-900/20 transition-colors">
                <Paperclip className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </Button>
            </motion.div>
            
            <div className="flex-1 relative">
              <motion.div
                animate={{ 
                  scale: isInputFocused ? 1.02 : 1,
                  boxShadow: isInputFocused 
                    ? "0 0 0 3px rgba(249, 115, 22, 0.1)" 
                    : "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  className="pr-12 h-10 bg-white/90 dark:bg-slate-800/90 border-orange-200/60 dark:border-slate-700/50 backdrop-blur-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all duration-200 shadow-sm"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1 top-1"
              >
                <Button 
                  size="icon" 
                  className="h-8 w-8 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 transition-all duration-200 shadow-md"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Message</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this message? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDeleteMessage}
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
