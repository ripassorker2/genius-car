import React from 'react';
import About from './About/About';
import Bannar from './Bannar/Bannar';
import Service from './Services/Service';

const Home = () => {
    return (
        <div>
          
          <Bannar />
          <About />
          <Service />
        </div>
    );
};

export default Home;