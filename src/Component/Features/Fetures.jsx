import PropTypes from 'prop-types';
import { AiOutlineCheckCircle } from "react-icons/ai";

const Fetures = ({ feature }) => {
    return (
        <div>
            <p>
                <h4 className='flex items-center'><AiOutlineCheckCircle className='mr-2 text-green-400' /> {feature}</h4>
            </p>
        </div>
    );
};

Fetures.propTypes = {
    feature: PropTypes.object.isRequired,
};

export default Fetures;