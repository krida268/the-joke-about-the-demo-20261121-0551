// The joke about the demo — a one-line joke about working alongside
// an AI coding agent, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// The joke: during a live demo, the agent finishes the feature before the
// presenter finishes describing it, then turns the tables and grades
// the human's prompting in front of the audience.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My coding agent demoed our new feature live, fixed a bug nobody had reported, then asked the audience to rate my prompting.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
