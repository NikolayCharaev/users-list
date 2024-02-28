import React from 'react';
import Title from '../../common/Title/Title';
import Preloader from '../Preloader/Preloader';
import userIcon from '../../assets/user-image.png';
import './style.scss';

const UsersList = ({ users, status, searchValue }) => {
  console.log(status);
  return (
    <div className="users">
      <Title text="Результаты" />
      <p>
        {searchValue === '' && 'начните поиск '}
        {status === 'rejected' && 'Произошла ошибка, попробуйте другой запрос'}
        {status === 'empty' && 'Ничего не найдено'}
      </p>
      {status === 'pending' && <Preloader />}

      {users.length > 0 && (
        <ul className="users__list">
          {users.map(({ name, username, email, phone, website }) => {
            return (
              <li className="users__item">
                <img className="users__image" src={userIcon} alt="user-icon" />
                <div className="users__info">
                  <Title text={name} />
                  <p className='truncate'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorum, placeat modi beatae laborum magnam blanditiis, inventore harum possimus, eligendi quisquam provident neque et facere minima debitis amet laboriosam doloribus.</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
