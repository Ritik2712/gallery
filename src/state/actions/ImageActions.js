export const setImages = (images) => {
  return (dispatch) => {
    console.log("worded dispatch");
    dispatch({
      type: "setImages",
      payload: images,
    });
  };
};
