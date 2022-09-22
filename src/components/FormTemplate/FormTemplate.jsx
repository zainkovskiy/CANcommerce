import React, { useContext } from 'react';

import { Type } from 'components/Type';
import { LayoutContext } from 'components/Layout';
import { LayoutOfficeRent } from 'components/LayoutOfficeRent';

import './FormTemplate.scss';

export const FormTemplate = () => {
  const { currentObject } = useContext(LayoutContext);
  const getTemplate = () => {
    if (currentObject.Category === 'officeRent') {
      return <LayoutOfficeRent />;
    }
  };
  return (
    <div className='form'>
      <Type />
      {getTemplate()}
    </div>
  );
};
