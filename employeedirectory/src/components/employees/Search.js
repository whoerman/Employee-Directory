import React from 'react';

const Search = ({userinput, handler}) => {
  return (
      <nav className='searchbar'>
          <h1>
               <input name="userinput" onChange={handler} value={userinput} />
          </h1>
      </nav>
  );
}

export default Search;