export const isUrl = (value) => {
  var expression = /^(https?:\/\/|\/)\w+\.[^\s]+$|^\/[^\s]*$/;

  return expression.test(value) || "URL non valido";
};
