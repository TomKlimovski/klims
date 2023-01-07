import React from 'react';

export interface IDecoProp {
  right?: boolean;
  left?: boolean;
  mobile?: boolean;
}

const BackgroundDeco = ({ right, left, mobile }: IDecoProp) => {
  if (right) {
    if (mobile) {
      return (
        <svg
          className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
        >
          <defs>
            <pattern
              id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
            width={784}
            height={404}
            fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
          />
        </svg>
      );
    }

    return (
      <svg
        className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
          height={784}
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>
    );
  }

  if (left) {
    if (mobile) {
      return (
        <svg
          className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
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
            width={784}
            height={404}
            fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
          />
        </svg>
      );
    }
    return (
      <svg
        className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
          height={784}
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>
    );
  }

  return <h5 className="text-red-500">Please mention the relevant props</h5>;
};

export default BackgroundDeco;
