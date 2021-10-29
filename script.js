
var listElement = document.querySelector('#list');
var inputElement = document.querySelector('.todo-input');
var errorEmpty   = document.querySelector('#err');

/***On window load
 1. Call a function to get values from local storage when 
 2. Call a function to add event listeners on the list items
 ****/
window.onload = function(){
    getValues();
    addClickEvenets();
}

/***addItem(): Adds new list items to the DOM when "Add" button on the HTML page is clicked ***/
function addItem()
{
  
  if(inputElement.value != '')
  {
    errorEmpty.style.display= "none";  
    listElement.innerHTML += '<li>' + inputElement.value + '</li>';
    
    store();
    
    inputElement.value = "";
  }
  else{
  
        errorEmpty.style.display= "block";
        
  }
  
  addClickEvenets();
}
   
/*****store(): saves the list items in localStorage*****/
function store() {
  window.localStorage.setItem('myitems',listElement.innerHTML );
}
  
/***getValues(): retrieves the values from localStorage and sets them to the UL DOM element****/
function getValues()
 {
  var storedValues = window.localStorage.getItem('myitems');
  //Display the values only if the local storage is not empty
    if(storedValues != '')
    {
      listElement.innerHTML = storedValues;
    }
 }


/***addClickEvenets(): add event listeners on the list items for click and double click*****/
function addClickEvenets(){
  document.querySelectorAll('li').forEach ( item => {
  item.addEventListener('click', strikeTheItem);
  item.addEventListener('dblclick', deleteTheItem);
})
}

function strikeTheItem(){
  
   if(this.classList.contains('strike')){
      this.classList.remove("strike");
  }
  else{
    this.classList.add("strike");
  }
  
}

function deleteTheItem(){
 
  if(this.classList.contains('strike'))
  {
      this.remove();;
  }
}


  
