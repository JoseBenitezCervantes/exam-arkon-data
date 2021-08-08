const restTimeHors = (restTime, initTime) => {
  const restHors = restTime[0];
  const restMinutes = restTime[1];
  const restSec = restTime[2];

  const initHors = initTime[0];
  const initMinutes = initTime[1];
  const initSec = initTime[2];

  let transcurridoHoras = initHors - restHors;
  let transcurridoMinutos = initMinutes - restMinutes;
  let transcurridoSec = initSec - restSec;

  if (transcurridoMinutos < 0) {
    transcurridoHoras--;
    transcurridoMinutos = 60 + transcurridoMinutos;
  }

  if (transcurridoSec < 0) {
    transcurridoMinutos--;
    transcurridoSec = 60 + transcurridoSec;
  }

  let horas = transcurridoHoras.toString();
  let minutos = transcurridoMinutos.toString();
  let sec = transcurridoSec.toString();

  if (horas.length < 2) {
    horas = "0" + horas;
  }

  if (minutos.length < 2) {
    minutos = "0" + minutos;
  }

  if (sec.length < 2) {
    sec = "0" + sec;
  }
  return `${horas}:${minutos}:${sec}`;
};

module.exports = { restTimeHors };
