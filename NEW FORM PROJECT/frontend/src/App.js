import './App.css';
import { useState } from 'react'
import { Results } from './components/Results';

function App() {
  const [input, setInput] = useState("")
  const [option, setOption] = useState('author');
  const [response, setResponse] = useState()
  const handleSubmit = async () => {
    if (option === 'author') {
      const response = await fetch('http://localhost:5000/api/books/find_book_by_author', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: input
        })
      });

      const json = await response.json();
      console.log(json)
      if(json.length===0) {

        alert("No book found!")
      }
      setResponse(json)
    }
    else if (option === 'title') {
      const response = await fetch('http://localhost:5000/api/books/find_book_by_title', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: input
        })
      });

      const json = await response.json();
      if(json.length===0) {

        alert("No book found!")
      }
      setResponse(json)
    }
    else if (option === 'year') {
      const response = await fetch('http://localhost:5000/api/books/find_book_by_year', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          year: input
        })
      });

      const json = await response.json();
      if(json.length===0) {

        alert("No book found!")
      }
      setResponse(json)
    }
  }
  return (
    <div className="App">
      <form>

        <div className="segment">
          <h1>Find Your Books</h1>
        </div>

        <label>
          <input type="text" placeholder="Search" value={input} onChange={e => setInput(e.target.value)} />
        </label>
        <button className="red" type="button" id="btn" onClick={handleSubmit}><i className="icon ion-md-lock"></i>Search</button>

        <div className="segment">
          <h2> SELECT THE CATEGORY </h2>
          <select value={option} onChange={(e) => setOption(e.target.value)}>
            <option value="author">Author</option>
            <option value="title">Title</option>
            <option value="year">Year</option>
          </select>

        </div>

      </form>

      <Results response={response} />

    </div>
  );
}

export default App;
