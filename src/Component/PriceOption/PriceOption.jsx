import PropTypes from 'prop-types';
import Fetures from '../Features/Fetures';

const PriceOption = ({option}) => {

    const {option_name, price, features} = option;

    return (
        <div className='bg-blue-500 rounded-lg p-4 text-white'>
            <h2>
                <span className='text-3xl'>{price}</span>
                <span>/mon</span>
            </h2>
            <h3 className='text-2xl py-4'>{option_name}</h3>
            <div>
            {
                features.map((feature, index) => <Fetures key={index} feature={feature}></Fetures>)
            }
            </div>
        </div>
    );
};


PriceOption.propTypes = {
    option: PropTypes.object.isRequired,
};
export default PriceOption;