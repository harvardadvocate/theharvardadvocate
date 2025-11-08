export const buildSubarraysOfSize = (items, chunkSize) => {
  // divide an array into subarrays of chunkSize
  const resultArray = items.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  return resultArray;
};
