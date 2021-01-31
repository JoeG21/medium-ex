import React from 'react'

const Search = (props) => {
    return (
        <div>
            <input
                onChange={e => props.searchUser(e)}
                id="search-bar"
                type="text"
                placeholder="Search"
            />
        </div>
    )
}

export default Search