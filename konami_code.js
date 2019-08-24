const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;
let codeStore = []

function keyPress(e){
  const key = e.key;

  if(key === codes[index]){
    index++;
    console.log(index, 'correct');

    if(index.length === codes.length ) {
      alert('Congratulations, you cracked the code!');
      index = 0;
    }
  } else {
    index = 0;
    console.log(index, 'restart');
  }

}
document.body.addEventListener('keydown', keyPress(e));

function init() {
  // your code here
}
