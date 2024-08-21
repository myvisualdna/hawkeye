import React from 'react'
import { trpc } from 'src/utils/trpc';




type Props = {}

const SearchEngine = (props: Props) => {
    const helloWithArgs = trpc.useQuery(['example.hello', { text: 'client' }]);



  return (
    <div>
      <h1>Hello World Example</h1>
      <pre>{helloWithArgs.data?.greeting}</pre>

    </div>
  )
}

export default SearchEngine