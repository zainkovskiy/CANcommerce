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

export const LayoutCommercialLandRent = ({ register, errors }) => {
  const { currentObject, handleChange } = useContext(LayoutContext);
  return (
    <>
      <span className='form__subtitle text'>Об объекте</span>
      <div className='field'>
        <div className='field__name text'>Площадь участка, га</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='Area'
            value={currentObject?.Land?.Area || ''}
            error={errors?.Area ? true : false}
            {...register('Area', {
              required: 'Укажите площадь участка',
              onChange: (e) => handleChange(e),
            })}
            inputProps={{
              'data-key': 'Land'
            }}
          />
          <span className='field__error-text text'>
            {errors?.Area?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Категория земли</div>
        <div className='field__action'>
          <span className='field__error-icon'></span>
          <Select
            value={currentObject?.Status || ''}
            name='Status'
            size='small'
            sx={{ minWidth: 223 }}
            displayEmpty
            error={errors?.Status ? true : false}
            {...register('Status', {
              required: 'Укажите катугорию земли',
              onChange: (e) => handleChange(e),
            })}
          >
            <MenuItem
              disabled
              value=''
            >
              <em>Не выбрано</em>
            </MenuItem>
            <MenuItem value={'forAgriculturalPurposes'}>
              Участок сельскохозяйственного назначения
            </MenuItem>
            <MenuItem value={'industryTransportCommunications'}>
              Участок промышленности, транспорта, связи и иного не сельхоз. назначения
            </MenuItem>
            <MenuItem value={'settlements'}>
              Поселений
            </MenuItem>
          </Select>
          <span className='field__error-text text'>
            {errors?.Status?.message || ''}
          </span>
        </div>
      </div>
      <div className='field'>
        <div className='field__name field__name_top text'>Вид разрешенного использования</div>
        <div className='field__action' style={{ gap: '1rem' }}>
          <Select
            value={currentObject?.PermittedUseType || ''}
            name='PermittedUseType'
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
            <MenuItem value={'agricultural'}>
              Cельскохозяйственное использование
            </MenuItem>
            <MenuItem value={'businessManagement'}>
              Деловое управление
            </MenuItem>
            <MenuItem value={'commonUseArea'}>
              Общее пользование территории
            </MenuItem>
            <MenuItem value={'highriseBuildings'}>
              Высотная застройка
            </MenuItem>
            <MenuItem value={'hotelAmenities'}>
              Гостиничное обслуживание
            </MenuItem>
            <MenuItem value={'individualHousingConstruction'}>
              Индивидуальное жилищное строительство (ИЖС)
            </MenuItem>
            <MenuItem value={'industry'}>
              Промышленность
            </MenuItem>
            <MenuItem value={'leisure'}>
              Отдых (рекреация)
            </MenuItem>
            <MenuItem value={'lowriseHousing'}>
              Малоэтажное жилищное строительство (МЖС)
            </MenuItem>
            <MenuItem value={'publicUseOfCapitalConstruction'}>
              Общественное использование объектов капитального строительства
            </MenuItem>
            <MenuItem value={'serviceVehicles'}>
              Обслуживание автотранспорта
            </MenuItem>
            <MenuItem value={'shoppingCenters'}>
              Торговые центры
            </MenuItem>
            <MenuItem value={'warehouses'}>
              Склады
            </MenuItem>
          </Select>
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='PossibleToChangePermitedUseType'
            sx={{ m: 0 }}
            control={
              <Checkbox
                checked={currentObject?.PossibleToChangePermitedUseType || false}
                size='small'
              />
            }
            label={
              <span
                className='text'
                style={{ fontSize: 12 }}
              >
                Возможно изменить вид разрешённого использования
              </span>
            }
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Наличие обременения</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.HasEncumbrances ? 'yes' : 'no'}
          >
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='HasEncumbrances'
              value='yes'
            >
              есть
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='HasEncumbrances'
              value='no'
            >
              Нет
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Электричество</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Electricity?.LocationType || null}
          >
            <ToggleButton
              size='small'
              name='LocationType'
              value='border'
              data-key='Electricity'
            >
              По границе участка
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LocationType'
              value='location'
              data-key='Electricity'
            >
              На участке
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LocationType'
              value='no'
              data-key='Electricity'

            >
              Нет
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Газ</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Gas?.LocationType || null}
          >
            <ToggleButton
              size='small'
              name='LocationType'
              value='border'
              data-key='Gas'
            >
              По границе участка
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LocationType'
              value='location'
              data-key='Gas'
            >
              На участке
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LocationType'
              value='no'
              data-key='Gas'

            >
              Нет
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Канализация</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Drainage?.LocationType || null}
          >
            <ToggleButton
              size='small'
              name='LocationType'
              value='border'
              data-key='Drainage'
            >
              По границе участка
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LocationType'
              value='location'
              data-key='Drainage'
            >
              На участке
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LocationType'
              value='no'
              data-key='Drainage'

            >
              Нет
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Водоснабжение</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Water?.LocationType || null}
          >
            <ToggleButton
              size='small'
              name='LocationType'
              value='border'
              data-key='Water'
            >
              По границе участка
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LocationType'
              value='location'
              data-key='Water'
            >
              На участке
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LocationType'
              value='no'
              data-key='Water'
            >
              Нет
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Водоснабжение</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.DrivewayType|| null}
          >
            <ToggleButton
              size='small'
              name='DrivewayType'
              value='asphalt'
            >
              Асфальтированная дорога
            </ToggleButton>
            <ToggleButton
              size='small'
              name='DrivewayType'
              value='ground'
            >
              Грунтовая дорога
            </ToggleButton>
            <ToggleButton
              size='small'
              name='DrivewayType'
              value='no'
            >
              Нет
            </ToggleButton>
          </ToggleButtonGroup>
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
