const catchAsync = require('../shared/catchAsync');
const sendResponse = require('../shared/sendResponse');
const { FavouritesService } = require('./FavouriteService');

const addFavourite = catchAsync(async (req, res) => {
  const result = await FavouritesService.createFavourite(req.user, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'Successfully Add Favourite !!',
    success: true,
    data: result,
  });
});

const removeFavourite = catchAsync(async (req, res) => {
  const result = await FavouritesService.removeFavourite(req.user, req.body);
  sendResponse(res, {
    statusCode: 200,
    message: 'Successfully Removed Favourite !!',
    success: true,
    data: result,
  });
});

const getPatientFavourites = catchAsync(async (req, res) => {
  const result = await FavouritesService.getPatientFavourites(req.user);
  sendResponse(res, {
    statusCode: 200,
    message: 'Successfully Retrieve Favourites !!',
    success: true,
    data: result,
  });
});

module.exports = {
  addFavourite,
  removeFavourite,
  getPatientFavourites,
};
