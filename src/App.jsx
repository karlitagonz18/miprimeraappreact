import React from 'react'
import Texto from './components/Texto'
import Contador from "./components/Contador"
import ListaNombres from './components/ListaNombres'
import "./App.css"


const App = ()  => {
    return <div className="container">
        {/* <Texto name="Karla" lastname="Gonzalez" edad={22} />
        <Contador/> */}
        <ListaNombres/>
    </div>
}


export default App;