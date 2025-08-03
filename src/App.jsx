import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div style={{width:'100%',height:'20vh',backgroundColor:'#F8F8F8'}}>
        <Main></Main>
      </div>
      
    </>
  )
}

export default App
