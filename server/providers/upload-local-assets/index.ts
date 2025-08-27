"use strict";
const fs = require("fs");
var path = require("path");

module.exports = {
  init(config) {

    console.log(process.env.UPLOAD_PATH)
    // ✅ configurable upload dir via ENV
    const uploadDir =
      process.env.UPLOAD_PATH || path.join(strapi.dirs.static.public, "images");

    // ensure folder exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    return {
      async upload(file) {
        const { name, buffer } = file;
        const filePath = path.join(uploadDir, name);

        await fs.promises.writeFile(filePath, buffer);

        // ✅ File URL (public vs custom path)
        if (process.env.UPLOAD_URL_BASE) {
          // if you expose files via nginx or a CDN
          file.url = `${process.env.UPLOAD_URL_BASE}/${name}`;
        } else {
          // default: serve from strapi public
          file.url = `/images/${name}`;
        }
      },

      async delete(file) {
        const filePath = path.join(uploadDir, path.basename(file.url));
        if (fs.existsSync(filePath)) {
          await fs.promises.unlink(filePath);
        }
      },
    };
  },
};
