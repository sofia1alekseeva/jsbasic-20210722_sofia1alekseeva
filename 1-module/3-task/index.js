function ucFirst(str) {
  // ваш код...
  if (str.length == "") {
    return "";
  } else {
    return str = str[0].toUpperCase() + str.slice(1);
  }
}
