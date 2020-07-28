import React, {Component} from 'react';
import Collection from './components/Collection'
import './App.css';

class App extends Component {
  state = {
    "collections": [
      {
        "id": 1,
        "title": "React",
        "cards":
          [
            {
              "id": 1,
              "word": "state",
              "definition": "JS object that holds values for a component"
            },
            {
              "id": 2,
              "word": "props",
              "definition": "A way to pass data into components on initialization"
            },
            {
              "id": 3,
              "word": "component",
              "definition": "Reusable building blocks for UI using JSX"
            }
          ]
      },
      {
        "id": 2,
        "title": "C#",
        "cards":
          [
            {
              "id": 1,
              "word": "variable",
              "definition": "Named space in memory"
            },
            {
              "id": 2,
              "word": "class",
              "definition": "Template for an object that consists of member variables, constructor, methods"
            },
            {
              "id": 3,
              "word": "object",
              "definition": "Instance of a class"
            }
          ]
      }
    ]
  }
  render(){
    return (
      <div className="App" >
        <Collection collections={this.state.collections} />

      </div>
    );
  }
}

export default App;
