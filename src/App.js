import React, { useState } from 'react';

const BillingForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [billItems, setBillItems] = useState([{ productName: '', quantity: '', unitPrice: '', total: '' }]);

  const handleAddItem = () => {
    setBillItems([...billItems, { productName: '', quantity: '', unitPrice: '', total: '' }]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedItems = [...billItems];
    updatedItems[index][name] = value;
    setBillItems(updatedItems);
  };

  const handleCreateBill = () => {
    // Here you can handle the creation of the bill and store the data in the state or send it to a server
    const billData = { customerName, billItems };
    console.log('Bill Data:', billData);
  };

  return (
    <div>
      <h1>Billing Form</h1>
      <label>
        Customer Name:
        <input type="text" name="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
      </label>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {billItems.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="productName"
                  value={item.productName}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="unitPrice"
                  value={item.unitPrice}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </td>
              <td>
                <input type="text" name="total" value={item.total} readOnly />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddItem}>Add More Item</button>
      <button onClick={handleCreateBill}>Create Bill</button>
    </div>
  );
};

export default BillingForm;
