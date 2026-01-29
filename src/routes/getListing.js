import { fakeListings } from "./fake-data";

export const getListingRoute = {
  method: "GET",
  path: "/api/page-list/{id}",
  handler: (req, h) => {
    const id = req.params.id;
    return fakeListings.find((listing) => listing.id === id);
  },
};
