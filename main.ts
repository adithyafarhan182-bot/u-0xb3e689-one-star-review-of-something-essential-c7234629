// One-star review of something essential (make.fun:
// u-0xb3e689-one-star-review-of-something-essential-c7234629).
// Writes one single-line, deadpan one-star review of sleep to
// /output/entry.txt. Deterministic, Node stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. Requires eight hours every night and still sends me to work exhausted.";

// The house gate only accepts UTF-8 text of 1 to 160 characters, not
// only whitespace, on a single line. Fail loudly instead of writing
// an entry the gate would refuse.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 160 ||
  REVIEW.trim().length === 0 ||
  REVIEW.includes("\n")
) {
  throw new Error(`review fails the 1-160 character gate (${REVIEW.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
