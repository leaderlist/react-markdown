import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css'
import './assets/css/global.less'

const contain = document.getElementById('app')
const root = ReactDom.createRoot(contain)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)