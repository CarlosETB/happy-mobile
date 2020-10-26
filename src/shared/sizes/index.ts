import { Dimensions } from "react-native";

export const sizes = {
  width: Number(Math.round(Dimensions.get("screen").width)),
  height: Number(Math.round(Dimensions.get("screen").height)),
};