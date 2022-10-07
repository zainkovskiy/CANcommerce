import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { LayoutContext } from 'components/Layout';

export const LayoutGarageRent = ({ register, errors }) => {
  const { currentObject, handleChange } = useContext(LayoutContext);
  return (
    <>
      <span className='form__subtitle text'>Об объекте</span>
      <div className='field'>
        <div className='field__name text'>Тип</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Garage?.Type || null}
            {...register('Type', {
              required: true,
              onChange: (e) => handleChange(e),
            })}
          >
            <ToggleButton
              size='small'
              name='Type'
              value='box'
              data-key='Garage'
            >
              Бокс
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Type'
              value='garage'
              data-key='Garage'
            >
              Гараж
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Type'
              value='parkingPlace'
              data-key='Garage'
            >
              Машиноместо
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>
          <span>
            Площадь, м<sup>2</sup>
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
              required: 'Укажите площадь',
              onChange: (e) => handleChange(e),
            })}
          />
          <span className='field__error-text text'>
            {errors?.TotalArea?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Статус</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Garage?.Status || null}
          >
            <ToggleButton
              size='small'
              name='Status'
              value='byProxy'
              data-key='Garage'
            >
              По доверенности
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Status'
              value='cooperative'
              data-key='Garage'
            >
              Кооператив
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Status'
              value='ownership'
              data-key='Garage'
            >
              Собственность
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <hr width='100%' />
      <span className='form__subtitle text'>О здании</span>
      <div className='field'>
        <div className='field__name text'>ГСК</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            name='Name'
            fullWidth
            value={currentObject?.Building?.Name || ''}
            onChange={(e) => handleChange(e)}
            inputProps={{
              'data-key': 'Building'
            }}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Тип парковки</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Building?.Parking || null}
            sx={{
              width: '100%'
            }}
          >
            <ToggleButton
              size='small'
              name='Parking'
              value='ground'
              data-key='Building'
            >
              Наземная
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Parking'
              value='multilevel'
              data-key='Building'
            >
              Многоуровневая
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Parking'
              value='open'
              data-key='Building'
            >
              Открытая
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Parking'
              value='roof'
              data-key='Building'
            >
              На крыше
            </ToggleButton>
            <ToggleButton
              size='small'
              name='Parking'
              value='underground'
              data-key='Building'
            >
              Подземная
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name field__name_top text'>Технические характеристики</div>
        <div className='field__action'>
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasLight'
            sx={{ m: 0, width: '100%' }}
            control={
              <Checkbox
                checked={currentObject?.HasLight || false}
                size='small'
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Свет
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasWater'
            sx={{ m: 0, width: '100%' }}
            control={
              <Checkbox
                checked={currentObject?.HasWater || false}
                size='small'
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Вода
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasElectricity'
            sx={{ m: 0, width: '100%' }}
            control={
              <Checkbox
                checked={currentObject?.HasElectricity || false}
                size='small'
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Электричество
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasExtinguishingSystem'
            sx={{ m: 0, width: '100%' }}
            control={
              <Checkbox
                checked={currentObject?.HasExtinguishingSystem || false}
                size='small'
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Система пожаротушения
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasHeating'
            sx={{ m: 0, width: '100%' }}
            control={
              <Checkbox
                checked={currentObject?.HasHeating || false}
                size='small'
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Отопление
              </span>
            }
          />
        </div>
      </div>
      <hr width='100%' />
      <span className='form__subtitle text'>Инфраструктура</span>
      <div className='field'>
        <div className='field__action_columns-three'>
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasCarWash'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasCarWash || false}
                size='small'
                inputProps={{
                  'data-key': 'Infrastructure'
                }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Автомойка
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasCarService'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasCarService || false}
                size='small'
                inputProps={{
                  'data-key': 'Infrastructure'
                }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Автосервис
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasTire'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasTire || false}
                size='small'
                inputProps={{
                  'data-key': 'Infrastructure'
                }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Шиномонтаж
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasInspectionPit'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasInspectionPit || false}
                size='small'
                inputProps={{
                  'data-key': 'Infrastructure'
                }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Смотровая яма
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasVideoSurveillance'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasVideoSurveillance || false}
                size='small'
                inputProps={{
                  'data-key': 'Infrastructure'
                }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Видеонаблюдение
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasHourSecurity'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasHourSecurity || false}
                size='small'
                inputProps={{
                  'data-key': 'Infrastructure'
                }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Круглосуточная охрана
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasAutomaticGates'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasAutomaticGates || false}
                size='small'
                inputProps={{
                  'data-key': 'Infrastructure'
                }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Автоматические ворота
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasEntryByPass'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasEntryByPass || false}
                size='small'
                inputProps={{
                  'data-key': 'Infrastructure'
                }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Въезд по пропускам
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasBasement'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasBasement || false}
                size='small'
                inputProps={{
                  'data-key': 'Infrastructure'
                }}
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Подвал/погреб
              </span>
            }
          />
        </div>
      </div>
      <hr width='100%' />
      <span className='form__subtitle text'>Цена и условия сделки</span>
      <div className='field'>
        <div className='field__name text'>Арендная плата</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <Select
            value={currentObject?.PaymentPeriod || ''}
            name='PaymentPeriod'
            size='small'
            sx={{ minWidth: 223 }}
            displayEmpty
            error={errors?.PaymentPeriod ? true : false}
            {...register('PaymentPeriod', {
              required: 'Укажите период',
              onChange: (e) => handleChange(e),
            })}
          >
            <MenuItem
              disabled
              value=''
            >
              <em>Не выбрано</em>
            </MenuItem>
            <MenuItem value={'annual'}>
              За год
            </MenuItem>
            <MenuItem value={'monthly'}>За месяц</MenuItem>
          </Select>
          <span className='field__error-text text'>
            {errors?.PaymentPeriod?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>
        </div>
        <div className='field__action' style={{ alignItems: 'center' }}>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            value={currentObject?.BargainTerms?.PriceType || ''}
            error={errors?.PriceType ? true : false}
            inputProps={{
              'data-key': 'BargainTerms'
            }}
            {...register('PriceType', {
              required: 'Укажите цену',
              onChange: (e) => handleChange(e),
            })}
          />
          <span className='text' style={{ marginLeft: '0.5rem' }}>
            &#8381;
          </span>
          <span className='field__error-text text'>
            {errors?.PriceType?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Налог</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <Select
            value={currentObject?.VatType || ''}
            name='VatType'
            size='small'
            sx={{ minWidth: 223 }}
            displayEmpty
            error={errors?.VatType ? true : false}
            {...register('VatType', {
              required: 'Укажите налог',
              onChange: (e) => handleChange(e),
            })}
          >
            <MenuItem
              disabled
              value=''
            >
              <em>Не выбрано</em>
            </MenuItem>
            <MenuItem value={'included'}>НДС включен</MenuItem>
            <MenuItem value={'notIncluded'}>НДС не облагается</MenuItem>
            <MenuItem value={'usn'}>УСН (упрощенная система налогообложения)</MenuItem>
          </Select>
          <span className='field__error-text text'>
            {errors?.VatType?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Тип аренды</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <ToggleButtonGroup
            color='primary'
            exclusive
            value={currentObject?.BargainTerms?.LeaseType || null}
            sx={{
              width: '100%'
            }}
            {...register('LeaseType', {
              require: 'укажите тип аренды',
              onChange: (e) => handleChange(e)
            })}
          >
            <ToggleButton
              size='small'
              name='LeaseType'
              value='direct'
              data-key='BargainTerms'
            >
              Прямая аренда
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LeaseType'
              value='sublease'
              data-key='BargainTerms'
            >
              Субаренда
            </ToggleButton>
          </ToggleButtonGroup>
          <span className='field__error-text text'>
            {errors?.LeaseType?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>
          Минимальный срок аренды, мес
        </div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            value={currentObject?.BargainTerms?.MinLeaseTerm || ''}
            inputProps={{
              'data-key': 'BargainTerms'
            }}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Предоплата</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <Select
            value={currentObject?.PrepayMonths || ''}
            name='PrepayMonths'
            size='small'
            sx={{ minWidth: 223 }}
            displayEmpty
            error={errors?.PrepayMonths ? true : false}
            {...register('PrepayMonths', {
              required: 'Укажите период',
              onChange: (e) => handleChange(e),
            })}
          >
            <MenuItem
              disabled
              value=''
            >
              <em>Не выбрано</em>
            </MenuItem>
            <MenuItem value={1}>1 месяц</MenuItem>
            <MenuItem value={2}>2 месяца</MenuItem>
            <MenuItem value={3}>3 месяца</MenuItem>
            <MenuItem value={4}>4 месяца</MenuItem>
            <MenuItem value={5}>5 месяцев</MenuItem>
            <MenuItem value={6}>6 месяцев</MenuItem>
            <MenuItem value={7}>7 месяцев</MenuItem>
            <MenuItem value={8}>8 месяцев</MenuItem>
            <MenuItem value={9}>9 месяцев</MenuItem>
            <MenuItem value={10}>10 месяцев</MenuItem>
            <MenuItem value={11}>11 месяцев</MenuItem>
            <MenuItem value={12}>1 год</MenuItem>
          </Select>
          <span className='field__error-text text'>
            {errors?.PrepayMonths?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name field__name_top text'>Бонус агенту</div>
        <div className='field__action'>
          <p className='text' style={{ margin: '0 0 1rem 0', fontSize: 12 }}>Вы можете указать бонус, который оплатите агенту в случае успешной сделки.
            Данное поле будет видно пользователям на профессиональных тарифных планах.
            Вы можете указать фиксированную сумму или процент от сделки.</p>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.AgentBonus?.PaymentType || null}
            sx={{
              width: '100%'
            }}
          >
            <ToggleButton
              size='small'
              name='PaymentType'
              value='no'
              data-key='AgentBonus'
            >
              Нет
            </ToggleButton>
            <ToggleButton
              size='small'
              name='PaymentType'
              value='fixed'
              data-key='AgentBonus'
            >
              Фиксированный
            </ToggleButton>
            <ToggleButton
              size='small'
              name='PaymentType'
              value='percent'
              data-key='AgentBonus'
            >
              Процент
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      {
        (currentObject?.AgentBonus?.PaymentType && currentObject?.AgentBonus?.PaymentType !== 'no') &&
        <div className='field'>
          <div className='field__name text'>
          </div>
          <div className='field__action' style={{ alignItems: 'center' }}>
            <span className='field__error-icon'></span>
            <TextField
              autoComplete='off'
              variant='outlined'
              size='small'
              type='number'
              value={currentObject?.AgentBonus?.Value || ''}
              error={errors?.Value ? true : false}
              inputProps={{
                'data-key': 'AgentBonus',
                placeholder: 'Сумма'
              }}
              {...register('Value', {
                required: 'Укажите бонус',
                onChange: (e) => handleChange(e),
              })}
            />
            {
              currentObject?.AgentBonus?.PaymentType === 'fixed' &&
              <span className='text' style={{ marginLeft: '0.5rem' }}>
                &#8381;
              </span>
            }
            {
              currentObject?.AgentBonus?.PaymentType === 'percent' &&
              <span className='text' style={{ marginLeft: '0.5rem' }}>
                &#37;
              </span>
            }
            <span className='field__error-text text'>
              {errors?.Value?.message || ''}
            </span>
          </div>
        </div>
      }
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
