import BasicRoute from './basicRoute';
import './App.css';
import MLogin from './mLogin' /* Modal Login */
import MRegister from './mRegister'; /* Modal Register Dialog */
import MProfile from './mProfile';


function App() {
  return (
    <div className="App">
    <BasicRoute />
    <MLogin />
    <MRegister />
    <MProfile />
    </div>
  );
}

export default App;
