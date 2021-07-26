import './App.css';
import { useState } from 'react';



function App() {

  const [joke, setJoke] = useState({ body: [''] });

  const getJoke = async () => {
    try {
      const res = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
          "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
        }
      })
      const data = await res.json();
      setJoke(data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(JSON.stringify(joke, null, 4));

  return (
    <div className="App">
      <h1>Dad Joke Generator</h1>
      <button onClick={getJoke}>Tell Me A Joke!</button>
      <h2>SetUp</h2>
      <h3>{joke.body[0].setup}</h3>
      <h2>Punch Line</h2>
      <h3>{joke.body[0].punchline}</h3>
    </div>
  );
}

export default App;
