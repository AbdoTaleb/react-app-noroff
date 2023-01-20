import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './views/Login';
import Orders from './views/Orders';
import Profile from './views/Profile';

function App() {
  console.log(process.env.REACT_APP_VERCEL_ANALYTICS_ID)
  return (
    
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='orders' element={ <Orders /> } />
        <Route path='profile' element={ <Profile /> } />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
