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
        value={currentObject.Category}
        name='radio-buttons-group'
        onChange={(e) => setTypeValue(e)}
        sx={{ display: 'block' }}
      >
        <Box
          display='grid'
          gridTemplateColumns='repeat(2, 1fr)'
          gap={2}
        >
          <FormControlLabel
            value='officeRent'
            control={<Radio size='small' />}
            label={
              <span
                className='text'
                style={{ fontSize: 14 }}
              >
                Офис
              </span>
            }
          />
          <FormControlLabel
            value='buildingRent'
            control={<Radio />}
            label={
              <span
                className='text'
                style={{ fontSize: 14 }}
              >
                Здание
              </span>
            }
          />
          <FormControlLabel
            value='shoppingAreaRent'
            control={<Radio />}
            label={
              <span
                className='text'
                style={{ fontSize: 14 }}
              >
                Торговая площадь
              </span>
            }
          />
          <FormControlLabel
            value='freeAppointmentObjectRent'
            control={<Radio />}
            label={
              <span
                className='text'
                style={{ fontSize: 14 }}
              >
                Помещение свободного назначения
              </span>
            }
          />
          <FormControlLabel
            value='industryRent'
            control={<Radio />}
            label={
              <span
                className='text'
                style={{ fontSize: 14 }}
              >
                Производство
              </span>
            }
          />
          <FormControlLabel
            value='warehouseRent'
            control={<Radio />}
            label={
              <span
                className='text'
                style={{ fontSize: 14 }}
              >
                Склад
              </span>
            }
          />
          <FormControlLabel
            value='garageRent'
            control={<Radio />}
            label={
              <span
                className='text'
                style={{ fontSize: 14 }}
              >
                Гараж
              </span>
            }
          />
          <FormControlLabel
            value='commercialLandRent'
            control={<Radio />}
            label={
              <span
                className='text'
                style={{ fontSize: 14 }}
              >
                Коммерческая земля
              </span>
            }
          />
        </Box>
      </RadioGroup>
    </>
  );
};
