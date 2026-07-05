// Music Player Functionality
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

// Playlist data
const playlist = [
    { title: 'Midnight Dreams', artist: 'Luna Echo', duration: 225 },
    { title: 'Neon Nights', artist: 'The Synth Wave', duration: 252 },
    { title: 'Blue Saturday', artist: 'Jazz Collective', duration: 320 },
    { title: 'Golden Hour', artist: 'Soul Vibes', duration: 245 },
    { title: 'Electric Paradise', artist: 'The Synth Wave', duration: 238 }
];

let currentTrack = 0;
let isPlaying = false;
let currentTime = 0;
let duration = 225;

// Update current track info
function updateTrackInfo() {
    const track = playlist[currentTrack];
    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    duration = track.duration;
    durationEl.textContent = formatTime(duration);
    currentTime = 0;
    updateProgress();
}

// Format time in mm:ss
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update progress bar
function updateProgress() {
    const percentage = (currentTime / duration) * 100;
    progress.style.width = percentage + '%';
    currentTimeEl.textContent = formatTime(currentTime);
}

// Play/Pause functionality
playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? '⏸' : '▶';
    
    if (isPlaying) {
        simulatePlayback();
    }
});

// Simulate playback (increment time)
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

// Previous track
prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    updateTrackInfo();
    if (isPlaying) simulatePlayback();
});

// Next track
nextBtn.addEventListener('click', () => {
    nextTrack();
});

function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    updateTrackInfo();
    if (isPlaying) simulatePlayback();
}

// Volume control
volumeControl.addEventListener('input', (e) => {
    console.log('Volume: ' + e.target.value + '%');
});

// Progress bar click to seek
progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    currentTime = percentage * duration;
    updateProgress();
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navMenu.style.display = navMenu.classList.contains('active') ? 'flex' : 'none';
});

// Close menu when link clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navMenu.style.display = 'none';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Track click functionality
document.querySelectorAll('.track').forEach((track, index) => {
    track.addEventListener('click', () => {
        currentTrack = index;
        updateTrackInfo();
        isPlaying = true;
        playBtn.textContent = '⏸';
        simulatePlayback();
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    e.target.reset();
});

// CTA button functionality
document.querySelector('.cta-button').addEventListener('click', () => {
    document.getElementById('artists').scrollIntoView({ behavior: 'smooth' });
});

// Scroll animations - Elements fade in when scrolled into view
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

// Observe all cards and sections
document.querySelectorAll('.artist-card, .track, .contact-form input, .contact-form textarea').forEach(el => {
    observer.observe(el);
});

// Add parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
    }

    // Parallax for player section
    const playerSection = document.querySelector('.player-section');
    if (playerSection && scrolled < window.innerHeight * 3) {
        playerSection.style.backgroundPosition = `${scrolled * 0.3}px 0px`;
    }
});

// Add particle effect on scroll
function createParticles(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '10px';
    particle.style.height = '10px';
    particle.style.background = 'linear-gradient(135deg, #667eea, #f093fb)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '10';
    particle.style.animation = `particleAnimation 0.8s ease-out forwards`;
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 800);
}

// Add particle animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes particleAnimation {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create particles on button clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createParticles(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 20);
            }, i * 50);
        }
    });
});

// Add ripple effect
function addRipple(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '0';
    ripple.style.height = '0';
    ripple.style.background = 'rgba(255, 255, 255, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = `rippleAnimation 0.6s ease-out`;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleAnimation {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

document.querySelectorAll('.artist-btn, .submit-btn, .control-btn').forEach(button => {
    button.addEventListener('click', addRipple);
});

// Mouse tracking effect for cards
const cards = document.querySelectorAll('.artist-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Add glow effect to progress bar on hover
progressBar.addEventListener('mouseenter', () => {
    progress.style.boxShadow = '0 0 20px rgba(102, 126, 234, 1)';
});

progressBar.addEventListener('mouseleave', () => {
    progress.style.boxShadow = '0 0 15px rgba(102, 126, 234, 0.6)';
});

// Increment counter for track numbers
document.querySelectorAll('.track-num').forEach((num, index) => {
    let count = 0;
    const target = index + 1;
    const interval = setInterval(() => {
        if (count < target) {
            count++;
            num.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 100);
});

// Initialize
updateTrackInfo();

console.log('🎵 Welcome to Harmony - Your Music Hub!');
console.log('🎬 4K animations enabled!');
