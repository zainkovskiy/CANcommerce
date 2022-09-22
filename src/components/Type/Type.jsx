import React, { useContext } from 'react';

import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { LayoutContext } from 'components/Layout';

export const Type = () => {
  const { currentObject, setTypeValue } = useContext(LayoutContext);
  return (
    <>
      <span className='form__subtitle text'>Тип объекта</span>
      <RadioGroup
        defaultValue={currentObject.Category}
        name='radio-buttons-group'
        onChange={(e) => setTypeValue(e)}
      >
        <Box
          display='grid'
          gridTemplateColumns='repeat(2, 1fr)'
          gap={2}
        >
          <FormControlLabel
            value='officeRent'
            control={<Radio />}
            label='Офис'
          />
          <FormControlLabel
            value='buildingRent'
            control={<Radio />}
            label='Здание'
          />
          <FormControlLabel
            value='shoppingAreaRent'
            control={<Radio />}
            label='Торговая площадь'
          />
          <FormControlLabel
            value='freeAppointmentObjectRent'
            control={<Radio />}
            label='Помещение свободного назначения'
          />
          <FormControlLabel
            value='industryRent '
            control={<Radio />}
            label='Производство'
          />
          <FormControlLabel
            value='warehouseRent'
            control={<Radio />}
            label='Склад'
          />
          <FormControlLabel
            value='garageRent'
            control={<Radio />}
            label='Гараж'
          />
          <FormControlLabel
            value='commercialLandRent'
            control={<Radio />}
            label='Коммерческая земля'
          />
        </Box>
      </RadioGroup>
    </>
  );
};
