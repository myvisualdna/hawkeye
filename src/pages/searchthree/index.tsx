import React from 'react'
import Footer from 'src/components/Navigation/footer'
import NavigationSearchThree from 'src/components/SearchPage/NavigationSearchThree'
import SearchBodyThree from 'src/components/SearchPage/searchBodyThree'

type Props = {}

const SearchThree = (props: Props) => {
  return (
    <div>
        <NavigationSearchThree />
        <SearchBodyThree />
        <Footer />
    </div>
  )
}

export default SearchThree