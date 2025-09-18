export type Theme = {
  name: string;
  description: string;
  primary: string;
  secondary: string;
  success: string;
  error: string;
  gradient: string; // for reference
  background: string;
  surface: string;
  text: string;
  radius: number;
  shadow: string;
};

export const oceanProfessionalTheme: Theme = {
  name: "Ocean Professional",
  description: "Blue & amber accents",
  primary: "#2563EB",
  secondary: "#F59E0B",
  success: "#F59E0B",
  error: "#EF4444",
  gradient: "from-blue-500/10 to-gray-50",
  background: "#f9fafb",
  surface: "#ffffff",
  text: "#111827",
  radius: 16,
  shadow: "0 10px 30px rgba(0,0,0,0.08)",
};

// PUBLIC_INTERFACE
export const theme = oceanProfessionalTheme;

/**
 * PUBLIC_INTERFACE
 * Make a soft gradient background CSS using theme primary to background.
 */
export const gradientBackground = (primary: string, bg: string) =>
  `linear-gradient(180deg, ${primary}14 0%, ${bg} 100%)`;

/**
 * PUBLIC_INTERFACE
 * Utility to create a rounded, elevated surface style.
 */
export const surfaceStyle = (t: Theme): React.CSSProperties => ({
  background: t.surface,
  borderRadius: t.radius,
  boxShadow: t.shadow,
});

/**
 * PUBLIC_INTERFACE
 * Common font family
 */
export const FONT_STACK =
  "Inter, SF Pro Text, -apple-system, Segoe UI, Helvetica, Arial, sans-serif";
