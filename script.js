const passlengthInputNumber = document.querySelector('.passlength__input-number');
const passlengthInputRange = document.querySelector('.passlength__input-range');
const outputInput = document.querySelector('.output__input');

const passetInputCheckboxes = document.querySelectorAll('.passet__input-checkbox');

const regenerateBtnIcon = document.querySelector('.regenerateBtn__icon')
const copyBtnIcon = document.querySelector('.copyBtn__icon')
const copyBtn = document.querySelector('.copyBtn')

const copied1Wrapper = document.querySelector('.copied1__wrapper')

const changeValueRange = () => {
    passlengthInputNumber.value = passlengthInputRange.value;
    randomPassword();
}

const changeValueNumber = () => {
    passlengthInputRange.value = passlengthInputNumber.value;
    randomPassword();
}

const randomPassword = () => {

    const lowercaseCheckbox = document.querySelector('.lowercaseCheckbox').checked;
    const uppercaseCheckbox = document.querySelector('.uppercaseCheckbox').checked;
    const numbersCheckbox = document.querySelector('.numbersCheckbox').checked;
    const symbolsCheckbox = document.querySelector('.symbolsCheckbox').checked;

    let charset = '';
    if (lowercaseCheckbox) charset += "abcdefghijklmnopqrstuvwxyz";
    if (uppercaseCheckbox) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbersCheckbox) charset += "0123456789";
    if (symbolsCheckbox) charset += "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";
  
    let password = '';

    for (let i = 0; i < passlengthInputRange.value; i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    outputInput.value = password;
}

const copyClipboard = () => {
    outputInput.select()
    outputInput.setSelectionRange(0, 9999)

    navigator.clipboard.writeText(outputInput.value)
}
const copyBynIconAnimation = () => {
    copied1Wrapper.style.transform = "scale(1)"

    setTimeout(() => {
        copied1Wrapper.style.transform = "scale(0)"  
    }, 1000);
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
    randomPassword();
  });
});

if (!atLeastOneChecked) {
  passetInputCheckboxes[0].checked = true;
}


passlengthInputRange.addEventListener('input', changeValueRange);
passlengthInputNumber.addEventListener('input', changeValueNumber);

regenerateBtnIcon.addEventListener('click', randomPassword)
copyBtnIcon.addEventListener('click', copyClipboard)
copyBtnIcon.addEventListener('click', copyBynIconAnimation)
copyBtn.addEventListener('click', copyClipboard)