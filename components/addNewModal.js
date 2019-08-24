import React, {Component} from 'react';
import {
  Modal
} from 'react-native';

class AddNewModal extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      visible: false
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.visible}
      ></Modal>
    );
  }
}

export default AddNewModal;
