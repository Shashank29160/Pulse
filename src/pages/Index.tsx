import { useState, useCallback } from "react";
import { FileJson, Star, TrendingUp, Database } from "lucide-react";
import Header from "@/components/Header";
import ScraperForm from "@/components/ScraperForm";
import TerminalOutput from "@/components/TerminalOutput";
import ResultsPanel from "@/components/ResultsPanel";
import StatCard from "@/components/StatCard";
import { mockReviews, getReviewsByDateRange, getSourceStats, Review } from "@/data/mockReviews";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Review[] | null>(null);
  const [formData, setFormData] = useState<{
    company: string;
    startDate: string;
    endDate: string;
    sources: ('g2' | 'capterra' | 'trustradius')[];
  } | null>(null);

  const stats = getSourceStats();

  const handleSubmit = (data: {
    company: string;
    startDate: string;
    endDate: string;
    sources: ('g2' | 'capterra' | 'trustradius')[];
  }) => {
    setFormData(data);
    setIsLoading(true);
    setResults(null);
  };

  const handleComplete = useCallback(() => {
    if (!formData) return;
    
    // Filter mock reviews based on form data
    let filteredReviews = mockReviews.filter(r => 
      formData.sources.includes(r.source)
    );

    // Filter by company (case-insensitive, partial match)
    const companyQuery = formData.company?.trim().toLowerCase();
    if (companyQuery) {
      filteredReviews = filteredReviews.filter(r =>
        r.company.toLowerCase().includes(companyQuery)
      );
    }
    
    filteredReviews = getReviewsByDateRange(
      filteredReviews, 
      formData.startDate, 
      formData.endDate
    );
    
    setResults(filteredReviews);
    setIsLoading(false);
  }, [formData]);

  return (
    <>
      <Helmet>
        <title>Pulse Review Scraper | SaaS Review Aggregation Tool</title>
        <meta name="description" content="Scrape and aggregate product reviews from G2, Capterra, and TrustRadius. Export clean JSON data for analysis." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        
        <main className="container mx-auto px-4 pt-24 pb-12 relative">
          {/* Hero Section */}
          <section className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Python CLI + Web Dashboard
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="text-gradient">Pulse</span> Review Scraper
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extract and normalize product reviews from G2, Capterra, and TrustRadius. 
              Clean JSON output ready for analysis.
            </p>
          </section>

          {/* Stats Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <StatCard 
              title="G2 Reviews" 
              value={stats.g2.count} 
              subtitle={`Avg ${stats.g2.avgRating.toFixed(1)}★`}
              icon={Star}
              variant="g2"
            />
            <StatCard 
              title="Capterra Reviews" 
              value={stats.capterra.count}
              subtitle={`Avg ${stats.capterra.avgRating.toFixed(1)}★`}
              icon={Star}
              variant="capterra"
            />
            <StatCard 
              title="TrustRadius Reviews" 
              value={stats.trustradius.count}
              subtitle={`Avg ${stats.trustradius.avgRating.toFixed(1)}★`}
              icon={Star}
              variant="trustradius"
            />
            <StatCard 
              title="Total Dataset" 
              value={stats.total}
              subtitle={`${stats.overallAvg.toFixed(1)}★ overall`}
              icon={Database}
              variant="success"
            />
          </section>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl border border-border bg-card p-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                      <FileJson className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold">Configure Scraper</h2>
                      <p className="text-xs text-muted-foreground">Set parameters below</p>
                    </div>
                  </div>
                  <ScraperForm onSubmit={handleSubmit} isLoading={isLoading} />
                </div>

                {/* Terminal Output */}
                {(isLoading || (formData && !results)) && (
                  <TerminalOutput 
                    isRunning={isLoading}
                    company={formData?.company || ''}
                    sources={formData?.sources || []}
                    onComplete={handleComplete}
                  />
                )}
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-2">
              {results ? (
                <ResultsPanel 
                  reviews={results}
                  company={formData?.company || ''}
                  dateRange={{ start: formData?.startDate || '', end: formData?.endDate || '' }}
                  sources={formData?.sources || []}
                />
              ) : (
                <div className="rounded-xl border border-dashed border-border p-12 text-center animate-slide-up" style={{ animationDelay: '300ms' }}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ready to Scrape</h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Configure your scraping parameters on the left and click "Start Scraping" to begin extracting reviews.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Architecture Section */}
          <section className="mt-16 rounded-xl border border-border bg-card p-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h2 className="text-2xl font-bold mb-6 text-gradient">Project Architecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3 text-primary">Folder Structure</h3>
                <pre className="font-mono text-xs bg-muted/30 rounded-lg p-4 overflow-x-auto text-muted-foreground">
{`pulse-review-scraper/
├── scraper/
│   ├── base.py          # Abstract base
│   ├── g2.py
│   ├── capterra.py
│   └── trustradius.py
├── utils/
│   ├── date.py
│   ├── logger.py
│   └── validators.py
├── output/
│   └── sample_output.json
├── scrape_reviews.py    # CLI entry
├── requirements.txt
└── README.md`}
                </pre>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-primary">Output Format</h3>
                <pre className="font-mono text-xs bg-muted/30 rounded-lg p-4 overflow-x-auto text-muted-foreground">
{`{
  "title": "string | null",
  "review": "full review text",
  "date": "YYYY-MM-DD",
  "rating": number | null,
  "reviewer_name": "string | null",
  "source": "g2 | capterra | trustradius",
  "company": "Company Name",
  "url": "review page URL"
}`}
                </pre>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Index;
