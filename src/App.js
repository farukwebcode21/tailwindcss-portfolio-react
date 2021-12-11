import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Navigation from './Components/Shared/Navigation/Navigation';

function App() {
  return (
    <div className='bg-body text-white pb-12 px-8'>
      <Navigation />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
