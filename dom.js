// सभी ज़रूरी DOM एलिमेंट्स को पकड़ना
const title = document.getElementById('main-title');
const input = document.getElementById('textInput');
const changeTitleBtn = document.getElementById('changeTitleBtn');
const toggleHighlightBtn = document.getElementById('toggleHighlightBtn');
const itemsList = document.getElementById('items');
const addItemBtn = document.getElementById('addItemBtn');
const removeItemBtn = document.getElementById('removeItemBtn');

// शीर्षक बदलने वाला बटन
changeTitleBtn.addEventListener('click', () => {
  const newText = input.value.trim();
  if (newText) {
    title.textContent = newText;
  }
});

// हाइलाइट क्लास टॉगल करने वाला बटन
toggleHighlightBtn.addEventListener('click', () => {
  title.classList.toggle('highlight');
});

// नया आइटम जोड़ना
let count = itemsList.children.length;
addItemBtn.addEventListener('click', () => {
  count++;
  const newItem = document.createElement('li');
  newItem.textContent = `आइटम ${count}`;
  itemsList.appendChild(newItem);
});

// पहला आइटम हटाना
removeItemBtn.addEventListener('click', () => {
  const firstItem = itemsList.querySelector('li');
  if (firstItem) {
    itemsList.removeChild(firstItem);
    count--;
  }
});



