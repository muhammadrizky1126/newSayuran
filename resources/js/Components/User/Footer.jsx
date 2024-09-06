import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#D9EAD3] py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Sayur SegarKu</h1>
        <p className="text-gray-700 mb-4">
          Sayur SegarKu is committed to providing fresh and organic vegetables to support a healthier lifestyle. Our mission is to make high-quality, organic produce accessible and affordable for everyone. We believe in sustainable farming practices and strive to contribute to a better environment.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-green-600 mb-2">Address</h2>
            <p className="text-gray-700">
              Jl. Raya Bogor No.12, Bogor, West Java 16710
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-green-600 mb-2">Contact us</h2>
            <p className="text-gray-700">CS WA +62812-1236-9254</p>
            <p className="text-gray-700">info@sayursegarku.com</p>
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
