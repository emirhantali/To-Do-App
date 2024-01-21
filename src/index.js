import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { TodoLayer } from './context/TodoContext.js'
import reducer, {initialState} from './context/reducer.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
    <App />
    </TodoLayer>
  </React.StrictMode>,
)