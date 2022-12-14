import { useSearchParams } from 'react-router-dom';
import './App.css';
import Notifications from './components/Notifications'
import { Auth } from './services/Auth';

function App() {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const code: string | null = searchParams.get("code")

  if (code) {
    console.log(`Set ${code} in App.tsx`)
    Auth.setCode(code)
  }
  
  return (
    <div className="content">
      <Notifications></Notifications>
    </div>
  )
}

export default App;
