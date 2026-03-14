import React from 'react';

const technologies = [
  {
    name: 'JavaScript',
    description: 'Dynamic Web Content',
    icon: 'https://framerusercontent.com/images/DD0THX3h9S98aWTzHZLHypmQE.png',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility first styling',
    icon: 'https://framerusercontent.com/images/MRuNHmCyp6lkFOd5iTZJUMkvgso.png',
  },
  {
    name: 'React.js',
    description: 'JS library for building UIs',
    icon: 'https://framerusercontent.com/images/JSN2BEWBfBIwEXtyyd6RAsVl1BA.png',
  },
  {
    name: 'TypeScript',
    description: 'Superset of JS for static typing and quality code',
    icon: 'https://framerusercontent.com/images/iLBVPstECdadRUrJjEJ5nF8cMjQ.png',
  },
  {
    name: 'Jetpack Compose',
    description: 'Native Android User Interfaces',
    icon: 'https://framerusercontent.com/images/zWlRi2p8TwkeDGWcKfVRbiOFNg.png',
  },
];

const TechStack = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">My Tech Stack</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
            Technologies I Work With
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-3">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <dt>
                  <div className="flex h-20 w-20 items-center justify-center rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tech.icon} alt={tech.name} className="h-16 w-16" />
                  </div>
                  <p className="mt-4 font-semibold text-gray-900 dark:text-gray-50">{tech.name}</p>
                </dt>
                <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-300">{tech.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
