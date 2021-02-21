const addBtn = document.querySelector('.add_btn');
const mainPage = document.querySelector('main');
const counter = document.querySelector('.count')

loadEventListeners();

function loadEventListeners() {
    addBtn.addEventListener('click', onClick);
}

function onClick(e) {
    const newTitle = prompt('Title of new note');
    const newNote = prompt('Write your note');

    if(newNote === '') {
        alert('Add a note');
        !mainPage.appendChild(article);
    } else if (newTitle && newNote === '') {
        alert('Add a note and a title');
        !mainPage.appendChild(article);
    }

    const article = document.createElement('article');

    const header = document.createElement('h2');
    header.appendChild(document.createTextNode(`${new Date()}: ${newTitle}`));
    article.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.className = 'paragraph';
    paragraph.appendChild(document.createTextNode(newNote));
    article.appendChild(paragraph);

    mainPage.appendChild(article);

    const count = mainPage.children.length - 2;

    counter.innerHTML = `You have ${count} notes.`


    e.preventDefault();
}