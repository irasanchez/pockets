import viteLogo from './assets/vite.svg'
import reactLogo from './assets/react.svg'
import sassLogo from './assets/sass.svg'
import githubLogo from './assets/github.svg'
import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/base'
import './App.scss'

function App() {
  return (
    <div className="App">
      <h1>Pockets</h1>
      {/* nav */}
      <Dropdown>
        <MenuButton>Dashboard...</MenuButton>
        <Menu>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Dropdown>
      {/* page */}
    </div>
  )
}

export default App
