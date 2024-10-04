import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "alibaba/ice",
		branch: "master",
		build: "build",
		test: "test",
	});
}
