import { Route } from 'react-router'
import Album from './components/album';
import ShowAlbums from './components/showAlbums';

function App() {
  return (
    <div>
      
      <Route path='/' component={Album} exact={true}/>
      <Route path='/albums/:id' component={ShowAlbums} exact={true} />
    </div>
  )

}

export default App;
