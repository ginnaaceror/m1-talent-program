import header from './components/header.js';
import footer from './components/footer.js';
import main from './components/main.js';

// HEADER //
const templateHeader = Handlebars.compile(header);
const contextHeader = templateHeader();

// CONTENT //
const templateContent = Handlebars.compile(main);
const contextContent = templateContent();

// FOOTER //
const templateFooter = Handlebars.compile(footer);
const contextFooter = templateFooter();

const elementHeader = document.getElementById('header');
const elementContent = document.getElementById('main');
const elementFooter = document.getElementById('footer');

elementHeader.innerHTML += contextHeader;
elementContent.innerHTML += contextContent;
elementFooter.innerHTML += contextFooter;
