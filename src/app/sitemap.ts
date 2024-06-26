import { CategoryQuery, ChannelEntriesListQuery } from "@/api/query";
import { MetadataRoute } from "next";



export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  let variable = {
    "limit": 0, "offset": 0, "categorySlug": '', "keyword": '', "categoryChildSlug": '', "channelId": `${process.env.NEXT_PUBLIC_OWNDESK_CHANNEL}`, "requireData": {
      "memberProfile": true
    }
  }

  const fetchGraphQl = async (GET_POSTS_QUERY: any, variable: any) => {

    try {
      const entries = await apiinstance("", {
        method: 'POST',
        body: JSON.stringify({
          query: GET_POSTS_QUERY,
          variables: variable
        })
      });

      return entries
    } catch (error: any) {
      return error.message

    }
  };
  let channel = await fetchGraphQl(ChannelEntriesListQuery, variable)
  let channelEntriesList = await channel?.data?.channelEntriesList?.channelEntriesList || [];

  const entrylist: MetadataRoute.Sitemap = channelEntriesList?.map((channel: any) => ({
    url: `${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL_SITEMAP}company/${channel.memberProfile?.profileSlug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  let variables = { "level": 1, "groupid": 1 }
  let category = await fetchGraphQl(CategoryQuery, variables)
  let categoryList = await category?.data?.categoriesList?.categories || [];

  const categoryLists: MetadataRoute.Sitemap = categoryList?.map((category: any) => ({
    url: `${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL_SITEMAP}${category.categorySlug}`,
    changeFrequency: 'monthly',
    lastModified: new Date(),
    priority: 0.8,
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL_SITEMAP}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL_SITEMAP}aboutus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL_SITEMAP}admin`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL_SITEMAP}blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL_SITEMAP}privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL_SITEMAP}cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_OWNDESK_WEB_URL_SITEMAP}terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...entrylist,
    ...categoryLists
  ]
}

export const apiinstance = async (url: any, options: any) => {


  const headers = {
    'Content-Type': 'application/json',
    "Authorization": process.env.NEXT_PUBLIC_OWNDESK_GUESTUSER_TOKEN
  }


  const config = {
    method: options.method || 'GET',
    headers,
    ...options,
  }

  if (config.method === 'GET') {
    delete config.body
  } else {
    config.body = config.body
  }



  const res = await fetch(`${process.env.NEXT_PUBLIC_OWNDESK_BASE_URL}${url}`, config);

  if (res.ok) {
    return await res.json();
  }


}