import React from 'react';

const Div = (props) => {
    console.log("HEY")
    console.log(process.env.target)
    if(process.env.target == 'MOBILE') {
        return <View {...props}/>;
    } else if(process.env.target == 'EXTENSION') {
        return <div {...props}/>;
    } else {
        return <div {...props}/>;
    }
}

const Button = (props) => {
    if(process.env.target == 'MOBILE') {
        return <View {...props}/>;
    } else if(process.env.target == 'EXTENSION') {
        return <button {...props}/>;
    } else {
        return <button {...props}/>;
    }
}

const Img = (props) => {
    if(process.env.target == 'MOBILE') {
        return <Image {...props}/>;
    } else if(process.env.target == 'EXTENSION') {
        return <img {...props}/>;
    } else {
        return <img {...props}/>;
    } 
}

export {
    Div,
    Img,
    Button
}