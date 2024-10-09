import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "Unleash/unleash",
		branch: "main",
		build: "build",
		test: "test:unit",
	});
}
