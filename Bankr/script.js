'use strict';
//Accounts
const account1 = {
  owner: 'Avi Shukla',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2024-11-18T21:31:17.178Z',
    '2024-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-08T14:11:59.604Z',
    '2024-05-27T17:01:17.194Z',
    '2024-07-11T23:36:17.929Z',
    '2024-07-12T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN', // de-DE
};

const account2 = {
  owner: 'Shreya Shukla',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2024-11-01T13:15:33.035Z',
    '2024-11-30T09:48:16.867Z',
    '2024-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};
const account3 = {
  owner: 'Utkarsh Mishra',
  movements: [4200, -280, -4600, 7200, -1900, 3500, -820, 960],
  interestRate: 1.8,
  pin: 3333,

  movementsDates: [
    '2024-11-01T13:15:33.035Z',
    '2024-11-30T09:48:16.867Z',
    '2024-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};
const account4 = {
  owner: 'John Davis',
  movements: [4800, -270, -3500, 620, -4100, 9500, -120, -860],
  interestRate: 1.4,
  pin: 4444,

  movementsDates: [
    '2024-11-01T13:15:33.035Z',
    '2024-11-30T09:48:16.867Z',
    '2024-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const account5 = {
  owner: 'Elon Musk',
  movements: [5200, -310, 8700, -1500, -4200, 3800, -90, -780],
  interestRate: 1.9,
  pin: 5555,

  movementsDates: [
    '2024-11-01T13:15:33.035Z',
    '2024-11-30T09:48:16.867Z',
    '2024-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const account6 = {
  owner: 'Aashish Kumar',
  movements: [6100, -220, -500, 3300, -300, 800, -80, -99],
  interestRate: 2,
  pin: 6666,

  movementsDates: [
    '2024-11-01T13:15:33.035Z',
    '2024-11-30T09:48:16.867Z',
    '2024-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2024-07-26T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Functions

const formatDates = function (date, locale) {
  const calcDaysPassed = (date1, date2) => {
    return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  };
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago.`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const NumberFormat = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));
  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach((obj, i) => {
    const { movement, movementDate } = obj;

    const formattedMov = NumberFormat(movement, acc.locale, acc.currency);
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const movementTypeClass = 'movements__type movements__type--' + type;
    const date = new Date(movementDate);

    const displayDate = formatDates(date, acc.locale);
    const html = `
      <div class="movements__row">
        <div class="${movementTypeClass}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>  
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  acc.balance = balance;
  labelBalance.textContent = NumberFormat(balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = NumberFormat(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = NumberFormat(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = NumberFormat(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsername = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUsername(accounts);

const updateUi = function (acc) {
  //Display UI
  displayMovements(acc);

  calcDisplayBalance(acc);

  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Login to get started`;
      containerApp.style.opacity = 0;
    }
    // Decrese 1s
    time--;
  };
  // Set time to 5 minutes
  let time = 300;
  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
let currentAccount, timer;

//Login feature

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (
    inputLoginUsername?.value === currentAccount?.username &&
    +inputLoginPin?.value === currentAccount?.pin
  ) {
    const newDate = new Date();
    const hours = newDate.getHours();
    if (hours >= 0 && hours < 12) {
      labelWelcome.textContent = `Welcome back and Good Morning, ${
        currentAccount.owner.split(' ')[0]
      }`;
    } else if (hours >= 12 && hours < 18) {
      labelWelcome.textContent = `Welcome back and Good Afternoon, ${
        currentAccount.owner.split(' ')[0]
      }`;
    } else {
      labelWelcome.textContent = `Welcome back and Good Evening, ${
        currentAccount.owner.split(' ')[0]
      }`;
    }

    containerApp.style.opacity = 100;

    //Clear the input values
    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    //new date

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric', // "numeric" | "2-digit"
      month: 'numeric', // "numeric" | "2-digit" | "long" | "short" | "narrow"
      day: 'numeric', // "numeric" | "2-digit"
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(newDate);

    //Update Ui
    updateUi(currentAccount);

    //timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//transfer money feature

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const recieverAcc = accounts.find(
    acc => inputTransferTo.value === acc.username
  );
  const amount = +inputTransferAmount.value;
  inputTransferTo.value = inputTransferAmount.value = '';
  if (
    recieverAcc &&
    recieverAcc?.username !== currentAccount.username &&
    amount > 0 &&
    amount < currentAccount.balance
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //adding the dates
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAcc.movementsDates.push(new Date().toISOString());

    //update UI
    updateUi(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputLoanAmount.value;
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount)) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      //adding the dates
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUi(currentAccount);
    }, 1000);
  }

  //update ui
  updateUi(currentAccount);
  inputLoanAmount.value = '';
  //Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === inputCloseUsername.value
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started

  `;
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
