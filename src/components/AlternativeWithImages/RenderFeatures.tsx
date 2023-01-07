import React from 'react';

export interface IFeatureItem {
  id: number;
  name: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface IFeatureList {
  features: IFeatureItem[];
}

export const RenderFeatures = ({ features }: IFeatureList) => {
  if (!features.length) {
    return <p className="text-red-400">No Features Mentioned</p>;
  }

  return (
    <>
      {features &&
        features.map((item) => (
          <div key={item.id} className="relative">
            <dt>
              <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-gray-900 rounded-md">
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                {item.name}
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-gray-500">{item.description}</dd>
          </div>
        ))}
    </>
  );
};
