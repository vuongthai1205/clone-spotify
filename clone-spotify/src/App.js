
import DetailSongs from './Components/DetailSongs';
import ListSongs from './Components/ListSongs';
import Navbar from './Components/Navbar';
import Playing from './Components/Playing';
import Songs from './Context';
import DataSongs from './data/songs.json'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Songs.Provider value={{DataSongs}}>

        <div className='grid grid-cols-3 bg-slate-800 h-screen-navbar-player overflow-hidden'>
          <DetailSongs/>
          <ListSongs/>
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
