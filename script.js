const booksData = {
    fiction: [
        { title: "Book 1", author: "Author A", description: "Beautifully curated collection of fiction! Every story transports me to a new world.", image: "image/friction1.jpeg" },
        { title: "Book 2", author: "Author B", description: "Each book here is a gem – I’m never disappointed with the fiction section.", image: "image/friction2.jpeg" },
        { title: "Book 3", author: "Author C", description: "Perfect for cozy nights in! Great mix of classics and contemporary novels.", image: "image/friction3.jpeg" },
        { title: "Book 4", author: "Author D", description: "I can always find something gripping in the fiction section. Truly enjoyable reads!", image: "image/friction4.jpeg" },
        { title: "Book 5", author: "Author E", description: "If you love diving into stories, this fiction collection won’t disappoint!", image: "image/friction5.jpeg" }
    ],
    "non-fiction": [
        { title: "Book 1", author: "Author A", description: "Insightful and thought-provoking books – great for self-growth and learning!", image: "image/non1.jpeg" },
        { title: "Book 2", author: "Author B", description: "Amazing variety of non-fiction books. There’s something here for everyone!", image: "image/non2.jpeg" },
        { title: "Book 3", author: "Author C", description: "Every book I’ve read has expanded my understanding of the world. Fantastic selection!", image: "image/non3.jpeg" },
        { title: "Book 4", author: "Author D", description: "Engaging reads that provide real value. Love the non-fiction section here!", image: "image/non4.jpeg" },
        { title: "Book 5", author: "Author E", description: "A great place for biographies, memoirs, and insightful reads. Highly recommend!", image: "image/non5.jpeg" }
    ],
    science: [
        { title: "Book 1", author: "Author F", description: "A fascinating selection of science books! They make complex topics easy to understand.", image: "image/sci1.jpeg" },
        { title: "Book 2", author: "Author G", description: "Perfect for anyone curious about the natural world. I learn something new with each book!", image: "image/sci2.jpeg" },
        { title: "Book 3", author: "Author H", description: "Impressive range of topics, from physics to biology – a science lover’s dream!", image: "image/sci3.jpeg" },
        { title: "Book 4", author: "Author I", description: "These books make science both accessible and thrilling. Highly recommended!", image: "image/sci4.jpeg" },
        { title: "Book 5", author: "Author J", description: "Bought a few for my personal library, and they’re all incredibly enlightening!", image: "image/sci5.jpeg" }
    ],
    history: [
        { title: "Book 1", author: "Author F", description: "Richly detailed and well-researched history books. Great for learning!", image: "image/his1.jpeg" },
        { title: "Book 2", author: "Author G", description: "The history section has everything from ancient times to modern events – love it!", image: "image/his2.jpeg" },
        { title: "Book 3", author: "Author H", description: "These books bring history to life. I feel like I’m stepping into the past.", image: "image/his3.jpeg" },
        { title: "Book 4", author: "Author I", description: "So much to learn from each book. History enthusiasts will love this collection!", image: "image/his4.jpeg" },
        { title: "Book 5", author: "Author J", description: "Fascinating historical insights in every book. A fantastic range of topics covered!", image: "image/his5.jpeg" }
    ],
    kids: [
        { title: "Book 1", author: "Author K", description: "Wonderful collection for kids! My little ones love every book we’ve bought.", image: "image/kids1.jpeg" },
        { title: "Book 2", author: "Author L", description: "Full of delightful stories and colorful illustrations – perfect for young readers!", image: "image/kids2.jpeg" },
        { title: "Book 3", author: "Author M", description: "Engaging and educational books for children. Perfect for bedtime stories!", image: "image/kids3.jpeg" },
        { title: "Book 4", author: "Author N", description: "These books spark creativity and curiosity in kids. A great variety available!", image: "image/kids4.jpeg" },
        { title: "Book 5", author: "Author O", description: "My kids can’t get enough! The stories are captivating and fun.", image: "image/kids5.jpeg" }
    ],
    romance: [
        { title: "Book 1", author: "Author K", description: "Heartwarming collection! These books are perfect for romance lovers.", image: "image/rom1.jpeg" },
        { title: "Book 2", author: "Author L", description: "Every story pulls at the heartstrings. Beautiful and memorable reads!", image: "image/rom2.jpeg" },
        { title: "Book 3", author: "Author M", description: "The romance section is full of charming love stories. I keep coming back for more!", image: "image/rom3.jpeg" },
        { title: "Book 4", author: "Author N", description: "Great mix of lighthearted and deep romance novels – something for every mood!", image: "image/rom4.jpeg" },
        { title: "Book 5", author: "Author O", description: "I found my new favorite romance novel here! Can’t wait to read more.", image: "image/rom5.jpeg" }
    ],
    thriller: [
        { title: "Book 1", author: "Author P", description: "Edge-of-your-seat thrillers! I can never put these down until I’m done.", image: "image/thr1.jpeg" },
        { title: "Book 2", author: "Author Q", description: "If you love suspense, this collection is incredible – twists and turns everywhere!", image: "image/thr2.jpeg" },
        { title: "Book 3", author: "Author R", description: "Perfect for thriller fans. Every book is packed with excitement and mystery.", image: "image/thr3.jpeg" },
        { title: "Book 4", author: "Author S", description: "A nail-biting selection of thrillers. I love the suspense in each story!", image: "image/thr4.jpeg" },
        { title: "Book 5", author: "Author T", description: "Each book keeps me guessing until the end. Fantastic thrillers here!", image: "image/thr5.jpeg" }
    ]
};

function showBooks(category) {
    const booksContainer = document.getElementById("books");
    booksContainer.innerHTML = "";
    const books = booksData[category] || [];
    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.className = "book-item";
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title} cover" class="book-image">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p>${book.description}</p>
        `;
        booksContainer.appendChild(bookItem);
    });
}

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function login() {
    const username = document.getElementById("username").value;
    alert(`Logged in as ${username}`);
    closeModal();
}

function signUp() {
    const username = document.getElementById("username").value;
    alert(`Account created for ${username}`);
    closeModal();
}
