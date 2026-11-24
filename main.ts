import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Gravity: works perfectly until the one second you need it not to, then bills you in broken glass.";

// The grader reads exactly one file: /output/entry.txt
const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
