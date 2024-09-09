import './Icon.scss';

export const Icon = ({iconSrc}) => {
    return (
        <div className='icon'>
            {iconSrc && <img className="icon-select" src={iconSrc} />}
        </div>
    );
}