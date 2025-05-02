import React, { useState } from 'react';

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <section className="py-20 px-6 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 drop-shadow">
          ✍️ Submit a New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="productName"
            placeholder="Product name"
            value={formData.productName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30 transition"
          />
          <input
            type="number"
            name="price"
            step="0.01"
            placeholder="Price ($)"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/30 transition"
          />
          <button
            type="submit"
            className="w-full bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-2 rounded-md transition shadow-lg"
          >
            Submit Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitForm;
