import { cn } from "@/lib/utils";

interface SourceBadgeProps {
  source: 'g2' | 'capterra' | 'trustradius';
  size?: 'sm' | 'md' | 'lg';
}

const sourceConfig = {
  g2: {
    label: 'G2',
    className: 'bg-g2/10 text-g2 border-g2/30',
    gradient: 'text-gradient-g2'
  },
  capterra: {
    label: 'Capterra',
    className: 'bg-capterra/10 text-capterra border-capterra/30',
    gradient: 'text-gradient-capterra'
  },
  trustradius: {
    label: 'TrustRadius',
    className: 'bg-trustradius/10 text-trustradius border-trustradius/30',
    gradient: 'text-gradient-trustradius'
  }
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base'
};

const SourceBadge = ({ source, size = 'md' }: SourceBadgeProps) => {
  const config = sourceConfig[source];
  
  return (
    <span 
      className={cn(
        "inline-flex items-center font-medium rounded-full border transition-all",
        config.className,
        sizeClasses[size]
      )}
    >
      {config.label}
    </span>
  );
};

export default SourceBadge;
