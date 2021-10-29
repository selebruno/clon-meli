import { Route } from 'react-router-dom'
import SearchBar from './components/pages/SearchBar/SearchBar'
import ProductDetail from './components/pages/ProductDetail/ProductDetail'
import ProductList from './components/pages/ProductList/ProductList'
import Slider from './components/layout/Slider';
import HomeButtons from './components/layout/HomeButtons/HomeButtons';

function App() {
  return (
    <div>
     <Route  path= '/' component= {SearchBar}/>
     <Route  exact path='/' component={Slider}/>
     <Route  exact path='/' component={HomeButtons}/>
     <Route  exact path='/items' component={ProductList} />
     <Route  path='/items/:id' component={ProductDetail} />
    </div>
  );
}

export default App;
