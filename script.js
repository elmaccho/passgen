const passlengthInputNumber = document.querySelector('.passlength__input-number')
const passlengthInputRange = document.querySelector('.passlength__input-range')
const outputInput = document.querySelector('.output__input')

const lowercaseCheckbox = document.querySelector('.lowercaseCheckbox')
const uppercaseCheckbox = document.querySelector('.uppercaseCheckbox')
const numbersCheckbox = document.querySelector('.numbersCheckbox')
const symbolsCheckbox = document.querySelector('.symbolsCheckbox')

const passetInputCheckboxes = document.querySelectorAll('.passet__input-checkbox')

const changeValueRange = () => {
    passlengthInputNumber.value = passlengthInputRange.value
}

const changeValueNumber = () => {
    passlengthInputRange.value = passlengthInputNumber.value
}

const randomPassword = () => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = ['[', ']', '\\', '@', '!', '%', '&', '#', '^', '*'];

  // Tworzenie zbioru znaków na podstawie wybranych opcji
  let charset = '';
  if (useUppercase) charset += uppercase;
  if (useLowercase) charset += lowercase;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols.join('');

//   if (charset === '') {
//     console.error('Musisz wybrać przynajmniej jedną opcję.');
//     return '';
//   }

  // Generowanie hasła
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};

// Przykład użycia:
console.log();



let atLeastOneChecked = false;

passetInputCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      atLeastOneChecked = true;
    } else {
      const anyChecked = Array.from(passetInputCheckboxes).some(cb => cb.checked);
      if (!anyChecked) {
        checkbox.checked = true;
      }
    }
  });
});

if (!atLeastOneChecked) {
  passetInputCheckboxes[0].checked = true;
}


passlengthInputRange.addEventListener('input', changeValueRange)
passlengthInputRange.addEventListener('input', randomPassword)

passlengthInputNumber.addEventListener('input', changeValueNumber)
passlengthInputNumber.addEventListener('input', randomPassword)