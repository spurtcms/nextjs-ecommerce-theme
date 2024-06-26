import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    ChannelSearch: '',
    ChannelSearchButton: false,
    ChannelEntryPersonName: '',
    ChannelClaimStatus: null,
    EntryClaimed: false,
    ChannelSkeletonLoader: false,
    ChannelEntryId: 0,
    ChannelpublishedTime: '',
    ChannelProfileID: 0
};


export const channelRedux = createSlice({
    name: "channel",
    initialState,
    reducers: {
        ChannelSearch: (state, action) => {
            state.ChannelSearch = action.payload
        },
        ChannelSearchButton: (state, action) => {
            state.ChannelSearchButton = action.payload
        },
        ChannelEntryPersonName: (state, action) => {
            state.ChannelEntryPersonName = action.payload
        },
        ChannelClaimStatus: (state, action) => {
            state.ChannelClaimStatus = action.payload
        },
        EntryClaimed: (state, action) => {
            state.EntryClaimed = action.payload
        },
        ChannelSkeletonLoader: (state, action) => {
            state.ChannelSkeletonLoader = action.payload
        },
        ChannelEntryId: (state, action) => {
            state.ChannelEntryId = action.payload
        },
        ChannelpublishedTime: (state, action) => {
            state.ChannelpublishedTime = action.payload
        },
        ChannelProfileID: (state, action) => {
            state.ChannelProfileID = action.payload
        }


    },
});


export const { ChannelSearch, ChannelSearchButton, ChannelEntryPersonName, ChannelClaimStatus, EntryClaimed, ChannelSkeletonLoader, ChannelEntryId, ChannelpublishedTime, ChannelProfileID } = channelRedux.actions;

export default channelRedux.reducer;
