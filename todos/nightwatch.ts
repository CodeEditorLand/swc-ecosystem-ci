import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "nightwatchjs/nightwatch",
		branch: "main",
		build: "build",
		test: "test",
	});
}
