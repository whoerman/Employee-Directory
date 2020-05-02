import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => 
            <Fragment>
                <h3 style={{textAlign: "center"}}>Currently fetching data...</h3>
                <img src={spinner} alt="Loading..." style ={{ width: "200px", margin: "auto", display: "block" }} />
            </Fragment>

export default Spinner