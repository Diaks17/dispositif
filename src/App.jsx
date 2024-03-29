import s from "./App.module.scss"
import logo from './logo.svg';
import Canvas from './components/canvas/Canvas';
import Search from './components/search/Search';
import Song from './components/song/Song';
import useCustomStore from './customStore';


const App= () =>{
  const songs = useCustomStore((state) => state.songs);
  console.log(songs);
  return (
    <div>
      <div className={s.songs}>
        {songs.map((song, key) => {
          return <Song key={key} data={song} />
        })}

      </div>
    <Canvas />   
    <Search />  
    </div>
  );
}

export default App;
