import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
// import { Logo } from '@pmndrs/branding'
import Logo from './Logo.png'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <Overlay /> */}
    <img src={Logo} alt='NuLark Solutions Logo' style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
  </>
)
