import './Icon.scss';

export const Icon = ({iconSrc}) => {
    return (
        <div className='icon'>
            {iconSrc && <img src={iconSrc} />}
        </div>
    );
}