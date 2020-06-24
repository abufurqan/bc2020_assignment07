import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect( () => {

    async function getRepos() {
      const response = await fetch("https://api.github.com/users/abufurqan/repos")
      const data = await response.json();
      console.log(data);
      setRepos(data)
    }
    getRepos();

    // "https://api.github.com/users/abufurqan/repos"
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     setData(json);
    //   })
  },[])

  return (
    <div className="App">
      <h1>You are seeing all of my repositories</h1>
      <h3><a href="https://github.com/abufurqan?tab=repositories" target="_blank">Fiaz Ahmed</a></h3>
      <ol>
        {repos.map((repoObj, ind) => {
          return (<li key={ind}>{repoObj.name}</li>)
        })}
      </ol>
    </div>
  );
}

export default App;
