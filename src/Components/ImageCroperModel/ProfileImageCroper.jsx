import React, { useCallback, useEffect, useState } from 'react'
import { Fragment, useRef, ref } from "react";
import { Disclosure, Dialog, Transition, Menu } from "@headlessui/react";
import Cropper from 'react-easy-crop';

import getCroppedImg from './ImgacropHelper';
// import { Slider, Typography } from '@material-ui/core';
import { useRouter } from 'next/navigation';


function ProfileImageCroper({
    Image,
    setImage,
    modelset,
    setModelset,
    setMyProfile,
    setcompanyProfile
   
}) {
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (Image) {
            setOpen(true)
        } else {
            setOpen(false)
        }

    }, [Image])

    const [croppedSrc, setCroppedSrc] = useState(null);

    const [doubleTapZoom, setDoubleTapZoom] = useState(1);


    const router = useRouter()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState(0)
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)


    const onCropComplete = useCallback(async (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
        try {
            const croppedImage = await getCroppedImg(
                Image,
                croppedAreaPixels,
                rotation
            )
            setCroppedSrc(croppedImage)
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [rotation, croppedAreaPixels])


   




    const Sumbit = (e) => {
        // General_ProfileImage(croppedSrc, setbuttonloader, props.setprofileImageError, props.setgeneralDetailResult, router, props, setCroppedSrc)

        // setImage(croppedSrc)
        setImage(croppedSrc)
        if(setMyProfile){
            setMyProfile(prevState => ({
                ...prevState,
                ['profileImage']: croppedSrc
            }))
        }
       if(setcompanyProfile){
        setcompanyProfile(prevState => ({
            ...prevState,
            ['companyLogo']: croppedSrc
        }))
       }
        
        setCroppedSrc(null)
        setDoubleTapZoom(1);
        setCrop({ x: 0, y: 0 })
        setRotation(0)
        setZoom(1)
        setCroppedAreaPixels(null)
        setCroppedImage(null)
        setOpen(false)
        setModelset(false)

    };

    const handleClickClose = (e) => {
        setModelset(false)

        setOpen(false)
        setImage("")
        setCroppedSrc("")
        setCrop({ x: 0, y: 0 })
        setRotation(0)
        setZoom(1)
        setCroppedAreaPixels(null)
        setCroppedImage(null)
        setDoubleTapZoom(1);
    }

    const handleDoubleTap = () => {
        if (doubleTapZoom === 1) {
            setDoubleTapZoom(2);
        } else {
            setDoubleTapZoom(1);
        }
    };

    return (
        <>

            <Transition.Root show={modelset} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#00000067] transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto dark:bg-[#121A21E5]">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8  sm:max-w-screen-lg w-[95%]">
                                    <div className="bg-white md:p-10 p-6 dark:bg-[#0C1116] ">
                                        <div className="block mb-6 relative">
                                            <h3 className=" text-xl font-medium text-black mb-2 leading-6 dark:text-white">
                                                Crop Image{" "}
                                                <span className=" text-xs font-light text-black dark:text-white">
                                                    (Supported Formats: .jpeg &amp; .png; Preferred
                                                    Dimension: 72 x 72)
                                                </span>
                                            </h3>
                                            <p className=" text-sm text-grey-4 leading-none dark:text-light-2">
                                                Use the blue box to set the are of the image which you
                                                want to display in your image.
                                            </p>
                                            <button
                                                type="button"
                                                className=" absolute  -top-2 -right-2 text-xs w-4 h-4  p-1 box-content text-black   focus-visible:outline-none  grid"
                                                onClick={() => {setOpen(false),setModelset(false)}}
                                            >
                                                <img src="/img/modal-close.svg" alt="close" class="dark:hidden" />
                                                <img src="/img/modal-close-dark.svg" alt="close" class="dark:block hidden" />
                                            </button>
                                        </div>

                                        <div className="flex flex-col md:flex-row  justify-center gap-4 mb-4 
                                          md:max-h-80 flex-wrap ">
                                            {/* items-center div remove */}
                                            <div className=" md:w-[calc(100%-364px)] min-w-[50%]  w-full rounded  overflow-hidden max-h-80 flex justify-center items-center bg-slate-400 relative">
                                                <div className="block h-80 w-full " onDoubleClick={handleDoubleTap}>

                                                    {/* <img
                          alt=""
                          className=" w-full max-h-80 h-full object-contain "
                          src="\img\banner-img1.png"
                        /> */}

                                                    <Cropper
                                                        image={Image}
                                                        crop={crop}
                                                        rotation={rotation}
                                                        zoom={zoom * doubleTapZoom}
                                                        aspect={3 / 3}
                                                        onCropChange={setCrop}
                                                        onRotationChange={setRotation}
                                                        onCropComplete={onCropComplete}
                                                        onZoomChange={setZoom}
                                                        classes='className=" w-full max-h-80 h-full object-contain '
                                                    />
                                                </div>
                                                {/* <button className="absolute bottom-2 right-2 h-9 text-sm text-white font-normal rounded  px-6 flex items-center justify-center bg-black  " onClick={() => showCroppedImage()}>
                                                    Update Changes
                                                </button> */}
                                            </div>
                                            <div className="min-h-80 md:w-auto  border grow rounded border-black 
                                            w-80 dark:border-dark-1">
                                                <div className="flex justify-start items-center h-16 px-6">
                                                    <h4 className="text-black font-semibold leading-4 text-sm dark:text-white">
                                                        Preview
                                                    </h4>
                                                    <div className=" ms-auto flex justify-end items-center gap-4"></div>
                                                </div>
                                                <div className=" w-full h-56 bg-no-repeat bg-contain relative flex justify-center items-center bg-center">
                                                    {croppedSrc && <img className='h-52 dark:bg-[#121A21]' src={croppedSrc} alt='' />}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="block">
                                            {/* <Typography
                                                variant="overline"

                                            >
                                                <span className=" text-sm font-normal leading-loose text-black dark:text-white">
                                                    ZOOM
                                                </span>
                                            </Typography>
                                            <Slider
                                                value={zoom}
                                                min={1}
                                                max={3}
                                                step={0.1}
                                                aria-labelledby="Zoom"

                                                onChange={(e, zoom) => setZoom(zoom)}
                                            /> */}

                                        </div>
                                        <div className="block">
                                            {/* <span className=" text-sm font-normal leading-loose text-black">
                                                ROTATION
                                            </span>
                                            <span className=" w-full cursor-pointer h-[1px] inline-block py-3 relative touch-none box-content ">
                                                <span className="w-full h-[2px] block opacity-35 absolute rounded-sm bg-current "></span>
                                                <span className="left-0 w-0 h-[2px] block absolute rounded-sm bg-current"></span>
                                                <input
                                                    type="hidden"
                                                    value="1"
                                                    className=" bg-transparent max-h-36"
                                                />
                                                <span className=" w-3 h-3 flex outline-0 absolute box-border -mt-1 transition-all items-center -ms-1 rounded-full justify-center bg-current top-[10px] after:-top-4 after:-left-4 after:-right-4 after:-bottom-4 after:absolute after:rounded-full  "></span>
                                            </span> */}
                                            {/* <Typography
                                                variant="overline"

                                            >
                                                <span className=" text-sm font-normal leading-loose text-black dark:text-white">
                                                    Rotation
                                                </span>
                                            </Typography>
                                            <Slider
                                                value={rotation}
                                                min={0}
                                                max={360}
                                                step={1}
                                                aria-labelledby="Rotation"

                                                onChange={(e, rotation) => setRotation(rotation)}
                                            /> */}
                                        </div>

                                        <div className="flex justify-end gap-3 mt-4 flex-wrap">
                                            <button className="dark:hover:text-black dark:hover:bg-white dark:border-white hover:bg-black hover:text-white dark:text-white transition-colors duration-200 border border-black w-40 bg-transparent  h-12 text-base text-black flex items-center justify-center px-6 rounded-md font-normal" onClick={(e) => handleClickClose(e)}>
                                                Cancel
                                            </button>
                                            <button className="border border-black w-40 bg-black h-12 text-base text-white  flex items-center justify-center px-6 rounded-md font-normal dark:bg-white dark:text-black dark:hover:bg-[#f2f2f2] hover:bg-[#2f2f2f]"
                                                onClick={(e) => Sumbit(e)}>
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default ProfileImageCroper

