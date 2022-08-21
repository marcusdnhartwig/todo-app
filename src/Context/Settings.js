import React, { useState, useEffect } from "react";

const storage = JSON.parse(localStorage.getItem('todo'));

export const SettingsContext = React.createContext();

export default function SettingsProvider({ children }) {

    const [completed, setCompleted] = useState(storage ? storage.completed : false);
    const [itemsPerScreen, setItemsPerScreen] = useState(storage ? storage.itemsPerScreen : 3);
    const [sortField, setSortField] = useState(storage ? storage.sortField : 'difficulty');
    const [save, setSave] = useState('false');

    const showCompletedItem = () => {
        setCompleted(!completed);
    }

    const updateItemsPerScreen = (quantity) => {
        setItemsPerScreen(quantity);
    }

    const updateSortField = value => {
        setSortField(value);
    }

    const setUserPreferences = () => {
        setSave(!save);
    }

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify({ completed, itemsPerScreen, sortField }))
    }, [save]);

    const settings = {
        completed,
        itemsPerScreen,
        sortField,
        showCompletedItem,
        updateItemsPerScreen,
        updateSortField,
        setUserPreferences,
    }

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    )

}