import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer imageSource={PlaceholderImage} />
      </View>

      <View style={styles.footerContainer}>
        <Button label="Select a photo" theme="primary" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#25292e",
  }, 
  footerContainer: {
    flex: 0.33,
    alignItems: 'center',
  },
});
