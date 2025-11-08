import { Tabs } from "expo-router";
import {
  Calendar,
  HomeIcon,
  MessageCircleMore,
  UserRound,
} from "lucide-react-native";
import BigPlusIcon from "../components/BigPlusIcon";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <HomeIcon color={"#444"} size={20} />,
          tabBarLabel: "home",
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{ tabBarIcon: () => <Calendar color={"#444"} size={20} /> }}
      />
      <Tabs.Screen
        name="plus"
        options={{
          tabBarIcon: () => <BigPlusIcon />,
          tabBarLabel: () => null,
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: () => <MessageCircleMore color={"#444"} size={20} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ tabBarIcon: () => <UserRound color={"#444"} size={20} /> }}
      />
    </Tabs>
  );
}
