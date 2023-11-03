const reducer = (images = [], action) => {
  switch (action.type) {
    case "setImages":
      images = action.payload;
      return images;
    default:
      return images;
  }
};

export default reducer;
