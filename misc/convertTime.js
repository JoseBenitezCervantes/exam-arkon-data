const convertTime = (t) => {
  // creamos una fecha genérica con tu tiempo
  var d = new Date("0001-01-01T" + t);
  // calculamos los minutos a partir de las horas y minutos de la fecha creada
  var minutos = d.getHours() * 60 + d.getMinutes();
  return minutos;
};

module.exports = { convertTime };