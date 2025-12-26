import { Star, ExternalLink, User, Calendar } from "lucide-react";
import { Review } from "@/data/mockReviews";
import SourceBadge from "./SourceBadge";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  const renderStars = (rating: number | null) => {
    if (rating === null) return null;
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "h-3.5 w-3.5",
              star <= rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-muted-foreground/30"
            )}
          />
        ))}
        <span className="ml-1 text-xs text-muted-foreground font-mono">
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  return (
    <div 
      className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:bg-accent/30 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <SourceBadge source={review.source} size="sm" />
            {renderStars(review.rating)}
          </div>
          <a
            href={review.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="hidden sm:inline">View original</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Title */}
        {review.title && (
          <h3 className="font-semibold leading-tight text-foreground">
            {review.title}
          </h3>
        )}

        {/* Review text */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
          {review.review}
        </p>

        {/* Footer */}
        <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/50 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <User className="h-3 w-3" />
            <span>{review.reviewer_name || 'Anonymous'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            <span className="font-mono">{review.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
