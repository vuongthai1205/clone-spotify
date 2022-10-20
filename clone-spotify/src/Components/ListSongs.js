import React, { useContext, useEffect, useState } from "react";
import Songs from "../Context";

const ListSongs = () => {
    const {DataSongs, handleSetSong, song} = useContext(Songs)
    const [idSong, setIdSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setIdSong(song.id)
    }, [song])
    return (
        <div className="col-span-2 p-3 overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="text-white h-9">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download"></i></th>
                    </tr>
                </thead>
                <tbody>
                {DataSongs.map((song, index) => (

                        <tr key={index}
                        className={`h-12 bg-zinc-700 hover:bg-gray-700 ${idSong === song.id &&'text-yellow-50 bg-gray-700'}`}
                        onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url}>Tải</a></td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}

export default ListSongs