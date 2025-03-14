const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const scriptureList = document.createElement('scriptureList');


const deleteButton = document.createElement('button');

scriptureList.textContent =input.value;

deleteButton.textContent = '⨉';

scriptureList.append(deleteButton);


list.append(scriptureList);
