export default [
  "strapi::errors",
  {
    name: "strapi::security",
    // config: {
    //   contentSecurityPolicy: {
    //     useDefaults: true,
    //     directives: {
    //       "connect-src": ["'self'", "https:", "http:"],
    //       "img-src": ["'self'", "data:", "blob:", "53fece096739.ngrok-free.app"],
    //       "media-src": ["'self'", "data:", "blob:", " 53fece096739.ngrok-free.app"],
    //       upgradeInsecureRequests: null,
    //     },
    //   },
    // },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:1339",
        "http://localhost:443",
        // " https://53fece096739.ngrok-free.app ", // your ngrok domain
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];



// export default [
//   "strapi::logger",
//   "strapi::errors",
//   "strapi::security",
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
//   // 'global::replace-upload-url',
//   // {
//   //   name: "strapi::public",
//   //   config: {
//   //     path: "./public/assets",
//   //   },
//   // },
// ];
