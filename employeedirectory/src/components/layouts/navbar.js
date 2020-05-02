import React from 'react';
import './navbar.css';
import PropTypes from 'prop-types';


const Navbar = ({title}) => {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                     { title }
                </h1>
            </nav>
        );
}

Navbar.defaultProps = {
    title: "Employee Directory",
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Navbar