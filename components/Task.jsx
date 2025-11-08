import { StyleSheet, Text, View } from "react-native";
import { data } from "../data";

const Task = () => {
  return (
    <View>
      <Text>My Task</Text>
      <View style={styles.taskContainer}>
        {data.map((tasks, index) => {
          return (
            <View key={index} style={styles.singleTaskContainer}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: tasks.color,
                }}
              />
              <Text>{tasks.title}</Text>
              <View
                style={{
                  backgroundColor: tasks.bgColor,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 20,
                  height: 20,
                  borderRadius: 100,
                }}
              >
                <Text
                  style={{
                    color: tasks.color,
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  {tasks.count}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  singleTaskContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
