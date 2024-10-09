import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "egoist/tsup",
		branch: "dev",
		build: "build",
		test: "test-only",
	});
}
