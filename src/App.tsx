import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';


type GetType = {
  userId: number
  id: number
  title: string
  body: string
}

function App() {

  const [get, setGet] = useState([])

  const CleanRequestHandler = () => {
    setGet([])
  }
  // сразу отрисовывает страницу, когда открывается сайт
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setGet(json))
  }, [])
  return (
    <div className="App">
      <Button nickName={'CleanPage'} callBack={CleanRequestHandler} />
      <p></p>
      <ul>
        {get.map((el: GetType) => {
          return (
            <li>
              <span> {el.userId}- </span>
              <span> {el.id}- </span>
              <span> {el.title}- </span>
              {/* <span> {el.body} </span> */}
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
