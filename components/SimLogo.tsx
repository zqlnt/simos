import Image from "next/image";
import { SIM_LOGO_URL } from "@/lib/nav";

type SimLogoProps = {
  className?: string;
  /** 0–1; use for watermarks or subtle header marks */
  opacity?: number;
  width?: number;
  height?: number;
  priority?: boolean;
  alt?: string;
  /** Center the mark inside its box (e.g. dock tiles) */
  centered?: boolean;
};

export function SimLogo({
  className = "",
  opacity = 1,
  width = 120,
  height = 40,
  priority = false,
  alt = "simOS",
  centered = false,
}: SimLogoProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 ${centered ? "w-full justify-center" : ""} ${className}`}
      style={{ opacity }}
    >
      <Image
        src={SIM_LOGO_URL}
        alt={alt}
        width={width}
        height={height}
        className={`h-auto w-auto max-h-10 object-contain ${centered ? "object-center" : "object-left"}`}
        priority={priority}
      />
    </span>
  );
}
