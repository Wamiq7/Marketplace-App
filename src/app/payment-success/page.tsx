import React from "react";
import Image from 'next/image';  // Import Image from 'next/image'
import SuccessIcon from '@/assets/icons/invoice.png'
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* Use the Image component */}
        <Image
          src={SuccessIcon} // Pass the imported image source
          alt="Success Icon"
          width={64} // Set the width
          height={64} // Set the height
        />
        <h1 className="text-3xl font-semibold text-center text-green-600">
          Payment Successful
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Thank you for your payment. Your transaction was successful.
        </p>
        <Link href="/products" className="text-blue-500 font-semibold capitalize mt-4 block text-center">
      
            Back to Dashboard
         
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
