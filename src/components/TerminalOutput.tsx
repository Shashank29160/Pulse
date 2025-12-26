import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogEntry {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  timestamp: string;
}

interface TerminalOutputProps {
  isRunning: boolean;
  company: string;
  sources: ('g2' | 'capterra' | 'trustradius')[];
  onComplete: () => void;
}

const TerminalOutput = ({ isRunning, company, sources, onComplete }: TerminalOutputProps) => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    if (!isRunning) {
      setLogs([]);
      return;
    }

    const simulatedLogs: { delay: number; entry: LogEntry }[] = [
      { delay: 100, entry: { type: 'info', message: '🚀 Initializing Pulse Review Scraper v1.0.0', timestamp: new Date().toISOString() } },
      { delay: 300, entry: { type: 'info', message: `📋 Target company: ${company}`, timestamp: new Date().toISOString() } },
      { delay: 500, entry: { type: 'info', message: `📅 Date range configured`, timestamp: new Date().toISOString() } },
    ];

    let currentDelay = 700;
    
    sources.forEach(source => {
      const sourceLabel = source === 'g2' ? 'G2' : source === 'capterra' ? 'Capterra' : 'TrustRadius';
      const pageCount = Math.floor(Math.random() * 3) + 2;
      
      simulatedLogs.push({ 
        delay: currentDelay, 
        entry: { type: 'info', message: `🔍 Starting ${sourceLabel} scraper...`, timestamp: new Date().toISOString() } 
      });
      currentDelay += 200;

      for (let page = 1; page <= pageCount; page++) {
        simulatedLogs.push({ 
          delay: currentDelay, 
          entry: { type: 'info', message: `   ├─ ${sourceLabel}: Fetching page ${page}/${pageCount}`, timestamp: new Date().toISOString() } 
        });
        currentDelay += 300;
      }

      const reviewCount = Math.floor(Math.random() * 10) + 3;
      simulatedLogs.push({ 
        delay: currentDelay, 
        entry: { type: 'success', message: `   └─ ${sourceLabel}: ${reviewCount} reviews extracted ✓`, timestamp: new Date().toISOString() } 
      });
      currentDelay += 200;
    });

    simulatedLogs.push({ 
      delay: currentDelay + 300, 
      entry: { type: 'success', message: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', timestamp: new Date().toISOString() } 
    });
    simulatedLogs.push({ 
      delay: currentDelay + 400, 
      entry: { type: 'success', message: '✔ Scraping complete!', timestamp: new Date().toISOString() } 
    });
    simulatedLogs.push({ 
      delay: currentDelay + 500, 
      entry: { type: 'info', message: `✔ Total reviews: ${sources.length * 5}+`, timestamp: new Date().toISOString() } 
    });

    const timeouts: NodeJS.Timeout[] = [];
    
    simulatedLogs.forEach(({ delay, entry }) => {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, entry]);
      }, delay);
      timeouts.push(timeout);
    });

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, currentDelay + 700);
    timeouts.push(completeTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [isRunning, company, sources, onComplete]);

  const logColors = {
    info: 'text-muted-foreground',
    success: 'text-primary',
    warning: 'text-yellow-500',
    error: 'text-destructive',
  };

  if (!isRunning && logs.length === 0) return null;

  return (
    <div className="rounded-xl border border-border bg-muted/20 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-destructive/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-primary/80" />
        </div>
        <span className="text-xs text-muted-foreground font-mono">Terminal Output</span>
      </div>
      <div className="p-4 max-h-64 overflow-y-auto font-mono text-xs space-y-1">
        {logs.map((log, index) => (
          <div 
            key={index} 
            className={cn("animate-fade-in", logColors[log.type])}
          >
            {log.message}
          </div>
        ))}
        {isRunning && logs.length > 0 && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="animate-pulse">▌</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalOutput;
