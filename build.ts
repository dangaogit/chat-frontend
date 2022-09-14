import { esbuild } from "./deps/deps.ts"

await Deno.run({cmd: ["bash", "-c", "rm -rf ./dist"]})

/**
 * build source ts
 */
await esbuild.build({
    entryPoints: ["./src/main.ts"],
    bundle: true,
    outdir: "./dist"
})
esbuild.stop()

/**
 * build public
 */
await Deno.run({cmd: ["bash", "-c", "cp -r ./public/* ./dist"]})