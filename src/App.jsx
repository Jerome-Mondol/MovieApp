import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {

    const [searchTerm, setSearchTerm] = useState('')

  return (
    <main>
        <div className='pattern' />

        <div className='wrapper' >
            <header>
                {/* Header Image */}
                 <img src="./hero.png" alt="Hero Banner" />

                {/* Hero text */}
                <h1 className='' >Find <span className='text-gradient' >Movies</span> You'll Enjoy Without the Hassel</h1>

                {/* Search */}
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </header>
        </div>
    </main>
  )
}

export default App
