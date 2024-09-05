import { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./List.scss";

function List({itemList, columns, header, singularLabel}) {

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
      <div className="list">
        <div className="list__header">
          <h1>{header}</h1>
          <div className="list__actions">
            <input className="list__search input__with-icon" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="primary-button">+ Add New {singularLabel}</button>
          </div>
        </div>

        <div className="list__column-headers">
            {columns.map(column => (
              <h4 key={column.label} className="list__label">{column.label}</h4>
            ))}
            <h4 key={'actions'} className="list__label list__label--centered">actions</h4>
        </div>
        <ul className="list__container">
          {filteredList.map(item => (
            <li key={item.id}>
              <ListItem itemData={item} columns={columns} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
export default List;