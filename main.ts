import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Gravity: works perfectly until the one second you need it not to, then bills you in broken glass.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
