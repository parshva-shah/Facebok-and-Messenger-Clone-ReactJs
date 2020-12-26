import React from 'react'
import './App.css'
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateVavlue } from './StateProvider';
import Widgets from './Widgets';

function All() {

    const [{ user }, dispatch] = useStateVavlue();
    return (
        <div className="app">
            {!user ? (<Login />) : (
                <>
                    <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Feed />
                        <Widgets />
                        {/* Widgets */}
                    </div>
                </>
            )}

        </div>
    );

}

export default All
