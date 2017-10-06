import React, { Component } from 'react';
import Badge from '../Component/Badge.js';
import Separator from './Helpers/Separator.js'
<<<<<<< HEAD
=======

>>>>>>> 40f01144e866eee98591042335cc30f87d9f9cac
import {
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText:{
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer:{
    padding: 10
  },
  rowTitle:{
    color: '#48BBEC',
    fontSize: 19
  },
  rowContent:{
    fontSize: 19
  }
});

class Profile extends Component {
getRowTitle(user,item){
      item = (item === 'public_repos') ? item.replace('_',' ') : item;

      return item[0] ? item[0].toUpperCase() + item.slice(1) : item;

}

  render() {
    console.log("inside render");
    console.log(this.props.userInfo);
    var userInfo = this.props.userInfo;
    var topicArr = ['company','location','followers','following','email','bio','public_repos'];
    var list = topicArr.map((item,index) => {
      if(!userInfo[item]) {
      return <View key={index}/>
    }else {
      return(
        <View key={index}>
          <View style={styles.rowContainer}>
            <Text style={styles.rowTitle}> {this.getRowTitle(userInfo,item)}</Text>
            <Text style={styles.rowContent}> {userInfo[item]}</Text>
          </View>
<<<<<<< HEAD
          <Separator></Separator>
=======
          <Separator />
>>>>>>> 40f01144e866eee98591042335cc30f87d9f9cac
        </View>
      )
    }
    });
    return(
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
      </ScrollView>
    );
  }
};

module.exports = Profile;
