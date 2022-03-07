import "./App.css";
import MainNav from "./Component/MainNav/main-nav";
import SideNav from "./Component/SideNav/Side-Nav.components";
import SharedData from "./pages/sharedData/shared-data.component";

function App() {
  return (
    <div className="App">
      <MainNav />
      <SideNav active />
      <div className="main">
        <SharedData />
      </div>
    </div>
  );
}

export default App;
