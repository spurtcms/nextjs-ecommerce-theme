import React from "react";

import ChannelEntries from '../Components/ChannelEntries/index'
import { clientfetchGraphQl } from "@/api/clientgraphql";

import { ChannelEntriesListQuery } from "@/api/query";
import { owndeskChannel } from "@/api/url";

export const metadata = {
  title: "OwnDesk | People around the world should know about your Startup",
  description: "Get listed with us - Own Desk appreciates Startups, their ideas, innovations and we will help you in showcasing your Startup, in the way it deserves, to the world.",
  keywords: "Startup stories in India, Startup stories for entrepreneurs, Startup stories for founders, Startup stories for ceo&#039;s, Inspirational startup stories, Indian startup stories, Startup success stories India, Startup stories website, Indian startup success stories, Inspiring stories of entrepreneurs, Indian startup news, Small startup success stories in India, Inspirational Stories 2024",
};


export default async function Home() {
  let variable = { "limit": 20, "offset": 0, "categorySlug": '', "keyword":  '', "categoryChildSlug": '', "channelId": +owndeskChannel,"requireData": {
    "memberProfile": true  
  } }
  let channel = await clientfetchGraphQl(ChannelEntriesListQuery, variable)
  let channelEntriesList = channel?.data?.channelEntriesList?.channelEntriesList

  return (

    <>

      <ChannelEntries
        channelEntries={channelEntriesList}
       
      />

    </>

  );
}
