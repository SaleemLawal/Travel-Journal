import NavBar from './NavBar.jsx'
import Card from '/src/components/locations-card'
import dataList from '../data.jsx'

function App() {
  let Locations = dataList.map((data) => {
    return (
      <Card 
        item = {data}
        key = {data.id}
      />
    )
  })

  return (
    <>
      <NavBar />
      <div className='flex flex-col mt-5 gap-7 md:gap-10 md:ml-[15%]'>
        {Locations}
      </div>
    </>
  )
}

export default App
