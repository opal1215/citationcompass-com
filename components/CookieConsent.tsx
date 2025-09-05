"use client";

import React, { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const accepted = typeof window !== 'undefined' && localStorage.getItem('cookieConsentAccepted');
    setVisible(!accepted);
  }, []);
  const accept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookieConsentAccepted', 'true');
    }
    setVisible(false);
  };
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-800 text-white text-sm p-4 flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0 md:space-x-4">
      <span>
        This site uses cookies for analytics and advertising.  By
        continuing to use it, you agree to our use of cookies.
      </span>
      <button
        onClick={accept}
        className="bg-primary text-white px-3 py-1 rounded hover:bg-primary-dark transition"
      >
        Accept
      </button>
    </div>
  );
}