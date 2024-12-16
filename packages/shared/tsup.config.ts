import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/types/index.ts", "src/constants.ts"],
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      composite: false,
      incremental: false,
    },
  },
  sourcemap: true,
  clean: true,
  treeshake: true,
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".js" : ".mjs",
    };
  },
});
