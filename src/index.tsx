import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './s1-main/App'
import reportWebVitals from './reportWebVitals'
import store from './s2-homeworks/hw10/bll/store'
import {Provider} from 'react-redux'
import {BrowserRouter, HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/*для дз 10*/}

            <Provider store={store}>
                <App/>
            </Provider>


    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
