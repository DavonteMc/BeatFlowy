import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Import Expo Router

const MediaControlPage = () => {
  const router = useRouter(); // Initialize the router

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          {/* Back Button - Navigates Back */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Feather name="arrow-left" size={24} color="#808080" />
          </TouchableOpacity>
          <Text style={styles.header}>Playlist</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.searchIconContainer}>
            <Feather name="search" size={20} color="#aaa" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Album Art and Song Info */}
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        style={styles.albumArt}
      />
      <View style={styles.songInfo}>
        <View style={styles.songTitleRow}>
          <Text style={styles.songTitle}>Mirror</Text>
          <TouchableOpacity>
            <Feather name="heart" size={24} color="#808080" />
          </TouchableOpacity>
        </View>
        <Text style={styles.songArtist}>Kendrick Lamar</Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.timeText}>01:34</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
        <Text style={styles.timeText}>03:22</Text>
      </View>

      {/* Music Controls */}
      <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <Feather name="repeat" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <Feather name="skip-back" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <Feather name="pause" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <Feather name="skip-forward" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controlButton}>
            <Feather name="shuffle" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  topSection: {
    width: "100%",
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#333",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 13,
  },
  searchBox: {
    flex: 1,
    padding: 10,
    color: "white",
  },
  searchIconContainer: {
    padding: 10,
  },
  albumArt: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
  },
  songInfo: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  songTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  songArtist: {
    fontSize: 18,
    color: "#aaa",
    marginTop: 5,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  timeText: {
    color: "white",
    fontSize: 16,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: "#444",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  progress: {
    width: "30%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  controlButton: {
    padding: 10,
  },
});

export default MediaControlPage;