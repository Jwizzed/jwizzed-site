import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FirstPage from "./FirstPage";
import Nav from "./Nav";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

function App(){
    return <div>
        <Header />
        {/*<Nav />*/}
        <FirstPage />
        <Footer />
        <About />
        <Project />
        <Contact />
    </div>
}

export default App;