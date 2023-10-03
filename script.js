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
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let output = ''

    outputInput.value = output
}


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