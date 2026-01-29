import { fakeListings } from "./fake-data";
import Boom from "@hapi/boom";

export const getListingRoute = {
  method: "GET",
  path: "/api/page-list/{id}",
  handler: (req, h) => {
    const id = req.params.id;
    const listings = fakeListings.find((listing) => listing.id === id);
    if (!listings) throw Boom.notFound(`Listing does not exist with id ${id}`);
    return listings;
  },
};
