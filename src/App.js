
import './App.css';
import MainNav from './Component/MainNav/main-nav';
import SharedDataTab from './Component/SharedDataTab/shared-data-tab.component';
import SideNav from './Component/SideNav/Side-Nav.components';

function App() {
  return (
    <div className="App">

        <MainNav/>
        
        <SideNav active="active"/>
        
        <SharedDataTab/>
        
    </div>
  );
}

export default App;
