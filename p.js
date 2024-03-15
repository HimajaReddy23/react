import React, { useState } from 'react';

const Pro = () => {
    const [pname, setPname] = useState('');
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);

    const handleCalculateTotal = () => {
        let totalAmount = price * qty;
        let discountPercentage = 0;

        if (qty < 10) {
            discountPercentage = 0;
        } else if (qty <= 20) {
            discountPercentage = 5;
        } else if (qty < 30) {
            discountPercentage = 10;
        } else {
            discountPercentage = 15;
        }

        let discountAmount = (totalAmount * discountPercentage) / 100;
        let discountedTotal = totalAmount - discountAmount;

        setDiscount(discountAmount);
        setTotal(discountedTotal);
    };

    return (
        <div>
            <h2>Product Details</h2>
            <label>
                Product Name:
                <input type="text" value={pname} onChange={(e) => setPname(e.target.value)} />
            </label>
            <br />
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
            </label>
            <br />
            <label>
                Quantity:
                <input type="number" value={qty} onChange={(e) => setQty(parseInt(e.target.value))} />
            </label>
            <br />
            <button onClick={handleCalculateTotal}>Calculate Total</button>
            <br />
            <h3>Total Amount: {total}</h3>
            <h3>Discount: {discount}</h3>
        </div>
    );
};

export default Pro;
