import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "You will soon meet the engineer who wrote the bug you have hunted all week: you.");
