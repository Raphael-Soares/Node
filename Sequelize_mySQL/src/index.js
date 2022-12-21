(async () => {
    const database = require("./db/db.js");
    const Produtos = require("./db/Produtos.js");
    // await database.sync();

    // const caneta = await produtos.create({
    //     name: "caneta verde",
    //     price: 2,
    // });

    // console.log(caneta);

    const produto = await Produtos.findByPk(4);
    // console.log(prods);

    produto.price = 3;
    await produto.save();
})();
