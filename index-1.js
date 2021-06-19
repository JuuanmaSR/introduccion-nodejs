/* eslint-disable no-console */
// https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2504972-creating-your-first-app-with-node-js
const http = require('http');

const PUERTO = 8080;

const server = http.createServer((req, res) => {
  // Ahora queremos devolver HTML así que especificamos en el header que el conte-type es text/html
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hola, Mundo!</h1>');
});

console.log(`escuchando en el puerto ${PUERTO}`);
server.listen(PUERTO);
