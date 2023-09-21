import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
  isLiked: false,
  isDisliked: false,
  isSaved: false,
  isSubscribed: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchVideoStart: (state) => {
      state = { ...initialState };
      state.loading = true;
    },
    fetchVideoSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload.currentVideo;
    },
    fetchVideoFailure: (state) => {
      state = { ...initialState, error: true };
    },
    likeVideo: (state, action) => {
      if (action.payload) {
        state.currentVideo.likes -= 1;
      } else {
        state.currentVideo.likes += 1;
      }
    },
    dislikeVideo: (state, action) => {
      if (action.payload) {
        state.currentVideo.dislikes -= 1;
      } else {
        state.currentVideo.dislikes += 1;
      }
    },
    subscribeChannel: (state, action) => {
      console.log(action.payload);
      if (action.payload) {
        state.currentVideo.userId.subscribers -= 1;
      } else {
        state.currentVideo.userId.subscribers += 1;
      }
    },
  },
});

export const {
  fetchVideoStart,
  fetchVideoSuccess,
  fetchVideoFailure,
  likeVideo,
  dislikeVideo,
  saveVideo,
  subscribeChannel,
} = videoSlice.actions;

export default videoSlice.reducer;
