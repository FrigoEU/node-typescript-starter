const esbuild = require("esbuild");

const buildOptions = {
  entryPoints: ["src/main.ts"],
  bundle: true,
  sourcemap: true,
  platform: "node",
  outdir: "out",
  external: []
};

esbuild.build(buildOptions).catch(() => process.exit(1));
