import React from 'react';
import Image from 'next/image';

export default function CertiSection() {
  return (
    <div className=" py-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Estamos Certificados en</h2>
        <div className="border-t-2 border-b-2 border-green-600 py-6">
          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center">
              <Image src="/high-quality-icon.png" alt="High Quality" width={50} height={50} />
              <span className="text-sm mt-2">High Quality</span>
              <span className="text-xs text-gray-500">crafted from top materials</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/warranty-icon.png" alt="Warranty Protection" width={50} height={50} />
              <span className="text-sm mt-2">Warranty Protection</span>
              <span className="text-xs text-gray-500">Over 2 years</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/shipping-icon.png" alt="Free Shipping" width={50} height={50} />
              <span className="text-sm mt-2">Free Shipping</span>
              <span className="text-xs text-gray-500">Order over 150 $</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/support-icon.png" alt="24/7 Support" width={50} height={50} />
              <span className="text-sm mt-2">24 / 7 Support</span>
              <span className="text-xs text-gray-500">Dedicated support</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {/* Add your pagination dots here */}
          <span className="inline-block w-2 h-2 bg-green-600 rounded-full mx-1"></span>
          <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mx-1"></span>
          <span className="inline-block w-2 h-2 bg-gray-300 rounded-full mx-1"></span>
        </div>
      </div>
    </div>
  );
}