import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemsDisplay = ({ searchQuery, user, savedItems, setSavedItems }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 30;

  const fetchItems = async () => {
  try {
    const res = await axios.get('http://localhost:5000/products', {
      params: { 
        offset: (page - 1) * limit,
        limit,
        query: searchQuery 
      }
    });

    const resultsCount = res.data.length;
    setHasMore(resultsCount >= limit);
    setItems(res.data); 
  } catch (error) {
    console.error('❌ Error fetching products:', error);
  }
};


  const handleSaveItem = async (product_id) => {
    if (!user) {
      alert('❌ You must be logged in to save items!');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/saved-items', {
        user_id: user.user_id,
        product_id
      });

      const res = await axios.get(`http://localhost:5000/api/saved-items/${user.user_id}`);
      setSavedItems(res.data || []);

      alert('✅ Item saved to cart!');
    } catch (err) {
      console.error('❌ Error saving item:', err);
      alert('❌ Failed to save item.');
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);
  
  useEffect(() => {
    fetchItems();
  }, [page, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 p-4 rounded-xl shadow-lg backdrop-blur-md flex flex-col md:flex-row gap-4"
          >
            <div className="md:w-1/3 w-full flex justify-center items-center">
              <img
                src={item.image_url}
                alt={item.product_name}
                className="max-h-48 object-contain w-full rounded-lg"
              />
            </div>

            <div className="md:w-2/3 w-full flex flex-col justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1 line-clamp-2">
                {item.product_name}
              </h3>

              <p className="text-sm text-white/80 mb-1">
                <strong>Rating:</strong> ⭐ {item.rating} ({item.rating_count} reviews)
              </p>

              <p className="text-sm text-white/80 mb-1">
                <strong>Shop:</strong> {item.shop_name || 'Unknown'}
              </p>

              <p className="text-sm text-white/80 break-words mb-2">
                <strong>External Site:</strong>{' '}
                <a
                  href={item.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline break-all hover:text-cyan-100"
                >
                  {item.external_url}
                </a>
              </p>

              <p className="text-sm text-white/80 mb-2 line-clamp-3">
                {item.about_product}
              </p>

              <p className="text-lime-300 text-xl font-bold mt-1">
                ${item.discounted_price.toFixed(2)}
                <span className="line-through text-red-400 text-sm ml-2">
                  ${item.actual_price.toFixed(2)}
                </span>
              </p>

              <button
                onClick={() => handleSaveItem(item.product_id)}
                className="mt-4 w-full bg-white text-indigo-700 py-2 rounded-md hover:bg-indigo-100 transition font-semibold"
              >
                Save for Later 🛒
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ⬅ Prev
        </button>

        <span className="text-white font-semibold">Page {page}</span>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={!hasMore}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default ItemsDisplay;
