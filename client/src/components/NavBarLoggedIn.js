import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions/userActions';
import DragDropBox from './DragAndDrop';

export default function NavBarLoggedIn() {

  const [inputs, setInputs] = useState({
    collection: '',
    category: '',
    nameItem: '',
    collectionItem: '',
    descriptionItem: '',
    yearItem: '',
    conditionItem: ''
});

  const {collection, category, nameItem, collectionItem, descriptionItem, conditionItem, yearItem} = inputs;

  const collectionList = useSelector(state => state.collection.collections)

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
}

const handleSubmit = (e) => {
  e.preventDefault();

  if (collection && category) {
    console.log(collection, category)
    // dispatch(itemActions.createCollection(collection, category))
  }
}

  const openCreateModal = (e) => {
    e.preventDefault();

    const modal = document.getElementById("create-modal")
    modal.style.display = "block";
  }

  const closeCreateModal = (e) => {
    e.preventDefault();
    const modal = document.getElementById("create-modal");
    modal.style.display = "none";
  }

  const openItemModal = (e) => {
    e.preventDefault();

    const modal = document.getElementById("create-item-modal");
    modal.style.display = "block"
  }

  const closeItemModal = (e) => {
    e.preventDefault();
    const modal = document.getElementById("create-item-modal");
    modal.style.display = "none";
  }

  const logOut = (e) => {
    e.preventDefault();

    dispatch(userActions.logout());
  }


  const style = {
    display: "none"
  }

  const collectionSelection = () => {
    const collection_list = []
    if (collectionList) {
    // const master = collectionList.collections
    const list = collectionList.collections
    // list.forEach(item => collection_list.push(<option key={Math.random()} value={item}>{item}</option>));
    list.forEach(item => collection_list.push(<option key={Math.random()} value={item}>{item}</option>));
  }
    return collection_list;
  }

  const years = () => {
    const num_years = [];
    for (let i = 1900; i < 2021; i++) {
      num_years.unshift(<option key={Math.random() * (1000 - 1) + 1} value={i}>{i.toString()}</option>);
    }
    return num_years;
  }

    return (
        <>
          <div id="landing-page-nav-list-logged">
            <span id="landing-page-logo-logged">
              <NavLink to="/" id="main-logo-logged" activeclass="active" className="modal-nav-bar-link">
                Dust 'Em Off
              </NavLink>
            </span>
            <button id="add-collection-button" className="modal-nav-bar-link" onClick={openCreateModal}>
              Add to Collection
            </button>
            <button id="add-item-button" className="modal-nav-bar-link" onClick={openItemModal}>
              Add Item
            </button>
            <div id="my-account-container-logged">
              {/* <button id="my-account-button" className="modal-nav-bar-link" onClick={openDropDown}>
                My Account
              </button> */}
              {/* <div id="my-account-drop-down" className="hide">
                <div className="drop-down-links"> */}
                  <button id="logout-button" className="drop-down-links-buttons" onClick={logOut}>Logout</button>
              {/* </div>
              </div> */}
            </div>
          </div>
          <div id="create-modal" className="nav-bar-modal" style={style}>
            <div className="create-modal-content">
              <div className="modal-close" onClick={closeCreateModal}>&times;</div>
              <form id="nav-bar-create-form" onSubmit={handleSubmit}>
                <span id="create-form-header">Create a New Collection</span>
                <div id="create-form-elements">
                <input
                 id="create-form-collection"
                 type="text"
                 name="collection"
                 placeholder="Your Collection Name"
                 value={collection}
                 onChange={handleChange}
                 />
                <select
                 id="create-form-category"
                 type="select"
                 name="category"
                 placeholder=""
                 value={category}
                 onChange={handleChange}
                 >
                   <option value="">Category</option>
                   <option value="Antiques">Antiques</option>
                   <option value="Comic Books">Comic Books</option>
                   <option value="Dolls & Toys">Dolls & Toys</option>
                   <option value="Sport Memorabilia">Sports Memorabilia</option>
                   <option value="Star Wars">Star Wars</option>
                   <option value="Trading Cards">Trading Cards</option>
                   <option value="Vinyl Records">Vinyl Records</option>
                 </select>
                 </div>
                <button
                 id="create-form-next-button"
                 type="submit" onClick={openItemModal}>
                     Next <i className="right-arrow"></i>
                </button>
              </form>
            </div>
          </div>
          <div id="create-item-modal" className="nav-bar-modal">
            <div className="create-item-modal-content">
              <div className="modal-close" onClick={closeItemModal}>&times;</div>
              <form id="nav-bar-item-form" onSubmit={handleSubmit}>
                <span id="create-item-form-header">Put Your Item on Display</span>
                <div id="create-item-form-content">
                <div id="create-item-form-elements-left">
                <select
                 id="create-item-form-collection"
                 name="collectionItem"
                 placeholder="Collection"
                 value={collectionItem}
                 onChange={handleChange}
                 >
                <option value="">Choose Collection</option>
                {collectionSelection()}
                </select>
                <input
                 id="create-item-form-name"
                 type="text"
                 name="nameItem"
                 placeholder="Item Name"
                 value={nameItem}
                 onChange={handleChange}
                 />
                 <textarea id="create-item-form-description"
                 placeholder="Item Description"
                 type="textarea"
                 name={descriptionItem}
                 onChange={handleChange}
                 >
                 </textarea>
                </div>
                <div id="create-item-form-elements-right">
                <select
                 id="create-item-form-year"
                 name="yearItem"
                 placeholder=""
                 value={yearItem}
                 onChange={handleChange}
                 >
                   <option value="">Year</option>
                   {years()}
                 </select>
                 <select
                 id="create-item-form-condition"
                 type="select"
                 name="conditionItem"
                 placeholder=""
                 value={conditionItem}
                 onChange={handleChange}
                 >
                   <option value="">Item Condition</option>
                   <option value="Mint">Mint</option>
                   <option value="Near Mint">Near Mint</option>
                   <option value="Dolls & Toys">Good</option>
                   <option value="Sport Memorabilia">Fair</option>
                   <option value="Star Wars">Poor</option>
                   <option value="Trading Cards">Damaged</option>
                 </select>
                 <div id="drag-and-drop-container">{<DragDropBox />}</div>
                 </div>
                 </div>
                <button
                 id="create-item-form-button"
                 type="submit">
                     Submit <i className="right-arrow"></i>
                </button>
              </form>
            </div>
          </div>
        </>
      )
}
