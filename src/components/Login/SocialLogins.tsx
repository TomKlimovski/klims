import React from 'react';

import { socialLoginArray } from 'data/social-logins';

const SocialLogins = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-1">
      {socialLoginArray &&
        socialLoginArray.map(({ name, link, icon, id }) => (
          <div key={id}>
            <a
              href={link}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with {name}</span>
              {icon}
            </a>
          </div>
        ))}
    </div>
  );
};

export default SocialLogins;
