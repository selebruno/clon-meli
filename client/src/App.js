import { BrowserRouter, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'

function App() {
  return (
    <BrowserRouter>
     <Route  path= '/' component= {SearchBar}/>
     <Route  exact path='/items/:id' component={ProductDetail} />
     <Route  exact path='/items' component={ProductList} />
    </BrowserRouter>
  );
}

export default App;
