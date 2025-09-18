import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_STACK, theme } from "../theme";

// PUBLIC_INTERFACE
export const FadeInUp: React.FC<{
  children: React.ReactNode;
  from?: number;
  duration?: number;
  y?: number;
  style?: React.CSSProperties;
}> = ({ children, from = 0, duration = 20, y = 20, style }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame - from, [0, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame - from, [0, duration], [y, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div style={{ opacity, transform: `translateY(${translateY}px)`, ...style }}>
      {children}
    </div>
  );
};

// PUBLIC_INTERFACE
export const SceneBackground: React.FC<{
  children?: React.ReactNode;
  tint?: string;
}> = ({ children, tint }) => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${tint ?? theme.primary}12 0%, ${theme.background} 100%)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

// PUBLIC_INTERFACE
export const Heading: React.FC<{
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}> = ({ title, subtitle, align = "center" }) => {
  const justifyContent =
    align === "center" ? "center" : align === "left" ? "flex-start" : "flex-end";
  const textAlign = align;

  return (
    <div
      style={{
        position: "absolute",
        top: 80,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent,
        paddingLeft: align === "left" ? 80 : 0,
        paddingRight: align === "right" ? 80 : 0,
      }}
    >
      <FadeInUp>
        <div>
          <div
            style={{
              fontFamily: FONT_STACK,
              fontWeight: 800,
              fontSize: 72,
              lineHeight: 1.1,
              color: theme.text,
              textAlign,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                fontFamily: FONT_STACK,
                marginTop: 12,
                fontSize: 28,
                color: "#374151",
                textAlign,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>
      </FadeInUp>
    </div>
  );
};

// PUBLIC_INTERFACE
export const Badge: React.FC<{ text: string; tone?: "primary" | "secondary" }> = ({
  text,
  tone = "secondary",
}) => {
  const color = tone === "primary" ? theme.primary : theme.secondary;
  return (
    <div
      style={{
        display: "inline-block",
        padding: "8px 14px",
        borderRadius: 999,
        background: `${color}22`,
        color,
        fontFamily: FONT_STACK,
        fontWeight: 700,
        fontSize: 20,
      }}
    >
      {text}
    </div>
  );
};

// PUBLIC_INTERFACE
export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div
      style={{
        height: 8,
        width: 420,
        background: "#E5E7EB",
        borderRadius: 999,
        overflow: "hidden",
        boxShadow: theme.shadow,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${Math.min(100, Math.max(0, progress * 100))}%`,
          background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
        }}
      />
    </div>
  );
};

// PUBLIC_INTERFACE
export const CornerWatermark: React.FC<{ text?: string }> = ({ text = "Expense Tracker" }) => (
  <div
    style={{
      position: "absolute",
      bottom: 36,
      right: 48,
      background: "#FFFFFFCC",
      borderRadius: 999,
      boxShadow: theme.shadow,
      padding: "10px 16px",
      fontFamily: FONT_STACK,
      color: theme.text,
      fontWeight: 700,
      fontSize: 16,
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}
  >
    <span
      style={{
        width: 10,
        height: 10,
        background: theme.secondary,
        borderRadius: 999,
        boxShadow: "0 0 0 4px rgba(245,158,11,0.2)",
      }}
    />
    {text}
  </div>
);

// PUBLIC_INTERFACE
export const FloatingCard: React.FC<{
  children: React.ReactNode;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}> = ({ children, width = 1100, height = 560, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  // gentle breathing
  const t = (frame / fps) * Math.PI * 2;
  const y = Math.sin(t) * 4;
  return (
    <div
      style={{
        width,
        height,
        background: theme.surface,
        borderRadius: theme.radius,
        boxShadow: theme.shadow,
        margin: "0 auto",
        transform: `translateY(${y}px)`,
        overflow: "hidden",
        border: "1px solid #E5E7EB",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
