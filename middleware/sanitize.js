// const createDOMPurify = require('dompurify');
// const { JSDOM } = require('jsdom');

// const window = new JSDOM('').window;
// const DOMPurify = createDOMPurify(window);

// module.exports = {
//     sanitizeHTML: (req, res, next) => {
//         for (const key in req.body) {
//             if (Object.hasOwnProperty.call(req.body, key)) {
//                 req.body[key] = DOMPurify.sanitize(req.body[key]);
//             }
//         }
//         next();
//     },
// };
