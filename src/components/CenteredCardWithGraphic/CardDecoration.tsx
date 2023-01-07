import React from 'react';

const CardDecoration = ({ mobile }: { mobile?: boolean }) => {
  if (mobile) {
    return (
      <div aria-hidden="true" className="hidden sm:block">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
        <svg
          className="absolute -ml-3 top-8 left-1/2"
          width={404}
          height={392}
          fill="none"
          viewBox="0 0 404 392"
        >
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={392}
            fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1463 360"
      >
        <path
          className="text-indigo-500 text-opacity-40"
          fill="currentColor"
          d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
        />
        <path
          className="text-indigo-700 text-opacity-40"
          fill="currentColor"
          d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
        />
      </svg>
    </div>
  );
};

export default CardDecoration;
