import { useEffect, useState } from "react";
import "./ListPage.scss";
import List from "../List/List";
import {Link} from "react-router-dom";

function ListPage({itemList, columns, header, singularLabel, actionPath}) {
  
  const [filteredList, setFilteredList] = useState(itemList);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    setFilteredList(itemList);
  }, [itemList]);

  useEffect(() => {
    if(!search) {
      setFilteredList(itemList)
    } else {
      const newList = itemList.filter(listItem => {
        return Object.values(listItem).find((value) => value.toString().includes(search));
      })
      setFilteredList(newList);
    }
  }, [search]);

  useEffect(() => {
  
  }, [columns])
  
    return (
      <div className="list-page">
        <div className="list-page__header">
          <h1>{header}</h1>
          <div className="list-page__actions">
          <div><input className="list-page__search input__with-icon" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>
            <div><Link to="/inventory/add"><button className="primary-button">+ Add New {singularLabel}</button></Link></div>
          </div>
        </div>

        <List itemList={filteredList} columns={columns} actionPath={actionPath} />
      </div>
    );
  }
  
export default ListPage;