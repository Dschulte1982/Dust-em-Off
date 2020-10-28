import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions/userActions';
import { itemActions } from '../actions/itemActions';
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

  const collectionList = useSelector(state => state.collection.collections);
  const user = useSelector(state => state.auth.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
}

const handleSubmit = (e) => {
  e.preventDefault();

  if (collection && category) {
    dispatch(itemActions.createCollection(user.id, collection, category))
  }

  if (nameItem && collectionItem) {
    // console.log(nameItem, collectionItem, descriptionItem, conditionItem, yearItem)
    dispatch(itemActions.createItem(nameItem, collectionItem, descriptionItem, conditionItem, yearItem));
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
      const total_collections = collectionList.collections

    for(const item in total_collections) {
      const categoryName = total_collections[item]
      collection_list.push(<option key={Math.random()} value={categoryName.id}>{categoryName.collection_name}</option>)
      }
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
                   <option value="1">Antiques</option>
                   <option value="2">Comic Books</option>
                   <option value="3">Dolls & Toys</option>
                   <option value="4">Sports Memorabilia</option>
                   <option value="5">Star Wars</option>
                   <option value="6">Trading Cards</option>
                   <option value="7">Video Games</option>
                   <option value="8">Vinyl Records</option>
                 </select>
                 </div>
                <button
                 id="create-form-next-button"
                 type="submit">
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
                 type="text"
                 name="descriptionItem"
                 value={descriptionItem}
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
                   <option value="Good">Good</option>
                   <option value="Fair">Fair</option>
                   <option value="Poor">Poor</option>
                   <option value="Damaged">Damaged</option>
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
