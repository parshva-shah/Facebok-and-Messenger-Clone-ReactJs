import React from 'react'
import MainScreen from './MainScreen'
import Widgets from './Widgets'
import './App.css'

function Messenger() {
    return (
        <div className="app">
            <>
                <div className="app__body">
                    <MainScreen />
                    <Widgets />
                </div>
            </>


        </div>
    )
}

export default Messenger
