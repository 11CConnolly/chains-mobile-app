import * as React from "react";
import { Text } from "react-native";
import { Button, Dialog, Portal } from "react-native-paper";

const ActionDialog = (text: any) => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => setVisible(false);

  const showDialog = () => setVisible(true);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Text>{text}</Text>
        <Dialog.Actions>
          <Button onPress={() => console.log("Cancel")}>Cancel</Button>
          <Button onPress={() => console.log("Ok")}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ActionDialog;
