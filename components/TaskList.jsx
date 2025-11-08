import { EllipsisVertical } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

const TaskList = () => {
  return (
    <View>
      {/* first card */}
      <View
        style={{
          padding: 20,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#ddd",
          marginTop: 20,
        }}
      >
        <View style={styles.priorityContainer}>
          <View
            style={{
              backgroundColor: "#f1f1f1",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 100,
            }}
          >
            <Text style={{ fontSize: 12 }}>high prioritiy</Text>
          </View>
          {/* icon */}
          <EllipsisVertical size={22} />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 18 }}>
          Website Redesign
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text>19-oct -20 Nov</Text>
          <View>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("./../assets/images/—Pngtree—cartoon color simple male avatar_21692040.png")}
            />
          </View>
        </View>
      </View>
      {/* Second card */}
      <View
        style={{
          padding: 20,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#ddd",
          marginTop: 20,
        }}
      >
        <View style={styles.priorityContainer}>
          <View
            style={{
              backgroundColor: "#f1f1f1",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 100,
            }}
          >
            <Text style={{ fontSize: 12 }}>high priortiy</Text>
          </View>
          {/* icon */}
          <EllipsisVertical size={22} />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 18 }}>
          Website Redesign
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text>19-oct -20 Nov</Text>
          <View>
            <Image
              style={{ width: 60, height: 60 }}
              source={require("./../assets/images/—Pngtree—cartoon color simple male avatar_21692040.png")}
            />
          </View>
        </View>
      </View>
      {/* third card */}
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  priorityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
