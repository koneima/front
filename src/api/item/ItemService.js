import auctionApi from "../axios/AuctionAxios";

const URL = "/auctions";

const getItemFromAuction = async (id) => {
  return await auctionApi.get(URL + `/${id}/items`);
};

const createItem = async (auctionId, categoryId, name, price) => {
  return await auctionApi.post(URL + `/${auctionId}/items`, {
    name: name,
    price: price,
    category: {
      id: categoryId,
    },
  });
};

const fetchCategories = async () => {
  return await auctionApi.get("/categories");
};
export const ItemService = {
  getItemFromAuction,
  createItem,
  fetchCategories,
};
