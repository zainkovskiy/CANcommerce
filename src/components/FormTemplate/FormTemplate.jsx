import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Type } from 'components/Type';
import { LayoutContext } from 'components/Layout';
import { LayoutOfficeRent } from 'components/LayoutOfficeRent';

import './FormTemplate.scss';

export const FormTemplate = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const { currentObject } = useContext(LayoutContext);
  const getTemplate = () => {
    if (currentObject.Category === 'officeRent') {
      return (
        <LayoutOfficeRent
          register={register}
          errors={errors}
        />
      );
    }
  };
  return (
    <div className='form'>
      <Type />
      <hr width='100%' />
      {getTemplate()}
    </div>
  );
};
