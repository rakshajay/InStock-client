import ListItem from "../ListItem/ListItem";
import "./List.scss";

function List({itemList, columns, actionPath}) {
  const onDeleteActionClick = (itemId) => {
    // TODO: @raksha: setup functionality for displaying delete modal
    console.log(`deleting ${actionPath}: ${itemId}`);
  }

  return (
    <div className="list">
      <div className="list__column-headers">
          {columns.map(column => (
            <h4 key={column.label} className="list__label">{column.label}</h4>
          ))}
          <h4 key={'actions'} className="list__label list__label--centered">actions</h4>
      </div>
      <ul className="list__container">
        {itemList.map(item => (
          <li key={item.id}>
            <ListItem 
              itemData={item}
              columns={columns}
              actionPath={actionPath}
              onDeleteClick={onDeleteActionClick} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
  
export default List;