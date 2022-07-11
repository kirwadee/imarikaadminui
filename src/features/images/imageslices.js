import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../utils/baseURL";

//Actions for redirect
export const resetImagesCreated = createAction("image/created/reset");
export const resetImageUpdate = createAction("image/update/reset");

//Create action
export const createImagesAction = createAsyncThunk(
  "images/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //get user token from store
    const userToken = getState()?.users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    try {
      //make http call here
      const { data } = await axios.post(`${baseURL}/images`, payload, config);
      dispatch(resetImagesCreated());
      return data;

    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all images
export const fetchAllImagesAction = createAsyncThunk(
  "images/fetch-all",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.users?.userAuth;
    const config = {
      headers: {
        authorization: `Bearer ${user?.token}`,
      },
    };
    try {
      const { data } = await axios.get(
        `${baseURL}/images`,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//update images action
export const updateProjectAction = createAsyncThunk(
  "images/update",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //get user token from store
    const userToken = getState()?.users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    try {
      //make http call here
      const { data } = await axios.put(
        `${baseURL}/images/${payload?.id}`,
        payload,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);


//slices

const imageslices = createSlice({
  name: "images",
  initialState: {},
  extraReducers: builder => {
    //   Create Gallery
    builder.addCase(createImagesAction.pending, (state, action) => {
      state.loading = true;
    });
    //reset action
    builder.addCase(resetImagesCreated, (state, action) => {
      state.isImageCreated = true;
    });
    builder.addCase(createImagesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.imagesCreated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.isImageCreated = false;
    });
    builder.addCase(createImagesAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //   fetch all Images
    builder.addCase(fetchAllImagesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllImagesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.imagesList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllImagesAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //   update projects
    builder.addCase(updateProjectAction.pending, (state, action) => {
      state.loading = true;
    });
    //reset action
    builder.addCase(resetImageUpdate, (state, action) => {
      state.isImageUpdated = true;
    });
    builder.addCase(updateProjectAction.fulfilled, (state, action) => {
      state.loading = false;
      state.imageUpdated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      state.isImageUpdated = false;
    });
    builder.addCase(updateProjectAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default imageslices.reducer;
