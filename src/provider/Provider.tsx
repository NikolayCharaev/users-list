import { FC, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';

interface IProviderProps {
  children: ReactNode;
}


const Provider: React.FC<IProviderProps> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
};

export default Provider;
