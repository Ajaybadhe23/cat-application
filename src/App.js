import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddCat from './screen/addCat';
import CatList from './screen/catList';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CatList />} />
            <Route path="/addCat" element={<AddCat />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
