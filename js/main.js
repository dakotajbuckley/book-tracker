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










































document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  let choice = document.querySelector('input').value
  let url = `https://openlibrary.org/isbn/${choice}.json`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('#title').innerText = "Title: " + data.title
    document.querySelector('img').src = `https://covers.openlibrary.org/b/isbn/${choice}-L.jpg`
    if (data.first_sentence) {
      document.querySelector('#firstSentance').innerText = "First Sentance: " + data.first_sentence.value
    }
    if (data.number_of_pages) {
      document.querySelector('#pageCount').innerText = "Page Count: " + data.number_of_pages
    }
    if (data.publish_date) {
      document.querySelector('#publishDate').innerText = "Publish Date: " + data.publish_date
    }
    
    
  })
}
