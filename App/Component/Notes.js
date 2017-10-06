import React, { Component } from 'react';
import api from './Utils/api.js';
import Separator from './Helpers/Separator.js';
import Badge from './Component/Badge.js';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonText:{
    fontSize: 18,
    color: 'white'
  },
  button:{
    height: 80,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput:{
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10
  },
  rowContainer:{
    padding: 10
  },
  footerContainer:{
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

class Notes extends Component {
  constructor() {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      dataSource: this.ds.CloneWithRows(this.props.notes),
      note: '',
      error: ''
    };
  }
  handleChange(e){
    this.setState({
      note: e.nativeEvent.text
    });
  }
footer(){
  return(
    <View style={styles.footerContainer}>
      <TextInput
        style={styles.searchInput}
        value={this.state.note}
        onChange={this.handleChange.bind(this)}
        placeholder='New Note'>
        </TextInput>
    </View>
  )
}

  render() {
    <View style={styles.container}>
      {this.footer()}
    </View>
    return (

    );
  }
}

module exports = Notes;
