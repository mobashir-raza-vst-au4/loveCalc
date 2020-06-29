import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class display extends Component {
    render() {
        // console.log(this.props);
        return (
            <View style={styles.container}>
                {this.props.status && <Fragment>
                <Text style={styles.text}>{this.props.allData.percentage}%</Text>
                <Text style={styles.text}>{this.props.allData.result}</Text>
                </Fragment>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
        textAlign:"center",
        fontSize: 30,
        marginTop:20
    }
  
  });
