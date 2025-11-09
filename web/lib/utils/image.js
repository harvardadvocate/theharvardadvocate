const optimizeImageLoading = (imageUrl, queryParams = "") => {
  return `${imageUrl}${queryParams}?auto=format&q=50`;
};

export { optimizeImageLoading };
