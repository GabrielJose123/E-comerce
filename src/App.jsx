import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div style={{width:'100%',height:'20vh',backgroundColor:'#f7f2f2ff'}}>
        <Main></Main>
      </div>

      <div style={{width:'100%',height:'7.5vh',backgroundColor:'#dbdbdbff'}}>
          
      </div>
    </>
  )
}

export default App
