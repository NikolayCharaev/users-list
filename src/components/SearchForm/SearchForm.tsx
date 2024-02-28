import { useState, useEffect, ChangeEvent } from 'react';
import Title from '../../common/Title/Title';
import './style.scss';
import CustomInput from '../../common/DebounceInput/Input';
import { fetchSearchUsers, setSearchValue } from '../../redux/slices/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from 'usehooks-ts';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 1000);

  useEffect(() => {
    console.log('HELLO');
    dispatch(setSearchValue(value));

    if (value.length > 0) {
      dispatch(fetchSearchUsers(value));
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
        <input
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
