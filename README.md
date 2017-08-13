# How to use Redux with React
This project is to understand how redux can be used with react. Everything is in a single script for better understandability.
When developing a complex redux-react app, you'll need to modularize (eg. components, actions, reducers etc.)

## File: src/index.js

### Configuaration
* Clone the project
```sh
git clone https://github.com/prabushitha/single-script-react-with-redux.git
```
* Install dependenies
```sh
npm install
```
* Run the project
```sh
npm start
```

## Steps
There are basically 6 steps you need to follow.

### Redux Part
#### 1. Create middleware [Optional : But most of the times you'll need a middleware to make your work easier]

```javascript
const middleware = applyMiddleware(createLogger());
```
#### 2. Create reducer OR reducers (using combineReducers).
We'll create a single reducer

```javascript
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
```
#### 3. Create the ```STORE```

```javascript
const store = createStore(reducer,middleware);
```

### React Part
#### 4. Create react component element

```javascript
class TodoElement extends React.Component{
    _toggle(){
        this.props.dispatch({type:"TOGGLE",payload:'content'});
    }
    render(){
        return (<button onClick={this._toggle.bind(this)} >{this.props.toggled?'Hide':'Show'}</button>);
    }
}
```
#### 5. Connect react and redux

```javascript
const Todo = connect((state)=>{
    return {
        toggled:state.toggled
    };
})(TodoElement);
```
#### 6. Render react element

```javascript
ReactDOM.render(<Provider store={store}><Todo /></Provider>, document.getElementById('root'));
registerServiceWorker();
```


## Something Missing?

If you have new ideas to improve please create a issue and make a pull request
