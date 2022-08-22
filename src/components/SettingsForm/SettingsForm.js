import { useContext, useState } from 'react';
import { FormGroup, Label, ControlGroup, RadioGroup, Radio, Button, Card, Elevation } from '@blueprintjs/core';
import { SettingsContext } from '../../Context/Settings';
import useForm from '../../hooks/form';
import './SettingsForm.scss'

const SettingsForm = () => {

  const [defaultValues] = useState({});
  const { showCompletedItem, updateItemsPerScreen, updateSortField, setUserPreferences } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useForm(changeSettings, defaultValues);

  function changeSettings(newSettings) {
    console.log('newSettings: ', newSettings);
    showCompletedItem(newSettings.completed);
    updateItemsPerScreen(newSettings.itemsPerScreen);
    updateSortField(newSettings.sort);
    setUserPreferences();
  }

  return (
    <>
      <FormGroup id="prefsForm" onSubmit={handleSubmit} label="Change Preferences">

        <ControlGroup>

          <RadioGroup
            name="showCompleted"
            onChange={handleChange}
            label="Show completed tasks in list?" >
            <Radio label="SHOW completed tasks" value="true" />
            {/* <Radio label="DON'T show completed tasks in list" value="false" /> */}
          </RadioGroup>

          <Label>
            Number of items to show
            <input onChange={handleChange} required name="itemsPerScreen" type="text" placeholder="Quantity" />
          </Label>

          <Label>
            Sort By
            <input onChange={handleChange} required defaultValue={defaultValues.difficulty} type="text" name="sort" />
          </Label>

          <Label>
            <button type="submit">Change Preferences</button>
          </Label>
        </ControlGroup>

      </FormGroup>
    </>
  )
}

export default SettingsForm