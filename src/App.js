import React from 'react'
import Header from "../src/components/Header"
import SwipeButttons from "../src/components/SwipButtons"
import TinderCard from "../src/components/TinderCards"

const App =() => {
  return (
    <div>
      <Header />
      <TinderCard />
      <SwipeButttons/>
    </div>
  )
}

export default App;