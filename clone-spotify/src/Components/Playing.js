import React, { useContext } from "react";
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import Songs from "../Context";
const Playing = () => {
    const {song, handleSetSong} = useContext(Songs)
    const handleSongNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleSongPre = () => {
        handleSetSong(song.id -1)
    }
    return (
        <div>
            <AudioPlayer
            src={song.url} 
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={handleSongNext}
            onClickPrevious={handleSongPre}
            />
        </div>
    )
}

export default Playing