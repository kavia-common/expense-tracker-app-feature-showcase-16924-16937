# Expense Tracker Video (Remotion)

This project renders an instructional/demo video of an Expense Tracker app using Remotion, themed with "Ocean Professional" (blue & amber accents), modern minimal UI, rounded corners, subtle shadows, and smooth transitions.

## Preview

```bash
npm i
npm run dev
```

Open the Studio URL and select the `ExpenseTrackerShowcase` composition.

If the preview does not load:
- Ensure dependencies are installed, and you are using React 18 with Remotion v4.
- This repo pins React to 18.3.1 for compatibility with Remotion 4.0.286.
- If you accidentally upgraded React to 19, run:
  ```bash
  npm pkg set dependencies.react=18.3.1 dependencies.react-dom=18.3.1
  npm install
  ```
- Then restart the studio: `npm run dev`.

## Render

```bash
# Renders the ExpenseTrackerShowcase composition to out/video.mp4
npx remotion render src/index.ts ExpenseTrackerShowcase out/video.mp4 --codec=h264
```

You may pass a voiceover/music file:

```bash
npx remotion render src/index.ts ExpenseTrackerShowcase out/video.mp4 \
  --props='{"voiceoverUrl":"https://example.com/voiceover.mp3"}'
```

## Composition

- Main: `ExpenseTrackerShowcase` (duration 870 frames at 30fps ~ 29s)
- Scenes:
  - Intro (title, feature badges)
  - Dashboard (overview, categories, trend)
  - Transactions (list with filters)
  - Budgets (progress and status)
  - Outro (CTA)

## Theme

Centralized in `src/theme.ts`. Adjust colors, radius, shadows, or gradient as needed.

## Development Notes

- Keep styling modern and minimal.
- Prefer rounded corners, subtle gradients, and light shadows.
- Use `components/Primitives.tsx` for common animated primitives.
- Mocked screens live in `src/scenes/Screens.tsx`.

For more on Remotion, see the [docs](https://www.remotion.dev/docs/).
