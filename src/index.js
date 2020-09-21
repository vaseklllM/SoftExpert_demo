import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { createStore } from 'redux'
import reducer from './Components/redux/reducer'
import { Provider } from 'react-redux'
import './index.css'
import './animate.min.css'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'))