const Product = require("../model/productModel");

exports.createProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    if (!name || !price || !image) {
      return res.status(400).json({
        message: "Please provide name,image and price",
      });
    }
    const newProduct = await Product.create({
      name,
      price,
      image,
    });
    res.status(200).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: `something went wrong ${error.message}`,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    if (product.length == 0) {
      return res.status(200).json({
        message: "No product found",
      });
    }
    res.status(200).json({
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: `something went wrong ${error.message}`,
    });
  }
};

//delete product

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: `something went wrong ${error.message}`,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        price,
        image,
      },
      { new: true }
    );
    res.status(200).json({
      message: "product updated successfully",
      data: updateProduct,
    });
  } catch (error) {
    return res.status(400).json({
      message: `something went wrong ${error.message}`,
    });
  }
};
