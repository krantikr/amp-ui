import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import MainLayout from './Layout/MainLayout';
import TestLayout from './Layout/TestLayout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: "mainLayout"
    };
  }

  render(){
    return (
      <div className="App">
        {
          ((self)=>{
            let layoutArray = [];
            switch (self.state.layout) {
              case "mainLayout":
                layoutArray.push(
                  <MainLayout/>
                )
                break;
              case "testLayout":
                layoutArray.push(
                  <TestLayout/>
                )
                break;
              default:

            }
            return layoutArray;
          })(this)
        }
      </div>
    );
  }
}

export default App;
