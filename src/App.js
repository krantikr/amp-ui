import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// import Route from 'react-router-dom/Route'
import MainLayout from './Layout/MainLayout';
import TestLayout from './Layout/TestLayout';
import { connect } from 'react-redux';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        {
          ((self)=>{
            let layoutArray = [];
            switch (self.props.layout) {
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

const mapStateToProps = (state) => {
  return{
    layout: state.activeLayOut
  }
}

const mapDispachToProps = (dispach) => {
  return{
    layoutChange: () => dispach({type: 'layoutChange'})
  }
}

export default connect(mapStateToProps,mapDispachToProps)(App);
