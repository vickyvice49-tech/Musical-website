// ============ EXTENDED DATA ============

const artists = [
    { id: 1, name: 'Luna Echo', genre: 'Indie Pop', color: '#667eea', image: '🎤', bio: 'Luna Echo creates ethereal indie pop with deep emotional resonance.', followers: '2.4M', verified: true },
    { id: 2, name: 'The Synth Wave', genre: 'Electronic', color: '#f093fb', image: '🎹', bio: 'Electronic music pioneers blending retro synth with modern beats.', followers: '1.8M', verified: true },
    { id: 3, name: 'Jazz Collective', genre: 'Jazz & Blues', color: '#4facfe', image: '🎷', bio: 'Contemporary jazz ensemble pushing boundaries of the genre.', followers: '950K', verified: false },
    { id: 4, name: 'Soul Vibes', genre: 'R&B & Soul', color: '#fa709a', image: '🎸', bio: 'Soulful melodies with powerful vocals and rich instrumentation.', followers: '3.2M', verified: true },
    { id: 5, name: 'Aurora Dreams', genre: 'Pop', color: '#23d5ab', image: '🎤', bio: 'Pop sensation known for catchy hooks and meaningful lyrics.', followers: '4.1M', verified: true },
    { id: 6, name: 'Cosmic Beats', genre: 'Hip-Hop', color: '#ee7752', image: '🎧', bio: 'Hip-hop artists creating socially conscious music with fire beats.', followers: '2.7M', verified: true }
];

const tracks = [
    { id: 1, title: 'Midnight Dreams', artist: 'Luna Echo', duration: 225, plays: '5.2M', rating: 4.8, favorite: false },
    { id: 2, title: 'Neon Nights', artist: 'The Synth Wave', duration: 252, plays: '3.1M', rating: 4.6, favorite: false },
    { id: 3, title: 'Blue Saturday', artist: 'Jazz Collective', duration: 320, plays: '1.8M', rating: 4.9, favorite: false },
    { id: 4, title: 'Golden Hour', artist: 'Soul Vibes', duration: 245, plays: '4.5M', rating: 4.7, favorite: false },
    { id: 5, title: 'Electric Paradise', artist: 'The Synth Wave', duration: 238, plays: '2.9M', rating: 4.5, favorite: false },
    { id: 6, title: 'Stellar Journey', artist: 'Aurora Dreams', duration: 210, plays: '6.1M', rating: 4.9, favorite: false },
    { id: 7, title: 'Cosmic Flow', artist: 'Cosmic Beats', duration: 280, plays: '3.4M', rating: 4.7, favorite: false },
    { id: 8, title: 'Ethereal Nights', artist: 'Luna Echo', duration: 265, plays: '2.8M', rating: 4.8, favorite: false }
];

const events = [
    { id: 1, title: 'Luna Echo Live Concert', date: '2024-08-15', location: 'Madison Square Garden, NYC', artists: ['Luna Echo'], price: '$89', image: '🎤' },
    { id: 2, title: 'Electronic Music Festival', date: '2024-08-22', location: 'Desert Valley, Nevada', artists: ['The Synth Wave', 'Cosmic Beats'], price: '$120', image: '🎧' },
    { id: 3, title: 'Jazz Night Extravaganza', date: '2024-09-05', location: 'Blue Note Jazz Club, LA', artists: ['Jazz Collective'], price: '$65', image: '🎷' },
    { id: 4, title: 'Soul & R&B Showcase', date: '2024-09-12', location: 'The Fillmore, SF', artists: ['Soul Vibes', 'Aurora Dreams'], price: '$75', image: '🎸' },
    { id: 5, title: 'Summer Music Festival', date: '2024-08-30', location: 'Central Park, NYC', artists: ['Luna Echo', 'Aurora Dreams', 'Cosmic Beats'], price: 'Free', image: '🎵' }
];

const blogPosts = [
    { id: 1, title: 'Top 10 Indie Pop Artists to Watch in 2024', date: '2024-07-01', author: 'Music Critic', excerpt: 'Discover the most innovative indie pop artists shaping the music industry...', category: 'Music' },
    { id: 2, title: 'The Rise of Electronic Music in Mainstream Culture', date: '2024-06-28', author: 'Tech Correspondent', excerpt: 'How electronic music has evolved from underground to mainstream...', category: 'Trends' },
    { id: 3, title: 'Behind the Scenes: Creating the Perfect Album', date: '2024-06-25', author: 'Producer Insights', excerpt: 'Learn about the production process of award-winning albums...', category: 'Production' },
    { id: 4, title: 'Jazz Legends: A Historical Journey', date: '2024-06-20', author: 'Jazz Historian', excerpt: 'Explore the rich history and evolution of jazz music...', category: 'History' }
];

const reviews = [
    { id: 1, name: 'Sarah Johnson', rating: 5, text: 'Amazing music platform! The sound quality is incredible.', verified: true },
    { id: 2, name: 'Mike Chen', rating: 5, text: 'Best streaming service I\'ve used. Highly recommended!', verified: true },
    { id: 3, name: 'Emma Wilson', rating: 4, text: 'Great selection of artists and smooth user interface.', verified: true },
    { id: 4, name: 'John Davis', rating: 5, text: 'The animations are beautiful and the music library is massive!', verified: false }
];

const products = [
    { id: 1, name: 'Official Harmony T-Shirt', price: '$29.99', image: '👕', description: 'Premium cotton tee with Harmony logo' },
    { id: 2, name: 'Artist Merchandise Bundle', price: '$49.99', image: '📦', description: 'Limited edition bundle with all artist merch' },
    { id: 3, name: 'Vinyl Record Collection', price: '$39.99', image: '💿', description: 'High-quality vinyl records of top artists' },
    { id: 4, name: 'Harmony Hoodie', price: '$59.99', image: '🧥', description: 'Cozy hoodie perfect for music lovers' },
    { id: 5, name: 'Concert Tickets Bundle', price: '$199.99', image: '🎟️', description: 'Package deal for multiple events' },
    { id: 6, name: 'Artist Signed Poster', price: '$24.99', image: '🖼️', description: 'Signed posters from featured artists' }
];

// ============ DOM ELEMENTS ============

const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeControl = document.getElementById('volume');
const progress = document.getElementById('progress');
const progressBar = document.querySelector('.progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const themeToggle = document.getElementById('themeToggle');
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const contactForm = document.getElementById('contactForm');

// ============ PLAYER VARIABLES ============

let currentTrack = 0;
let isPlaying = false;
let currentTime = 0;
let duration = 225;
let darkMode = localStorage.getItem('darkMode') === 'true';

// ============ INITIALIZATION ============

document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
    loadArtists();
    loadPlaylist();
    loadEvents();
    loadBlog();
    loadReviews();
    loadShop();
    setupTheme();
    setupAnimations();
});

function initializeWebsite() {
    updateTrackInfo();
    setupAudioVisualizer();
    setupEventListeners();
}

// ============ THEME TOGGLE ============

function setupTheme() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
}

themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    setupTheme();
});

// ============ SEARCH FUNCTIONALITY ============

searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        searchInput.focus();
    }
});

document.getElementById('searchBtn').addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

function performSearch() {
    const query = searchInput.value.toLowerCase();
    if (query.trim() === '') return;

    alert(`Searching for: ${query}\n\nSearching across artists, songs, and events...`);
    // In a real app, this would filter and display results
}

// ============ LOAD DYNAMIC CONTENT ============

function loadArtists() {
    const grid = document.getElementById('artistsGrid');
    grid.innerHTML = artists.map((artist, index) => `
        <div class="artist-card" style="animation-delay: ${index * 0.1}s">
            <div class="artist-image" style="background: linear-gradient(135deg, ${artist.color} 0%, #${Math.floor(Math.random()*16777215).toString(16)} 100%); font-size: 4rem; display: flex; align-items: center; justify-content: center;">${artist.image}</div>
            <h3>${artist.name} ${artist.verified ? '✓' : ''}</h3>
            <p>${artist.genre}</p>
            <small>${artist.followers} followers</small>
            <p class="artist-bio">${artist.bio}</p>
            <button class="artist-btn" onclick="viewArtistProfile(${artist.id})">View Profile</button>
            <button class="share-btn" onclick="shareArtist('${artist.name}')">Share 📤</button>
        </div>
    `).join('');
}

function loadPlaylist() {
    const playlist = document.getElementById('playlistContainer');
    playlist.innerHTML = tracks.map((track, index) => `
        <div class="track" onclick="playTrack(${index})">
            <span class="track-num">${index + 1}</span>
            <span class="track-info">
                <strong>${track.title}</strong>
                <small>${track.artist} • ${track.plays} plays • ⭐ ${track.rating}</small>
            </span>
            <button class="favorite-btn" onclick="toggleFavorite(${track.id}, event)">
                ${track.favorite ? '❤️' : '🤍'}
            </button>
            <span class="track-duration">${formatTime(track.duration)}</span>
        </div>
    `).join('');
}

function loadEvents() {
    const container = document.getElementById('eventsContainer');
    container.innerHTML = events.map(event => `
        <div class="event-card">
            <div class="event-date">${event.date}</div>
            <div class="event-icon">${event.image}</div>
            <h3>${event.title}</h3>
            <p>📍 ${event.location}</p>
            <p>🎤 ${event.artists.join(', ')}</p>
            <button class="event-btn" onclick="bookEvent('${event.title}', '${event.price}')">Get Tickets - ${event.price}</button>
        </div>
    `).join('');
}

function loadBlog() {
    const container = document.getElementById('blogContainer');
    container.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <div class="blog-meta">
                <span class="blog-date">${post.date}</span>
                <span class="blog-category">${post.category}</span>
            </div>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="blog-footer">
                <small>By ${post.author}</small>
                <button class="read-more-btn" onclick="readArticle('${post.title}')">Read More →</button>
            </div>
        </div>
    `).join('');
}

function loadReviews() {
    const container = document.getElementById('reviewsContainer');
    container.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-header">
                <h4>${review.name} ${review.verified ? '✓' : ''}</h4>
                <span class="rating">${'⭐'.repeat(review.rating)}</span>
            </div>
            <p>"${review.text}"</p>
        </div>
    `).join('');
}

function loadShop() {
    const container = document.getElementById('shopContainer');
    container.innerHTML = products.map(product => `
        <div class="shop-card">
            <div class="product-icon">${product.image}</div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-footer">
                <span class="price">${product.price}</span>
                <button class="add-to-cart-btn" onclick="addToCart('${product.name}', '${product.price}')">Add to Cart 🛒</button>
            </div>
        </div>
    `).join('');
}

// ============ EVENT HANDLERS ============

function viewArtistProfile(artistId) {
    const artist = artists.find(a => a.id === artistId);
    const modal = document.getElementById('artistModal');
    const content = document.getElementById('artistProfileContent');
    
    content.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 6rem; margin-bottom: 1rem;">${artist.image}</div>
            <h2>${artist.name} ${artist.verified ? '✓' : ''}</h2>
            <p style="font-size: 1.2rem; color: #667eea;">${artist.genre}</p>
            <p>${artist.followers} followers</p>
            <p style="margin: 1rem 0; font-size: 1.1rem;">${artist.bio}</p>
            <div style="margin-top: 2rem;">
                <button class="artist-btn" onclick="alert('Following ${artist.name}!')">Follow</button>
                <button class="artist-btn" onclick="shareArtist('${artist.name}')">Share</button>
                <button class="artist-btn" onclick="alert('Listen on Spotify!')">Listen on Spotify</button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function shareArtist(name) {
    alert(`Shared ${name} with your friends!\n\nShare via:\n✓ Twitter\n✓ Facebook\n✓ Instagram\n✓ Copy Link`);
}

function bookEvent(eventTitle, price) {
    alert(`Booking ${eventTitle}\nPrice: ${price}\n\nRedirecting to ticket vendor...`);
}

function readArticle(title) {
    alert(`Reading full article:\n"${title}"\n\nOpening in new tab...`);
}

function addToCart(product, price) {
    alert(`✓ Added "${product}" (${price}) to your cart!`);
}

function toggleFavorite(trackId, event) {
    event.stopPropagation();
    const track = tracks.find(t => t.id === trackId);
    track.favorite = !track.favorite;
    loadPlaylist();
}

function playTrack(index) {
    currentTrack = index;
    updateTrackInfo();
    isPlaying = true;
    playBtn.textContent = '⏸';
    simulatePlayback();
}

// ============ PLAYER FUNCTIONS ============

function updateTrackInfo() {
    const track = tracks[currentTrack];
    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    duration = track.duration;
    durationEl.textContent = formatTime(duration);
    currentTime = 0;
    updateProgress();
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateProgress() {
    const percentage = (currentTime / duration) * 100;
    progress.style.width = percentage + '%';
    currentTimeEl.textContent = formatTime(currentTime);
}

function simulatePlayback() {
    if (isPlaying) {
        currentTime += 0.1;
        if (currentTime >= duration) {
            nextTrack();
        } else {
            updateProgress();
            setTimeout(simulatePlayback, 100);
        }
    }
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    updateTrackInfo();
    if (isPlaying) simulatePlayback();
}

// ============ EVENT LISTENERS ============

function setupEventListeners() {
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playBtn.textContent = isPlaying ? '⏸' : '▶';
        if (isPlaying) simulatePlayback();
    });

    prevBtn.addEventListener('click', () => {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        updateTrackInfo();
        if (isPlaying) simulatePlayback();
    });

    nextBtn.addEventListener('click', nextTrack);

    volumeControl.addEventListener('input', (e) => {
        console.log('Volume: ' + e.target.value + '%');
    });

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percentage = (e.clientX - rect.left) / rect.width;
        currentTime = percentage * duration;
        updateProgress();
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        alert(`Thank you ${name}! We'll contact you at ${email} soon.`);
        contactForm.reset();
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Modal close
    const modal = document.getElementById('artistModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target == modal) modal.style.display = 'none';
    });

    // Playlist filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// ============ ANIMATIONS ============

function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.artist-card, .track, .event-card, .blog-card, .shop-card').forEach(el => {
        observer.observe(el);
    });

    // Parallax scrolling
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
        }
    });
}

// ============ AUDIO VISUALIZER ============

function setupAudioVisualizer() {
    const canvas1 = document.getElementById('audioVisualizer');
    const canvas2 = document.getElementById('playerVisualizer');
    
    if (!canvas1 || !canvas2) return;

    [canvas1, canvas2].forEach(canvas => {
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const bars = 50;
            const barWidth = canvas.width / bars;

            for (let i = 0; i < bars; i++) {
                const height = Math.random() * canvas.height * 0.8;
                const x = i * barWidth;
                
                const gradient = ctx.createLinearGradient(0, canvas.height - height, 0, canvas.height);
                gradient.addColorStop(0, '#667eea');
                gradient.addColorStop(1, '#f093fb');
                
                ctx.fillStyle = gradient;
                ctx.fillRect(x + 2, canvas.height - height, barWidth - 4, height);
            }

            requestAnimationFrame(animate);
        }

        animate();
    });
}

// ============ CONSOLE MESSAGE ============

console.log('🎵 Welcome to Harmony - Your Complete Music Hub!');
console.log('✨ Features: 4K Animations, Dark Mode, Search, Events, Blog, Shop, Reviews');
console.log('🎬 All features implemented with smooth interactions!');
