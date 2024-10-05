async function fetchBooks() {
  const books = [
    {
      title: 'Where the Crawdads Sing',
      author: 'Delia Owens',
      image: 'public/assets/b.jpeg',
      description: 'A mesmerizing tale of Kya, who grows up in isolation in the wilds of North Carolina. This coming-of-age mystery intertwines Kya’s struggle for survival with a murder investigation, exploring themes of loneliness, resilience, and love.',
      price: 18.99
    },
    {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      image: 'public/assets/o.jpeg',
      description: 'Nora Seed finds herself in a library between life and death, where she can experience different lives by reading alternate versions of her own story. As she explores the possibilities, she learns what truly makes life worth living.',
      price: 14.99
    },
    {
      title: 'Educated',
      author: 'Tara Westover',
      image: 'public/assets/R.jpeg',
      description: 'In this memoir, Tara Westover recounts her incredible journey from growing up in a strict, survivalist family in rural Idaho to earning a Ph.D. from Cambridge University. Her story of transformation, the power of education, and self-discovery is both inspiring and heart-wrenching.',
      price: 14.99
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      image: 'public/assets/g.jpeg',
      description: 'A practical guide to building good habits and breaking bad ones, James Clear offers actionable strategies to help you make small changes that lead to significant personal and professional growth. Ideal for anyone looking to improve their productivity and lifestyle.',
      price: 13.00
    }, 
  ];

  const bookList = document.getElementById('book-list');

  books.forEach((book) => {
    const bookItem = document.createElement('div');
      bookItem.classList.add('book-card'); // Add this line
      bookItem.innerHTML = `
            <h2>${book.title}</h2>
            <h3>by ${book.author}</h3>
            <img src="${book.image}" alt="${book.title}" width="100">
            <p>${book.description}</p>
            <p>Price: $${book.price}</p>
        `;
      bookList.appendChild(bookItem);
  });
}

// Load books when the page loads
window.onload = fetchBooks;
