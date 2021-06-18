import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/home'
import Converter from './components/common/converter'
// import Navbar from './components/common/navbar'
import { getData } from '../src/lib/api'

class App extends React.Component {

  async componentDidMount() {
    const getDataSet = await getData()
    console.log(getDataSet)
  }

  
  render() {
    return (
      <BrowserRouter>
      {/* <Navbar>
      </Navbar> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/converter" component={Converter} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App