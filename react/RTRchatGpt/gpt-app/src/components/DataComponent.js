import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/reducers';

const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData({ id: 1, newData: { foo: 'bar' } }));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default DataComponent;
