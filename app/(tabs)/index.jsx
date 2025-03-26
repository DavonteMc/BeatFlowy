import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import Expo Router

const { width } = Dimensions.get("window");

export default function HomePage() {
  const router = useRouter(); // Initialize the router

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Good Morning</Text>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
              }}
              style={styles.avatar}
            />
          </View>

          <View style={styles.searchContainer}>
            <Feather name="search" size={16} color="#808080" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#808080"
              editable={false}
            />
          </View>

          <View style={styles.sectionContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.hitsContainer}>
              <HitCard
                title="Chill Hits"
                image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              />
              <HitCard
                title="Top Hits"
                image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              />
              <HitCard
                title="Happy Hits"
                image="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              />
              <HitCard
                title="On the Go Hits"
                image="https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              />
            </ScrollView>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Just for you</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.justForYouContainer}>
              <MixCard
                title="Daily Mix"
                artists="Jonas Blue, NOTD, David Guetta and more"
                image="https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                style={styles.justForYouMixCard}
              />
              <MixCard
                title="Feelin' Myself"
                artists="Ariana Grande, Doja Cat, Megan Thee Stallion..."
                image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                style={styles.justForYouMixCard}
              />
              <MixCard
                title="Morning Vibes"
                artists="Ed Sheeran, Maroon 5, Justin Timberlake..."
                image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                style={styles.justForYouMixCard}
              />
            </ScrollView>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Popular songs</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.justForYouContainer}>
              <MixCard
                title="Blinding Lights"
                artists="The Weeknd"
                image="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                style={styles.popularSongCard}
              />
              <MixCard
                title="Levitating"
                artists="Dua Lipa"
                image="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                style={styles.popularSongCard}
              />
              <MixCard
                title="Save Your Tears"
                artists="The Weeknd"
                image="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                style={styles.popularSongCard}
              />
              <MixCard
                title="Kiss Me More"
                artists="Doja Cat"
                image="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                style={styles.popularSongCard}
              />
            </ScrollView>
          </View>

          <View style={{ height: 80 }} />
        </View>
      </ScrollView>

      <View style={styles.mediaController}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
          }}
          style={styles.mediaImage}
        />
        <View style={styles.mediaInfo}>
          <Text style={styles.mediaTitle}>Blinding Lights</Text>
          <Text style={styles.mediaArtist}>The Weeknd</Text>
        </View>

        <TouchableOpacity onPress={() => router.push("../mediaControl")}>
          <Feather name="play" size={24} color="#fff" style={styles.mediaButton} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// HitCard Component
function HitCard({ title, image }) {
  return (
    <View style={styles.hitCard}>
      <Image source={{ uri: image }} style={styles.hitImage} />
      <Text style={styles.hitTitle}>{title}</Text>
    </View>
  );
}

// MixCard Component
function MixCard({ title, artists, image, style }) {
  return (
    <View style={[styles.mixCard, style]}>
      <Image source={{ uri: image }} style={styles.mixImage} />
      <Text style={styles.mixTitle}>{title}</Text>
      <Text style={styles.mixArtists} numberOfLines={2}>
        {artists}
      </Text>
    </View>
  );
}

// NavButton Component
function NavButton({ icon, active, onPress }) {
  const getIcon = () => {
    const color = active ? "#00D95F" : "#FFFFFF99";

    switch (icon) {
      case "home":
        return <Feather name="home" size={24} color={color} />;
      case "heart":
        return <Feather name="heart" size={24} color={color} />;
      case "bell":
        return <Feather name="bell" size={24} color={color} />;
      case "user":
        return <Feather name="user" size={24} color={color} />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity style={styles.navButton} onPress={onPress}>
      {getIcon()}
    </TouchableOpacity>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#333",
    borderRadius: 25,
    marginBottom: 20,
    paddingLeft: 16,
    paddingRight: 10,
    alignItems: "center",
    height: 40,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 14,
    padding: 0,
    height: "100%",
  },
  searchIcon: {
    marginRight: 10,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  hitsContainer: {
    flexDirection: "row",
    paddingRight: 10,
  },
  hitCard: {
    marginRight: 16,
    alignItems: "center",
    width: 120,
  },
  hitImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  hitTitle: {
    marginTop: 8,
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  justForYouContainer: {
    flexDirection: "row",
  },
  mixCard: {
    marginRight: 16,
  },
  mixImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  mixTitle: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
  mixArtists: {
    color: "#bbb",
    fontSize: 12,
    marginTop: 5,
  },
  songGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  mediaController: {
    position: "absolute",
    bottom: 90,
    left: 16,
    right: 16,
    backgroundColor: "#222",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    elevation: 10,
  },
  mediaImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  mediaInfo: {
    flex: 1,
    marginLeft: 12,
  },
  mediaTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  mediaArtist: {
    fontSize: 12,
    color: "#aaa",
  },
  mediaButton: {
    marginLeft: 12,
  },
  floatingBottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "#000",
    paddingVertical: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navButton: {
    padding: 10,
  },
  justForYouMixCard: {
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  popularSongCard: {
    width: 160,
    height: 160,
    marginRight: 16,
    borderRadius: 15,
  },
});