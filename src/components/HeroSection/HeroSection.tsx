import HeroIllustration from './HeroIllustration';
import TitleWithInput, { ITitleWithInputProps } from './TitleWithInput';

export interface IHeroProps {
  copy: ITitleWithInputProps;
  image: {
    source: string;
    description: string;
  };
}

const HeroSection = ({
  data: {
    copy,
    image: { source, description },
  },
}: {
  data: IHeroProps;
}) => {
  return (
    <div className="relative overflow-hidden">
      <main>
        <div className="bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <TitleWithInput copy={copy} />
                </div>
              </div>
              <HeroIllustration source={source} description={description} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
