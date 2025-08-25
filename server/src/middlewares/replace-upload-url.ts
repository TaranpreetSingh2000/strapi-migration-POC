// export default () => {
//   return async (ctx, next) => {
//     await next();

//     if (ctx.response?.body?.url?.startsWith('/uploads/')) {
//       ctx.response.body.url = ctx.response.body.url.replace('/uploads/', '/assets/');
//     }

//     // For arrays or nested, you’d recursively walk and replace
//   };
// };
