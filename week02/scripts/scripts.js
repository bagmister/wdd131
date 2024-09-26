const input = document.querySelector("#favchap")
const button = document.querySelector("button")
const list = document.querySelector("#list")
const li = document.createElement("li")
const deleteButton = document.createElement("button")
input.value = '';

function addChapter(input){
  if (input.value.trim() !== null) {
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
  } else{
    return input.focus();
  }
}

function deleteChapter(li){
  list.removeChild(li);
  input.focus();
}

button.addEventListener('click', addChapter(input))
deleteButton.addEventListener('click', deleteChapter(li))
