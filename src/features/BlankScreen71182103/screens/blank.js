import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>This is Text1</Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen72182104")}
      >
        <Text>This is Text2</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Button_3: {},
  Text_7: {},
  Text_5: {}
})
