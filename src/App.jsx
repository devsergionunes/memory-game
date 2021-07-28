import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { DatesProvider } from './hooks/useDates';
import { GameRomm } from './pages/GameRoom'
import { Home } from './pages/Home'
import './style/global.scss'

export function App() {
  return (
    <Router >
      <Header/>
      <DatesProvider>
        <Switch>
          <Route exact path='/' >
            <Home/>
          </Route>
          <Route path='/gameroom'>
            <GameRomm/>
          </Route>
        </Switch>
      </DatesProvider>
    </Router>
  );
}