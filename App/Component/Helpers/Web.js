import React, { Component } from 'react';
import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

class Web extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url}/>
      </View>
    );
  }


};

WebView.propTypes = {
  url: React.PropTypes.string.isRequired
}

module.exports = Web;
