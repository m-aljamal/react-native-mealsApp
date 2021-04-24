import { mocks } from "./mock";
const restaurantsRequest = (location = "37.7829132, -122.4188995") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
