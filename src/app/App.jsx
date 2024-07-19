import styles from './App.module.scss';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="app">
      <Outlet/>
    </div>
  );
}

export default App;
