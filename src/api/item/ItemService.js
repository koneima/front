import auctionApi from "../axios/AuctionAxios";

const URL = "/auctions";

const getItemFromAuction = async (id) => {
  return await auctionApi.get(URL + `/${id}/items`);
};

const getItem = async (id) => {
  return await auctionApi.get(`/items/${id}`);
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

const patchItem = async (id, name, categoryId, price) => {
  if (name === "" || name === undefined) {
    name = null;
  }
  if (categoryId === "" || categoryId === undefined) {
    categoryId = null;
  }
  if (price === "" || price === undefined) {
    price = null;
  }
  return await auctionApi.patch(`/items/${id}`, {
    name: name,
    category: {
      id: categoryId,
    },
    price: price,
  });
};

const deleteItem = async (id) => {
  await auctionApi.delete(`/items/${id}`);
};

const fetchCategories = async () => {
  return await auctionApi.get("/categories");
};

export const ItemService = {
  getItemFromAuction,
  createItem,
  fetchCategories,
  patchItem,
  deleteItem,
  getItem,
};
