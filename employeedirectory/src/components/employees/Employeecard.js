import React from 'react';

const Employeecard = function ({ employee: {avatar_url, id, login, html_url }})  {


        return ( 
            <div className="container col-12"> {
                
                    <div className = "row m-4 text-center" style={({backgroundColor: "#f5fcff"})} > 
                    < img src = {
                        avatar_url
                    }
                    alt = 'headshot'
                    className="mr-4 "
                    style = {
                        {
                            width: '80px'
                        }
                    } /> 
                    <h3 className="m-4 ">{id} </h3>
                    <h3 className="m-4">{login} </h3>
                    <h3 className="m-4">{html_url} </h3>
                    < img src = {
                        avatar_url
                    }
                    alt = 'headshot'
                    className="ml- 4"
                    style = {
                        {
                            width: '80px'
                        }
                    } /> 
                    </div >
            } 
            </div>
        )
};

export default Employeecard