import {
  GlobeAltIcon,
  ScaleIcon,
  LightningBoltIcon,
  AnnotationIcon,
  MailIcon,
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from '@heroicons/react/solid';

import { IAlternativeWithImagesProp } from 'components/AlternativeWithImages/AlternativeWithImages';
import { IFeatureItem } from 'components/AlternativeWithImages/RenderFeatures';
import { ICardWithGraphicProps } from 'components/CenteredCardWithGraphic/CenteredCardWithGraphic';
import { IHeroProps } from 'components/HeroSection/HeroSection';
import { IOverlappingCardProps } from 'components/OverlappingCardsWithBackground/OverlappingCardsWithBackground';
import { IThreeColumnCardProps } from 'components/ThreeColumnCards/ThreeColumnCards';

export const heroData: IHeroProps = {
  copy: {
    titleHelper: {
      mainText: 'How does it work?',
      actionText: 'Watch video here',
      url: '#',
    },
    heading: { leading: 'A better way to', trailing: 'architect software' },
    subtitle: {
      firstLine:
        'Do you find yourself redeploying the same architectural software patterns on each new job?',
      leadingBoldWord: 'Epicarc',
      secondLine:
        'is an ontology of Enterprise-grade Architectural solutions for the Cloud',
    },
    input: {
      accessibilityLabel: 'Search Product',
      placeholder: 'e.g. Cloud Data Architecture',
      buttonText: 'Search',
    },
  },
  image: {
    source:
      'https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg',
    description: 'illustration',
  },
};

const patternFeatures: IFeatureItem[] = [
  {
    id: 1,
    name: 'Get the markdown document that describes the Architecture',
    description:
      'You get the markdown to use and edit as you wish within your project and your team',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'Get the diagrams that describe that Architecture',
    description:
      'The associated diagrams for the architecture succinctly describe the architecture patterns; yours to edit and make your own',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Deploy anywhere',
    description:
      'The diagrams that describe the Pattern or Architecture, once integrated with your projects are ready to be deployed anywhere',
    icon: LightningBoltIcon,
  },
];

const loopFeatures: IFeatureItem[] = [
  {
    id: 1,
    name: 'Get notified when someone has purchased your Architecture',
    description:
      "As an owner of an Architecture, you'll get an immediate notification of a purchase or query of your Architecture",
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Iterate and improve across all Cloud Stacks',
    description:
      'Patterns, when agreed upon and governed within an organisation can be changed, iterated and deployed across all Cloud Stacks, giving you versatility.',
    icon: MailIcon,
  },
];

export const AlternativeWithImagesData: IAlternativeWithImagesProp = {
  title: 'A marketplace for Cloud Architects',
  subtitle: `Learn from other Software and Cloud Architects.
  Purchase their Architecture to accelerate your program of work
  Sell your Architecture on the marketplace`,
  features: [
    {
      title: 'Patterns and Architecture. All in one place',
      subtitle: `The better Cloud Architecture and Patterns organically rise to the top based on popularity. Why reinvent the wheel? Purchase that Architecture or Pattern from the marketplace so you can be sure you’ve deployed the industry-leading standard`,
      image: {
        src: '/images/landing-page/feature-one.svg',
        alt: 'payment confirmation for a data architecture contract',
      },
      featureList: patternFeatures,
    },
    {
      title: 'Always in the loop',
      subtitle: `Stay up to date with the most popular Patterns and Architectures, and learn from other Engineers`,
      featureList: loopFeatures,
      image: {
        src: '/images/landing-page/feature-two.svg',
        alt: 'payment history on sellers',
      },
    },
  ],
};

export const OverlappingCardsWithBackgroundData: IOverlappingCardProps = {
  header: {
    title: 'Patterns & Architecture',
    subtitle: `Patterns are reusable, don't mention technology and allow us to construct large and complex structures using simple parts.`,
    image: {
      src: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100',
      alt: 'Cloud Architecture Patterns',
    },
  },
  cards: [
    {
      name: 'Data Architecture',
      href: '#',
      description:
        "Data architecture is a framework for how IT infrastructure supports your data strategy. The goal of any data architecture is to show the company's infrastructure how data is acquired, transported, stored, queried, and secured",
      icon: PhoneIcon,
    },
    {
      name: 'Security Patterns',
      href: '#',
      description:
        'Security patterns can be applied to achieve goals in the area of security. All of the classical design patterns have different instantiations to fulfill some information security goal: such as confidentiality, integrity, and availability',
      icon: SupportIcon,
    },
    {
      name: 'Application Patterns',
      href: '#',
      description:
        'The documentation for a design pattern describes the context in which the pattern is used, the forces within the context that the pattern seeks to resolve, and the suggested solution. There is no single, standard format for documenting design patterns. Rather, a variety of different formats have been used by different pattern authors',
      icon: NewspaperIcon,
    },
    {
      name: 'Network Patterns',
      href: '#',
      description:
        'The Network Layer across Cloud Infrastructure in particular needs careful thought and planning up-front sets up the organisation properly.',
      icon: PhoneIcon,
    },
    {
      name: 'Infrastructure Patterns',
      href: '#',
      description:
        'In a cloud-native environment, traditional infrastructure operator need to be infrastructure software engineers. A catalogue of recurring Infrastructure Patterns',
      icon: SupportIcon,
    },
    {
      name: 'Testing & Governance',
      href: '#',
      description:
        'Testing patterns describe context for different Testing scenarios, associated with Governance and automated lineage for your Software',
      icon: NewspaperIcon,
    },
  ],
};

const articles = [
  {
    title: 'Workload Identity Federation',
    href: '#',
    category: { name: 'Security Pattern', href: '#' },
    description:
      'Traditionally, applications running outside Google Cloud have used service account keys to access Google Cloud resources. Using identity federation, you can let an external identity impersonate a service account. This lets your workload access Google Cloud resources directly, using a short-lived access token, and eliminates the maintenance and security burden associated with service account keys.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Multi-Cloud point to point streaming using Kafka',
    href: '#',
    category: { name: 'Data Pattern', href: '#' },
    description:
      'Standing up Kafka as a service with an application allows for decoupling of business units who only need to consume messages from an authoratative source. The movement of data within an organisation quickly gets out of control, centralising it allows for greater flexibility.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Testing Strategy',
    href: '#',
    category: { name: 'Testing & Governance', href: '#' },
    description:
      'Defects in software development are inevitable. In order to reduce the number of defects in a shipped product, testing is essentially the only way we can address this situation. Tests need to be designed, created and (ideally) committed alongside code artefacts that they are actually testing. ',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export const ThreeColumnCardsData: IThreeColumnCardProps = {
  title: 'Articles',
  subtitle:
    'Articles and Blog posts serve as a teaser to the Authors thoughts on a particular subject and allows the buyer to increase their confidence in a purchased pattern or Architecture',
  articles,
};

export const CardWithGraphicData: ICardWithGraphicProps = {
  title: `Get notified when we're launching`,
  subtitle: `We are currently busily building this site, register your interest to be notified as soon as we launch.`,
  input: {
    label: 'Enter your email',
    placeholder: 'Enter your email',
    buttonLabel: 'Notify me',
  },
};
