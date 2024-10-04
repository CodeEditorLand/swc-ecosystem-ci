import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "tinacms/tinacms",
		branch: "main",
		build: "build",
		test: "test:e2e",
	});
}
