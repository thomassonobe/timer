import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, ScrollView } from 'react-native';


export default function App() {
  const [value, onChangeText] = React.useState('Mow the lawn');

  return (
    <View style={styles.appContainer} title="appContainer">

      <View style={styles.titleContainer}>
        <Text style={[styles.text, styles.boldText, styles.titleText]}>Timer</Text>
      </View>

      <View style={[styles.border, styles.boldBorder]} title="ToggleableTimeForm">
        <Button
          title="+"
          color="#545454"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>

      <View title="EditableTimer" style={styles.editableTimer}>
        <View style={[styles.border, styles.regularBorder]} title="timer">
          <Text style={[styles.text, styles.boldText]}>How the Lawn</Text>
          <Text style={[styles.text, styles.regularText]}>House</Text>
          <Text style={[styles.text, styles.giantText]}>01:31:01</Text>

          <View style={styles.inLineButton}>
            <View style={[styles.smallButton]}>
              <Button
                title="Edit"
                color="green"
              />
            </View>

            <View style={[styles.smallButton]}>
              <Button
                title="Remove"
                color="red"
              />
            </View>
          </View>

          <View style={[styles.button]}>
            <Button
              title="Start"
            />
          </View>

        </View>

        <View title="TimerForm" style={[styles.border, styles.regularBorder]}>
          <Text style={[styles.text, styles.boldText]}>Title</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            value={value}
          />

          <Text style={[styles.text, styles.boldText]}>Project</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            value={value}
          />

          <View style={styles.inLineButton}>
            <View style={[styles.smallButton]}>
              <Button
                title="Update"
              />
            </View>

            <View style={[styles.smallButton]}>
              <Button
                title="Cancel"
              />
            </View>

          </View>

        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: '100 %',
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#545454',
  },
  toogleableTimeForm: {
    width: '100%',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 8,
  },

  editableTimer: {
    width: '100%',
  },

  titleContainer: {
    width: '100%',
    height: 24,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginLeft: 12,
    marginRight: 12,
    color: '#fff',
    fontFamily: 'Roboto',
  },
  regularText: {
    fontWeight: '400',
    fontSize: 16,
  },
  boldText: {
    fontWeight: '700',
    fontSize: 16,
  },
  giantText: {
    fontWeight: '900',
    fontSize: 36,
    margin: 24,
  },
  titleText: {
    fontSize: 24,
  },

  textInput: {
    color: '#fff',
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    margin: 16,
    borderRadius: 4,
    paddingLeft: 16
  },


  border: {
    width: '100%',
    marginBottom: 16,
    borderColor: '#fff',
    borderRadius: 8,
  },
  regularBorder: {
    borderWidth: 1,
  },
  boldBorder: {
    borderWidth: 3,
  },

  button: {
    margin: 16,
  },
  smallButton: {
    width: 86,
  },

  inLineButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
});
