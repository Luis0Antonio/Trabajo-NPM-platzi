export default function greeting(lenguage) {
  switch (lenguage) {
    case 'en':
        return 'Hello!'
      break;
    case 'es':
      return 'Hola!'
      break;
    case 'fre':
      return 'Salut!'
    break;
    case 'ger':
      return 'Hallo!'
    break;
    default:
        return 'Hello!'
      break;

  }
}
