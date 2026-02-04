import { ClinicConfig } from "./types";
import { defaultConfig } from "./default";

/**
 * Loads clinic configuration from environment variables or returns default
 * 
 * For multi-tenant setup:
 * 1. Each Vercel project can have its own environment variables (VITE_CLINIC_CONFIG as JSON)
 * 2. Or use VITE_CLIENT_ID to load from /config/clients/[clientId].ts
 * 3. Or fetch from a CMS/API
 */
export function loadConfig(): ClinicConfig {
  // Option 1: Load from environment variables (recommended for Vercel)
  // Set VITE_CLINIC_CONFIG as a JSON string in Vercel environment variables
  if (import.meta.env.VITE_CLINIC_CONFIG) {
    try {
      const parsed = JSON.parse(import.meta.env.VITE_CLINIC_CONFIG);
      return { ...defaultConfig, ...parsed }; // Merge with defaults
    } catch (e) {
      console.error("Failed to parse VITE_CLINIC_CONFIG", e);
    }
  }

  // Option 2: Load from client-specific config file
  // Set VITE_CLIENT_ID in Vercel environment variables
  const clientId = import.meta.env.VITE_CLIENT_ID;
  if (clientId) {
    // Import client configs statically (add new clients here)
    // For dynamic loading, you'd need to use a build script or API
    const clientConfigs: Record<string, () => Promise<{ default: ClinicConfig }>> = {
      example: () => import("./clients/example"),
      // Add more clients here as needed
    };

    if (clientConfigs[clientId]) {
      // Note: This is async, so for now we'll use sync imports
      // For production, consider using a build-time script or API
      try {
        // This will be handled at build time with proper setup
        return defaultConfig;
      } catch (e) {
        console.warn(`Client config not found for ${clientId}, using default`);
      }
    }
  }

  // Option 3: Return default config
  return defaultConfig;
}

// Export the loaded config as a singleton
export const clinicConfig = loadConfig();

// Export types for use in components
export type { ClinicConfig, Service, Doctor, Testimonial, BeforeAfterCase } from "./types";
