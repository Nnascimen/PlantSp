import styles from './components/css/App.css'
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Produtos from "./components/Produtos";
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <Navbar />
      <Layout />
      <Produtos />
      <Banner />
    </div>
  );
}

export default App;
