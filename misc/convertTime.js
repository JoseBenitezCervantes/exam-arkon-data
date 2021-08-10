const convertTime = (t) => {
  // creamos una fecha genérica con tu tiempo
  const d = new Date("0001-01-01T" + t);
  // calculamos los minutos a partir de las horas y minutos de la fecha creada
  const minutos = d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60;
  return minutos;
};

module.exports = { convertTime };
