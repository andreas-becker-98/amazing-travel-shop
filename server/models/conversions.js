
const productToPayload = (product) => {
    return {
        id: product.id,
        price: {
            "gbp": product.price_gbp,
            "eur": Number((product.price_gbp * 1.19).toFixed(2)),
        },
        discount: product.discount,
        category: { ...product.Category.dataValues },
        details: product.ProductDetails.map((prodDetail) => {
            return {
                lang: prodDetail.lang,
                name: prodDetail.name,
                description: prodDetail.description,
            };
        }),
    };
};


module.exports = { productToPayload };