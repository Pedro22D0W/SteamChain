import React from 'react';
import { useParams } from 'react-router-dom';


const DeveloperHome = () => {

    const {id} = useParams();

    return (
        <div className="App">
            <h1>SteamChain {id}</h1>

        </div>
    );
};

export default DeveloperHome;