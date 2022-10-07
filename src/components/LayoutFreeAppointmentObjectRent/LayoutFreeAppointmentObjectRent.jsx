import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { LayoutContext } from 'components/Layout';

export const LayoutFreeAppointmentObjectRent = ({ register, errors }) => {
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
        <div className='field__name text'>Витринные окна</div>
        <div className='field__action'>
          <ToggleButtonGroup
            color='primary'
            exclusive
            onChange={(event) => handleChange(event)}
            value={currentObject?.HasShopWindows ? 'yes' : 'no'}
          >
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='HasShopWindows'
              value='yes'
            >
              есть
            </ToggleButton>
            <ToggleButton
              size='small'
              sx={{ width: 100 }}
              name='HasShopWindows'
              value='no'
            >
              Нет
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
        <div className='field__name text'>Вход</div>
        <div className='field__action'>
          <Select
            value={currentObject?.HouseLineType || ''}
            name='HouseLineType'
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
            <MenuItem value={'first'}>Первая</MenuItem>
            <MenuItem value={'second'}>Вторая</MenuItem>
            <MenuItem value={'other'}>Иная</MenuItem>
          </Select>
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
