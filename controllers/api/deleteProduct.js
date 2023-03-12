const Product = require('../../models/Product.js')

const deleteProduct = ((req, res) => {
    const id = req.params.productID;
    Product.delete(id)
        .then((results) => {
            // HTTP response
            console.log("Product deleted successfully. Count:  ", results.length);
            res.json(results);
        })
        .catch((error) => {
            // HTTP response
            console.log("Error when deleting product");
            res.json("Error when deleting product");
        })
        .finally(()=>{
            // mongoClient.close();
        })
})

module.exports = deleteProduct