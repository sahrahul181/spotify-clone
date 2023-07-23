export const revalidate = 0;

import Image from "next/image";

import getLikedSongs from "@/actions/getLikedSongs";
import Header from "@/components/Header";
import LikedContent from "./component/LikedContent";
const page = async () => {
  const songs = await getLikedSongs();

  return (
    <div
      className="
    bg-neutral-900
    rounded-lg
    w-full
    h-full
    overflow-hidden
    overflow-y-auto
  "
    >
      <Header>
        <div className="mt-20">
          <div
            className="
                flex
                flex-col
                md:flex-row
                items-center
                gap-x-5
            "
          >
            <div
              className="
                    relative
                    h-32
                    w-32
                    lg:h-40
                    lg:w-40
                "
            >
              <Image
                fill
                src="/images/liked.png"
                alt="PlayList"
                className="object-cover"
              />
            </div>
            <div
              className="
                flex
                flex-col
                gap-y-4
                mt-4
                md:mt-0
            "
            >
              <p className="font-semibold text-sm hidden md:block">PlayList</p>
              <h1
                className="
                text-white
                text-3xl
                sm:text-3xl
                lg:text-5xl
                font-bold
              "
              >
                Liked Song
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};

export default page;
