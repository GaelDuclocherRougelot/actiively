import Activity from "./components/Activity/Activity";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './styles/index.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Activity />
      <Footer />
    </div>
  );
}

export default App;
