import React, { useState } from "react";
import Form from "./components/Form";
import Item from "./components/Item";
import { nanoid } from "nanoid";
import Header from './components/Header';
import Footer from './components/Footer';

function App(props) {
  const [items, setItems] = useState(props.items);
  const taskList = items.map(item => (
    <Item
        id={item.id}
        name={item.name}
        key={item.id}
        carbon={item.carbon}
        water={item.water}
        deleteTask={deleteTask}
      />
    )
  );
  const carbonMap = {
    grapefruit: 10,
    lime: 20,
    coconut: 10,
    mango: 30,
  }
  const waterMap = {
    grapefruit: 10,
    lime: 20,
    coconut: 10,
    mango: 30,
  }
  function addItem(name) {
    let carbon = carbonMap[name]
    let water = waterMap[name]
    const newItem = { id: "item-" + nanoid(), 
                      name: name[0].toUpperCase() + name.substring(1),
                      carbon: carbon,
                      water: water, };
    setItems([...items, newItem]);
  }

  function deleteTask(id) {
    const remainingItems = items.filter(item => id !== item.id);
    setItems(remainingItems);
  }
  var total_carbon = taskList.reduce((total_carbon, { props }) => total_carbon += props.carbon, 0);
  const headingTextCarbon = `${total_carbon} kg of carbon in this meal`;
  var total_water = taskList.reduce((total_water, { props }) => total_water += props.water, 0);
  const headingTextWater = `${total_water} gallons of water used for this meal`;

  return (
    <div>
      <Header />
      <div className="todoapp stack-large">
        <h1>Find your foodprint</h1>
        <h2 id="list-heading">{headingTextCarbon}</h2>
        <h2 id="list-heading">{headingTextWater}</h2>
        <Form addItem={addItem} />
        <p class="h2">Current meal</p>
        <ul
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
