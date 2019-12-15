document.addEventListener("DOMContentLoaded", function() {
     getAllBooks()

});


function getAllBooks() {
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(booksArray => {booksArray.forEach(book =>renderBook(book) )})
 
}

function renderBook(book) {
  console.log(book)

  let listPanel = document.getElementById("list-panel")
  let orderedList = document.getElementById("list")

  let bookItem = document.createElement("li")
  let bookTitle = document.createElement("h3") 

  bookTitle.innerText = book.title
  bookTitle.id = `book-title-${book.id}`

  orderedList.appendChild(bookItem)
  bookItem.appendChild(bookTitle)

  bookTitle.addEventListener("click" , showBook)

}


function showBook(e) {
   console.log(e.currentTarget)
//    debugger
   let showPanel = document.getElementById("show-panel")
   let bookDesc = document.createElement("h3")
   let bookthumb = document.createElement("img")

   let id = e.currentTarget.id.split("-")[2] 

   fetch(`http://localhost:3000/books/${id}`)
   .then(response => response.json())
   .then(data => renderSingle(data))

}

function renderSingle(book) {
    console.log(book)

    let showPanel = document.getElementById("show-panel") 
    
    let bookCard = document.createElement("div") 
    let bookTitle = document.createElement("h2")
    let bookImage = document.createElement("img")
    let bookDesc = document.createElement("p")
    let likedList = document.createElement("ul")
    let bookLikedUsers = document.createElement("l1")
    
    bookImage.src = book.img_url
    bookDesc.innerText = book.description 
    bookTitle.innerText = book.title
    bookLikedUsers.innerText = showUser(book)
    // bookLikedUsers

    showPanel.appendChild(bookCard)
    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookImage)
    bookCard.appendChild(bookDesc)
    bookCard.appendChild(bookLikedUsers)

}


function showUser(book) {
    console.log(book.users)
     for (i=0; i < book.users.length ; i++) {
         debugger
         return book.users[0].username 
     }
     
}  