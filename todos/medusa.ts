import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "medusajs/medusa",
		branch: "develop",
		build: "build",
		test: ["test"],
	});
}
