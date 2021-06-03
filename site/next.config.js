module.exports = {
  basePath: "/UX-AI",
  assetPrefix: "/UX-AI/",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};
