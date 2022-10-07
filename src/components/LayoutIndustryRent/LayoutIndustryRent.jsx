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

export const LayoutIndustryRent = ({ register, errors }) => {
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
        <div className='field__name text'>Сетка колон</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            name='ColumnGrid'
            value={currentObject?.ColumnGrid || ''}
            onChange={(e) => handleChange(e)}
            inputProps={{ placeholder: 'Пример: 9х3, 3х3' }}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Материал пола</div>
        <div className='field__action'>
          <Select
            value={currentObject?.FloorMaterialTypeType || ''}
            name='FloorMaterialTypeType'
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
            <MenuItem value={'asphalt'}>Асфальт</MenuItem>
            <MenuItem value={'concrete'}>Бетон</MenuItem>
            <MenuItem value={'laminate'}>Ламинат</MenuItem>
            <MenuItem value={'linoleum'}>Линолеум</MenuItem>
            <MenuItem value={'polymeric'}>Полимерный</MenuItem>
            <MenuItem value={'reinforcedConcrete'}>Железобетон</MenuItem>
            <MenuItem value={'selfLeveling'}>Наливной</MenuItem>
            <MenuItem value={'tile'}>Плитка</MenuItem>
            <MenuItem value={'wood'}>Деревянный</MenuItem>
          </Select>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Состояние</div>
        <div className='field__action'>
          <Select
            value={currentObject?.ConditionType || ''}
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
        <div className='field__name text'>Ворота</div>
        <div className='field__action'>
          <Select
            value={currentObject?.FloorMaterialTypeType || ''}
            name='FloorMaterialTypeType'
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
            <MenuItem value={'atZero'}>На нулевой отметке</MenuItem>
            <MenuItem value={'dockType'}>Докового типа</MenuItem>
            <MenuItem value={'onRamp'}>На пандусе</MenuItem>
          </Select>
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
        <div className='field__name text'>Парковка</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Parking?.PurposeType || null}
          >
            <ToggleButton
              size='small'
              name='PurposeType'
              value='passenger'
              data-key='Parking'
            >
              Для легковесного транспорта
            </ToggleButton>
            <ToggleButton
              size='small'
              name='PurposeType'
              value='cargo'
              data-key='Parking'
            >
              Для грузового транспорта
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Тип парковки</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Parking?.LocationType || null}
          >
            <ToggleButton
              size='small'
              name='LocationType'
              value='internal'
              data-key='Parking'
            >
              На территории объекта
            </ToggleButton>
            <ToggleButton
              size='small'
              name='LocationType'
              value='external'
              data-key='Parking'
            >
              За территорией объекта
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
        <div className='field__name text'>Стоимость въезда</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='PriceEntry'
            inputProps={{ 'data-key': 'Parking' }}
            value={currentObject?.Parking?.PriceEntry || ''}
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
      <div className='field'>
        <div className='field__name field__name_top text'>Дополнительные услуги </div>
        <div className='field__action'>
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasSafeCustody'
            sx={{ m: 0, width: '100%' }}
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
                Ответственное хранение
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='IsCustoms'
            sx={{ m: 0, width: '100%' }}
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
                Таможня
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasTransportServices'
            sx={{ m: 0, width: '100%' }}
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
                Транспортные услуги
              </span>
            }
          />
        </div>
      </div>
      <hr width='100%' />
      <span className='form__subtitle text'>О здании</span>
      <div className='field'>
        <div className='field__name text'>Название</div>
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
              placeholder: 'Например: БЦ Айсберг',
              'data-key': 'Building'
            }}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Год постройки</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='BuildYear'
            value={currentObject?.Building?.BuildYear || ''}
            onChange={(e) => handleChange(e)}
            inputProps={{
              'data-key': 'Building'
            }}
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
      <div className='field'>
        <div className='field__name text'>Класс здания</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Building?.ClassType || null}
            sx={{
              width: '100%'
            }}
          >
            <ToggleButton
              size='small'
              sx={{ width: '15%' }}
              name='ClassType'
              value='a'
              data-key='Building'
            >
              А
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: '15%' }}
              name='ClassType'
              value='b'
              data-key='Building'
            >
              B
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: '15%' }}
              name='ClassType'
              value='c'
              data-key='Building'
            >
              C
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: '15%' }}
              name='ClassType'
              value='d'
              data-key='Building'
            >
              D
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Площадь здания, м<sup>2</sup></div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='BuildYear'
            value={currentObject?.Building?.TotalArea || ''}
            onChange={(e) => handleChange(e)}
            inputProps={{
              'data-key': 'Building'
            }}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Участок, га</div>
        <div className='field__action' style={{ gap: '1rem' }}>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            type='number'
            name='Area'
            value={currentObject?.Land?.Area || ''}
            onChange={(e) => handleChange(e)}
            inputProps={{
              'data-key': 'Land'
            }}
          />
          <RadioGroup
            value={currentObject?.Land?.Type}
            name='Type'
            onChange={(e) => handleChange(e)}
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <FormControlLabel
              value='owned'
              control={<Radio size='small' inputProps={{ 'data-key': 'Land' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  В собственности
                </span>
              }
            />
            <FormControlLabel
              value='rent'
              control={<Radio size='small' inputProps={{ 'data-key': 'Land' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  В аренде
                </span>
              }
            />
          </RadioGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Категория</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.Building?.StatusType || null}
            sx={{
              width: '100%'
            }}
          >
            <ToggleButton
              size='small'
              name='StatusType'
              value='operational'
              data-key='Building'
            >
              Действующее
            </ToggleButton>
            <ToggleButton
              size='small'
              name='StatusType'
              value='project'
              data-key='Building'
            >
              Проект
            </ToggleButton>
            <ToggleButton
              size='small'
              name='StatusType'
              value='underConstruction'
              data-key='Building'
            >
              Строящееся
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Управляющая компания</div>
        <div className='field__action'>
          <TextField
            autoComplete='off'
            variant='outlined'
            size='small'
            name='Name'
            fullWidth
            value={currentObject?.Building?.ManagementCompany || ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Вентилиция</div>
        <div className='field__action'>
          <RadioGroup
            value={currentObject?.Building?.VentilationType}
            name='Type'
            onChange={(e) => handleChange(e)}
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <FormControlLabel
              value='forced'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Приточная
                </span>
              }
            />
            <FormControlLabel
              value='natural'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Естественная
                </span>
              }
            />
            <FormControlLabel
              value='no'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Нет
                </span>
              }
            />
          </RadioGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Кондиционирование</div>
        <div className='field__action'>
          <RadioGroup
            value={currentObject?.Building?.ConditioningType}
            name='Type'
            onChange={(e) => handleChange(e)}
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <FormControlLabel
              value='central'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Центральное
                </span>
              }
            />
            <FormControlLabel
              value='local'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Местное
                </span>
              }
            />
            <FormControlLabel
              value='no'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Нет
                </span>
              }
            />
          </RadioGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name text'>Отопление</div>
        <div className='field__action'>
          <RadioGroup
            value={currentObject?.Building?.HeatingType}
            name='Type'
            onChange={(e) => handleChange(e)}
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <FormControlLabel
              value='autonomous'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Автономное
                </span>
              }
            />
            <FormControlLabel
              value='central'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Центральное
                </span>
              }
            />
            <FormControlLabel
              value='no'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Нет
                </span>
              }
            />
          </RadioGroup>
        </div>
      </div>
      <div className='field'>
        <div className='field__name field__name_top text'>Система пожаротушения</div>
        <div className='field__action'>
          <RadioGroup
            value={currentObject?.Building?.ExtinguishingSystemType}
            name='Type'
            onChange={(e) => handleChange(e)}
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <FormControlLabel
              value='hydrant'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Гидрантная
                </span>
              }
            />
            <FormControlLabel
              value='sprinkler'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Спринклерная
                </span>
              }
            />
            <FormControlLabel
              value='powder'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Порошковая
                </span>
              }
            />
            <FormControlLabel
              value='gas'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Газовая
                </span>
              }
            />
            <FormControlLabel
              value='alarm'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Сигнализация
                </span>
              }
            />
            <FormControlLabel
              value='no'
              control={<Radio size='small' inputProps={{ 'data-key': 'Building' }} />}
              label={
                <span
                  className='text'
                  style={{ fontSize: 14 }}
                >
                  Нет
                </span>
              }
            />
          </RadioGroup>
        </div>
      </div>
      <hr width='100%' />
      <span className='form__subtitle text'>Инфраструктура</span>
      <div className='field'>
        <div className='field__action_columns-three'>
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasBuffet'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasBuffet || false}
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
                Буфет
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasCanteen'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasCanteen || false}
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
                Столовая
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasCentralReception'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasCentralReception || false}
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
                Центральная рецепция
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasHotel'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasHotel || false}
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
                Гостиница
              </span>
            }
          />
          <FormControlLabel
            onChange={(event) => handleChange(event)}
            name='HasOfficeSpace'
            control={
              <Checkbox
                checked={currentObject?.Infrastructure?.HasOfficeSpace || false}
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
                Офисные помещения
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
