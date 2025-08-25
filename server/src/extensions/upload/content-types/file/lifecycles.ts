// export default {
//   async afterCreate(event) {
//     const { result } = event;

//     if (result.url?.startsWith('/uploads/')) {
//       const newUrl = result.url.replace('/uploads/', '/assets/');

//       await strapi.entityService.update('plugin::upload.file', result.id, {
//         data: { url: newUrl },
//       });
//     }
//   },
// };
