import PropTypes from 'prop-types';

const Fetures = ({feature}) => {
    return (
        <div>
            <p>
                <h4>{feature}</h4>
            </p>
        </div>
    );
};

Fetures.propTypes = {
    feature: PropTypes.object.isRequired,
};

export default Fetures;