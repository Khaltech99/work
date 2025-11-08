import { Bell } from "lucide-react-native";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Progress from "./Progress";
import Search from "./Search";
import Task from "./Task";
import TaskList from "./TaskList";

const Homescreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
        {/* Sticky Section - Header + Search */}
        <View style={styles.stickySection}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.left}>
              <View>
                <Image
                  style={{ width: 70, height: 70 }}
                  source={require("./../assets/images/—Pngtree—cartoon color simple male avatar_21692040.png")}
                />
              </View>

              <View style={styles.textContainer}>
                <View style={styles.greetingRow}>
                  <Text style={styles.greeting}>Hello, </Text>
                  <Text style={styles.name}>Jane</Text>
                </View>
                <Text style={styles.subtitle}>
                  You have 6 tasks to complete
                </Text>
              </View>
            </View>

            <Bell color="#333" size={24} />
          </View>

          {/* Search Bar */}
          <Search />

          {/* Progress Bar */}
          <Progress />
          {/* Task Section */}
          <Task />
        </View>

        {/* Scrollable Content */}
        <View>
          {/* TaskList Section */}
          <TaskList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    height: "100%",
  },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 12,
    flex: 1,
  },
  stickySection: {
    backgroundColor: "white", // Important: prevents transparency
    paddingBottom: 8, // Optional: spacing before scrollable content
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    justifyContent: "center",
  },
  greetingRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  greeting: {
    fontSize: 17,
    color: "#555",
    fontWeight: "500",
    lineHeight: 22,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    fontWeight: "400",
    marginTop: 2,
    lineHeight: 18,
  },
});
