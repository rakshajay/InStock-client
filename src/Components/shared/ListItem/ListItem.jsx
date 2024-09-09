import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import "./ListItem.scss";

function ListItem({ itemData, columns, actionPath, showDeleteModal}) {
  return (
    <div className="list-item">
      {columns.map((column) => (
        <div key={`list-item-${column.label}`} className="list-item__pair">
          <h4 className="list-item__label">{column.label}</h4>
          {column.customRenderer
            ? column.customRenderer(itemData)
            : column.values.map((value) => (
                <p key={value}>{itemData[value]}</p>
              ))}
        </div>
      ))}
      <div className="list-item__actions">
      <button onClick={() => showDeleteModal(itemData.id, itemData.warehouse_name)}>
          <Icon iconSrc={"/src/Assets/Icons/delete_outline-24px.svg"} />
        </button>
        <Link to={`/${actionPath}/${itemData.id}/edit`}>
          <Icon iconSrc={"/src/Assets/Icons/edit-24px.svg"} />
        </Link>
      </div>

    </div>
  );
}

export default ListItem;
