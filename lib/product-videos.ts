/** Primary loop clips — aligned with lib/media-assets.ts */
import { media } from "@/lib/media-assets";

export const PRODUCT_PREVIEW_VIDEOS = {
  sim: media.sim.pulsePrimary,
  simium: media.simium.loopMain,
  simulator: media.simulator.loopMain,
  simulatia: media.simulatia.loopMain,
} as const;
