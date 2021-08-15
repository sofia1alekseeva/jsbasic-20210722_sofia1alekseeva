function camelize(str) {
  // ваш код...
  let camelStr = str.split('-').map((item, index) => {
    if (index === 0) {
      return item.toLowerCase();
    }
    return item.slice(0, 1).toUpperCase() + item.slice(1)
  }).join('');

  return camelStr;
}
