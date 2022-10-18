
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserDetails from './components/UserDetails';



function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app-share'>
      <Sidebar/>
      <UserDetails/>
      </div>
      
      
    </div>
  );
}

export default App;
