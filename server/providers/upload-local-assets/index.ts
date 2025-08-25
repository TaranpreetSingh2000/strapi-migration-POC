"use strict";
const fs = require("fs");
const path = require("path");

module.exports = {
  init(config) {
    // ✅ Use Strapi’s public dir (works in dev + prod)
    const uploadDir = path.join(
      strapi.dirs.static.public,
      "images"
    );

    // ensure folder exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    return {
      async upload(file) {
        const { name, buffer } = file;
        const filePath = path.join(uploadDir, name);

        await fs.promises.writeFile(filePath, buffer);

        file.url = `/images/${name}`;
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
