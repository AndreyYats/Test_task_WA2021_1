const newTextDB = {
   newTexts: []
};
      btn = document.querySelector('button'),
      addForm = document.querySelector('form.add'),      
      addInput = addForm.querySelector('.adding_input'),
      textList = document.querySelector('.list'),
      
addForm.addEventListener('submit', (event) => {
   event.preventDefault();

   const newText = addInput.value;

   newTextDB.newTexts.push(newText);
   createTextList(newTextDB.newTexts, textList);
});

function createTextList(texts, textList) {
   textList.innerHTML = "";
   
   newTextDB.newTexts.forEach((text, i) => {
      textList.innerHTML += 
   `<li>${text}</li>`;
   });
}

createTextList(newTextDB.newTexts, textList);