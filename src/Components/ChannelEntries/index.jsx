'use client'
import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import moment from 'moment';
import NoDataFound from './NoDataFound'
import { fetchGraphQl, fetchGraphQlClient } from '@/api/graphicql';
import { ChannelEntriesListQuery } from '@/api/query';
import { owndeskChannel, owndeskImage } from '@/api/url';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfile, SetSearch } from '@/api/serverActions/cookies';
import { ChannelClaimStatus, ChannelEntryId, ChannelEntryPersonName, ChannelSearch, ChannelSearchButton, ChannelSkeletonLoader, ChannelpublishedTime, EntryClaimed } from '../../../store/slices/channel';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Masonry from '@mui/lab/Masonry';



export default function ChannelEntries({slug, childslug,channelEntries  }) {

console.log(channelEntries,'channelEntries');

    const skeleton = useSelector((s) => s.channelReducer.ChannelSkeletonLoader)
    const router = useRouter();
    const dispatch = useDispatch();
    const searchParam = useSearchParams()
    const search = searchParam.get('keyword')

    const [readMoreshow, setReadMoreshow] = useState([])
    const [allchannelEntries, setChannelEntries] = useState([])
    const [hasMore, sethasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(10)
    const [skeletonLoader, setSkeletonLoader] = useState(false)
    const [scrolCheck,setScrollCheck]=useState(false)
    const [scrollLoader,setScrollLoader]=useState(false)
    const [skeletonLoading,setSkeletonLoading]=useState(true)
    


    
    // useEffect(() => {
    //     if (channelEntriesList) {
    //         setChannelEntries(channelEntriesList)
    //         setSkeletonLoading(false)
            
    //         setSkeletonLoader(true)
    //         setScrollCheck(true)
    //         if (!search) {
    //             dispatch(ChannelSkeletonLoader(false))
    //         }
    //     }
    // }, [channelEntriesList])

    useEffect(() => {

        if (skeleton) {
            setSkeletonLoader(false)
        }

    }, [skeleton])
    useEffect(() => {


        let variable = {
            "limit": 20,
            "offset": 0,
             "categorySlug": slug, "keyword": search!=null?search:"", "categoryChildSlug": childslug, "channelId": +owndeskChannel, "requireData": {
                "memberProfile": true
            }
        }
        async function ChannelEntries() {
            if(offset==0||search){
                try {
                    let channel = await fetchGraphQl(ChannelEntriesListQuery, variable)
                    let channelEntriesList = channel?.data?.channelEntriesList?.channelEntriesList
                    setChannelEntries(channelEntriesList)
                   
                    dispatch(ChannelSearchButton(false))
                    dispatch(ChannelSkeletonLoader(false))
                    setSkeletonLoader(true)
                 
    
                } catch (error) {
                }
            }
            else{
                try {
                    let channel = await fetchGraphQl(ChannelEntriesListQuery, variable)
                    let channelEntriesList = channel?.data?.channelEntriesList?.channelEntriesList
                    setChannelEntries(channelEntriesList)
                   
                    dispatch(ChannelSearchButton(false))
                    dispatch(ChannelSkeletonLoader(false))
                    setSkeletonLoader(true)
                 
    
                } catch (error) {
                }
            }
            }
            

        if (search) {
            ChannelEntries()
        }
        else{
            ChannelEntries()
        }


    }, [search])


    const convertLink = (link) => {
        if (!/^https?:\/\//i.test(link)) {
            link = 'http://' + link;
            return link
        } else {
            return link
        }

    }



    const toggleDescription = (index) => {
        const newShowFullDescriptions = [...readMoreshow];
        newShowFullDescriptions[index] = !newShowFullDescriptions[index];
        setReadMoreshow(newShowFullDescriptions);
    };

    const getDescription = (description, index) => {
        const removeHtml = description

        const cleanHtml = removeHtml?.replace(/<p><br>&nbsp;<\/p>|<p>&nbsp;<\/p>| class="[^"]*"| style="[^"]*"/g, '');

        if (cleanHtml?.length > 62 && !readMoreshow[index]) {
             return `${cleanHtml?.slice(0, 62)}... `;

        }
        
        return `${cleanHtml} `;

    };

    
    const fetchData =  () => {
       
        let variable = {
            "limit": 20, "offset": offset,
             "categorySlug": slug, "keyword": search, "categoryChildSlug": childslug, "channelId": +owndeskChannel, "requireData": {
                "memberProfile": true
            }
        }
     fetchGraphQlClient(ChannelEntriesListQuery, variable,channelEntries,setSkeletonLoading,setScrollLoader,setChannelEntries)
     
    };

    const handleScroll = (e) => {
  
        const scrollHeight = e.target.documentElement.scrollHeight;
        const currentHeight = Math.ceil(
          e.target.documentElement.scrollTop + window.innerHeight
        );
        if (currentHeight + 1 >= scrollHeight) {  
  
          setOffset(offset+20) 
          
        }
      };
    
      useEffect(() => {
        if(scrollLoader==false){
          window.addEventListener("scroll", handleScroll);
        }
        
      }, [handleScroll]);


      useEffect(()=>{
        // if(offset!=0){
        fetchData()
    // }
      },[offset])

    const handleCompanyEntryDetail = async (member, profilePage, profileName, id, publishedTime, modifiedOn) => {
        const MemberProfile = await GetProfile()
        if (profilePage) {
            dispatch(ChannelClaimStatus(member?.claimStatus))
            dispatch(ChannelEntryId(id))
            if (MemberProfile) {
                if (member.memberId == MemberProfile.memberId) {
                    dispatch(EntryClaimed(true))
                } else {
                    dispatch(EntryClaimed(false))
                }
            } else {
                dispatch(EntryClaimed(false))
            }

            dispatch(ChannelEntryPersonName(profilePage))
            dispatch(ChannelSearch(''))
            
            if (publishedTime) {
                dispatch(ChannelpublishedTime(publishedTime))
            } else {
                dispatch(ChannelpublishedTime(modifiedOn))
            }
        }
        else {
            router.push('/not-found.jsx')
        }
    }

    

    const windowCheck = useSyncExternalStore(
        (listener) => {
            window.addEventListener("resize", listener);
            return () => {
                window.removeEventListener("resize", listener);
            };
        },
        () => window.innerWidth,
        () => -1
    );


    const handleChangeTime = (timedata) => {

        const userDateTime = timedata;
        const dateTimeWithOffset = moment().add({ hours: 5, minutes: 30 });
        const newDifference = moment(userDateTime).diff(dateTimeWithOffset);

        // Format the difference
        const duration = moment.duration(newDifference);

        // Extract individual components of the duration
        const years = duration.years();
        const months = duration.months();
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds()

        let timesshow;
        if (years != 0) {
            timesshow = `${Math.abs(years)} years`;
            return timesshow;
        }
        if (months !== 0) {
            timesshow = `${Math.abs(months)} months`;
            return timesshow;
        }
        if (days !== 0) {
            timesshow = `${Math.abs(days)} days`;
            return timesshow;
        }
        if (hours !== 0) {
            timesshow = `${Math.abs(hours)} hours`;
            return timesshow;
        }
        if (minutes !== 0) {
            timesshow = `${Math.abs(minutes)} minutes`;
            return timesshow;
        }
        if (seconds !== 0) {
            timesshow = `${Math.abs(seconds)} seconds`;
            return timesshow;
        }

    }
    // const imageloader = ({ src }) => {
    //     return src
    // }

    return (
        <>
          
      
               
                    <main className={"overflow-x-hidden dark:bg-dark-1 pb-8"} >
                       
                        {channelEntries?.length > 0 ?
                            <section
                                className="2xl:pt-6 pt-2 lg:px-10 px-5 h-full min-h-[calc(100vh-319px)] ">
                                <Masonry
                                    columns={5}
                                    spacing={2}
                                   
                                    sequential
                                    className='[&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:text-yellow-1   [&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:bg-yellow-2 
                                    [&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:text-green-1   [&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:bg-green-2 
                                    [&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:text-red-1   [&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:bg-red-2 
                                    [&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:text-blue-1   [&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:bg-blue-2 
                        
                                    
                                    dark:[&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:text-yellow-1-dark   dark:[&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:bg-yellow-2-dark 
                                    dark:[&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:text-green-1-dark     dark:[&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:bg-green-2-dark 
                                    dark:[&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:text-red-1-dark     dark:[&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:bg-red-2-dark 
                                    dark:[&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:text-blue-1-dark     dark:[&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+1)]:bg-blue-2-dark 
                        
                        
                        
                                    [&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:text-green-1  [&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:bg-green-2
                                    [&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:text-red-1  [&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:bg-red-2
                                    [&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:text-blue-1  [&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:bg-blue-2
                                    [&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:text-yellow-1  [&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:bg-yellow-2
                        
                        
                        
                                    dark:[&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:text-green-1-dark  dark:[&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:bg-green-2-dark
                                    dark:[&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:text-red-1-dark  dark:[&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:bg-red-2-dark
                                    dark:[&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:text-blue-1-dark  dark:[&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:bg-blue-2-dark
                                    dark:[&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:text-yellow-1-dark  dark:[&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+2)]:bg-yellow-2-dark
                        
                                    
                                    [&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:bg-red-2  [&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:text-red-1
                                    [&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:bg-blue-2  [&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:text-blue-1
                                    [&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:bg-yellow-2  [&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:text-yellow-1
                                    [&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:bg-green-2  [&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:text-green-1
                        
                          
                                    dark:[&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:bg-red-2-dark  dark:[&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:text-red-1-dark
                                    dark:[&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:bg-blue-2-dark  dark:[&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:text-blue-1-dark
                                    dark:[&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:bg-yellow-2-dark  dark:[&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:text-yellow-1-dark
                                    dark:[&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:bg-green-2-dark  dark:[&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+3)]:text-green-1-dark
                        
                        
                        
                                    [&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:bg-blue-2 [&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:text-blue-1
                                    [&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:bg-yellow-2 [&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:text-yellow-1
                                    [&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:bg-green-2 [&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:text-green-1
                                    [&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:bg-red-2 [&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:text-red-1
                        
                                    dark:[&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:bg-blue-2-dark  dark:[&>*:nth-child(4n+1)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:text-blue-1-dark
                                    dark:[&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:bg-yellow-2-dark  dark:[&>*:nth-child(4n+2)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:text-yellow-1-dark
                                    dark:[&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:bg-green-2-dark  dark:[&>*:nth-child(4n+3)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:text-green-1-dark
                                    dark:[&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:bg-red-2-dark  dark:[&>*:nth-child(4n+4)]:[&>*:nth-child(4)]:[&>*:nth-child(4n+4)]:text-red-1-dark'
                                >
                                    {channelEntries?.map((channel, channelindex) => (<>
                                        <div className="w-full  break-inside-avoid item" key={channelindex}>
                                            {channel?.memberProfile?.profileSlug
                                                ?
                                               
                                                <>
                                                    <Link href={`/company/${encodeURIComponent(channel.memberProfile?.profileSlug)}`}
                                                        
                                                        className="block mb-3 rounded-lg overflow-hidden cursor-pointer"
                                                        onClick={(e) => handleCompanyEntryDetail(channel?.memberProfile, channel?.memberProfile?.profileSlug, channel?.memberProfile?.profileName, channel?.id, channel?.publishedTime, channel?.modifiedOn)}
                                                    >
                                                        <img src={`${owndeskImage.trimEnd()}${channel?.coverImage.trimStart()}`} alt={channel?.title} className="w-full" />
                                                    </Link>
                                                </>
                                                :
                                                <>
                                                    <a

                                                        className="block mb-3 rounded-lg overflow-hidden cursor-pointer"
                                                        onClick={(e) => handleCompanyEntryDetail(channel?.memberProfile, channel?.memberProfile?.profileSlug, channel?.memberProfile?.profileName, channel?.id, channel?.publishedTime, channel?.modifiedOn)}
                                                    >
                                                        <img src={`${owndeskImage.trimEnd()}${channel?.coverImage.trimStart()}`} alt={channel?.title} className="w-full" width={100} height={100} quality={100} />
                                                    </a>
                                                </>}

                                            <div className="flex gap-2 items-center mb-2">
                                                <div className="ownCard-logo">
                                                    {/* <img src="/img/ownCard-logoOne.png" alt="" /> */}
                                                    <img src={channel?.memberProfile?.companyLogo != "" ?
                                                        `${owndeskImage.trimEnd()}${channel?.memberProfile?.companyLogo.trimStart()}` : "/img/user1.jpg"} width={39} height={39} alt="" />
                                                </div>

                                                <div className="flex justify-between basis-full flex-col leading-normal gap-1">
                                                    <div className="flex justify-between items-center">
                                                        {channel?.memberProfile?.profileSlug ? <>
                                                            <Link href={`/company/${channel?.memberProfile?.profileSlug}`}


                                                                className="text-sm text-black font-medium block dark:text-light-1 cursor-pointer"
                                                                onClick={(e) => handleCompanyEntryDetail(channel?.memberProfile, channel?.memberProfile?.profileSlug, channel?.memberProfile?.profileName, channel?.id, channel?.publishedTime, channel?.modifiedOn)}
                                                            >
                                                                {channel?.title}
                                                            </Link>
                                                        </> : <>
                                                            <a

                                                                className="text-sm text-black font-medium block dark:text-light-1 cursor-pointer"
                                                                onClick={(e) => handleCompanyEntryDetail(channel?.memberProfile, channel?.memberProfile?.profileSlug, channel?.memberProfile?.profileName, channel?.id, channel?.publishedTime, channel?.modifiedOn)}
                                                            >
                                                                {channel?.title}
                                                            </a>
                                                        </>}

                                                        <div className="flex gap-1 flex-nowrap">
                                                            {channel && channel?.memberProfile &&
                                                                <>

                                                                    {channel?.memberProfile?.website !== "" &&
                                                                        <a href={convertLink(channel?.memberProfile?.website)} target="_blank" >
                                                                            <img
                                                                                src="/img/ownCard-globe.svg"
                                                                                alt="web-site"
                                                                                className=" dark:hidden"
                                                                                width={13}
                                                                                height={13}
                                                                            />
                                                                            <img
                                                                                src="/img/ownCard-globe-dark.svg"
                                                                                alt="web-site"
                                                                                className=" dark:block hidden"
                                                                                width={13}
                                                                                height={13}
                                                                            />
                                                                        </a>
                                                                    }
                                                                    {channel?.memberProfile?.twitter !== "" &&
                                                                        <a href={convertLink(channel?.memberProfile?.twitter)} target="_blank" >
                                                                            <img
                                                                                src="/img/ownCard-X.svg"
                                                                                alt="twitter"
                                                                                className=" dark:hidden"
                                                                                width={13}
                                                                                height={13}
                                                                            />
                                                                            <img
                                                                                src="/img/ownCard-X-dark.svg"
                                                                                alt="twitter"
                                                                                className=" dark:block hidden"
                                                                                width={13}
                                                                                height={13}
                                                                            />
                                                                        </a>
                                                                    }
                                                                    {channel?.memberProfile?.linkedin !== "" &&
                                                                        <a href={convertLink(channel?.memberProfile?.linkedin)} target="_blank" >
                                                                            <img
                                                                                src="/img/ownCard-linkedIn.svg"
                                                                                alt="linkedin"
                                                                                className=" dark:hidden"
                                                                                width={13}
                                                                                height={13}
                                                                            />
                                                                            <img
                                                                                src="/img/ownCard-linkedIn-dark.svg"
                                                                                alt="linkedin"
                                                                                className=" dark:block hidden"
                                                                                width={13}
                                                                                height={13}
                                                                            />
                                                                        </a>
                                                                    }
                                                                </>
                                                            }

                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-baseline gap-1">
                                                          
                                                            {channel && channel?.memberProfile && <>
                                                                {channel?.memberProfile?.companyLocation !== "" && <>
                                                                    <img src='/img/location.svg' height={13} width={9} alt='location' />
                                                                    <span className="text-sm font-normal text-grey-3 dark:text-light-2">{channel?.memberProfile?.companyLocation}</span>
                                                                </>}
                                                            </>}
                                                            <span className=" font-light text-xs m-0 text-grey-3 dark:text-light-2">
                                                                {handleChangeTime(channel?.publishedTime !== null ? channel?.publishedTime : channel?.modifiedOn ? channel?.modifiedOn : channel?.createdOn)} {"ago"}</span>
                                                            
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>

                                            <p className=" default-font text-sm leading-4 font-normal text-grey-3 mb-4 overflow-hidden  dark:text-light-2 relative">

                                                <div dangerouslySetInnerHTML={{ __html: getDescription(channel?.description, channelindex) }} />
                                                {channel?.description?.length > 50 &&
                                                    <>
                                                        <a role="button" onClick={() => toggleDescription(channelindex)} className=" text-blue-1 cursor-pointer font-light text-xs m-0 ">
                                                            {/* <span>...</span> */}
                                                            {readMoreshow[channelindex] ? 'see less' : 'see more'}
                                                        </a>
                                                    </>}
                                            </p>
                                           
                                        
                                            {channel?.tags !== "" ? <>

                                                {channel?.tags?.includes(',') ? <>
                                                    <div className='flex gap-1 flex-wrap'>
                                                        {channel?.tags.split(",").map((val, ind) => (<>
                                                            {val !== '' &&
                                                                < span className=" rounded p-1 text-xs w-fit block leading-tight" key={ind}>{val}</span>}
                                                        </>))}
                                                    </div>
                                                </> : <>

                                                    <div className='flex gap-1 flex-wrap'>
                                                        < span className=" rounded p-1 text-xs w-fit block leading-tight">{channel?.tags}</span>
                                                    </div>
                                                </>}

                                            </> : <></>}
                                        </div>
                                    </>))}
                                </Masonry>
                            </section>
                            : 
                            <>
                                
                            </>}
                    </main>
                   
          
           
        </>
    )
}
