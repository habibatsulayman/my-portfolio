import React from 'react';

const services = [
  {
    name: 'Web Development',
    description: 'I build functional websites with React / TypeScript in less time',
  },
  {
    name: 'Mobile App Development',
    description: 'I develop functional apps with Jetpack Compose',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-champagne-mist-600 leading-7 dark:text-champagne-mist-400">What I offer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">My services</p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A selection of my services.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col items-center text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-50">
                {service.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{service.description}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
