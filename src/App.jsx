import './App.css'
import Cards from './components/cards'
import emojipedia from './emojipedia'
function App() {

  return (
    <>
      <div className='box'>
        <h1>Emojipedia</h1>
        <div className='card' >
          {emojipedia.map((emojiEntry, index) =>
            <Cards
              key={index}
              emoji={emojiEntry.emoji}
              name={emojiEntry.name}
              meaning={emojiEntry.meaning}
              />
          )}
        </div>
      </div>
    </>
  )
}

export default App
