import React from 'react';

const dummyItems = [
  {
    name: '4K Ultra HD Smart TV',
    vendor: 'BestBuy',
    website: 'https://www.bestbuy.com',
    price: '$599.99',
  },
  {
    name: 'Wireless Bluetooth Headphones',
    vendor: 'Target',
    website: 'https://www.target.com',
    price: '$89.99',
  },
  {
    name: 'MacBook Pro 14"',
    vendor: 'Apple',
    website: 'https://www.apple.com',
    price: '$1,999.00',
  },
  {
    name: 'Logitech MX Master 3S',
    vendor: 'Amazon',
    website: 'https://www.amazon.com',
    price: '$99.00',
  },
  {
    name: 'ASUS ROG Gaming Laptop',
    vendor: 'Newegg',
    website: 'https://www.newegg.com',
    price: '$1,299.99',
  },
];

const ItemsDisplay = () => {
  return (
    <section className="bg-gradient-to-br from-sky-800 via-cyan-700 to-indigo-900 min-h-screen py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg tracking-wide">
          💼 Product Listings
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dummyItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
              <p className="text-sm mb-1">
                <span className="font-semibold text-white/80">Vendor:</span>{' '}
                <span className="text-white/90">{item.vendor}</span>
              </p>
              <p className="text-sm mb-1">
                <span className="font-semibold text-white/80">Website:</span>{' '}
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline hover:text-cyan-100"
                >
                  {item.website}
                </a>
              </p>
              <p className="text-lg font-bold text-lime-300 mt-3">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsDisplay;
