import { useState } from 'react'
import data from './data'
import PeopleList from './PeopleList'

const App = () => {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <PeopleList people={people} />
        {people.length !== 0 ? (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            clear all
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => window.location.reload()}
          >
            refresh
          </button>
        )}
      </section>
    </main>
  )
}
export default App
