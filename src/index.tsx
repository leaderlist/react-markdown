import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'
import './assets/css/global.less'
import store from './redux/store'


const contain = document.getElementById('app')
const root = ReactDom.createRoot(contain)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)