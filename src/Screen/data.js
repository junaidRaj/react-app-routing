import React from 'react';
import { useLocation } from 'react-router-dom';


export default function Data() {
   let location = useLocation();
    
    return (
    <>
    <div>
        {location.state.Data}
    </div>
    </>
    );
}
