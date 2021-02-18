import React, { useState,useEffect } from 'react';
import Tabletop from 'tabletop';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: '1BGsO4J3G60Y4Y0La3xyLNAa_53zzuYM4HpE6REZtQfo',
            callback: googleData => {
                setData(googleData);
                console.log(googleData);
            },
            simpleSheet: true
        })
    }, []);

    function renderGoogleData(i) {
        return (
            <div>
                <h1>{i.title}</h1>
                <p>{i.paragraph_1}</p>
                <p>{i.paragraph_2}</p>
                <p>{i.paragraph_3}</p>
            </div>
        )
    }

    function render() {
        return (
            <>
                {data.map((i) => renderGoogleData(i))}
            </>
        )
    }

    return render();

}

export default App;