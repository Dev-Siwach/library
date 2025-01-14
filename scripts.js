const myLibrary = [
];

console.table(myLibrary);
// takes some info to create books as object and store them in myLibrary[] array
function book() {
    const book_name = prompt("Please Enter Book name : ");
    const author_name = prompt("Enter author name : ");
    const total_pages = prompt("Enter the no. of pages : ");
    const newBook = {name:book_name, author:author_name, pages:total_pages};
    myLibrary.push(newBook);
    addBookToLibrary();
}

// adds books from myLibrary[] then displays them on the screen
function addBookToLibrary(){
    const div = document.createElement("div");
    div.className = "card";
    const bookName = document.createElement("h1");
    bookName.textContent = myLibrary[myLibrary.length - 1].name;
    const authorNameTitle = document.createElement("h3");
    authorNameTitle.textContent = " Author : ";
    const authorName = document.createElement("p");
    authorName.textContent = myLibrary[myLibrary.length - 1].author;
    const total_pagesTitle = document.createElement("h3");
    total_pagesTitle.textContent = "Pages : ";
    const total_pages = document.createElement("p");
    total_pages.textContent = myLibrary[myLibrary.length - 1].pages;
    const cardRemoveButton = document.createElement("button");
    cardRemoveButton.className = "cardRemoveButton";
    cardRemoveButton.addEventListener("click", removeCard);
    cardRemoveButton.textContent = "X";
    div.appendChild(bookName);
    div.appendChild(authorNameTitle);
    div.appendChild(authorName);
    div.appendChild(total_pagesTitle);
    div.appendChild(total_pages);
    div.appendChild(cardRemoveButton);
    const main = document.getElementById("main");
    main.appendChild(div);
}

function removeCard() {
    this.parentElement.remove();
}