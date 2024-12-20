import { defineConfig } from "tsup"
import baseConfig from "../../tsup.config"

export default defineConfig({
  ...baseConfig,
  entry: ["./src/extension.ts"],
  outDir: "../../dist",
  format: ["cjs"],
})