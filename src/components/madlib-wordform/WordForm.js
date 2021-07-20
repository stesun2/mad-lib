import React, { Component } from 'react'
import './WordForm.css'

class WordForm extends Component {
  onInputChange(key, index, event) {
    this.props.onInputChange(key, event.currentTarget.value, index)
  }
  createAllInputs() {
    let output = []
    for (let i = 0; i < this.props.words.length; i++) {
      let word = this.props.words[i]
      output.push(
        <input type="text" id={word.key} placeholder={word.label} />
      )
    }
    return output
  }
  render() {
    return (
      <div>
        { this.createAllInputs() }
      </div>
    )
  }
}

export default WordForm
