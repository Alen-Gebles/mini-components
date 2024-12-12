
import './App.css'
import TeamsProject from './components/TeamsProject/data'

function App() {

  return (
    <section className='component-holder'>
      <TeamsProject />


      <p className='footerP'>Made with Love.js | {new Date().getFullYear()} </p>
    </section>
  )
}

export default App
