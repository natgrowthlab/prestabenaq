const amount = document.querySelector('#amount');
const term = document.querySelector('#term');
const amountValue = document.querySelector('#amount-value');
const termValue = document.querySelector('#term-value');
const payment = document.querySelector('#payment');
const formatter = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 });

function updateEstimate() {
  const principal = Number(amount.value);
  const months = Number(term.value);
  const monthlyRate = 0.016;
  const instalment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  amountValue.textContent = `$ ${formatter.format(principal)}`;
  termValue.textContent = `${months} meses`;
  payment.textContent = `$ ${formatter.format(instalment)}`;
}

[amount, term].forEach((input) => input.addEventListener('input', updateEstimate));
document.querySelectorAll('.segmented button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.segmented button').forEach((item) => { item.classList.remove('selected'); item.setAttribute('aria-selected', 'false'); });
    button.classList.add('selected'); button.setAttribute('aria-selected', 'true');
  });
});
updateEstimate();
