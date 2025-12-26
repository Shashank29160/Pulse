import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: 'default' | 'g2' | 'capterra' | 'trustradius' | 'success';
}

const variantStyles = {
  default: 'border-border bg-card',
  g2: 'border-g2/30 bg-g2/5',
  capterra: 'border-capterra/30 bg-capterra/5',
  trustradius: 'border-trustradius/30 bg-trustradius/5',
  success: 'border-primary/30 bg-primary/5',
};

const iconVariantStyles = {
  default: 'text-muted-foreground bg-muted',
  g2: 'text-g2 bg-g2/10',
  capterra: 'text-capterra bg-capterra/10',
  trustradius: 'text-trustradius bg-trustradius/10',
  success: 'text-primary bg-primary/10',
};

const StatCard = ({ title, value, subtitle, icon: Icon, variant = 'default' }: StatCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-xl border p-5 transition-all duration-300 hover:scale-[1.02]",
        variantStyles[variant]
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground font-mono">{subtitle}</p>
          )}
        </div>
        <div className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg",
          iconVariantStyles[variant]
        )}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
