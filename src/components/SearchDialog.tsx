import { useState } from "react";
import { Search, Link, Download, X, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ExtractedData {
  title: string;
  content: string;
  url: string;
  wordCount: number;
  extractedAt: string;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [activeTab, setActiveTab] = useState("search");

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    // Handle search functionality
    console.log("Searching for:", searchQuery);
    onOpenChange(false);
  };

  const handleUrlExtraction = async () => {
    if (!urlInput.trim()) return;
    
    setIsExtracting(true);
    
    // Simulate API call for text extraction
    setTimeout(() => {
      const mockData: ExtractedData = {
        title: "Sample Article Title",
        content: "This is the extracted content from the provided URL. The Predusk AI assistant has successfully parsed and extracted the main text content, removing navigation elements, advertisements, and other non-essential content to provide you with clean, readable text that can be used for analysis, summarization, or further processing.",
        url: urlInput,
        wordCount: 47,
        extractedAt: new Date().toLocaleString(),
      };
      
      setExtractedData(mockData);
      setIsExtracting(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      action();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-orange-600" />
            Enhanced Search & Text Extraction
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="search" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search
            </TabsTrigger>
            <TabsTrigger value="extract" className="flex items-center gap-2">
              <Link className="h-4 w-4" />
              URL Extraction
            </TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-4 mt-6">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  placeholder="Search through your conversations, documents, and knowledge base..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleSearch)}
                  className="pr-12 h-12 bg-white/90 dark:bg-slate-800/90 border-orange-200/60 dark:border-slate-700/50"
                />
                <Button 
                  size="icon" 
                  className="absolute right-1 top-1 h-10 w-10 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"
                  onClick={handleSearch}
                  disabled={!searchQuery.trim()}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Recent chats", "Code snippets", "Documentation", "Meeting notes"].map((suggestion) => (
                  <Badge 
                    key={suggestion}
                    variant="secondary" 
                    className="cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors"
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    {suggestion}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="extract" className="space-y-4 mt-6">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  placeholder="Enter URL to extract text content..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleUrlExtraction)}
                  className="pr-12 h-12 bg-white/90 dark:bg-slate-800/90 border-orange-200/60 dark:border-slate-700/50"
                />
                <Button 
                  size="icon" 
                  className="absolute right-1 top-1 h-10 w-10 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"
                  onClick={handleUrlExtraction}
                  disabled={!urlInput.trim() || isExtracting}
                >
                  {isExtracting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Download className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <AnimatePresence>
                {isExtracting && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-8"
                  >
                    <Loader2 className="h-8 w-8 animate-spin mx-auto text-orange-500 mb-4" />
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Extracting text content from URL...
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {extractedData && !isExtracting && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-4"
                  >
                    <div className="bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-orange-200/60 dark:border-blue-700/50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
                            {extractedData.title}
                          </h3>
                          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                            <span>{extractedData.wordCount} words</span>
                            <span>{extractedData.extractedAt}</span>
                            <Badge variant="secondary" className="text-xs">
                              Extracted
                            </Badge>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setExtractedData(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Textarea
                        value={extractedData.content}
                        readOnly
                        className="min-h-32 max-h-48 resize-none bg-white/80 dark:bg-slate-800/80"
                      />
                      
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline">
                          Copy Content
                        </Button>
                        <Button size="sm" variant="outline">
                          Send to Chat
                        </Button>
                        <Button size="sm" variant="outline">
                          Summarize
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-xs text-slate-500 dark:text-slate-400">
                <p>• Supports most websites, articles, and documentation pages</p>
                <p>• Automatically removes ads, navigation, and formatting</p>
                <p>• Extracted content can be used directly in your conversations</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
