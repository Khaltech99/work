import { addEventListener } from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Offline = () => {
  return (
    <View>
      <Text>User is offline</Text>
    </View>
  );
};

const Online = () => {
  return (
    <View>
      <Text>User is online</Text>
    </View>
  );
};

const Plus = () => {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    const unsubscribe = addEventListener((state) => {
      setIsOnline(state.isConnected);
    });

    return unsubscribe();
  }, []);
  return <View>{isOnline ? <Online /> : <Offline />}</View>;
};

export default Plus;
