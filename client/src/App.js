import { BrowserRouter, Route } from 'react-router-dom'
import SearchBar from './components/pages/SearchBar'
import ProductDetail from './components/pages/ProductDetail'
import ProductList from './components/pages/ProductList'
import Slider from './components/layout/Slider';
import HomeButtons from './components/layout/HomeButtons';

function App() {
  return (
    <BrowserRouter>
     <Route  path= '/' component= {SearchBar}/>
     <Route  exact path='/' component={Slider}/>
     <Route  exact path='/' component={HomeButtons}/>
     <Route  exact path='/items/:id' component={ProductDetail} />
     <Route  exact path='/items' component={ProductList} />
    </BrowserRouter>
  );
}

export default App;
