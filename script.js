// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================

// 🟩 PART 1: Selecting and Styling Elements (1–10)

// 1️⃣ Change text color of heading with id="title" to red.
document.getElementById("title").style.color="red";


// 2️⃣ Change background color of all <p> elements to lightgray.
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.style.backgroundColor = 'lightgray';
});

// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
document.getElementById('title').textContent = 'Welcome to the DOM Lab!';


// 4️⃣ Add a solid black border to all <div> elements.
const divs = document.querySelectorAll('div');
divs.forEach(div => {
    div.style.border = '1px solid black';
});

// 5️⃣ Increase font size of the first <h1> to 36px.
document.querySelector('h1').style.fontSize = '36px';


// 6️⃣ Change text color of elements with class="highlight" to blue.
const highlights = document.querySelectorAll('.highlight');
highlights.forEach(el => {
    el.style.color = 'blue';
});

// 7️⃣ Add CSS class "active" to the first <div>.
document.querySelector('div').classList.add('active');


// 8️⃣ Change the <body> background color to lightblue.
document.body.style.backgroundColor = 'lightblue';


// 9️⃣ Set the font family of all <p> elements to Arial.
paragraphs.forEach(p => {
    p.style.fontFamily = 'Arial';
});

// 🔟 Change the image source of #sampleImage.
document.getElementById('simpleImage').src = 'ht

// 🟦 PART 2: Creating and Appending Elements (11–20)

// 1️⃣1️⃣ Create a new <p> and append it to the <body>.
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a dynamically created paragraph.';
document.body.appendChild(newParagraph);

// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
const newListItem = document.createElement('li');
newListItem.textContent = 'New List Item';
document.querySelector('ul').appendChild(newListItem);


// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
const newButton = document.createElement('button');
newButton.textContent = 'Click Me!';
document.querySelector('div').appendChild(newButton);

// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
const newHeading2 = document.createElement('h2');
newHeading2.textContent = 'Dynamically Inserted Heading';
const firstParagraph = document.querySelector('p');
document.body.insertBefore(newHeading2, firstParagraph);

// 1️⃣5️⃣ Create an image and set width and height.
const newImage = document.createElement('img');
newImage.src = 'https://picsum.photos/100/100'; // مثال على مصدر صورة
newImage.style.width = '100px';
newImage.style.height = '100px';
document.body.appendChild(newImage);

// 1️⃣6️⃣ Add 3 new <li> items using a loop.
const ulElement = document.querySelector('ul');
for (let i = 1; i <= 3; i++) {
    const loopItem = document.createElement('li');
    loopItem.textContent = Loop Item ${i};
    ulElement.appendChild(loopItem);
}

// 1️⃣7️⃣ Create a <div> with class "card" and text inside.
const newCard = document.createElement('div');
newCard.classList.add('card');
newCard.textContent = 'This is a new card element.';
document.body.appendChild(newCard);

// 1️⃣8️⃣ Append a paragraph containing your name.
const nameParagraph = document.createElement('p');
nameParagraph.textContent = 'Created by: [الاء]'; 
document.body.appendChild(nameParagraph);



// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.
paragraphs.forEach(p => {
    const editSpan = document.createElement('span');
    editSpan.textContent = '[Edited]';
    p.appendChild(editSpan);
});

// 2️⃣0️⃣ Remove the last child of <ul>.
const lastChild = document.querySelector('ul').lastElementChild;
if (lastChild) {
    document.querySelector('ul').removeChild(lastChild);
}

// 🟨 PART 3: Event Handling (21–30)

// 2️⃣1️⃣ Add click event that shows an alert.
const alertButton = document.querySelector('button'); // نختار زر موجود في الصفحة
alertButton.addEventListener('click', () => {
    alert('Button was clicked! (Mini 21)');
});


// 2️⃣2️⃣ Change background color of a <div> when clicked.
const clickDiv = document.querySelector('div');
clickDiv.addEventListener('click', function() {
    // نغير لون الخلفية بشكل بسيط عند النقر
    this.style.backgroundColor = 'purple';
});

// 2️⃣3️⃣ When hovering over <p>, make it bold.
const hoverParagraph = document.querySelector('p');
hoverParagraph.addEventListener('mouseover', function() {
    this.style.fontWeight = 'bold';
});


// 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.
hoverParagraph.addEventListener('mouseout', function() {
    this.style.fontWeight = 'normal';
});

// 2️⃣5️⃣ Add button to hide the image.
const hideImageButton = document.createElement('button');
hideImageButton.textContent = 'Hide Image';
document.body.appendChild(hideImageButton);
const imageToHide = document.getElementById('simpleImage')
hideImageButton.addEventListener('click', () => {
    imageToHide.style.display = 'none';
});

// 2️⃣6️⃣ Add button to show the image again.
const showImageButton = document.createElement('button');
showImageButton.textContent = 'Show Image';
document.body.appendChild(showImageButton);

// 2️⃣7️⃣ Create a counter button that increases with each click.
const counterButton = document.createElement('button');
let count = 0;
counterButton.textContent = Count: ${count};
document.body.appendChild(counterButton);

counterButton.addEventListener('click', () => {
    count++;
    counterButton.textContent = Count: ${count};
});

// 2️⃣8️⃣ Display entered text from an input when button clicked.
const inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('placeholder', 'Enter text here');
document.body.appendChild(inputElement);

const displayButton = document.createElement('button');
displayButton.textContent = 'Display Text';
document.body.appendChild(displayButton);

displayButton.addEventListener('click', () => {
    alert(You entered: ${inputElement.value});
});

// 2️⃣9️⃣ Change background color randomly when a button is clicked.
const randomColorButton = document.createElement('button');
randomColorButton.textContent = 'Random Color';
document.body.appendChild(randomColorButton);

randomColorButton.addEventListener('click', () => {
    // دالة لتوليد لون عشوائي
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// 3️⃣0️⃣ Display which key is pressed.
document.addEventListener('keydown', (event) => {
    console.log(Key Pressed: ${event.key}); 

// 🟧 PART 4: Modifying and Traversing DOM (31–40)

// 3️⃣1️⃣ Change text of the first <li>.
const firstListItem = document.querySelector('li');
firstListItem.textContent = 'First Item - Modified';

// 3️⃣2️⃣ Get input value when button clicked.
const getValueButton = document.createElement('button');
getValueButton.textContent = 'Get Input Value';
document.body.appendChild(getValueButton);

getValueButton.addEventListener('click', () => {
    const inputElement = document.querySelector('input'); // نفترض وجود input
    if (inputElement) {
        alert(Current Input Value: ${inputElement.value});
    } else {
        alert('Input element not found!');
    }
});

// 3️⃣3️⃣ Count number of <p> and alert the count.
const pCount = document.querySelectorAll('p').length;
alert(Total number of paragraphs: ${pCount});

// 3️⃣4️⃣ Remove all <p> elements.
paragraphs.forEach(p => {
    p.remove();  
});


// 3️⃣5️⃣ Replace existing <h2> with new one.
const oldH2 = document.querySelector('h2');      
if (oldH2) {
    const newH2 = document.createElement('h2');
    newH2.textContent = 'New Replaced Heading';
    oldH2.parentNode.replaceChild(newH2, oldH2);
}


// 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.
const allListItems = document.querySelectorAll('li');
allListItems.forEach(li => {
    li.classList.add('highlighted');
});

// 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.
const toggleDiv = document.querySelector('div:nth-of-type(2)'); 
toggleDiv.addEventListener('click', function() {
    this.classList.toggle('toggled'); 
});

// 3️⃣8️⃣ Clone an existing element and append copy.
const elementToClone = document.querySelector('h1');
const clonedElement = elementToClone.cloneNode(true); 
clonedElement.textContent = 'Cloned Title';
document.body.appendChild(clonedElement);

// 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.
const scrollButton = document.createElement('button');
scrollButton.textContent = 'Scroll to Bottom';
document.body.appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight, 
        behavior: 'smooth'
    });
});

// 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
const data = ['Item A', 'Item B', 'Item C'];
const listContainer = document.createElement('ul');
let htmlContent = '';

data.forEach(item => {
    htmlContent += <li>**Array Item:** ${item}</li>;
});

listContainer.innerHTML = htmlContent;
document.body.appendChild(listContainer);