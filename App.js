import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  primary: '#667eea',
  secondary: '#764ba2',
  accent: '#f093fb',
  white: '#fff',
  lightGray: '#f9f9f9',
  darkGray: '#2a2a2a',
  text: '#333',
  lightText: '#e0e0e0',
};

export default function HarmonyApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const colors = darkMode 
    ? { ...COLORS, bg: COLORS.darkGray, text: COLORS.lightText } 
    : { ...COLORS, bg: COLORS.lightGray, text: COLORS.text };

  // Data
  const artists = [
    { id: 1, name: 'Luna Echo', genre: 'Indie Pop', followers: '2.4M', icon: '🎤', bio: 'Luna Echo creates ethereal indie pop with deep emotional resonance.' },
    { id: 2, name: 'The Synth Wave', genre: 'Electronic', followers: '1.8M', icon: '🎹', bio: 'Electronic music pioneers blending retro synth with modern beats.' },
    { id: 3, name: 'Jazz Collective', genre: 'Jazz & Blues', followers: '950K', icon: '🎷', bio: 'Contemporary jazz ensemble pushing boundaries of the genre.' },
    { id: 4, name: 'Soul Vibes', genre: 'R&B & Soul', followers: '3.2M', icon: '🎸', bio: 'Soulful melodies with powerful vocals and rich instrumentation.' },
  ];

  const tracks = [
    { id: 1, title: 'Midnight Dreams', artist: 'Luna Echo', duration: 225, plays: '5.2M', rating: 4.8 },
    { id: 2, title: 'Neon Nights', artist: 'The Synth Wave', duration: 252, plays: '3.1M', rating: 4.6 },
    { id: 3, title: 'Blue Saturday', artist: 'Jazz Collective', duration: 320, plays: '1.8M', rating: 4.9 },
    { id: 4, title: 'Golden Hour', artist: 'Soul Vibes', duration: 245, plays: '4.5M', rating: 4.7 },
  ];

  const events = [
    { id: 1, title: 'Luna Echo Live', date: '2024-08-15', location: 'Madison Square Garden, NYC', price: '$89', icon: '🎤' },
    { id: 2, title: 'Electronic Festival', date: '2024-08-22', location: 'Desert Valley, Nevada', price: '$120', icon: '🎧' },
    { id: 3, title: 'Jazz Night', date: '2024-09-05', location: 'Blue Note Jazz Club, LA', price: '$65', icon: '🎷' },
  ];

  const shop = [
    { id: 1, name: 'Harmony T-Shirt', price: '$29.99', icon: '👕' },
    { id: 2, name: 'Artist Hoodie', price: '$59.99', icon: '🧥' },
    { id: 3, name: 'Vinyl Records', price: '$39.99', icon: '💿' },
    { id: 4, name: 'Concert Tickets', price: '$199.99', icon: '🎟️' },
  ];

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFavorite = (trackId) => {
    if (favorites.includes(trackId)) {
      setFavorites(favorites.filter(id => id !== trackId));
    } else {
      setFavorites([...favorites, trackId]);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`✓ Added "${product.name}" to cart!`);
  };

  // Home Tab
  const HomeTab = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      <View style={[styles.heroSection, { backgroundColor: COLORS.primary }]}>
        <Text style={styles.heroTitle}>🎵 Harmony</Text>
        <Text style={styles.heroSubtitle}>Your Music Hub</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Explore Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Featured Artists</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.artistScroll}>
          {artists.map(artist => (
            <TouchableOpacity
              key={artist.id}
              style={[styles.artistCard, { backgroundColor: colors.bg }]}
              onPress={() => setSelectedArtist(artist)}
            >
              <Text style={styles.artistIcon}>{artist.icon}</Text>
              <Text style={[styles.artistName, { color: colors.text }]}>{artist.name}</Text>
              <Text style={styles.artistGenre}>{artist.genre}</Text>
              <Text style={styles.artistFollowers}>{artist.followers}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Popular Tracks</Text>
        {tracks.slice(0, 3).map((track, index) => (
          <TouchableOpacity
            key={track.id}
            style={[styles.trackCard, { backgroundColor: colors.bg }]}
            onPress={() => setCurrentTrack(index)}
          >
            <View style={styles.trackNumber}>
              <Text style={styles.trackNumText}>{index + 1}</Text>
            </View>
            <View style={styles.trackInfo}>
              <Text style={[styles.trackTitle, { color: colors.text }]}>{track.title}</Text>
              <Text style={styles.trackArtist}>{track.artist}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleFavorite(track.id)}>
              <Text style={styles.favoriteIcon}>{favorites.includes(track.id) ? '❤️' : '🤍'}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  // Player Tab
  const PlayerTab = () => (
    <View style={[styles.playerContainer, { backgroundColor: darkMode ? COLORS.darkGray : COLORS.white }]}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 100 }}>
        <View style={styles.albumCoverContainer}>
          <View style={styles.albumCover}>
            <Text style={styles.albumIcon}>🎵</Text>
          </View>
        </View>

        <View style={styles.playerInfo}>
          <Text style={[styles.nowPlayingTitle, { color: colors.text }]}>
            {tracks[currentTrack].title}
          </Text>
          <Text style={styles.nowPlayingArtist}>{tracks[currentTrack].artist}</Text>

          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '45%' }]} />
            </View>
            <View style={styles.timeDisplay}>
              <Text style={styles.timeText}>0:00</Text>
              <Text style={styles.timeText}>{formatTime(tracks[currentTrack].duration)}</Text>
            </View>
          </View>

          <View style={styles.playerControls}>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="play-skip-back" size={30} color={COLORS.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.playButton, { backgroundColor: COLORS.primary }]}
              onPress={() => setIsPlaying(!isPlaying)}
            >
              <Ionicons name={isPlaying ? "pause" : "play"} size={40} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="play-skip-forward" size={30} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          <View style={styles.volumeControl}>
            <Text style={styles.volumeIcon}>🔊</Text>
            <View style={styles.volumeSlider} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Up Next</Text>
          {tracks.map((track, index) => (
            <TouchableOpacity
              key={track.id}
              style={[styles.trackCard, { backgroundColor: colors.bg }]}
              onPress={() => setCurrentTrack(index)}
            >
              <Text style={styles.trackNumText}>{index + 1}</Text>
              <View style={styles.trackInfo}>
                <Text style={[styles.trackTitle, { color: colors.text }]}>{track.title}</Text>
                <Text style={styles.trackArtist}>{track.artist}</Text>
              </View>
              <Text style={styles.trackDuration}>{formatTime(track.duration)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );

  // Events Tab
  const EventsTab = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>🎪 Upcoming Events</Text>
      {events.map(event => (
        <View key={event.id} style={[styles.eventCard, { backgroundColor: colors.bg }]}>
          <Text style={styles.eventIcon}>{event.icon}</Text>
          <View style={styles.eventInfo}>
            <Text style={[styles.eventTitle, { color: colors.text }]}>{event.title}</Text>
            <Text style={styles.eventDate}>📅 {event.date}</Text>
            <Text style={styles.eventLocation}>📍 {event.location}</Text>
          </View>
          <TouchableOpacity style={[styles.eventButton, { backgroundColor: COLORS.primary }]}>
            <Text style={styles.eventButtonText}>{event.price}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );

  // Shop Tab
  const ShopTab = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>🛍️ Merchandise</Text>
      {shop.map(product => (
        <View key={product.id} style={[styles.shopCard, { backgroundColor: colors.bg }]}>
          <Text style={styles.productIcon}>{product.icon}</Text>
          <View style={styles.productInfo}>
            <Text style={[styles.productName, { color: colors.text }]}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: COLORS.primary }]}
            onPress={() => addToCart(product)}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}
      {cart.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>🛒 Checkout ({cart.length})</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );

  // Search Tab
  const SearchTab = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      <View style={[styles.searchInputContainer, { backgroundColor: colors.bg }]}>
        <Ionicons name="search" size={20} color={COLORS.primary} />
        <TextInput
          style={[styles.searchInput, { color: colors.text }]}
          placeholder="Search artists, songs..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {searchQuery && (
        <View>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Search Results</Text>
          {artists.filter(a => a.name.toLowerCase().includes(searchQuery.toLowerCase())).map(artist => (
            <TouchableOpacity
              key={artist.id}
              style={[styles.trackCard, { backgroundColor: colors.bg }]}
              onPress={() => setSelectedArtist(artist)}
            >
              <Text style={styles.artistIcon}>{artist.icon}</Text>
              <View style={styles.trackInfo}>
                <Text style={[styles.trackTitle, { color: colors.text }]}>{artist.name}</Text>
                <Text style={styles.trackArtist}>{artist.genre}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {!searchQuery && (
        <>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>❤️ Your Favorites</Text>
          {favorites.length > 0 ? (
            tracks.filter(t => favorites.includes(t.id)).map((track) => (
              <TouchableOpacity
                key={track.id}
                style={[styles.trackCard, { backgroundColor: colors.bg }]}
              >
                <Text style={styles.trackNumText}>❤️</Text>
                <View style={styles.trackInfo}>
                  <Text style={[styles.trackTitle, { color: colors.text }]}>{track.title}</Text>
                  <Text style={styles.trackArtist}>{track.artist}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={[styles.noFavoritesText, { color: colors.text }]}>No favorites yet. Add some!</Text>
          )}
        </>
      )}
    </ScrollView>
  );

  // Artist Modal
  const ArtistModal = () => (
    <Modal
      visible={!!selectedArtist}
      transparent
      animationType="slide"
      onRequestClose={() => setSelectedArtist(null)}
    >
      <SafeAreaView style={[styles.modalContainer, { backgroundColor: darkMode ? COLORS.darkGray : COLORS.white }]}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={() => setSelectedArtist(null)}>
            <Ionicons name="close" size={30} color={COLORS.primary} />
          </TouchableOpacity>
          <Text style={[styles.modalTitle, { color: colors.text }]}>Artist Profile</Text>
          <View style={{ width: 30 }} />
        </View>

        <ScrollView style={styles.modalContent}>
          <View style={styles.artistProfileContainer}>
            <Text style={styles.artistProfileIcon}>{selectedArtist?.icon}</Text>
            <Text style={[styles.artistProfileName, { color: colors.text }]}>{selectedArtist?.name}</Text>
            <Text style={styles.artistProfileGenre}>{selectedArtist?.genre}</Text>
            <Text style={styles.artistProfileFollowers}>{selectedArtist?.followers} followers</Text>
            <Text style={[styles.artistProfileBio, { color: colors.text }]}>{selectedArtist?.bio}</Text>

            <TouchableOpacity style={[styles.followButton, { backgroundColor: COLORS.primary }]}>
              <Text style={styles.followButtonText}>Follow Artist</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.followButton, { backgroundColor: COLORS.secondary }]}>
              <Text style={styles.followButtonText}>Listen on Spotify</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: darkMode ? COLORS.darkGray : COLORS.white }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: COLORS.primary }]}>
        <Text style={styles.headerTitle}>🎵 Harmony</Text>
        <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
          <Text style={styles.themeToggle}>{darkMode ? '☀️' : '🌙'}</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === 'home' && <HomeTab />}
      {activeTab === 'player' && <PlayerTab />}
      {activeTab === 'events' && <EventsTab />}
      {activeTab === 'shop' && <ShopTab />}
      {activeTab === 'search' && <SearchTab />}

      {/* Bottom Navigation */}
      <View style={[styles.bottomNav, { backgroundColor: COLORS.primary }]}>
        <TouchableOpacity
          style={[styles.navItem, activeTab === 'home' && styles.navItemActive]}
          onPress={() => setActiveTab('home')}
        >
          <Ionicons name="home" size={24} color={activeTab === 'home' ? COLORS.white : 'rgba(255,255,255,0.6)'} />
          <Text style={[styles.navLabel, activeTab === 'home' && styles.navLabelActive]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === 'player' && styles.navItemActive]}
          onPress={() => setActiveTab('player')}
        >
          <Ionicons name="play-circle" size={24} color={activeTab === 'player' ? COLORS.white : 'rgba(255,255,255,0.6)'} />
          <Text style={[styles.navLabel, activeTab === 'player' && styles.navLabelActive]}>Player</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === 'events' && styles.navItemActive]}
          onPress={() => setActiveTab('events')}
        >
          <Ionicons name="calendar" size={24} color={activeTab === 'events' ? COLORS.white : 'rgba(255,255,255,0.6)'} />
          <Text style={[styles.navLabel, activeTab === 'events' && styles.navLabelActive]}>Events</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === 'search' && styles.navItemActive]}
          onPress={() => setActiveTab('search')}
        >
          <Ionicons name="search" size={24} color={activeTab === 'search' ? COLORS.white : 'rgba(255,255,255,0.6)'} />
          <Text style={[styles.navLabel, activeTab === 'search' && styles.navLabelActive]}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === 'shop' && styles.navItemActive]}
          onPress={() => setActiveTab('shop')}
        >
          <Ionicons name="bag" size={24} color={activeTab === 'shop' ? COLORS.white : 'rgba(255,255,255,0.6)'} />
          <Text style={[styles.navLabel, activeTab === 'shop' && styles.navLabelActive]}>Shop</Text>
          {cart.length > 0 && <View style={styles.badge}><Text style={styles.badgeText}>{cart.length}</Text></View>}
        </TouchableOpacity>
      </View>

      {/* Artist Modal */}
      <ArtistModal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  themeToggle: {
    fontSize: 24,
  },
  tabContent: {
    flex: 1,
    padding: 16,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  heroSection: {
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  artistScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  artistCard: {
    width: 140,
    marginRight: 12,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  artistIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  artistName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  artistGenre: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  artistFollowers: {
    fontSize: 11,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  trackCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  trackNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  trackNumText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  trackArtist: {
    fontSize: 12,
    color: '#999',
  },
  favoriteIcon: {
    fontSize: 20,
    marginLeft: 12,
  },
  trackDuration: {
    fontSize: 12,
    color: '#999',
    marginLeft: 12,
  },
  playerContainer: {
    flex: 1,
  },
  albumCoverContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  albumCover: {
    width: 280,
    height: 280,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  albumIcon: {
    fontSize: 120,
  },
  playerInfo: {
    paddingHorizontal: 20,
  },
  nowPlayingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  nowPlayingArtist: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginBottom: 24,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progress: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  timeDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    gap: 40,
  },
  controlButton: {
    padding: 12,
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  volumeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
  },
  volumeIcon: {
    fontSize: 20,
  },
  volumeSlider: {
    flex: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  eventIcon: {
    fontSize: 36,
    marginRight: 12,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 12,
    color: '#999',
    marginBottom: 2,
  },
  eventLocation: {
    fontSize: 12,
    color: '#999',
  },
  eventButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  eventButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
  shopCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productIcon: {
    fontSize: 36,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  addButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  checkoutText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 14,
  },
  noFavoritesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.secondary,
    paddingBottom: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
  },
  navLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
    marginTop: 4,
  },
  navLabelActive: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: 0,
    backgroundColor: COLORS.accent,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  artistProfileContainer: {
    alignItems: 'center',
  },
  artistProfileIcon: {
    fontSize: 80,
    marginBottom: 16,
  },
  artistProfileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  artistProfileGenre: {
    fontSize: 16,
    color: COLORS.primary,
    marginBottom: 8,
  },
  artistProfileFollowers: {
    fontSize: 14,
    color: '#999',
    marginBottom: 16,
  },
  artistProfileBio: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 24,
  },
  followButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  followButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
