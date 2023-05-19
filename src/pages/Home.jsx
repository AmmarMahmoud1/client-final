
import React, { useState, useEffect } from 'react';
import home from "./home.css"



const Home = () => {
  const [allDucks, setAllDucks] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        //const { data } = await axios(`${import.meta.env.VITE_API_URL}/ducks`);
        //setAllDucks(data);
        setLoading(false);
      } catch (error) {
        console.error(
          error.message || 'Ducks have gone over the hill and far away.'
        );
        setLoading(false);
      }
    })();
  }, []);

  return (
    <React.Fragment><div className="container">

    <div className="Header">
    
    <h1>Title</h1>
    <h1>OfferComponent</h1>
    </div>
    
    <div className="Middle">
    <h1>ImageCarosuel</h1>
    </div>
    <div className="Footer">
    <h1>CityAddress</h1>
    <h1>Email</h1>
    </div>
    </div></React.Fragment>
    
    
  );
};

export default Home;