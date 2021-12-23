import React from 'react'

const SearchItem = ({ search, setSearch }) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='searchItem'>Search Item</label>
            <input
                id='search' 
                type='text'
                role='searchbox'
                placeholder='Search Item...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
    
        </form>
    )
}

export default SearchItem;
