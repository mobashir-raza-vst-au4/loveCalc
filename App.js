import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button  } from 'react-native-paper';
import React, { Component } from 'react'
import Display from './Components/Display';

export default class App extends Component {
  state = {
    text1: "",
    text2: "",
    data: "",
    loading: "Loading...",
    view: false,
    status: false
  }

  handleSubmit = () => {
    // console.log(Object.keys(this.state.data).length)
    if(Object.keys(this.state.data).length > 0) {
      this.setState({
        data: "",
        status: false
      })
    }
    if(this.state.text1.trim().length && this.state.text2.trim().length > 0){
      this.setState({
        view: true
      })

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.text1.trim()}&sname=${this.state.text2.trim()}`,{
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "8abef6e1eemshbf043345aba09d6p132a31jsn2d0d6caf9ea4"
      }
    })
    .then(data => data.json())
    .then(data2 => {
      this.setState({
        data: data2,
        view: false,
        status: true
      })
    })
  }
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content style={{alignItems:"center"}}
            title="Love Calculator"
          />
        </Appbar.Header>

        <TextInput
        label='Male'
        value={this.state.text1}
        onChangeText={text1 => this.setState({ text1:text1 })}
      />
        <TextInput
        label='Female'
        value={this.state.text2}
        onChangeText={text2 => this.setState({ text2:text2 })}
      />

      <Button style={{margin:10}} icon="heart" mode="contained" onPress={() => this.handleSubmit()}>
          calculate
      </Button>
      {this.state.view && <Text style={styles.text}>{this.state.loading}</Text>}
      <Display allData = {this.state.data} status = {this.state.status}/>
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
