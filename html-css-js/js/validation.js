/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const form = document.getElementById('form');
const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const email = document.getElementById('email');

const fckb = document.getElementById('frontend-checkbox');
const bckb = document.getElementById('backend-checkbox');
const mckb = document.getElementById('mobile-checkbox');
const gckb = document.getElementById('graphics-checkbox');

var check1 = 'false';
var check2 = 'false';
var check3 = 'false';
var check4 = 'false';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  dataCheck();
});

function dataCheck() {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();

  if(fnameValue === '') {
      setBad(fname, 'Należy podać imię');
      check1 = 'false';
  } else if (fnameValue.length > 35) {
      setBad(fname, 'Podane imię jest za długie');
      check1 = 'false';
  } else if (!fnameValue.match(/^[A-Za-z]+$/)) {
      setBad(fname, 'Podane imię jest błędne');
      check1 = 'false';
  } else {
      setGood(fname);
      check1 = 'true';
  }

  if(lnameValue === '') {
      setBad(lname, 'Należy podać nazwisko');
      check2 = 'false';
  } else if (lnameValue.length > 35) {
      setBad(lname, 'Podane nazwisko jest za długie');
      check2 = 'false';
  } else if (!lnameValue.match(/^[A-Za-z]+$/)) {
      setBad(lname, 'Podane nazwisko jest błędne');
      check2 = 'false';  
  } else {
      setGood(lname);
      check2 = 'true';
  }

  if(emailValue === '') {
      setBad(email, 'Należy podać email');
      check3 = 'false';
  } else if(!isEmail(emailValue)) {
      setBad(email, 'Podany email nie jest poprawny');
      check3 = 'false';
  } else {
      setGood(email);
      check3 = 'true';
  }

  if(fckb.checked || bckb.checked || mckb.checked || gckb.checked) {
    document.getElementById("errorsekcji").style.visibility = "hidden";
    check4 = 'true';
  } else {
    document.getElementById("errorsekcji").style.visibility = "visible";
    check4 = 'false';
  }

  if(check1 === 'true' && check2 === 'true' && check3 === 'true' && check4 === 'true') {
    document.getElementById("errorcałości").style.visibility = "visible";
  } else {
    document.getElementById("errorcałości").style.visibility = "hidden";
  }
}

function setBad(input, message) {
  const formatowanie = input.parentElement;
  const small = formatowanie.querySelector('small');

  small.innerText = message;
  formatowanie.className = 'formatowanie b';
}

function setGood(input) {
  const formatowanie = input.parentElement;
  formatowanie.className = 'formatowanie g';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
