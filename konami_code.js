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
    console.log(e);
    const key = e.key;
    console.log(key);
    if(e === codes[index]){
      console.log(e);
      index++;

      codeStore.push(e);
      console.log(codeStore);
      if(JSON.stringify(codeStore) === JSON.stringify(codes)) {

            alert('Congratulations, you cracked the code!');
            console.log('Congratulations, you cracked the code!');
            codeStore = [];
            index = 0;

        }

    } else {
      index = 0;
      codeStore = [];
      console.log(index, 'restart');

    }

  }
  const mocha = document.getElementById('mocha');

  for(let i = 0; i < codes.length; i++){
      mocha.addEventListener('click', keyPress(codes[index]))
    mocha.click();
    console.log(i);
    // index++;
  }
  // document.body.addEventListener('keydown', keyPress(codes[index]));

}
init();
