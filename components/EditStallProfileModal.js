import React from 'react';
import { 
  Modal, 
  Text, 
  View, 
  TextInput, 
  Button, 
  StyleSheet, 
  Keyboard, 
  TouchableWithoutFeedback, 
  ActivityIndicator,
  Image 
} from 'react-native';
import ImagePicker from 'react-native-image-picker'
import firebase from 'react-native-firebase';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;

export default class EditProfileModal extends React.Component {

  onChangePicturePress = () => {

  }

  render() {
    return(
      <Modal animationType='fade' onRequestClose={() => alert("Edit") } visible={this.props.modalVisible}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <Text style={{ backgroundColor: 'red', color: 'white', paddingLeft: 20, paddingTop: 13, paddingBottom: 13, fontSize: 22, fontWeight: 'bold' }}>Edit Stall Profile</Text>
            <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
              <Image source={{ uri: this.props.photoURL }} style={{ width: scale(320), height: verticalScale(180) }} />
              <Text style={{ marginTop: 10 }} onPress={this.onChangePicturePress}>Change Picture</Text>
            </View>

            <View>
              <Text style={{ marginLeft: 20 }}>Name: </Text>
              <TextInput
                style={styles.textInput}
                placeholder = { this.props.name }
                onChangeText = { name => this.props.onChangeName(name) }
                value = { this.props.name }
              />
            </View>

            <View>
              <Text style={{ marginLeft: 20, marginTop: 30 }}>Location: </Text>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder= { this.props.location }
                onChangeText={ location => this.props.onChangeLocation(location)}
                value={ this.props.location }
              />
            </View>

            <View style={{ marginTop: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Button title='     Save      ' color={'red'} onPress={this.props.handleSaveChanges} />
            </View>
            <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
              <Button title='    Close    ' color={'red'} onPress={this.props.handleClose} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginLeft: 20,
    paddingLeft: 0
  }
})