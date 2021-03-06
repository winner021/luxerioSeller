import React from 'react'
import ReactDOM from 'react-dom'
import App from "./component/App"
import {Provider} from 'react-redux'
import { createStore} from 'redux'
import reducers from "./reducers"
import thunk from 'redux-thunk'

import { applyMiddleware,compose } from 'redux'

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose

ReactDOM.render(
    <Provider store={createStore(reducers,composeEnhancers(applyMiddleware(thunk)))}>
         <App/>
    </Provider>
,document.querySelector("#root"))
