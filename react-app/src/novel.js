import './styles/Game.css';
import trade_scenario from './trade_scenario.json'
import innerText from 'react-innertext'
import SelectorView from './selector';

import React, { Component, useEffect, useState } from 'react';


function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
//const shuffle = () => (Math.random() - 0.5);
//let shuffled = [...trade_scenario].sort(shuffle);
let randomText = randomValueFromArray(trade_scenario)

//console.log("random value from array: ", randomText.case[0]);
//console.log("shuffle", shuffled);

//console.log("test", test[0]);

function Novelview(props) {
  const [count, setCount] = useState(1);
  let [name, setName] = useState(randomText.case[0].name);
  const [text, setText] = useState(randomText.case[0].text);
  const [type, setType] = useState(randomText.case[0].type);

  if (name == "Player") {
    name = props.user_name;
    //console.log("이름 바꾸기" + name + "\n user name: " + user_name);
  }

  function go_next() {
    setCount(count + 1);
    setName(randomText.case[count].name);
    setText(randomText.case[count].text);
    setType(randomText.case[count].type);
  }

  //console.log("name: ", shuffled[0].case.name, "text: ", shuffled[0].case.text);

  return (

    <div class="novel">
      {name == null ? <></> : <div id="script_name">{name}</div>}
      <div id="script_text">
        {text}
        {count === randomText.case.length   ? (
          <button
            onClick={() => {
              props.final_next();
              randomText=randomValueFromArray(trade_scenario);
            }}
            id="script_next"
          >
            거래마치기
          </button>
        ) : (
          <button
            onClick={() => {
              go_next();
            }}
            id="script_next"
          >
            넘어가기
          </button>
        )}
      </div>
    </div>
  );
}

export default Novelview;
