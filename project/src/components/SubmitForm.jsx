import React, { useState } from 'react';
import '../styles/SubmitForm.css';

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section id="submit-form">
      <h2>Submit new products</h2>
      <form id="price-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="products name"
          value={formData.productName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price ($)"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default SubmitForm; 