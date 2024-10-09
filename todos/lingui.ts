import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "lingui/js-lingui",
		branch: "main",
		test: "test:ci",
	});
}
