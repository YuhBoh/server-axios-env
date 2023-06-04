
import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {

  let [gifUrl, setGifUrl] = useState('');
  let [gifTitle, setGifTitle] = useState('');

  const handleClick = () => {

    axios.get('/gifs')
      .then((response) => {  // response = {url: 'the url of the gif', title: 'the title'}
        console.log('send success:', response);
        let url = response.data.url;
        setGifUrl(url);

        let title = response.data.title;
        setGifTitle(title);
      })
      .catch((err) => { console.log(err) })
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">APIS</h1>
        <h4><i>APIS</i></h4>
      </header>
      <br />
      <div>
        <button onClick={handleClick}>Click For Gifs!</button>
        <img src={gifUrl} alt={gifTitle} />
      </div>
    </div>
  );

}

export default App;


// api.giphy.com/v1/gifs/trending?api_key=F1y9MCztyxMRibkGUnlcVBDON0pfka99&limit=3&rating=pg13
// response = the whole thing
// response.data.data is an array of GIF objects

// a GIF object has a images property, with a bunch of formats in it
