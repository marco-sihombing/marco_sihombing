"use client";
import clsx from "clsx";
import { useTheme } from "next-themes";

interface GradientBackgroundProps {
  className?: string;
  colors?: string[]; // warna untuk light
  darkColors?: string[]; // warna untuk dark
}

export default function GradientBackground({
  className,
  colors = ["#ebf8ff", "#ffffff"],
  darkColors = ["#111827", "#1f2937"],
}: GradientBackgroundProps) {
  const { theme } = useTheme();

  const appliedColors = theme === "dark" ? darkColors : colors;

  return (
    <div
      className={clsx("w-full h-full animate-gradient", className)}
      style={{
        background: `linear-gradient(135deg, ${appliedColors.join(", ")})`,
        backgroundSize: "200% 200%",
      }}
    />
  );
}
