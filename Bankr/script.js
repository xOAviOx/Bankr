'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

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
  movements: [6100, -220, -4500, 3300, -3700, 8900, -80, -990],
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

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc) {
  containerMovements.innerHTML = '';
  acc.movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}₹</div>
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
  labelBalance.textContent = `${balance}₹`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${Math.trunc(incomes)}₹`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.trunc(out)}₹`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${Math.trunc(interest)}₹`;
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
let currentAccount;

//Login feature

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (
    inputLoginUsername.value === currentAccount.username &&
    +inputLoginPin.value === currentAccount.pin
  ) {
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    //Clear the input values
    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    //Update Ui
    updateUi(currentAccount);
  }
});

//Transfer money feature

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
    amount <= currentAccount.balance
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //update UI
    updateUi(currentAccount);
  }
});
