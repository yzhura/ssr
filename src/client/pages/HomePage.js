import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>Home rendered!</div>
      <button onClick={() => console.log('Clicked')}>Click me!</button>
    </div>
  )
}

export default {
  component: HomePage,
}