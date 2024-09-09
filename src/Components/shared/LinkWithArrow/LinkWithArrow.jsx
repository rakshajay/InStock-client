import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import './LinkWithArrow.scss';

function LinkWithArrow({to, label }) {
    return (
        <Link className="link-with-arrow" to={to}>{label} <Icon iconSrc={'/src/Assets/Icons/chevron_right-24px.svg'}/></Link>
    )
}

export default LinkWithArrow;