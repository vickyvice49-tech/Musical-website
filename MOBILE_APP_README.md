# 📱 Harmony Mobile App - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Expo CLI installed globally

### Installation

1. **Clone or navigate to the project**
```bash
cd musical-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the app**
```bash
npm start
# or
yarn start
```

### Running on Different Platforms

**iOS Simulator**
```bash
npm run ios
```

**Android Emulator**
```bash
npm run android
```

**Web Browser**
```bash
npm run web
```

---

## 📲 App Features

### 🏠 Home Tab
- Featured artists carousel
- Popular tracks preview
- Quick access to all features
- Hero section with call-to-action

### 🎵 Player Tab
- Beautiful album cover display
- Full playback controls (play, pause, skip)
- Progress bar with seek functionality
- Time display and duration
- Volume control
- Up Next queue

### 🎪 Events Tab
- Upcoming concerts and events
- Event details (date, location, artist)
- Quick ticket booking
- Event filtering

### 🛍️ Shop Tab
- Official merchandise store
- Product browsing
- Add to cart functionality
- Checkout button
- Cart counter badge

### 🔍 Search Tab
- Search artists and songs
- Favorites management
- Quick access to liked tracks
- Real-time filtering

### 🌙 Dark Mode
- Toggle dark/light theme
- Persistent theme storage
- Smooth transitions

---

## 🎨 Customization

### Change Colors
Edit the `COLORS` object in `App.js`:
```javascript
const COLORS = {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#f093fb',
  // ... other colors
};
```

### Add New Artists
Modify the `artists` array in `App.js`:
```javascript
const artists = [
  { id: 1, name: 'Artist Name', genre: 'Genre', followers: '2.4M', icon: '🎤', bio: 'Biography' },
  // Add more artists
];
```

### Add New Tracks
Update the `tracks` array:
```javascript
const tracks = [
  { id: 1, title: 'Song Title', artist: 'Artist', duration: 225, plays: '5.2M', rating: 4.8 },
  // Add more tracks
];
```

---

## 📦 Building for Production

### Build for iOS
```bash
npm run build-ios
```

### Build for Android
```bash
npm run build-android
```

### Build for Web
```bash
npm run build-web
```

---

## 🔧 Project Structure

```
harmony-music-app/
├── App.js                 # Main app component
├── app.json              # Expo configuration
├── package.json          # Dependencies
├── assets/               # Images and icons
│   ├── icon.png
│   ├── splash.png
│   └── adaptive-icon.png
└── README.md            # This file
```

---

## 📱 App Navigation

The app uses a bottom tab navigation with 5 main tabs:

1. **Home** - Discovery and featured content
2. **Player** - Music playback interface
3. **Events** - Upcoming events and tickets
4. **Search** - Search and favorites
5. **Shop** - Merchandise and products

---

## 🎯 Key Components

### State Management
- `darkMode` - Theme toggle
- `activeTab` - Current selected tab
- `isPlaying` - Playback status
- `currentTrack` - Currently playing track
- `favorites` - User's favorite tracks
- `cart` - Shopping cart items
- `searchQuery` - Search input
- `selectedArtist` - Selected artist for modal

### Functionality
- Play/Pause music
- Add to favorites
- Add to cart
- Search artists
- View artist profiles
- Dark mode toggle
- Event booking
- Product purchasing

---

## 🌟 Features Included

✅ 5-tab navigation interface  
✅ Music player with controls  
✅ Artist profiles and information  
✅ Event booking system  
✅ Merchandise shop  
✅ Search functionality  
✅ Favorites management  
✅ Shopping cart  
✅ Dark/Light theme toggle  
✅ Modal dialogs  
✅ Responsive design  
✅ Beautiful animations  
✅ Professional UI/UX  

---

## 📚 API Integration (Future)

To connect real data, replace the hardcoded arrays with API calls:

```javascript
useEffect(() => {
  const fetchArtists = async () => {
    const response = await fetch('YOUR_API_URL/artists');
    const data = await response.json();
    // Update state with data
  };
  fetchArtists();
}, []);
```

---

## 🐛 Troubleshooting

**App won't start**
- Clear cache: `expo start -c`
- Clear node_modules: `rm -rf node_modules && npm install`

**Icons not showing**
- Ensure Expo Vector Icons is properly installed
- Rebuild the app: `expo start --clean`

**Dark mode not persisting**
- Install AsyncStorage: `expo install @react-native-async-storage/async-storage`
- Implement localStorage in useEffect

---

## 📞 Support

For issues or questions:
1. Check the Expo documentation: https://docs.expo.dev
2. Visit React Native docs: https://reactnative.dev
3. Check GitHub issues in the project repo

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🎉 You're All Set!

Your Harmony music app is ready to run! Start by running `npm start` and enjoy building your music platform! 🎵
