const optimizeImageLoading = (imageUrl, queryParams = "") => {
  return `${imageUrl}${queryParams}?auto=format&q=5`;
};

export { optimizeImageLoading };
