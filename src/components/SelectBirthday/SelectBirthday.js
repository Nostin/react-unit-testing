import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { differenceInYears, isFuture, isSameDay, isValid } from 'date-fns';
import  { DatePicker } from '../DatePicker/DatePicker';

export const SelectBirthday = () => {
  const [birthday, setBirthday] = useState();
  const [message, setMessage] = useState('');

  const dateUpdated = newDate => {
    setBirthday(newDate);
  }

  const submit = () => {
    const today = new Date();
    const bday = new Date(birthday);
    bday.setHours(0,0,0,0);

    if (!isValid(bday)) {
      setMessage('Invalid Date');
    }
    else if (isFuture(bday)) {
      setMessage('Birthday cannot be in the future');
    }
    else if (isSameDay(today, bday)) {
      setMessage('You were literally born today?');
    } 
    else if (today.getMonth() === bday.getMonth() && today.getDate() === bday.getDate()) {
      setMessage('Happy birthday!');
    }
    else {
      const age = differenceInYears(today, bday);
      setMessage(`You are ${age} year${age === 1 ? '' : 's'} old`);
    }
  }

  return (
    <form>
      <p className="msg">{message}</p>
      <p>When is your birthday?</p>
      <DatePicker label="Birthday" onDateChanged={dateUpdated} />
      <Button onClick={submit} variant="contained" color="primary">Enter</Button>
    </form>
  );
}
