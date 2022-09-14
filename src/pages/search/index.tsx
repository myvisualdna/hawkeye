import React from 'react'
import NavContainer from 'src/components/Navigation/navContainer'
import SearchPage from 'src/components/SearchPage'
import SearchLayout from 'src/components/SearchPage/SearchLayout'

type Props = {}

function Index({}: Props) {
  return (
    <div>
      <NavContainer>
        <SearchLayout />
        Search page
        {/* <SearchPage /> */}
        </NavContainer>
    </div>
  )
}

export default Index