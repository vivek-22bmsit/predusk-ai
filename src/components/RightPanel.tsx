import { Bot, X, Zap, Database, Globe, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

interface RightPanelProps {
  onClose: () => void;
  isMobile: boolean;
}

export function RightPanel({ onClose, isMobile }: RightPanelProps) {
  const models = [
    { name: "GPT-4 Turbo", status: "active", performance: 95, icon: Zap, color: "text-emerald-600 dark:text-green-400" },
    { name: "GPT-3.5 Turbo", status: "available", performance: 88, icon: Globe, color: "text-orange-600 dark:text-blue-400" },
    { name: "Claude-3 Opus", status: "available", performance: 92, icon: Code, color: "text-pink-600 dark:text-purple-400" },
    { name: "Gemini Pro", status: "available", performance: 89, icon: Database, color: "text-indigo-600 dark:text-indigo-400" },
  ];

  const datasets = [
    { name: "Knowledge Base", status: "connected", size: "2.4 GB", items: "15K items" },
    { name: "Documentation", status: "syncing", size: "850 MB", items: "8.2K items" },
    { name: "Code Repository", status: "connected", size: "1.8 GB", items: "22K items" },
    { name: "Training Data", status: "available", size: "5.2 GB", items: "45K items" },
  ];

  return (
    <motion.aside 
      className="h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-l border-pink-200/60 dark:border-slate-700/50 shadow-xl shadow-pink-100/50 dark:shadow-slate-900/50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="p-4 border-b border-pink-200/50 dark:border-slate-700/50">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-800 dark:text-slate-200">Assistant Info</h2>
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

      <div className="p-4 space-y-4 overflow-y-auto h-full pb-20">
        {/* Agent Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-pink-200/60 dark:border-blue-700/50 shadow-lg shadow-pink-100/50 dark:shadow-blue-900/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-base">
                <Avatar className="h-10 w-10 ring-2 ring-pink-200 dark:ring-blue-800">
                  <AvatarFallback className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">Predusk AI Assistant</h3>
                  <p className="text-xs text-emerald-600 dark:text-green-400 font-normal flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Active & Learning
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Advanced AI assistant optimized for development tasks, code analysis, and creative problem-solving with Predusk intelligence.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-800 dark:bg-blue-900 dark:text-blue-200">
                  Code Expert
                </Badge>
                <Badge variant="secondary" className="text-xs bg-pink-100 text-pink-800 dark:bg-purple-900 dark:text-purple-200">
                  Creative AI
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Models and Datasets Tabs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-pink-200/50 dark:border-slate-700/50 shadow-md shadow-pink-100/30 dark:shadow-slate-900/50">
            <CardHeader className="pb-3">
              <Tabs defaultValue="models" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-pink-100/50 dark:bg-slate-800/50">
                  <TabsTrigger value="models" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                    Models
                  </TabsTrigger>
                  <TabsTrigger value="datasets" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                    Data
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="models" className="mt-4">
                  <div className="space-y-3">
                    {models.map((model, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="p-3 rounded-lg hover:bg-pink-50/50 dark:hover:bg-slate-800/50 cursor-pointer transition-all duration-200 border border-transparent hover:border-pink-200/50 dark:hover:border-slate-700/50 group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <model.icon className={`h-4 w-4 ${model.color} group-hover:scale-110 transition-transform`} />
                            <span className="text-sm font-medium">{model.name}</span>
                          </div>
                          {model.status === "active" ? (
                            <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-800 dark:bg-green-900 dark:text-green-200">
                              Active
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">
                              Available
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                            <span>Performance</span>
                            <span>{model.performance}%</span>
                          </div>
                          <Progress value={model.performance} className="h-1.5" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="datasets" className="mt-4">
                  <div className="space-y-3">
                    {datasets.map((dataset, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="p-3 rounded-lg hover:bg-pink-50/50 dark:hover:bg-slate-800/50 cursor-pointer transition-all duration-200 border border-transparent hover:border-pink-200/50 dark:hover:border-slate-700/50 group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{dataset.name}</span>
                          <Badge 
                            variant={dataset.status === "connected" ? "secondary" : "outline"} 
                            className={`text-xs ${
                              dataset.status === "connected" 
                                ? "bg-emerald-100 text-emerald-800 dark:bg-green-900 dark:text-green-200"
                                : dataset.status === "syncing"
                                ? "bg-amber-100 text-amber-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : ""
                            }`}
                          >
                            {dataset.status === "syncing" && (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-2 h-2 border border-amber-600 border-t-transparent rounded-full mr-1"
                              />
                            )}
                            {dataset.status.charAt(0).toUpperCase() + dataset.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                          <span>{dataset.size}</span>
                          <span>{dataset.items}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </motion.aside>
  );
}
