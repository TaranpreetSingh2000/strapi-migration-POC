module.exports = [
  "strapi::errors",
 
  // Custom security middleware for local uploads
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'", "https:"],
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "localhost:8080",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "localhost:8080",
          ],
          "style-src": ["'self'", "'unsafe-inline'", "https:"],
          "script-src": ["'self'", "'unsafe-inline'", "https:"],
          "font-src": ["'self'", "data:", "https:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
 
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];