import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "@/app/(site)/components/PageContent";
import React from "react";

export const revalidate = 0;

const Home = async () => {
  const songs = await getSongs();
  
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white font-bold text-3xl">Welcome Back!</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ListItem
              image="/images/liked.png"
              href="/liked"
              name="Liked Songs"
            />
          </div>
        </div>
      </Header>
      <div className="mb-7 mt-2 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl  font-semibold">Newest Songs</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
};

export default Home;
