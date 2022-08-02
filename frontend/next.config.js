module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: `${process.env.BACKEND_URL}/about/`,
      },
      {
        source: '/projects',
        destination: `${process.env.BACKEND_URL}/projects/`,
      },
      {
        source: '/technologies',
        destination: `${process.env.BACKEND_URL}/technologies/`,
      },
      {
        source: '/testimonials',
        destination: `${process.env.BACKEND_URL}/testimonials/`,
      },
      {
        source: '/contact',
        destination: `${process.env.BACKEND_URL}/contact/`,
      },
      {
        source: '/hero',
        destination: `${process.env.BACKEND_URL}/hero/`,
      },
      {
        source: '/footer',
        destination: `${process.env.BACKEND_URL}/footer/`,
      },
    ];
  },
};