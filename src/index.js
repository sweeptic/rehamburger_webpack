import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import style from './index.module.css'
import App from './App'


const app = () => {
   return (
      <BrowserRouter>
         <App />
      </BrowserRouter>
   )
}

ReactDOM.render(app, document.getElementById('root '))

export default index;

