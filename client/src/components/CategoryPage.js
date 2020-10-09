import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../actions/categoryActions';
import Search from './Search';
import Footer from './Footer';
import CategoryGallery from './CategoryGallery'
import NavBar from './NavBar';


export default function CategoryPage(props) {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.category)
    const location = useLocation();

    const [categoryData, setCategoryData] = useState({});

    useEffect(() => {
      async function getCategory() {
        const fullPath = location.pathname;
        const catId = fullPath.split('/category/').pop();
        const res = await fetch(`/api/category/${catId}`);
        if (res.ok) {
        const data = await res.json();
        console.log(data.values)
        setCategoryData(data)
        }
      }
      getCategory();
    }, [])

    return (
      (!categoryData) ? null :
        <>
          <div id="category-master-container">
            <div id="header-nav-bar">
                {NavBar()}
            </div>
            <div id="category-type-header">
                <img id="category-img" className="images" width="100%" src={require("../images/comic-header.png")} object-fit="contain" alt=""/>
                <div id="category-img-layer"></div>
                <div id="category-header">{categoryData.category}</div>
            </div>
            <div id="category-search-container">
              <div>{Search()}</div>
            </div>
            <div>{CategoryGallery()}</div>
            <div id="category-footer">{Footer()}</div>
          </div>
        </>
    )
}
