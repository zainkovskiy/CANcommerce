import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { LayoutContext } from 'components/Layout';

export const LayoutOfficeRent = ({ register, errors }) => {
  const { currentObject, handleChange } = useContext(LayoutContext);
  return (
    <>
      <span className='form__subtitle text'>Об объекте</span>
      <div className='field'>
        <div className='field__name text'>
          <span>
            Общая площадь, м<sup>2</sup>
          </span>
        </div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            value={currentObject?.TotalArea || ''}
            error={errors?.TotalArea ? true : false}
            {...register('TotalArea', {
              required: 'Укажите общую площадь',
              onChange: (e) => handleChange(e),
            })}
          />
          <span className='field__error-text text'>
            {errors?.TotalArea?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Этаж</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            value={currentObject?.FloorNumber || ''}
            error={errors?.FloorNumber ? true : false}
            {...register('FloorNumber', {
              required: 'Укажите этаж',
              validate: {
                more: (e) =>
                  e <= currentObject?.FloorsCount ||
                  'Должен быть меньше или равен этажности',
              },
              onChange: (e) => handleChange(e),
            })}
          />
          <span className='field__error-text text'>
            {errors?.FloorNumber?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Этажей в доме</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            value={currentObject?.FloorsCount || ''}
            error={errors?.FloorsCount ? true : false}
            {...register('FloorsCount', {
              required: {
                value: true,
                message: 'Укажите этаж и количество этажей в доме',
              },
              onChange: (e) => handleChange(e),
            })}
          />
          <span className='field__error-text text'>
            {errors?.FloorsCount?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Высота потолков, м</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='CeilingHeight'
            value={currentObject?.CeilingHeight || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Помещение занято</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.IsOccupied ? 'да' : 'нет'}
          >
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='IsOccupied'
              value='да'
            >
              Да
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='IsOccupied'
              value='нет'
            >
              Нет
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Планировка</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Layout || null}
          >
            <ToggleButton
              size='small'
              name='Layout'
              value='cabinet'
            >
              Кабинетная
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Layout'
              value='openSpace'
            >
              Открытая
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Layout'
              value='corridorplan'
            >
              Коридорная
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Layout'
              value='mixed'
            >
              Смешанная
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Кол-во мокрых точек</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.WaterPipesCount || null}
          >
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='WaterPipesCount'
              value={0}
            >
              нет
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='WaterPipesCount'
              value={1}
            >
              1
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='WaterPipesCount'
              value={2}
            >
              2
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='WaterPipesCount'
              value={3}
            >
              3
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='WaterPipesCount'
              value={4}
            >
              4
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Электрическая мощность, кВТ</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='Power'
            value={currentObject?.Power || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Состояние</div>
        <div className='field__action'>
          <Select
            value={currentObject?.HeatingType || ''}
            name='ConditionType'
            onChange={(event) => handleChange(event)}
            size='small'
            sx={{ minWidth: 223 }}
            displayEmpty
          >
            <MenuItem
              disabled
              value=''
            >
              <em>Не выбрано</em>
            </MenuItem>
            <MenuItem value={'cosmeticRepairsRequired'}>
              Требуется косметический ремонт
            </MenuItem>
            <MenuItem value={'finishing'}>Под чистовую отделку</MenuItem>
            <MenuItem value={'majorRepairsRequired'}>
              Требуется капитальный ремонт
            </MenuItem>
            <MenuItem value={'office'}>Офисная отделка</MenuItem>
          </Select>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Мебель</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.FurniturePresence || null}
          >
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='FurniturePresence'
              value='yes'
            >
              есть
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='FurniturePresence'
              value='no'
            >
              Нет
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Доступ</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.AccessType || null}
          >
            <ToggleButton
              size='small'
              name='AccessType'
              value='free'
            >
              Свободный
            </ToggleButton>
            <ToggleButton
              size='small'
              name='AccessType'
              value='passSystem'
            >
              Пропускная система
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Парковка</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Parking?.Type || null}
          >
            <ToggleButton
              size='small'
              name='Type'
              value='ground'
              data-key='Parking'
            >
              Наземная
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Type'
              value='multilevel'
              data-key='Parking'
            >
              Многоуровневая
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Type'
              value='underground'
              data-key='Parking'
            >
              Подземная
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Type'
              value='roof'
              data-key='Parking'
            >
              На крыше
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Количество мест</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='PlacesCount'
            inputProps={{ 'data-key': 'Parking' }}
            value={currentObject?.Parking?.PlacesCount || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Стоимость парковки</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='PriceMonthly'
            inputProps={{ 'data-key': 'Parking' }}
            value={currentObject?.Parking?.PriceMonthly || ''}
            onChange={(e) => handleChange(e)}
            disabled={currentObject?.Parking?.IsFree}
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='IsFree'
            sx={{ ml: '1rem' }}
            control={
              <Checkbox
                checked={currentObject?.Parking?.IsFree || false}
                inputProps={{ 'data-key': 'Parking' }}
                size='small'
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Бесплатная
              </span>
            }
          />
        </div>
      </div>
      <hr width='100%' />
      <span className='form__subtitle text'>О здании</span>
      <div className='field'>
        <div className='field__name text'>Год постройки</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='BuildYear'
            value={currentObject?.BuildYear || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Тип здания</div>
        <div className='field__action'>
          <Select
            value={currentObject?.Type || ''}
            name='Type'
            onChange={(event) => handleChange(event)}
            size='small'
            sx={{ minWidth: 223 }}
            displayEmpty
          >
            <MenuItem
              disabled
              value=''
            >
              <em>Не выбрано</em>
            </MenuItem>
            {selectList.Type.map((li, idx) => (
              <MenuItem
                key={idx}
                value={li.value}
              >
                {li.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

const selectList = {
  Type: [
    {
      name: 'Административное здание',
      value: 'administrativeBuilding',
    },
    {
      name: 'Бизнес-центр',
      value: 'businessCenter',
    },
    {
      name: 'Деловой центр',
      value: 'businessCenter2',
    },
    {
      name: 'Деловой дом',
      value: 'businessHouse',
    },
    {
      name: 'Бизнес-парк',
      value: 'businessPark',
    },
    {
      name: 'Бизнес-квартал',
      value: 'businessQuarter',
    },
    {
      name: 'Деловой-квартал',
      value: 'businessQuarter2',
    },
    {
      name: 'Объект свободного назначения',
      value: 'free',
    },
    {
      name: 'Производственный комплекс',
      value: 'industrialComplex',
    },
    {
      name: 'Индустриальный парк',
      value: 'industrialPark',
    },
    {
      name: 'Промплощадка',
      value: 'industrialSite',
    },
    {
      name: 'Производственно-складской комплекс',
      value: 'industrialWarehouseComplex',
    },
    {
      name: 'Логистический центр',
      value: 'logisticsCenter',
    },
    {
      name: 'Логистический комплекс',
      value: 'logisticsComplex',
    },
    {
      name: 'Логистический парк',
      value: 'logisticsPark',
    },
    {
      name: 'Особняк',
      value: 'mansion',
    },
    {
      name: 'Производственное здание',
      value: 'manufacturingFacility',
    },
    {
      name: 'Производственный цех',
      value: 'modular',
    },
    {
      name: 'Модульное здание',
      value: 'multifunctionalComplex',
    },
    {
      name: 'Офисно-гостиничный комплекс',
      value: 'officeAndHotelComplex',
    },
    {
      name: ' Офисно-жилой комплекс',
      value: 'officeAndResidentialComplex',
    },
    {
      name: 'Офисно-складское здание',
      value: 'officeAndWarehouse',
    },
    {
      name: 'Офисно-складской комплекс',
      value: 'officeAndWarehouseComplex',
    },
    {
      name: 'Офисное здание',
      value: 'officeBuilding',
    },
    {
      name: 'Офисный центр',
      value: 'officeCenter',
    },
    {
      name: 'Офисный комплекс',
      value: 'officeComplex',
    },
    {
      name: 'Офисно-производственный комплекс',
      value: 'officeIndustrialComplex',
    },
    {
      name: 'Офисный квартал',
      value: 'officeQuarter',
    },
    {
      name: 'Старый фонд',
      value: 'old',
    },
    {
      name: 'Другое',
      value: 'other',
    },
    {
      name: 'Аутлет',
      value: 'outlet',
    },
    {
      name: 'Имущественный комплекс',
      value: 'propertyComplex',
    },
    {
      name: 'Жилой комплекс',
      value: 'residentialComplex',
    },
    {
      name: 'Жилой дом',
      value: 'residentialHouse',
    },
    {
      name: 'Торгово-деловой комплекс',
      value: 'shoppingAndBusinessComplex',
    },
    {
      name: 'Торгово-общественный центр',
      value: 'shoppingAndCommunityCenter',
    },
    {
      name: 'Торгово-развлекательный центр',
      value: 'shoppingAndEntertainmentCenter',
    },
    {
      name: 'Торгово-складской комплекс',
      value: 'shoppingAndWarehouseComplex',
    },
    {
      name: 'Торговый центр',
      value: 'shoppingCenter',
    },
    {
      name: 'Торговый комплекс',
      value: 'shoppingComplex',
    },
    {
      name: 'Специализированный торговый центр',
      value: 'specializedShoppingCenter',
    },
    {
      name: 'Отдельно стоящее здание',
      value: 'standaloneBuilding',
    },
    {
      name: 'Технопарк',
      value: 'technopark',
    },
    {
      name: 'Торгово-выставочный комплекс',
      value: 'tradeAndExhibitionComplex',
    },
    {
      name: 'Торговый дом',
      value: 'tradingHouse',
    },
    {
      name: 'Торгово-офисный комплекс',
      value: 'tradingOfficeComplex',
    },
    {
      name: 'Склад',
      value: 'warehouse',
    },
    {
      name: ' Складской комплекс',
      value: 'warehouseComplex',
    },
  ],
};
