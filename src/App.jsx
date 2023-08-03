import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

import {getCategories} from "./features/categories/categoriesSlice";
import {getProducts} from "./features/products/productsSlice";
import Navigation from "./components/Navigation/Navigation";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className="app">
            <Header/>
            <div className="container">
                <Sidebar/>
                <Navigation/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
