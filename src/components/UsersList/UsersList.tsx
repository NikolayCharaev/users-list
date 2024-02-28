import Title from '../../common/Title/Title';
import Preloader from '../Preloader/Preloader';
import userIcon from '../../assets/user-image.png';
import './style.scss';

import { setOneUser } from '../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';

import { motion } from 'framer-motion';
import { User } from '../../types/index';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

interface IUserListProps {
  users: User[];
  status: string;
  searchValue: string;
}

const UsersList = ({ users, status, searchValue } : IUserListProps) => {
  const dispatch = useDispatch();
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
        <motion.ul variants={container} initial="hidden" animate="visible" className="users__list">
          {users.map((elem : User) => {
            return (
              <motion.li
                variants={item}
                key={elem.id}
                onClick={() => dispatch(setOneUser(elem))}
                className="users__item">
                <img className="users__image" src={userIcon} alt="user-icon" />
                <div className="users__info">
                  <Title text={elem.name} />
                  <p className="truncate">{elem.email}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      )}
    </div>
  );
};

export default UsersList;
