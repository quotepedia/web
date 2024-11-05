import type { Options } from "tsup";
import { defineConfig } from "tsup";

function generateConfig(format: "esm" | "cjs"): Options {
  return {
    target: "esnext",
    platform: "browser",
    format,
    clean: true,
    dts: format === "esm",
    entry: ["src/**/*.ts"],
    outDir: "dist/",
    treeshake: { preset: "smallest" },
    replaceNodeEnv: true,
    esbuildOptions(options) {
      options.chunkNames = "[name]/[hash]";
      options.drop = ["console", "debugger"];
    },
  };
}

export default defineConfig([generateConfig("esm"), generateConfig("cjs")]);
