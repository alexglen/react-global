import Home from '../components/Home/Home';
import MainHeader from '../components/MainHeader/MainHeader';

if (typeof window === 'undefined') {
  global.window = {};
}

const App = () => {
  return (
    <header className='header-content'>
      <MainHeader />
      <Home />
    </header>
  );
};

export default App;
