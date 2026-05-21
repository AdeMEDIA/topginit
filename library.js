// ==================== LIBRARY DATABASE ====================
// Books organized by category

const libraryBooks = {
    educational: [
        { 
            title: "Ikigai", 
            author: "Hector Garcia & Francesc Miralles", 
            description: "The Japanese secret to a long and happy life. Discover your purpose and find joy in everyday living.",
            status: "available",
            icon: "🇯🇵"
        },
        { 
            title: "Think and Grow Rich", 
            author: "Napoleon Hill", 
            description: "Classic masterpiece on wealth building and personal achievement based on 13 principles of success.",
            status: "available",
            icon: "💰"
        },
        { 
            title: "The Richest Man in Babylon", 
            author: "George S. Clason", 
            description: "Timeless financial wisdom through parables set in ancient Babylon. Learn the secrets to building wealth.",
            status: "available",
            icon: "🏛️"
        },
        { 
            title: "Psychology of Money", 
            author: "Morgan Housel", 
            description: "Explores the strange ways people think about money and how to make better financial decisions.",
            status: "available",
            icon: "🧠"
        },
        { 
            title: "Mindset: The New Psychology of Success", 
            author: "Carol S. Dweck", 
            description: "How changing your mindset from fixed to growth can transform your success in every area of life.",
            status: "available",
            icon: "🌱"
        },
        { 
            title: "Strengths Finder 2.0", 
            author: "Tom Rath", 
            description: "Discover your top 5 strengths and learn how to maximize your potential using them.",
            status: "available",
            icon: "💪"
        },
        { 
            title: "The Art of War", 
            author: "Sun Tzu", 
            description: "Ancient Chinese military treatise on strategy, tactics, and leadership applicable to business and life.",
            status: "available",
            icon: "⚔️"
        },
        { 
            title: "How to Win Friends and Influence People", 
            author: "Dale Carnegie", 
            description: "Timeless guide to building relationships, communicating effectively, and leading others.",
            status: "available",
            icon: "🤝"
        },
        { 
            title: "Choose to Make a Difference", 
            author: "Various", 
            description: "Inspirational stories and strategies for creating positive change in your community and world.",
            status: "available",
            icon: "🌟"
        }
    ],
    
    selfDevelopment: [
        { 
            title: "How to Lead When You're Not in Charge", 
            author: "Clay Scroggins", 
            description: "Learn to exercise leadership influence from any position in an organization, even without formal authority.",
            status: "available",
            icon: "👑"
        },
        { 
            title: "The 48 Laws of Money", 
            author: "Various", 
            description: "Essential principles and laws for financial success, wealth building, and money management.",
            status: "available",
            icon: "💵"
        },
        { 
            title: "How to Finish Everything You Start", 
            author: "Jon Acuff", 
            description: "Practical strategies to overcome the cycle of starting projects and never completing them.",
            status: "available",
            icon: "🏁"
        },
        { 
            title: "Your Next Five Moves", 
            author: "Patrick Bet-David", 
            description: "Strategic thinking framework to anticipate challenges and plan your next career and life moves.",
            status: "available",
            icon: "♟️"
        },
        { 
            title: "The Subtle Art of Not Giving a F*ck", 
            author: "Mark Manson", 
            description: "Counterintuitive approach to living a good life by focusing on what truly matters.",
            status: "available",
            icon: "🎯"
        },
        { 
            title: "Trading in the Zone", 
            author: "Mark Douglas", 
            description: "Psychological aspects of trading and how to develop the right mindset for consistent success.",
            status: "available",
            icon: "📈"
        },
        { 
            title: "The Art of Laziness", 
            author: "Various", 
            description: "Smart productivity techniques that help you achieve more by working less and working smarter.",
            status: "available",
            icon: "😴"
        },
        { 
            title: "Steal Like an Artist", 
            author: "Austin Kleon", 
            description: "Creative manifesto on how to find inspiration, develop your voice, and make art by learning from others.",
            status: "available",
            icon: "🎨"
        },
        { 
            title: "The Monk Who Sold His Ferrari", 
            author: "Robin Sharma", 
            description: "Fable about finding your purpose, living with passion, and achieving personal excellence.",
            status: "available",
            icon: "🧘"
        }
    ],
    
    otherGenres: [
        { 
            title: "The Alchemist", 
            author: "Paulo Coelho", 
            description: "A shepherd boy's journey to find treasure teaches profound lessons about following your dreams and listening to your heart.",
            status: "available",
            icon: "🏜️"
        },
        { 
            title: "Only Big Bum Bum Matters Tomorrow", 
            author: "Damilare Kuku", 
            description: "Funny and poignant stories about body image, self-acceptance, and navigating modern relationships.",
            status: "available",
            icon: "💃"
        },
        { 
            title: "Nearly All the Men in Lagos Are Mad", 
            author: "Damilare Kuku", 
            description: "Collection of short stories exploring dating, relationships, and heartbreak in Lagos.",
            status: "available",
            icon: "💔"
        },
        { 
            title: "The Way of the Superior Man", 
            author: "David Deida", 
            description: "Guide to masculine spirituality, relationships, and living with purpose and integrity.",
            status: "available",
            icon: "👨"
        }
    ]
};

// ==================== RENDER BOOKS ====================
function renderBooks() {
    renderEducationalBooks();
    renderSelfDevBooks();
    renderOtherBooks();
}

function renderEducationalBooks() {
    const container = document.getElementById('educationalGrid');
    if (!container) return;
    
    container.innerHTML = libraryBooks.educational.map(book => `
        <div class="book-card">
            <div class="book-cover">
                <div class="book-icon">${book.icon}</div>
                <span class="book-badge">Educational</span>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <p class="book-description">${book.description}</p>
                <div class="book-footer">
                    <span class="book-status available">✓ Available</span>
                    <button class="reserve-btn" onclick="openReservationModalWithTitle('${book.title.replace(/'/g, "\\'")}')">Reserve</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSelfDevBooks() {
    const container = document.getElementById('selfDevGrid');
    if (!container) return;
    
    container.innerHTML = libraryBooks.selfDevelopment.map(book => `
        <div class="book-card">
            <div class="book-cover">
                <div class="book-icon">${book.icon}</div>
                <span class="book-badge">Self Development</span>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <p class="book-description">${book.description}</p>
                <div class="book-footer">
                    <span class="book-status available">✓ Available</span>
                    <button class="reserve-btn" onclick="openReservationModalWithTitle('${book.title.replace(/'/g, "\\'")}')">Reserve</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderOtherBooks() {
    const container = document.getElementById('otherGrid');
    if (!container) return;
    
    container.innerHTML = libraryBooks.otherGenres.map(book => `
        <div class="book-card">
            <div class="book-cover">
                <div class="book-icon">${book.icon}</div>
                <span class="book-badge">Fiction & More</span>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <p class="book-description">${book.description}</p>
                <div class="book-footer">
                    <span class="book-status available">✓ Available</span>
                    <button class="reserve-btn" onclick="openReservationModalWithTitle('${book.title.replace(/'/g, "\\'")}')">Reserve</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== RESERVATION MODAL ====================
function openReservationModal() {
    const modal = document.getElementById('reservationModal');
    if (modal) {
        modal.style.display = 'flex';
        document.getElementById('bookTitle').value = '';
        document.getElementById('userName').value = '';
        document.getElementById('bookAuthor').value = '';
        document.getElementById('bookNotes').value = '';
    }
}

function openReservationModalWithTitle(bookTitle) {
    const modal = document.getElementById('reservationModal');
    if (modal) {
        modal.style.display = 'flex';
        document.getElementById('bookTitle').value = bookTitle;
        document.getElementById('userName').value = '';
        document.getElementById('bookAuthor').value = '';
        document.getElementById('bookNotes').value = '';
    }
}

function closeReservationModal() {
    const modal = document.getElementById('reservationModal');
    if (modal) modal.style.display = 'none';
}

// ==================== SEND REQUESTS ====================
function sendEmailRequest() {
    const name = document.getElementById('userName').value.trim();
    const bookTitle = document.getElementById('bookTitle').value.trim();
    const bookAuthor = document.getElementById('bookAuthor').value.trim();
    const notes = document.getElementById('bookNotes').value.trim();
    
    if (!name || !bookTitle) {
        showToast('Please enter your name and the book title', 'error');
        return;
    }
    
    const subject = `Book Reservation Request: ${bookTitle}`;
    const body = `Name: ${name}%0A%0ABook Title: ${bookTitle}%0AAuthor: ${bookAuthor || 'Not specified'}%0A%0AAdditional Notes:%0A${notes || 'None'}%0A%0A---%0ASent from TopG Library`;
    
    window.location.href = `mailto:topglibrary@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    showToast('Opening email app...', 'success');
    closeReservationModal();
}

function sendWhatsAppRequest() {
    const name = document.getElementById('userName').value.trim();
    const bookTitle = document.getElementById('bookTitle').value.trim();
    const bookAuthor = document.getElementById('bookAuthor').value.trim();
    const notes = document.getElementById('bookNotes').value.trim();
    
    if (!name || !bookTitle) {
        showToast('Please enter your name and the book title', 'error');
        return;
    }
    
    // Replace with your WhatsApp number
    const phoneNumber = '234XXXXXXXXXX'; // Change this to your actual WhatsApp number
    const message = `Hello! I'd like to request a book.%0A%0A📚 Name: ${name}%0A📖 Book: ${bookTitle}%0A✍️ Author: ${bookAuthor || 'Not specified'}%0A📝 Notes: ${notes || 'None'}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    showToast('Opening WhatsApp...', 'success');
    closeReservationModal();
}

// ==================== TOAST NOTIFICATION ====================
function showToast(message, type) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// ==================== CLOSE MODAL ON OUTSIDE CLICK ====================
document.addEventListener('click', function(event) {
    const modal = document.getElementById('reservationModal');
    if (event.target === modal) {
        closeReservationModal();
    }
});

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    renderBooks();
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeReservationModal();
        }
    });
});