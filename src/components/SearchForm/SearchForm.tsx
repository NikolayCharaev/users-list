import { useState, useEffect, ChangeEvent } from 'react';
import Title from '../../common/Title/Title';
import './style.scss';
import { fetchSearchUsers,  setOneUser, setSearchValue } from '../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'usehooks-ts';

import { motion } from 'framer-motion';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 1000);

  useEffect(() => {
          //@ts-ignore
    dispatch(setSearchValue(value)); 
    if (value.length > 0) {
      //@ts-ignore
      dispatch(fetchSearchUsers(value));
    }

    if (value.length <= 0) {
      dispatch(setOneUser({}));
    }
  }, [debouncedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="form">
      <div className="form__top">
        <Title text={'Поиск сотрудников'} />
      </div>
      <form>
        <motion.input
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="form__input"
          placeholder="Введите Id или имя "
          type="text"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchForm;
