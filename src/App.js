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
      <h2>You are seeing all of my repositories <br />
        check it a github by clicking my name <a href="https://github.com/abufurqan?tab=repositories" target='_blank' rel='noopener referrer'>Fiaz Ahmed</a></h2>
      <h4>or click any of the below repository to open it in a new tab</h4>
    
      <ol>
        {repos.map((repoObj, ind) => {
          return (<a href={repoObj.svn_url} target='_blank' rel='noopener referrer'><li key={ind}>{repoObj.name} Creation Date: {repoObj.created_at}</li></a>)
        })}
      </ol>
    </div>
  );
}

export default App;
