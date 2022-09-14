import { esbuild } from "./deps/deps.ts"

const result = await esbuild.build({
    entryPoints: ["./src/main.ts"],
    bundle: true,
    outdir: "./dist"
})
console.log(result)
esbuild.stop()