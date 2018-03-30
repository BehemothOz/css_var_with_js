// let inputs = document.querySelectorAll('.controls input');

// function handleUpdate() {
//   let suffix = this.dataset.sizing || '';
//   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// };

// inputs.forEach(input => { input.addEventListener('change', handleUpdate) });
// inputs.forEach(input => { input.addEventListener('mousemove', handleUpdate) });

// // document.querySelector('h2').style.setProperty('color', 'red');
// document.querySelector('h2').style.color = 'red';

// console.log(document.documentElement)

let inputs = document.querySelectorAll('.input');

function handleUpdate() {
  let suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

  console.log(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

