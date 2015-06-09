// libs
require('./libs/polyfill');
require('./libs/Blob.js/Blob');

var jsPDF = require('./jspdf');
window.jsPDF = jsPDF;
var api = jsPDF.API;

// plugins
require('./plugins/addhtml')(api);
require('./plugins/addimage')(api);
require('./plugins/annotations')(api);
require('./plugins/autoprint')(api);
require('./plugins/canvas')(api);
require('./plugins/cell')(api);
require('./plugins/context2d')(api);
require('./plugins/from_html')(api);
require('./plugins/javascript')(api);
require('./plugins/outline')(api);
require('./plugins/png_support')(api);
require('./plugins/split_text_to_size')(api);
require('./plugins/standard_fonts_metrics')(api);
require('./plugins/svg')(api);
require('./plugins/total_pages')(api);

module.exports = jsPDF;