//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// if (localStorage.getItem('books')) {
//   document.querySelector('h2').innerText = localStorage.getItem('books');
// }


// function getFetch(){
//   const choice = document.querySelector('input').value
//   if (choice === "") {
//     return;
//   }
//   const url = `https://openlibrary.org/isbn/${choice}.json`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         let bookTitle = data.title;
//         if (!localStorage.getItem('books')) {
//           localStorage.setItem('books', bookTitle)
//         } else {
//           bookTitle = localStorage.getItem('books') + ", " + bookTitle;
//           localStorage.setItem('books', bookTitle)
//         }
        
//         document.querySelector('img').src = `https://covers.openlibrary.org/b/isbn/${choice}-L.jpg`
//         document.querySelector('h2').innerText = localStorage.getItem('books');
//       })
//       .catch(err => {
//         alert('Enter a valid ISBN')
//           console.log(`error ${err}`)
//       });

// }

// Take the isbn. grab the book title from it. add the title to the previous store books. add the books back to local storage





























let books;

books = [];

// if (!localStorage.getItem('books')) {
//   books = []
//   let string = JSON.stringify(books);
//   localStorage.setItem('books', string);
// } else {
//   books = localStorage.getItem('books');
//   console.log(typeof books)
//   books = JSON.parse(books);
// }



document.querySelector('button').addEventListener('click', getFetch)

function NewBook(title, cover, firstSentence, pageCount, publishDate) {
  this.title = title;
  this.cover = cover;
  this.firstSentence = firstSentence;
  this.pageCount = pageCount;
  this.publishDate = publishDate;
}

function getFetch() {
  let choice = document.querySelector('input').value
  let url = `https://openlibrary.org/isbn/${choice}.json`
  fetch(url)
  .then(res => res.json())
  .then(data => {

    console.log(data)

    let title;
    let cover;
    let pageCount;
    let publishDate;

    
    // document.querySelector('#title').innerText = "Title: " + data.title
    // document.querySelector('img').src = `https://covers.openlibrary.org/b/isbn/${choice}-L.jpg`
    if (data.title) {
      title = data.title;
    }
    cover = `https://covers.openlibrary.org/b/isbn/${choice}-L.jpg`
    if (data.number_of_pages) {
      pageCount = data.pageCount;
    }
    if (data.publish_date) {
      publishDate = data.publishDate;
    }
    
    let string = JSON.stringify({
      title: title,
      cover: cover,
      pageCount: pageCount,
      publishDate: publishDate
    })
    books.push(string)
    localStorage.setItem('books', books)
  })
}

function getItem() {
  let tempBooks = localStorage.getItem('books');
  console.log(tempBooks[0])
}
