import Provider from './provider/Provider';
import './global.scss';
import Header from './components/Header/Header';
import UsersSearchBox from './components/UsersSearchBox/UsersSearchBox';
function App() {
  return (
    <Provider>
      <div className="wrapper">
        <div className="container">
          <Header/>
          <UsersSearchBox/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
