import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";

export default function App() {
  const videoUrl =
    "https://us-east.stream-io-cdn.com/1253292/attachments/975bd73c-2f7f-40e6-8844-70b6e701a163.IMG_1592.MOV?Key-Pair-Id=APKAIHG36VEWPDULE23Q&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly91cy1lYXN0LnN0cmVhbS1pby1jZG4uY29tLzEyNTMyOTIvYXR0YWNobWVudHMvOTc1YmQ3M2MtMmY3Zi00MGU2LTg4NDQtNzBiNmU3MDFhMTYzLklNR18xNTkyLk1PVioiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2OTAzMTIxMzV9fX1dfQ__&Signature=Vs26y3V2nVNxu3w~D7ERztdDJM2VEtx155BIkiHlQCqx5YYRFYMunvH6yQyQpquSLjuur1qFUd40pv4qr8d0-JSW0ShCIOuSXWXdM3~cVmrjQjI9DcNjjhwDnYAzPiraOd3JzsrtxPlTbaqWtR4abhxqToUS8EqmA8JgUTmzsEXthjbz3a7IWj~rKtIhgWv9pBmw-Sk4U3hNTV9zI~2G-uVdIZzQ9K0wgdVNfBL~tMyrS1rLDoKGdc6fvlqe1Rieam7ag1DzZuw-Kbn~Q72OqJBOsMIZ-4oGb0zOIDmRObFbtYdBTNajOFwgmoDv31OmCN0YTsT6uiIYYUjtHTVK8g__";
  return (
    <View style={styles.container}>
      <Video
        onError={console.log}
        style={{ flex: 1 }}
        shouldPlay={true}
        useNativeControls
        source={{
          uri: videoUrl,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
