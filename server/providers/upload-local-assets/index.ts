"use strict";
const fs = require("fs");
var path = require("path");

module.exports = {
  init(config) {
    console.log(process.env.UPLOAD_PATH);

    const uploadDir =
      // process.env.UPLOAD_PATH || path.join(strapi.dirs.static.public, "images");
      process.env.UPLOAD_PATH || "D:/global-upload-assets";

    const baseUrl =
      process.env.UPLOAD_URL_BASE || "http://localhost:8080/media";

    // ensure folder exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    return {
      async upload(file) {
        const { name, buffer } = file;
        const filePath = path.join(uploadDir, name);

        await fs.promises.writeFile(filePath, buffer);

        if (baseUrl) {
          file.url = `${baseUrl}/${name}`;
        }
      },

      async delete(file) {
        const fileName = path.basename(file.url);
        const filePath = path.join(uploadDir, fileName);

        if (fs.existsSync(filePath)) {
          await fs.promises.unlink(filePath);
        }
      },
    };
  },
};
