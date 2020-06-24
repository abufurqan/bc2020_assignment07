import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect( () => {

    async function getRepos() {
      const response = await fetch("https://api.github.com/users/abufurqan/repos")
      const data = await response.json();

      // Get the Date object
      //const date = Date(data.date);
      // Outputs as "Fri Feb 17 2017 01:00:00 GMT+0100"
      //const dateString = Date(data.date).toString();
      // Outputs as "February 17, 2017"
      //const formattedDate = Moment(date).format("LL");

      //console.log(data);
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
      <h1>API - Fetch / Get</h1>
      <h3>You are seeing all of my repositories, you can check it a github by clicking my name <a href="https://github.com/abufurqan?tab=repositories">Fiaz Ahmed</a></h3>
      <h4>or click any of the below repository to open it in a new tab</h4>
    
      <ol>
        {repos.map((repoObj, ind) => {
          return (
            <li key={ind}>
              <a href={repoObj.svn_url}>{repoObj.name}</a><br />
              Language: {repoObj.language}
            </li>
            // date added
            /*
            <li key={ind}>
              <a href={repoObj.svn_url}>{repoObj.name}</a><br />
              Creation Date: {repoObj.created_at} Language: {repoObj.language} Updated_at: {repoObj.updated_at}
            </li>
            */
          )
        })}
      </ol>
    </div>
  );
}

export default App;