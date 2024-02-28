import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import UsersList from '../UsersList/UsersList';

import { useSelector } from 'react-redux';

import './style.scss';
const UsersSearchBox = () => {
  const { searchResult, status,searchValue } = useSelector((state) => state.usersSlice);
  return (
    <div className="search">
      <div className="search__left">
        <SearchForm />
        <UsersList users={searchResult} status={status} searchValue={searchValue} />
      </div>
      <div className="search__right">3</div>
    </div>
  );
};

export default UsersSearchBox;
