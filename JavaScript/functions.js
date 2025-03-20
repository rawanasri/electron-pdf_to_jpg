import { promises as fs } from "node:fs";
import { pdf } from "pdf-to-img";

async function main() {
  const document = await pdf("test.pdf", { scale : 1 });
  await fs.writeFile(`test.png`, document)
}

main()
