import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ storySection, story, setStory }) {
	const [currentValue, setCurrentValue] = React.useState('');

  const handleChange = (event) => {
		setCurrentValue(event.target.value)
    setStory(storySection[event.target.value]);
  };

	let stories = Object.keys(storySection).map((element, index) => {
		return <MenuItem key={index} value={element} >{element.charAt(0).toUpperCase() + element.slice(1)}</MenuItem>
	})

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Filter by Section</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={currentValue}
          label="Filter by Section"
          onChange={handleChange}
        >
          {stories}
        </Select>
      </FormControl>
    </Box>
  );
}