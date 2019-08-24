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


function init() {
  let index = 0;
  let codeStore = [];
  function keyPress(e){

    const key = e.key;

    if(key === codes[index]){
      console.log(key);
      index++;

      codeStore.push(key);
      console.log(codeStore);
      if(codeStore.length === codes.length+1 ) {
          if(JSON.stringify(codeStore) === JSON.stringify(codes)){
            alert('Congratulations, you cracked the code!');
            console.log('Congratulations, you cracked the code!');
            codeStore = [];
            index = 0;
            return;
          }
        }

    } else {
      index = 0;
      codeStore = [];
      console.log(index, 'restart');
    }

  }
  document.body.addEventListener('keydown', keyPress);

}
init();
