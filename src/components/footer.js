import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-primary p-4">
      <div className="container mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-white">
          Made with
          <Heart className="text-red-500" size={16} />
        </p>
      </div>
    </footer>
  );
};

export default Footer;