import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import './../styles/App.css'
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <Router>
          <Route exact path="/" component={ItemList} />
          <Route path="/item/:itemId" component={ItemDetail} />
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
