import { useState } from 'react';
import { useAppDispatch } from './store';
import { updateData } from './store';

const DataUpdateForm = ({ id }) => {
  const [data, setData] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data) return;

    dispatch(updateData({ id, data }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={()=> dispatch=({data: 'id'})} type="submit">Update</button>
    </form>
  );
};

export default DataUpdateForm;
