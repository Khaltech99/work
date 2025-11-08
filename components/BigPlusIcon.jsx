import { Plus } from "lucide-react-native";
import { StyleSheet, View } from "react-native";

const BigPlusIcon = () => {
  return (
    <View>
      <View style={styles.plusContainer}>
        <Plus
          color={"#fff"}
          size={20}
          style={{ zIndex: 66666, elevation: 1000 }}
        />
      </View>
    </View>
  );
};

export default BigPlusIcon;

const styles = StyleSheet.create({
  plusContainer: {
    backgroundColor: "#5044EE",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 100,
    marginTop: 10,
  },
});
