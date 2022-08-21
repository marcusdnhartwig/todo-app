import React from 'react';
import ToDo from './components/todo/todo.js';
import UserPreferences from './components/SettingsForm/SettingsForm'

export default function App() {
  return (
    <>
      <UserPreferences />
      <ToDo />
    </>
  )

}
