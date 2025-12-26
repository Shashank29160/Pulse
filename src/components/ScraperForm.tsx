import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play, Loader2, Building2, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScraperFormProps {
  onSubmit: (data: {
    company: string;
    startDate: string;
    endDate: string;
    sources: ('g2' | 'capterra' | 'trustradius')[];
  }) => void;
  isLoading: boolean;
}

const sources = [
  { id: 'g2' as const, label: 'G2', color: 'g2' },
  { id: 'capterra' as const, label: 'Capterra', color: 'capterra' },
  { id: 'trustradius' as const, label: 'TrustRadius', color: 'trustradius' },
];

const ScraperForm = ({ onSubmit, isLoading }: ScraperFormProps) => {
  const [company, setCompany] = useState("Chargebee");
  const [startDate, setStartDate] = useState("2023-01-01");
  const [endDate, setEndDate] = useState("2023-06-30");
  const [selectedSources, setSelectedSources] = useState<('g2' | 'capterra' | 'trustradius')[]>(['g2', 'capterra', 'trustradius']);

  const toggleSource = (source: 'g2' | 'capterra' | 'trustradius') => {
    setSelectedSources(prev => 
      prev.includes(source)
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSources.length === 0) return;
    onSubmit({ company, startDate, endDate, sources: selectedSources });
  };

  const sourceButtonStyles = {
    g2: 'border-g2/50 bg-g2/10 text-g2 hover:bg-g2/20',
    capterra: 'border-capterra/50 bg-capterra/10 text-capterra hover:bg-capterra/20',
    trustradius: 'border-trustradius/50 bg-trustradius/10 text-trustradius hover:bg-trustradius/20',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Company Input */}
      <div className="space-y-2">
        <Label htmlFor="company" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-4 w-4" />
          Company Name
        </Label>
        <Input
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="e.g., Chargebee, Stripe, HubSpot"
          className="bg-input/50 border-border focus:border-primary"
          required
        />
      </div>

      {/* Date Range */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startDate" className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            Start Date
          </Label>
          <Input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-input/50 border-border focus:border-primary font-mono text-sm"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate" className="text-sm text-muted-foreground">
            End Date
          </Label>
          <Input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-input/50 border-border focus:border-primary font-mono text-sm"
            required
          />
        </div>
      </div>

      {/* Source Selection */}
      <div className="space-y-3">
        <Label className="text-sm text-muted-foreground">Review Sources</Label>
        <div className="flex flex-wrap gap-2">
          {sources.map(source => (
            <button
              key={source.id}
              type="button"
              onClick={() => toggleSource(source.id)}
              className={cn(
                "px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200",
                selectedSources.includes(source.id)
                  ? sourceButtonStyles[source.id]
                  : "border-border bg-transparent text-muted-foreground hover:border-muted-foreground/50"
              )}
            >
              {source.label}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        variant="hero"
        size="lg"
        className="w-full"
        disabled={isLoading || selectedSources.length === 0}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Scraping Reviews...
          </>
        ) : (
          <>
            <Play className="h-4 w-4" />
            Start Scraping
          </>
        )}
      </Button>

      {/* CLI Preview */}
      <div className="rounded-lg bg-muted/30 border border-border p-4">
        <p className="text-xs text-muted-foreground mb-2">CLI equivalent:</p>
        <code className="text-xs font-mono text-primary break-all">
          python scrape_reviews.py --company "{company}" --start-date {startDate} --end-date {endDate} --source {selectedSources.join(',')}
        </code>
      </div>
    </form>
  );
};

export default ScraperForm;
