const { pruducts } = require("../data/product");

const getDataController = async (req, res) => {
  try {
    
    if (!pruducts) {
        return res.status(500).json({
            success: false,
            message: "Data not found",
           
          });
    }
   return res.json(pruducts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in fetch data api",
      error: error.message,
    });
  }
};

module.exports = {
  getDataController,
};
