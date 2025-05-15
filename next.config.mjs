/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Cactus
      {
        source: '/assets/2024banners/cactus.jpg',
        destination: '/_next/static/media/cactus_v2.c1f5de8d.webp',
        permanent: true,
      },
      {
        source: '/static/media/cactus.95fb4a9fa9493526edf8.jpg',
        destination: '/_next/static/media/cactus_v2.c1f5de8d.webp',
        permanent: true,
      },
      {
        source: '/_next/static/media/cactus_v2.b485947e.jpg',
        destination: '/_next/static/media/cactus_v2.c1f5de8d.webp',
        permanent: true,
      },

      // High Desert
      {
        source: '/assets/high_desert.jpg',
        destination: '/_next/static/media/high_desert_v2.7c2528f0.webp',
        permanent: true,
      },
      {
        source: '/static/media/high_desert.014a2e2884ea75375793.jpg',
        destination: '/_next/static/media/high_desert_v2.7c2528f0.webp',
        permanent: true,
      },
      {
        source: '/_next/static/media/high_desert_v2.adc11f58.jpg',
        destination: '/_next/static/media/high_desert_v2.7c2528f0.webp',
        permanent: true,
      },

      // Cherry
      {
        source: '/assets/2024banners/cherry.jpg',
        destination: '/_next/static/media/cherry_v2.7bbd2fa8.webp',
        permanent: true,
      },
      {
        source: '/static/media/cherry.3c7484a7efaadb4659cf.jpg',
        destination: '/_next/static/media/cherry_v2.7bbd2fa8.webp',
        permanent: true,
      },
      {
        source: '/_next/static/media/cherry_v2.b0c0fb5b.jpg',
        destination: '/_next/static/media/cherry_v2.7bbd2fa8.webp',
        permanent: true,
      },

      // Ghost Ranch
      {
        source: '/assets/2024banners/ghostranch.jpg',
        destination: '/_next/static/media/ghostranch_v2.8eca19eb.webp',
        permanent: true,
      },
      {
        source: '/static/media/ghostranch.c9f41ba6daaf221f5eba.jpg',
        destination: '/_next/static/media/ghostranch_v2.8eca19eb.webp',
        permanent: true,
      },
      {
        source: '/_next/static/media/ghostranch_v2.e30983d8.jpg',
        destination: '/_next/static/media/ghostranch_v2.8eca19eb.webp',
        permanent: true,
      },

      // Small Flower
      {
        source: '/assets/2024banners/smallflower.jpg',
        destination: '/_next/static/media/smallflower_v2.b20bf50b.webp',
        permanent: true,
      },
      {
        source: '/static/media/smallflower.3152871b17693b9e75b7.jpg',
        destination: '/_next/static/media/smallflower_v2.b20bf50b.webp',
        permanent: true,
      },
      {
        source: '/_next/static/media/smallflower_v2.2bcd8802.jpg',
        destination: '/_next/static/media/smallflower_v2.b20bf50b.webp',
        permanent: true,
      },

      // More Balloons
      {
        source: '/assets/more_balloons.jpg',
        destination: '/_next/static/media/more_balloons_v2.e1c43664.webp',
        permanent: true,
      },
      {
        source: '/static/media/more_balloons.fdddbc8f6e6de8f785c6.jpg',
        destination: '/_next/static/media/more_balloons_v2.e1c43664.webp',
        permanent: true,
      },
      {
        source: '/_next/static/media/more_balloons_v2.edf39812.jpg',
        destination: '/_next/static/media/more_balloons_v2.e1c43664.webp',
        permanent: true,
      },

      // Succulent
      {
        source: '/assets/succulent_banner.jpg',
        destination: '/_next/static/media/succulent_banner_v2.d6952b48.webp',
        permanent: true,
      },
      {
        source: '/static/media/succulent_banner.eae3daea0e76d02254ef.jpg',
        destination: '/_next/static/media/succulent_banner_v2.d6952b48.webp',
        permanent: true,
      },
      {
        source: '/_next/static/media/succulent_banner_v2.709dd8b9.jpg',
        destination: '/_next/static/media/succulent_banner_v2.d6952b48.webp',
        permanent: true,
      },

      // Desert Flower
      {
        source: '/assets/desert_flower.jpg',
        destination: '/_next/static/media/desert_flower_v2.5b8fef72.webp',
        permanent: true,
      },
      {
        source: '/static/media/desert_flower.ce9dff0f825b8113701a.jpg',
        destination: '/_next/static/media/desert_flower_v2.5b8fef72.webp',
        permanent: true,
      },
      {
        source: '/_next/static/media/desert_flower_v2.f46968eb.jpg',
        destination: '/_next/static/media/desert_flower_v2.5b8fef72.webp',
        permanent: true,
      },
      {
        source: '/partners',
        destination: '/brands',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
