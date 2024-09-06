import { useEffect, useState } from "react"
import './StatusTag.scss';

function StatusTag({status}){
    const [stockStatusTag, setStockStatusTag] = useState('inStock');

    useEffect(() =>{
        if(status === 'In Stock') {
            setStockStatusTag('inStock');
        } else {
            setStockStatusTag('outOfStock');
        }
    }, [status])

    return (
        <div className={`status-tag status-tag--${stockStatusTag}`}>
            <p>{status}</p>
        </div>
    )
}

export default StatusTag;