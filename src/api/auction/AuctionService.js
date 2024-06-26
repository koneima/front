import auctionApi from "../axios/AuctionAxios";

const URL = "/auctions";
const MY_URL = "/my/auctions";
const getAuctions = async (
  startsAtFrom,
  startsAtTo,
  endsAtFrom,
  endsAtTo,
  names,
  page,
) => {
  return await auctionApi.get(URL, {
    params: {
      page: page,
      size: 10,
      name: names,
      "startsAt.from": startsAtFrom,
      "startsAt.to": startsAtTo,
      "endsAt.from": endsAtFrom,
      "endsAt.to": endsAtTo,
    },
  });
};

const getMyAuctions = async (
  startsAtFrom,
  startsAtTo,
  endsAtFrom,
  endsAtTo,
  names,
  ownerId,
  page,
) => {
  return await auctionApi.get(MY_URL, {
    params: {
      page: page,
      size: 10,
      name: names,
      "startsAt.from": startsAtFrom,
      "startsAt.to": startsAtTo,
      "endsAt.from": endsAtFrom,
      "endsAt.to": endsAtTo,
    },
  });
};

const getAuction = async (id) => {
  return await auctionApi.get(URL + `/${id}`);
};

const bidOnAuction = async (id, price) => {
  return await auctionApi.patch(URL + `/${id}/bid`, {
    price: price,
  });
};

const createAuction = async (auction) => {
  return await auctionApi.post(URL, {
    name: auction.name,
    startsAt: auction.startsAt,
    description: auction.description,
    price: auction.price,
  });
};

const deleteAuction = async (id) => {
  return await auctionApi.delete(URL + `/${id}`);
};

export const AuctionService = {
  getAuctions,
  getAuction,
  bidOnAuction,
  createAuction,
  getMyAuctions,
  deleteAuction,
};
