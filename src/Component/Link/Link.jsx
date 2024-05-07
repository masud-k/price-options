import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-6 px-4 py-2 rounded-lg hover:bg-blue-700">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
};

export default Link;