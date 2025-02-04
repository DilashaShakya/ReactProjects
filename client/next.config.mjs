/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'images.unsplash.com', // Allow images from Unsplash
        'source.unsplash.com', // Allow random images from Unsplash
        'www.pexels.com',      // Allow images from Pexels
        'cdn.shopify.com',     // Example: Shopify CDN
        'res.cloudinary.com' ,  // Example: Cloudinary
        'images.pexels.com',
        'images.unsplash.com',
        'plus.unsplash.com'
      ],
    },
  };
  
  
  export default nextConfig;
  