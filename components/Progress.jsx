import { Rocket } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

const TOTAL_TASKS = 13;
const COMPLETED_TASKS = 7;

const Progress = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Rocket size={22} />
        <Text style={styles.title}>Your progress</Text>
      </View>

      {/* Progress Boxes */}
      <View style={styles.countContainer}>
        {Array.from({ length: TOTAL_TASKS }, (_, i) => (
          <View
            key={i}
            style={[
              styles.box,
              i < COMPLETED_TASKS ? styles.boxActive : styles.boxInactive,
            ]}
          />
        ))}
      </View>

      {/* Progress Stats */}
      <View style={styles.progressContainer}>
        <View style={styles.left}>
          <Text style={styles.countText}>
            {COMPLETED_TASKS}/{TOTAL_TASKS}
          </Text>
          <Text style={styles.labelText}>Tasks complete</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.percentText}>
            {Math.round((COMPLETED_TASKS / TOTAL_TASKS) * 100)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E9FE",
    borderRadius: 16,
    padding: 18,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },
  countContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  box: {
    width: 15,
    height: 30,
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: "#C7C9FE",
  },
  boxActive: {
    backgroundColor: "#5044EE",
    borderColor: "#5044EE",
  },
  boxInactive: {
    backgroundColor: "transparent",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  countText: {
    fontSize: 16,
    fontWeight: "700",
  },
  labelText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  percentText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
