import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './hooks/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
