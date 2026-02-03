import { clinicConfig, ClinicConfig } from "@/config";

/**
 * Hook to access clinic configuration
 * This makes it easy to use config in any component
 */
export function useClinicConfig(): ClinicConfig {
  return clinicConfig;
}
