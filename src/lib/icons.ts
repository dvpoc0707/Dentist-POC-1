import * as LucideIcons from "lucide-react";

/**
 * Dynamically get icon component by name
 * This allows us to store icon names as strings in config
 */
export function getIcon(iconName: string): React.ComponentType<any> {
  const IconComponent = (LucideIcons as any)[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found, using default`);
    return LucideIcons.Smile; // Default icon
  }
  
  return IconComponent;
}
