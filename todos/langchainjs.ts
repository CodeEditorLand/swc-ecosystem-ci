import { RunOptions } from "../types";
import { runInRepo } from "../utils";

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: "langchain-ai/langchainjs",
		branch: "main",
		build: "build",
		test: ["test:unit", "test:int"],
	});
}
