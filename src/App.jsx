import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <h1>Legends Archives</h1>
      <Navbar />
      <RouterProvider router={router}>

      </RouterProvider>

    </>
  )
}

export default App
