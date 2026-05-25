// // Task 1: Mouse

// // Create a div

// // Log mouse position when mouse moves over it

// const element = document.createElement("div")
// document.body.append(element)
// element.className = 'container';
// element.style.width = '300px';
// element.style.height = '300px';
// element.style.backgroundColor = 'black';
// element.addEventListener("mouseover", (e) => {
// //   console.log("Entered");
//   console.log(e.clientX, e.clientY);
// });



// // Task 2: Keyboard

// // Log “Escape pressed” when user presses Escape

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     console.log("Escape pressed");
//   }
// });



// // Task 3: Form

// // Create a form with one input

// // Prevent reload

// // Log input value on submit

// const myForm = document.createElement('form')
// myForm.style.paddingTop = '30px';
// document.body.appendChild(myForm)
// const inputName = document.createElement('input');
// inputName.type = 'text';
// inputName.name = 'userName';
// inputName.id = 'name';
// inputName.placeholder = 'Name';
// myForm.appendChild(inputName)
// const buttonSubmit = document.createElement('input');
// buttonSubmit.type = 'submit';
// buttonSubmit.value = 'Submit';
// myForm.appendChild(buttonSubmit)
// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const inputValue = document.querySelector('#name').value;
//   console.log(inputValue);
// });


// const ul = document.querySelector("#menu")
// ul.addEventListener('click', (e) => {
//   if (e.target.tagName === "LI") {
//     console.log(e.target.textContent);
//     e.stopPropagation();
//   }
// })

// const ul = document.querySelector("#fruit-list")
// for (let i = 0; i< 3; i++){
// const a = document.createElement("a")
// a.href = "#"
// ul.appendChild(a)
// const li = document.createElement("li")
// a.appendChild(li)
// li.textContent = `${i + 1}`
// }

// ul.addEventListener('click', (e) => {
//   if (e.target.tagName === "LI") {
//       e.preventDefault();
//       console.log(e.target.textContent);
//     }
// })


// const button = document.createElement("button")
// button.classList = "submit"
// button.textContent = "Submit"
// document.body.appendChild(button)

// button.addEventListener(('click'), () => {
//   console.log("Button clicked");
// })
// button.dispatchEvent(new Event("click"));


// const ul = document.querySelector("#fruit-list")
// for (let i = 0; i< 3; i++){
// const a = document.createElement("a")
// a.href = "#"
// ul.appendChild(a)
// const li = document.createElement("li")
// a.appendChild(li)
// li.textContent = `${i + 1}`
// }

// ul.addEventListener('click', (e) => {
//   if (e.target.tagName === "LI") {
//       e.preventDefault();
//       console.log(e.target.textContent);
//     }
// })

// const li = document.querySelector("li")
// li.dispatchEvent(new Event("click"));

const expenses = [
  { category: 'Mobile Bill', amount: 800 },
  { category: 'Lunch', amount: 400 },
  { category: 'Groceries', amount: 1200 },
  { category: 'Gym Membership', amount: 600 },
  { category: 'Coffee', amount: 200 },
]

// Filter array to show object in array with amount greater then 500
const newArray = expenses.filter((exp) => exp.amount > 500);

console.log(newArray);
newArray.sort((a, b) => b.amount - a.amount)
// map array to remove amonunt key pair from each object
const mapArray = newArray.map((m) => {
   return {
    category: m.category,
    label: "high spend",
    formattedAmount: '₹' + m.amount
  };
});



console.log(mapArray);
