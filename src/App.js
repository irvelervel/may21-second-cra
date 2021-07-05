import logo from './logo.svg'
import './App.css'
import NewComponent from './NewComponent'
import Header from './Header'
import ClassComponent from './ClassComponent'

// REACT COMPONENTS
// they can have .js or .jsx extension
// no difference in behavior, let's just create components with .jsx extensions
// so we can easily differenciate them from regular JS files

let strive = 'School'

// PROPS
// STATE
// the state is a JS object embedded in a component
// it's made for keeping track of things over time

// if you want to use the State in a react component, you need
// a CLASS component

// a react component can be:

// 1) a function (limited functionalities)
// 2) a class (a big chunky component)

function App() {
  return (
    // JSX
    // a syntax pretty similar to HTML (it will be converted to HTML at load/build)
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {strive}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <NewComponent />
        <ClassComponent />
        <ClassComponent />
        <ClassComponent />
        <Header text="DEPENDS ON THE PROP TEXT" anotherOne="Strive" />
        {/* PROPS are additional pieces of info you can pass to a component */}
        {/* when you invoke it, when you use it */}
      </header>
    </div>
  )
}

export default App
