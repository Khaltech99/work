import { Search as SearchIcon } from "lucide-react-native"; // Alias to avoid conflict
import { StyleSheet, TextInput, View } from "react-native";

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon size={22} color="#888" />
      <TextInput
        placeholder="Find your task"
        style={styles.input}
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#333",
    fontWeight: 500,
  },
});
