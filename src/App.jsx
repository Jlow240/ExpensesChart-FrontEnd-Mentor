
import './App.css'
import MyBalance from './componets/MyBalance'
import SpendingSheet from './componets/SpendingSheet'

function App() {

  return (
    <div className="App font-dm-sans flex justify-center place-items-center min-h-screen text-[18px] bg-cream">
      <article className='min-w-[370px]'>

        <MyBalance/>

        <SpendingSheet/>
      </article>
    </div>
  )
}

export default App
