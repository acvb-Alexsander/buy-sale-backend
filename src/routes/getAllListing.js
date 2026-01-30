import { fakeListings } from "./fake-data";

export const getAllListingRoute = {
  method: "GET",
  path: "/api/page-list",
  handler:async (req, h) => {
    const {results} = await db.query(
      'SELECT * FROM listings'
    );
    return results;
  },
};
