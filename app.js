import React from 'react';
import { useState, useEffect } from 'react';
import ToDo from './src/components/todo/form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  let [title, setTitle] = useState('');

  useEffect(() => setTitle('Title'), []);

  return (
    <>
      <ToDo title={title} setTitle={setTitle}/>
    </>
  );
}