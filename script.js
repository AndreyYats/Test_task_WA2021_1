document.addEventListener('DOMContentLoaded', () => {

   const newTextDB = {
      newTexts: []   
   };

         addForm = document.querySelector('form.add'),      
         addInput = addForm.querySelector('.adding_input'),
         wrapper = document.querySelector('.tags_area'),
         textList = wrapper.querySelector('.newlist'),
         btns = wrapper.querySelectorAll('.reset'),
        
   
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

   wrapper.addEventListener('click', (event) => {
      console.dir(event.target);
      event.target.remove();
   });
   
   createTextList(newTextDB.newTexts, textList);
   
});