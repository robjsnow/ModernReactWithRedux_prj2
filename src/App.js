import './App.css';

import { useState } from 'react';
import AnimalShow from './AnimalShow';


function getRandomAnimal() {
    const animal = ['bird','cat','cow','dog', 'gator','horse'];
    return animal[Math.floor((Math.random() * animal.length))]
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        console.log('Button was clicked!');
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });
    console.log(renderedAnimals)
    return (<div className="app">
      <button onClick={handleClick}>Add Animal</button>
<div className="animal-list">{renderedAnimals}</div>
    </div>
    )
}
export default App;