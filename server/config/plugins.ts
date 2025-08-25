import path from "path";

export default () => ({
  upload: {
    config: {
      provider: path.resolve(__dirname, "../providers/upload-local-assets"),
      providerOptions: {},
    },
  },
});
