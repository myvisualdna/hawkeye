import React from 'react'
import Footer from 'src/components/Navigation/footer'
import NavigationSearch from 'src/components/SearchPage/NavigationSearch'
import SearchBodyTwo from 'src/components/SearchPage/searchBodyTwo'

type Props = {}

const SearchTwo = (props: Props) => {
  return (
    <div>
        <NavigationSearch />
        <SearchBodyTwo />
        <Footer />
    </div>
  )
}

export default SearchTwo