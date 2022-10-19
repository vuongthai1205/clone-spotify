import React from "react";

const DetailSongs = () => {
    return (
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now playing</h2>
            <h2 className="text-neutral-400 text-2xl">Hát đi bạn ơi</h2>
            <div className="w-[240px] m-auto mt-10">
                <img className="w-full" src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt=""/>
            </div>
            <div className="flex justify-evenly items-center mt-10">

                <img className="w-[70px] rounded-full" src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt=""/>
                <span className="text-xl text-white">Alan walker</span>
            </div>
        </div>
    )
}

export default DetailSongs