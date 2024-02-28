import SearchForm from '../SearchForm/SearchForm';
import UsersList from '../UsersList/UsersList';

import { useSelector } from 'react-redux';
import OneUser from '../OneUser/OneUser';
import { RootState } from '../../redux/store';

import './style.scss';
const UsersSearchBox = () => {
  const { searchResult, status, searchValue } = useSelector((state :RootState) => state.usersSlice);
  return (
    <div className="search">
      <div className="search__left">
        <SearchForm />
        <UsersList users={searchResult} status={status} searchValue={searchValue} />
      </div>
      <div className="search__right">
        <OneUser />
      </div>
    </div>
  );
};

export default UsersSearchBox;
