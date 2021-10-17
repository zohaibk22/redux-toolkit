import './App.css';
import Profile from "./components/Profile/Profile"
import Login from "./components/Login/Login"
import ChangeColor from './components/ChangeColor/ChangeColor'
// import { changeColor } from './features/colorReducer';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
