import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { gradientBackground, theme, FONT_STACK } from "../theme";
import {
  SceneBackground,
  Heading,
  CornerWatermark,
  FloatingCard,
  FadeInUp,
} from "../components/Primitives";
import { BudgetsScreen, DashboardScreen, TransactionsScreen } from "./Screens";
import { z } from "zod";

// Define props schema
export const showcaseSchema = z.object({
  // PUBLIC_INTERFACE
  voiceoverUrl: z.string().optional().describe("Optional voiceover or music URL"),
  // PUBLIC_INTERFACE
  showWatermark: z.boolean().default(true),
});

// PUBLIC_INTERFACE
export const ExpenseTrackerShowcase: React.FC<z.infer<typeof showcaseSchema>> = ({
  voiceoverUrl,
  showWatermark = true,
}) => {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  // Scene durations (in frames)
  const introDur = 120;
  const dashDur = 210;
  const txDur = 210;
  const budgetDur = 210;
  const outroDur = 120;

  const total = introDur + dashDur + txDur + budgetDur + outroDur;

  // Background subtle vignette
  const vignetteOpacity = interpolate(frame, [0, 30], [0, 0.05], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: gradientBackground(theme.primary, theme.background) }}>
      {/* Optional background audio */}
      {voiceoverUrl ? <Audio src={voiceoverUrl} /> : null}

      {/* Intro */}
      <Sequence name="Intro" from={0} durationInFrames={introDur}>
        <SceneBackground>
          <Heading title="Expense Tracker" subtitle="Stay on top of your spending" />
          <div
            style={{
              position: "absolute",
              top: 300,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              gap: 18,
            }}
          >
            <FadeInUp>
              <div
                style={{
                  padding: "14px 22px",
                  background: `${theme.primary}20`,
                  color: theme.primary,
                  fontFamily: FONT_STACK,
                  fontWeight: 800,
                  borderRadius: 999,
                  border: `1px solid ${theme.primary}40`,
                  boxShadow: theme.shadow,
                }}
              >
                Track Expenses
              </div>
            </FadeInUp>
            <FadeInUp from={8}>
              <div
                style={{
                  padding: "14px 22px",
                  background: `${theme.secondary}20`,
                  color: theme.secondary,
                  fontFamily: FONT_STACK,
                  fontWeight: 800,
                  borderRadius: 999,
                  border: `1px solid ${theme.secondary}40`,
                  boxShadow: theme.shadow,
                }}
              >
                Set Budgets
              </div>
            </FadeInUp>
            <FadeInUp from={16}>
              <div
                style={{
                  padding: "14px 22px",
                  background: "#10B98122",
                  color: "#10B981",
                  fontFamily: FONT_STACK,
                  fontWeight: 800,
                  borderRadius: 999,
                  border: "1px solid #10B98140",
                  boxShadow: theme.shadow,
                }}
              >
                Gain Insights
              </div>
            </FadeInUp>
          </div>
        </SceneBackground>
      </Sequence>

      {/* Dashboard */}
      <Sequence name="Dashboard" from={introDur} durationInFrames={dashDur}>
        <SceneBackground>
          <Heading title="Dashboard" subtitle="Insights at a glance" align="left" />
          <div style={{ position: "absolute", top: 240, left: 110, right: 110 }}>
            <FloatingCard>
              <DashboardScreen />
            </FloatingCard>
          </div>
        </SceneBackground>
      </Sequence>

      {/* Transactions */}
      <Sequence name="Transactions" from={introDur + dashDur} durationInFrames={txDur}>
        <SceneBackground>
          <Heading title="Transactions" subtitle="Every detail, neatly organized" align="left" />
          <div style={{ position: "absolute", top: 240, left: 110, right: 110 }}>
            <FloatingCard>
              <TransactionsScreen />
            </FloatingCard>
          </div>
        </SceneBackground>
      </Sequence>

      {/* Budgets */}
      <Sequence name="Budgets" from={introDur + dashDur + txDur} durationInFrames={budgetDur}>
        <SceneBackground>
          <Heading title="Budgets" subtitle="Stay within your goals" align="left" />
          <div style={{ position: "absolute", top: 240, left: 110, right: 110 }}>
            <FloatingCard>
              <BudgetsScreen />
            </FloatingCard>
          </div>
        </SceneBackground>
      </Sequence>

      {/* Outro */}
      <Sequence
        name="Outro"
        from={introDur + dashDur + txDur + budgetDur}
        durationInFrames={outroDur}
      >
        <SceneBackground>
          <div
            style={{
              position: "absolute",
              top: 320,
              left: 0,
              right: 0,
              textAlign: "center",
            }}
          >
            <FadeInUp>
              <div
                style={{
                  fontFamily: FONT_STACK,
                  fontWeight: 900,
                  fontSize: 76,
                  color: theme.text,
                }}
              >
                Take Control of Your Finances
              </div>
            </FadeInUp>
            <FadeInUp from={10}>
              <div
                style={{
                  fontFamily: FONT_STACK,
                  marginTop: 14,
                  fontSize: 28,
                  color: "#374151",
                }}
              >
                Simple. Modern. Insightful.
              </div>
            </FadeInUp>
            <FadeInUp from={20}>
              <div
                style={{
                  marginTop: 30,
                  display: "inline-block",
                  padding: "16px 28px",
                  borderRadius: 999,
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                  color: "white",
                  fontFamily: FONT_STACK,
                  fontWeight: 900,
                  boxShadow: theme.shadow,
                }}
              >
                Get Started
              </div>
            </FadeInUp>
          </div>
        </SceneBackground>
      </Sequence>

      {/* Watermark */}
      {showWatermark ? <CornerWatermark text="Ocean Professional • Expense Tracker" /> : null}

      {/* Global vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.12) 100%)",
          opacity: vignetteOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Safety: ensure composition duration matches scenes */}
      <AbsoluteFill
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          // This forces TypeScript to not complain about unused total
          // and serves as documentation of total frames
        }}
      >
        <div style={{ display: "none" }}>{durationInFrames} / {total}</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
