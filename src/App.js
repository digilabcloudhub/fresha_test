
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';
import UsersList from './components/Users/UsersList';
function App() {
  return (
    <div  className='wrapper'>
      <Sidebar/>

     <Header/>
     <UsersList/>
    </div>
  );
}

export default App;
