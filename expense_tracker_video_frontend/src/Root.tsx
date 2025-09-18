import { Composition } from "remotion";
import { ExpenseTrackerShowcase, showcaseSchema } from "./scenes/ExpenseTrackerShowcase";

// Each <Composition> is an entry in the sidebar!
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ExpenseTrackerShowcase"
        component={ExpenseTrackerShowcase}
        // 120 + 210 + 210 + 210 + 120 = 870 frames @ 30fps = 29s
        durationInFrames={870}
        fps={30}
        width={1920}
        height={1080}
        schema={showcaseSchema}
        defaultProps={{
          voiceoverUrl: undefined,
          showWatermark: true,
        }}
      />
    </>
  );
};
