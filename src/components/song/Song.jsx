import AudioController from "../../utils/AudioController";
import s from "./Song.module.scss";

const Song = ({data}) => {
    return <div className={s.song}
    onClick={() => AudioController.updateSong(data.preview)}>
        <img src={data.album.cover_small} alt="" />
        <span className={s.title}>{data.title}</span>
       </div>
};
export default Song;