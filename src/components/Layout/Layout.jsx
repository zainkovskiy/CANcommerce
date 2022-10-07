import React, { createContext, useState, useEffect } from 'react';

import { Linear } from 'components/Linear';

export const LayoutContext = createContext();

import { requestData } from '../../Api';

export const Layout = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [currentObject, setCurrentObject] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    requestData()
      .then((res) => {
        if (res.status === 200) {
          // setData(res.data);
          setData({
            Category: 'officeRent',
          });
          setCurrentObject({
            Category: 'officeRent',
          });
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const setTypeValue = (e) => {
    setCurrentObject({ ...data, Category: e.target.value });
  };

  const getValue = (event) => {
    const name = event.target.name;
    if (name === 'IsOccupied') {
      return event.target.value === 'да' ? true : false;
    }
    if (name === 'HasRamp' || name === 'HasShopWindows' || name === 'FurniturePresence' || name === 'HasEncumbrances') {
      return event.target.value === 'yes' ? true : false;
    }
    if (name === 'Type' && event.target.dataset.key === 'OpeningHours') {
      return event.target.checked ? 'roundTheClock' : 'specific'
    }
    if (event.target.type === 'checkbox') {
      return event.target.checked;
    }
    return event.target.value;
  };

  const handleChange = (event) => {
    console.log(event);
    const name = event.target.name;
    const value = getValue(event);
    const key = event.target?.dataset?.key;

    setCurrentObject((prevState) => ({
      ...prevState,
      [key || name]: key ? { ...prevState[key], [name]: value } : value,
    }));
  };

  const whatsRender = () => {
    if (loading) {
      return <Linear />;
    }
    if (error) {
      return <span className='text'>error</span>;
    }
    return props.children;
  };

  const value = {
    currentObject: currentObject,
    handleChange: handleChange,
    setTypeValue: setTypeValue,
  };

  return (
    <>
      <LayoutContext.Provider value={value}>
        {whatsRender()}
      </LayoutContext.Provider>
    </>
  );
};
