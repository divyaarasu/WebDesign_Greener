const express = require("express");
const router = express.Router();

// Load Order model
const Order = require("../../models/Order");

router.post('/', (req, res) => {
    const user = req.body.user;
    const orderTotal = req.body.total;
    const deliveryStatus = req.body.status;
    const dateCreated = Date.now();
    const item = req.body.items;

    Order.create({
        user: user,
        orderTotal: orderTotal,
        dateCreated: dateCreated,
        deliveryStatus: deliveryStatus,
        items: [item]
    })
        .then(() => res.end());
});

router.get('/', (req, resu) => {
    Order.findOne({ user: "5def381c2e01c4995c4244ed" }, function (err, result) {
        if (err) throw err;
        console.log(result);
        return (resu.send(result));
    })
});

router.delete('/', (req, res) => {
    Order.findByIdAndRemove(req.query.id)
        .then(() => res.end())
        .catch((err) => res.send(err));
});

module.exports = router;