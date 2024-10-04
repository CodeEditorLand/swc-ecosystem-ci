import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "dotansimha/graphql-yoga",
		branch: "main",
		build: "build",
		test: "test",
	});
}
