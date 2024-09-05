import { Icon } from '../Icon/Icon';
import './ListItem.scss'

function ListItem({itemData, columns}) {
    return (
        <div className="list-item">
            {columns.map(column => (
                <div key={`list-item-${column.label}`} className="list-item__pair">
                    <h4 className='list-item__label'>{column.label}</h4>
                    {column.values.map(value => (
                        <p key={value}>{itemData[value]}</p>
                    ))}
                </div>
            ))}
            <div className='list-item__actions'>
                <Icon iconSrc={"/src/Assets/Icons/delete_outline-24px.svg"} />
                <Icon iconSrc={"/src/Assets/Icons/edit-24px.svg"} />
            </div>
        </div>
    )
}

export default ListItem;