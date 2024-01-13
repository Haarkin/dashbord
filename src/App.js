import './App.css';
import CustomerTable from './components/CustomerTable';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <CustomerTable />
    </div>
  );
}

export default App;
