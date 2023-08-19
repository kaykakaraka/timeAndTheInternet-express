
const titles = [
  'Time and the Internet',
  'Sandra has a girlfriend',
  'How To Go Outside',
  'Sudoku'
];

let count = 0
let title = titles[count]

const uiTitle = document.querySelector('h1');
    const button = document.querySelector('button');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      count += 1;
      uiTitle.value = titles[count];
    });


// class Title {
//   contructor() {
//     this.titles = [
//       'Time and the Internet',
//       'Sandra has a girlfriend',
//       'How To Go Outside',
//       'Sudoku'
//     ];
//     this.count = 0;
//     this.title = this.titles[this.count];
//     const uiTitle = document.querySelector(h1);
//     const button = document.querySelector(button);
//     button.addEventListener('click', (event) => {
//       event.preventDefault();
//       this.changeTitle();
//       uiTitle.value = this.title;
//     })
//   }

//   changeTitle() {
//     this.count += 1;
//     this.title = this.titles[this.count]
//   }
// }

// const TitleGenerator = new Title;
// module.exports = TitleGenerator;

// const form = document.querySelector('form');
//       const button = form.querySelector('button');
//       const dreamsInput = document.querySelector('#dreamsInput');
//       const lettingGoInput = document.querySelector('#lettingGoInput')
//       const dreamsDiv = document.querySelector('#dreams')
//       const lettingGoDiv = document.querySelector('#lettingGo')

//       button.addEventListener('click', (event) => {
//           event.preventDefault();
//           const p = document.createElement('p');
//           p.textContent = dreamsInput.value;
//           dreamsInput.value = ''
//           dreamsDiv.appendChild(p);
//           const lettingGo = document.createElement('p');
//           lettingGo.textContent = lettingGoInput.value;
//           lettingGoInput.value = ''
//           lettingGoDiv.appendChild(lettingGo);
//       }); 

