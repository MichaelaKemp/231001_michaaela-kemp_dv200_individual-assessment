import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import EditItem from './pages/EditItem';
import './App.css';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateItem />} />
                <Route path="/list" element={<ItemList />} />
                <Route path="/detail/:id" element={<ItemDetail />} />
                <Route path="/edit/:id" element={<EditItem />} />
            </Routes>
        </Router>
    );
};

export default App;