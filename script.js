//////////////// GCD and LCM ////////////////
const gcd = document.querySelector('#gcd');
const lcm = document.querySelector('#lcm');
const result = document.querySelector('#result');

const calcDivisor = () => {
  const no1 = document.querySelector('#no1').value;
  const no2 = document.querySelector('#no2').value;
  let cd;

  if (!no1 && !no2) result.innerHTML = 'Please add the numbers!';
  else
    for (let i = 1; i <= no1 && i <= no2; i++) {
      if (no1 % i == 0 && no2 % i == 0) cd = i;

      result.innerHTML = `Greatest Common Divisor for ${no1} and  ${no2} is ${cd}.`;
    }
};

const calcMultiple = () => {
  const no1 = document.querySelector('#no1').value;
  const no2 = document.querySelector('#no2').value;
  let cd;
  let mc;

  if (!no1 && !no2) result.innerHTML = 'Please add the numbers!';
  else
    for (let i = 1; i <= no1 && i <= no2; i++) {
      if (no1 % i == 0 && no2 % i == 0) {
        cd = i;
      }

      mc = (no1 * no2) / cd;

      result.innerHTML = `Least Common Multiple for ${no1} and  ${no2} is ${mc}.`;
    }
};

gcd.addEventListener('click', calcDivisor);
lcm.addEventListener('click', calcMultiple);

//////////////// Trafficlight ////////////////
let nightInt = null;
let dayInt = null;

let colors = ['red', 'yellow', 'green'];
let currentState = 0;

const dayBtn = document.querySelector('.dayBtn');
const nightBtn = document.querySelector('.nightBtn');

//////// Night ////////
const nightLights = () => {
  clearTimeout(dayInt);
  clearTimeout(nightInt);
  document.querySelector('.red').classList.add('gray');
  document.querySelector('.green').classList.add('gray');
  nightInt = setInterval(nightSequence, 1000);
};

const nightSequence = () =>
  document.querySelector('.yellow').classList.toggle('gray');

//////// Day ///////
const dayLights = () => {
  clearInterval(nightInt);
  clearTimeout(dayInt);

  colors.forEach(function (color) {
    document.querySelector(`.${color}`).classList.add('gray');
  });

  currentState = 0;

  daySequence();
};

const daySequence = () => {
  let sequence = [
    [1, 0, 0, 1000],
    [1, 1, 0, 5000],
    [0, 0, 1, 1000],
    [0, 1, 0, 5000],
  ];

  setTimeout(
    (changeColor = () => {
      for (let i = 0; i <= 2; i++) {
        if (sequence[currentState][i] == 1)
          document.querySelector(`.${colors[i]}`).classList.remove('gray');
        else document.querySelector(`.${colors[i]}`).classList.add('gray');
      }
      currentState++;

      if (currentState == 4) currentState = 0;

      dayInt = setTimeout(changeColor, sequence[currentState][3]);
    })
  );
};

dayBtn.addEventListener('click', dayLights);
nightBtn.addEventListener('click', nightLights);
