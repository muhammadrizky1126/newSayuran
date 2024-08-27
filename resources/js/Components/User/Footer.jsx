import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#D9EAD3] py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">kecipir</h1>
        <p className="text-gray-700 mb-4">
          Kecipir is a social enterprise to realize agricultural production, distribution and consumption in a more equitable and environmentally friendly way. Our dream is simple: To make organic vegetables into "ordinary vegetables". From the price side it can compete, from the supply side it can be relied on, from the consumption side it is healthier.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-green-600 mb-2">Address</h2>
            <p className="text-gray-700">
              JI. H. Muri Salim III No.11 Pisangan, Kec. East Ciputat, South Tangerang City, Banten 15419
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-green-600 mb-2">Contact us</h2>
            <p className="text-gray-700">CS WA +62812-1236-9254</p>
            <p className="text-gray-700">info@kecipir.com</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-green-600 mb-2">Policy</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
