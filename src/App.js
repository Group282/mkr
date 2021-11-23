import './App.css';
import {useEffect, useState} from 'react';

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    console.log(array);
    return array;
}

function getArray(count){
    const arr = [];
    for (let i =1; i<=count; i++){
        arr.push(i);
    }
    console.log(arr);
    return arr;
};

function Item({id, text}) {

    const [active, setActive] = useState(true);

    const onClick = () => {
        setActive(!active);
    }

    return (
        <div onClick={onClick} key={id} className='item'>
            <p className={active? `text-${text%5}`: `text-${text%5} deactive`}>{text}</p>
        </div>
    );
};

function App() {

    const [array, setArray] = useState([]);

    useEffect(() => {
        const data = getArray(25);
        setArray(shuffle(data));
    }, []);

    return (
        <div className='workspace'>
            {array?.map((item,v)=> <Item id = {v} text={item}/>)}
        </div>
    );
};

export default App;
