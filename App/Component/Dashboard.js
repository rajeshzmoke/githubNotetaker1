import React, { Component } from 'react';
import Profile from '../Component/Profile.js';
import Repositories from '../Component/Repositories.js';
import api from '../Utils/api.js';
import Notes from '../Component/Notes.js';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
container:{
  marginTop: 65,
  flex: 1
},
image:{
  height: 350,
},
buttonText:{
  fontSize: 24,
  color: 'white',
  alignSelf: 'center'
  }
})


class Dashboard extends Component{
makeBackground(btn){
  var obj={
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1
  }

  if (btn === 0) {
    obj.backgroundColor = '#48BBEC';
  } else if (btn === 1) {
    obj.backgroundColor = '#E77AAE';
  }  else if (btn === 2) {
    obj.backgroundColor = '#758BF4';
  }
  return obj;
}

  goToProfile(){
    console.log('going to Profile');
    this.props.navigator.push({
  component: Profile,
  title: 'Profile Page',
  passProps: {userInfo: this.props.userInfo}
  });
  }

  goToRepos(){
    console.log('going to repos');
    api.getRepos(this.props.userInfo.login)
    .then((res) =>{
      this.props.navigator.push({
        component: Repositories,
        title: 'Repositories Page',
        passProps: {
          userInfo:this.props.userInfo,
          repos: res
        }
      });
    });
  }

  goToNotes(){
    console.log('going to notes');
    api.getNotes(this.props.userInfo.login)
    .then((res) => {
      res = res || {};
      this.props.navigator.push({
        component: Notes,
        title: 'Notes',
        passProps: {
          notes: res,
          userInfo: this.props.userInfo
        }
      })
    });
  }

render() {
  return (
    <View style = {styles.container}>
      <Image source={{url:this.props.userInfo.avatar_url}} style={styles.image}/>



      <TouchableHighlight
        style={this.makeBackground(0)}
        onPress={this.goToProfile.bind(this)}
        underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>


        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor='#88D4F5'>
            <Text style={styles.buttonText}> View Repos </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={this.makeBackground(2)}
            onPress={this.goToNotes.bind(this)}
            underlayColor='#88D4F5'>
              <Text style={styles.buttonText}> View Notes </Text>
            </TouchableHighlight>


    </View>
  );
}
};


module.exports = Dashboard;
