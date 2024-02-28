import React, { FC } from 'react';
import './style.scss';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
      <h3 className="title truncate">{text}</h3>
  );
};

export default Title;
