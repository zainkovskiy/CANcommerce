import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Type } from 'components/Type';
import { LayoutContext } from 'components/Layout';
import { LayoutOfficeRent } from 'components/LayoutOfficeRent';
import { LayoutBuildingRent } from 'components/LayoutBuildingRent';
import { LayoutShoppingAreaRent } from 'components/LayoutShoppingAreaRent';
import { LayoutFreeAppointmentObjectRent } from 'components/LayoutFreeAppointmentObjectRent';
import { LayoutIndustryRent } from 'components/LayoutIndustryRent';
import { LayoutWarehouseRent } from 'components/LayoutWarehouseRent';
import { LayoutGarageRent } from 'components/LayoutGarageRent';
import { LayoutCommercialLandRent } from 'components/LayoutCommercialLandRent';

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
    if (currentObject.Category === 'buildingRent') {
      return (
        <LayoutBuildingRent
          register={register}
          errors={errors}
        />
      );
    }
    if (currentObject.Category === 'shoppingAreaRent') {
      return (
        <LayoutShoppingAreaRent
          register={register}
          errors={errors}
        />
      );
    }
    if (currentObject.Category === 'freeAppointmentObjectRent') {
      return (
        <LayoutFreeAppointmentObjectRent
          register={register}
          errors={errors}
        />
      );
    }
    if (currentObject.Category === 'industryRent') {
      return (
        <LayoutIndustryRent
          register={register}
          errors={errors}
        />
      );
    }
    if (currentObject.Category === 'warehouseRent') {
      return (
        <LayoutWarehouseRent
          register={register}
          errors={errors}
        />
      );
    }
    if (currentObject.Category === 'garageRent') {
      return (
        <LayoutGarageRent
          register={register}
          errors={errors}
        />
      );
    }
    if (currentObject.Category === 'commercialLandRent') {
      return (
        <LayoutCommercialLandRent
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
