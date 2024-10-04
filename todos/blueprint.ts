import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "palantir/blueprint",
		branch: "develop",
		build: "compile",
		test: "test",
	});
}
