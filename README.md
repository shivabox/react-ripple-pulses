# React Ripple Effect

## Installation

* $ npm install react-ripple-pulse --save
* $ yarn add react-ripple-pulse

## Demo

[Demo](https://codesandbox.io/s/jolly-mendeleev-m4fulh)


## Usage
__Basic Example__
```react
import {Ripples} from "react-ripple-pulse"

const App = () => {
  return (
    <div className="App">
      <Ripples />
    </div>
  );
}

export default App;

```

__Another Example with props__
```react
import {Ripples} from "react-ripple-pulse"

const App = () => {
  return (
    <div className="App">
      <Ripples color="#5dd738" size={20}/>
    </div>
  );
}

export default App;

```

## Props

Common props you may want to specify include:

* <mark>color</mark> - To change the color(only pass 6 digit hex code)
* <mark>size</mark> - To change the size(only in number not as string)