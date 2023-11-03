import { combineReducers } from "redux";
import ThemeReducer from "./ThemeReducer";
import imagesReducer from "./ImageReducer";

const reducers = combineReducers({
  theme: ThemeReducer,
  images: imagesReducer,
});

export default reducers;
