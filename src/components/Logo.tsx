import { Tooth } from "lucide-react";
import { useClinicConfig } from "@/hooks/useClinicConfig";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  const config = useClinicConfig();

  return (
    <a href="#" className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-sm">
        <Tooth className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-display text-xl font-semibold text-foreground">{config.clinic.name}</span>
          <span className="text-xs text-muted-foreground -mt-1">{config.clinic.tagline}</span>
        </div>
      )}
    </a>
  );
};

export default Logo;
