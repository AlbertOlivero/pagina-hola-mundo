const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let document;

beforeEach(() => {
  dom = new JSDOM(html);
  document = dom.window.document;
});

test('verifica que la página contiene "Hola Mundo"', () => {
  const h1 = document.querySelector('h1');
  expect(h1.textContent).toBe('Hola Mundo');
});
