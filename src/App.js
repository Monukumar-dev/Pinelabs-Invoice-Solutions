//import CustomerDetails from './components/CustomerDetails/CustomerDetails';
import ProductList from './components/ProductList/ProductList';
import Overview from './components/Overview/Overview';
import './App.scss';
import 'antd/dist/antd.min.css' 

function App() {
  return (
    <div className="App">
        {/* <CustomerDetails /> */}
        <ProductList />
        <Overview />
    </div>
  );
}

export default App;
