import "regenerator-runtime/runtime"
import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./js/store/index"
import App from "./js/components/App.jsx"

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("app")
)

module.hot.accept()
