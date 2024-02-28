import { useSelector } from 'react-redux';
import userIcon from '../../assets/user-image.png';
import Title from '../../common/Title/Title';
import './style.scss';
import { RootState } from '../../redux/store';
import { motion, AnimatePresence } from 'framer-motion';


interface User {
    name: string;
    email: string;
    phone: string;
  }

const OneUser = () => {
  const { oneUser } = useSelector((state : RootState) => state.usersSlice);
  const user = oneUser as User; 
  return (
    <div className="user">
      {Object.keys(oneUser).length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="user-not">
          <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="user-there">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              className="">
              <img src={userIcon} alt="user" />
            </motion.div>
            <div className="user-content">
              <Title text={user.name} />
              <p>
                <b>email: </b>
                {user.email}
              </p>
              <p>
                <b>phone: </b>
                {user.phone}
              </p>

              <div>
                <Title text="О себе:" />
                <motion.p initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default OneUser;
