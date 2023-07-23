"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";
import { useState } from "react";

const Player = () => {
  const player = usePlayer();
  const [volume,setVolume] = useState(1)
  const { song } = useGetSongById(player.activeId);
  const songUrl = useLoadSongUrl(song!);
  if (!song || !songUrl || !player) {
    return null;
  }
  const handleVolume = (volume : number) => {
    setVolume(volume)
  }

  return (
    <div
      className="
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-[80px]
        px-4
      "
    >
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} volume={volume} handleVolume={handleVolume}/>
    </div>
  );
};

export default Player;
