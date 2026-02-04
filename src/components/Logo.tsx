import { useClinicConfig } from "@/hooks/useClinicConfig";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  const config = useClinicConfig();
  // Logo image path - can be overridden in config
  const logoPath = config.clinic.logo?.full || "/Dental-Logo-Design.jpg";

  return (
    <a href="#" className={`flex items-center gap-3 ${className}`}>
      <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center shadow-sm">
        <img 
          src={logoPath} 
          alt={`${config.clinic.name} logo`}
          className="w-full h-full object-contain"
        />
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
