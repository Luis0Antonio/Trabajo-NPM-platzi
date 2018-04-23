'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = greeting;
function greeting(lenguage) {
  switch (lenguage) {
    case 'en':
      return 'Hello!';
      break;
    case 'es':
      return 'Hola!';
      break;
    case 'fre':
      return 'Salut!';
      break;
    case 'ger':
      return 'Hallo!';
      break;
    default:
      return 'Hello!';
      break;

  }
}