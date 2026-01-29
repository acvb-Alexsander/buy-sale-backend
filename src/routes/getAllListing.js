import { fakeListings } from "./fake-data";

export const getAllListingRoute = {
  method: "GET",
  path: "/api/page-list",
  handler: (req, h) => {
    return fakeListings;
  },
};
