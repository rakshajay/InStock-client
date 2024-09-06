import { useEffect, useState } from "react";
import "./ListPage.scss";
import List from "../List/List";

function ListPage({itemList, columns, header, singularLabel}) {

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
    console.log(columns);
  }, [columns])

    return (
      <div className="list-page">
        <div className="list-page__header">
          <h1>{header}</h1>
          <div className="list-page__actions">
            <input className="list-page__search input__with-icon" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="primary-button">+ Add New {singularLabel}</button>
          </div>
        </div>

        <List itemList={filteredList} columns={columns} />
      </div>
    );
  }
  
export default ListPage;