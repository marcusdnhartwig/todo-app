import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../Context/Settings';
import Header from '../Header/Header'
import List from '../List/List';

import { v4 as uuid } from 'uuid';

const ToDo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [showList, setShowList] = useState(false);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const settings = useContext(SettingsContext);

  function addItem(item) {
    item.id = uuid();
    item.completed = settings.completed;
    console.log(item);
    setList([...list, item]);
    setShowList(true);
  }


  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setList(items);

  }

  function radio(e) {

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.completed).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      {showList && <List list={list} toggleComplete={toggleComplete} />}

    </>
  );
};

export default ToDo;
