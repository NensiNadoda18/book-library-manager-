import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css'
import BookAdd from './component/BookAdd'
import ViewBook from './component/ViewBook'
function App() {
 

  return (
  <div>
    <Router>
      <Routes>
        <Route path='/' element={<BookAdd/>}/>
        <Route path='/viewbook' element={<ViewBook/>}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App
