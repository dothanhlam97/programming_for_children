// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// const path = require('path');
// const templatePath = path.join(root, 'template');
// const controllerPath = require('electron').remote.getGlobal('controllerPath');

var jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
const {
    window
} = new JSDOM();
const {
    document
} = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);
$(document).ready(function () {
    console.log("ready!");
});


