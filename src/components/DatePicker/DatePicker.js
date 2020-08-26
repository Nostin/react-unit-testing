import React from 'react';
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';

export const DatePicker = ({ label, onDateChanged }) => {

  const dateChanged = event => {
    if (onDateChanged) {
      onDateChanged(event.target.value);
    }
  }

  return (
    <div>
      <TextField
        aria-label={label}
        label={label}
        type="date"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
        onChange={dateChanged}
      />
    </div>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  onDateChanged: PropTypes.func,
}
