import React from 'react'

const Search = () => {
    return (
        <div>
            <input
                onChange={e => props.handleSearch(e)}
                id="search-bar"
                type="text"
                placeholder="Search Notes"
            />
        </div>
    )
}

export default Search