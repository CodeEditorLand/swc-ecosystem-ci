import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "redwoodjs/redwood",
		branch: "main",
		build: "build",
		test: "test-ci",
	});
}
