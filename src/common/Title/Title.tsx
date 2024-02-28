import  { FC } from 'react';
import './style.scss';
import { motion } from 'framer-motion';
interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="title truncate">
      {text}
    </motion.h3>
  );
};

export default Title;
