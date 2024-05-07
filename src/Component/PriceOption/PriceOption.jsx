import PropTypes from 'prop-types';

const PriceOption = ({option}) => {

    const {option_name, price} = option;

    return (
        <div className='bg-blue-500 rounded-lg p-4 text-white'>
            <h2>
                <span className='text-3xl'>{price}</span>
                <span>/mon</span>
            </h2>
            <h3 className='text-2xl'>{option_name}</h3>
            
        </div>
    );
};


PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
};
export default PriceOption;