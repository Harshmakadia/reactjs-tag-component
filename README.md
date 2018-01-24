# reactjs-tag-component

Easy steps to install and use the tags component in reactJS.

Follow following to get started :

1. npm install tags-pro

upon successful installation let's include this in the main file

```javascript
import Tags from 'tags-pro';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tags from './tags';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Tags
              dataSource={[{name: 'Machester United', id: '1'},
                  {name: 'PSG', id: '2'},
                  {name: 'Barcelon', id: '3'},
                  {name: 'Real Madrid', id: '4'},
              ]}
              isReadOnly = {true}
              borderColor = "#dcdcdc"
              borderColorHover = "red"
              backgroundColor = "orange"
              backgroundColorHover = "pink"
              fontSize = "14"/>
      </div>
    );
  }
}

export default App;
```

Follow are the props that can be passed to <Tags/> component
