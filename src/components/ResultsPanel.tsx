import { useState } from "react";
import { Download, Filter, LayoutGrid, List, Check, Copy, FileJson } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Review } from "@/data/mockReviews";
import ReviewCard from "./ReviewCard";
import SourceBadge from "./SourceBadge";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const SampleDownloads = () => {
  const samples = [
    { source: 'g2', file: '/output/sample_g2.json', label: 'G2' },
    { source: 'capterra', file: '/output/sample_capterra.json', label: 'Capterra' },
    { source: 'trustradius', file: '/output/sample_trustradius.json', label: 'TrustRadius' },
  ] as const;

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <FileJson className="h-5 w-5 text-primary" />
        <h3 className="font-semibold">Sample Output Files</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Download sample JSON files matching the assignment output format:
      </p>
      <div className="flex flex-wrap gap-2">
        {samples.map(({ source, file, label }) => (
          <a
            key={source}
            href={file}
            download
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
              "border hover:scale-105",
              source === 'g2' && "border-g2/50 bg-g2/10 text-g2 hover:bg-g2/20",
              source === 'capterra' && "border-capterra/50 bg-capterra/10 text-capterra hover:bg-capterra/20",
              source === 'trustradius' && "border-trustradius/50 bg-trustradius/10 text-trustradius hover:bg-trustradius/20"
            )}
          >
            <Download className="h-4 w-4" />
            sample_{source}.json
          </a>
        ))}
      </div>
    </div>
  );
};

interface ResultsPanelProps {
  reviews: Review[];
  company: string;
  dateRange: { start: string; end: string };
  sources: ('g2' | 'capterra' | 'trustradius')[];
}

const ResultsPanel = ({ reviews, company, dateRange, sources }: ResultsPanelProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterSource, setFilterSource] = useState<'all' | 'g2' | 'capterra' | 'trustradius'>('all');
  const [copied, setCopied] = useState(false);

  const filteredReviews = filterSource === 'all' 
    ? reviews 
    : reviews.filter(r => r.source === filterSource);

  const handleExport = () => {
    const dataStr = JSON.stringify(filteredReviews, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `${company.toLowerCase().replace(/\s+/g, '_')}_reviews.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Export successful",
      description: `Saved ${filteredReviews.length} reviews to ${exportFileDefaultName}`,
    });
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(filteredReviews, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Copied to clipboard",
      description: `${filteredReviews.length} reviews copied as JSON`,
    });
  };

  const getSourceCount = (source: 'g2' | 'capterra' | 'trustradius') => 
    reviews.filter(r => r.source === source).length;

  return (
    <div className="space-y-6">
      {/* Sample Downloads */}
      <SampleDownloads />

      {/* Summary Banner */}
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="font-semibold">Scraping Complete</span>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground font-mono">
              <span>{company}</span>
              <span className="text-border">•</span>
              <span>{dateRange.start} → {dateRange.end}</span>
              <span className="text-border">•</span>
              <span>{reviews.length} reviews</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyJson}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy JSON'}
            </Button>
            <Button variant="default" size="sm" onClick={handleExport}>
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <div className="flex gap-1 p-1 rounded-lg bg-muted/30 border border-border">
            <button
              onClick={() => setFilterSource('all')}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                filterSource === 'all' 
                  ? "bg-secondary text-secondary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              All ({reviews.length})
            </button>
            {sources.includes('g2') && (
              <button
                onClick={() => setFilterSource('g2')}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  filterSource === 'g2' 
                    ? "bg-g2/20 text-g2" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                G2 ({getSourceCount('g2')})
              </button>
            )}
            {sources.includes('capterra') && (
              <button
                onClick={() => setFilterSource('capterra')}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  filterSource === 'capterra' 
                    ? "bg-capterra/20 text-capterra" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Capterra ({getSourceCount('capterra')})
              </button>
            )}
            {sources.includes('trustradius') && (
              <button
                onClick={() => setFilterSource('trustradius')}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  filterSource === 'trustradius' 
                    ? "bg-trustradius/20 text-trustradius" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                TrustRadius ({getSourceCount('trustradius')})
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 p-1 rounded-lg bg-muted/30 border border-border">
          <button
            onClick={() => setViewMode('grid')}
            className={cn(
              "p-2 rounded-md transition-colors",
              viewMode === 'grid' 
                ? "bg-secondary text-secondary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={cn(
              "p-2 rounded-md transition-colors",
              viewMode === 'list' 
                ? "bg-secondary text-secondary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Reviews Grid/List */}
      <div className={cn(
        viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 gap-4" 
          : "flex flex-col gap-4"
      )}>
        {filteredReviews.map((review, index) => (
          <ReviewCard key={`${review.source}-${index}`} review={review} index={index} />
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No reviews found for the selected filters.</p>
        </div>
      )}
    </div>
  );
};

export default ResultsPanel;
