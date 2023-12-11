import './Style/CardCenterStyle.css';

const CardCenter = (props) => {
    return (
        <div className='card-center' >

            {props.children}

        </div>
    );
}

export default CardCenter;