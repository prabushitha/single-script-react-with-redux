//---------- Redux Integration with React --------------

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import {applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger';
import {connect, Provider} from 'react-redux';


//1. create middleware
const middleware = applyMiddleware(createLogger());

//2. create reducer OR reducers(using combineReducers)
const initialState = {
    toggled:false
};
const reducer =  (state=initialState, action)=>{
    switch (action.type){
        case 'TOGGLE':
            return {toggled:!state.toggled};
        default:
            return state;
    }
};

//3. create store
const store = createStore(reducer,middleware);


//4. create react element
class TodoElement extends React.Component{
    _toggle(){
        this.props.dispatch({type:"TOGGLE",payload:'content'});
    }
    render(){
        return (<button onClick={this._toggle.bind(this)} >{this.props.toggled?'Hide':'Show'}</button>);
    }
}

//5. connect react and redux
const Todo = connect((state)=>{
    return {
        toggled:state.toggled
    };
})(TodoElement);

//6. Render react element
ReactDOM.render(<Provider store={store}>
    <Todo />
</Provider>, document.getElementById('root'));
registerServiceWorker();
