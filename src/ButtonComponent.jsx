import React, { useState, useEffect } from "react";

const ButtonComponent = React.memo((props)=>{
    
    // An async function for testing our hook. Will be successful 50% of the time.
    const myFunction = () => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rnd = Math.random() * 10;
            rnd <= 5
            ? resolve('Fetched successfully 🙌')
            : reject('Oh no there was an error 😞');
        }, 1000);
        });
    };

    const [clicked, onClick] = useState(false)
    
    useEffect(() => {
        myFunction().then(data=>{
            alert(data);
        }).catch(err=>{
            alert(err);
        })
    }, [clicked]);

    return <div><button onClick = {()=>{onClick(true)}}>Fetch</button></div>
})

export default ButtonComponent;