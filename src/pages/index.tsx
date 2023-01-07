import React from 'react';

import Head from 'next/head';

import AlternativeWithImages from 'components/AlternativeWithImages/AlternativeWithImages';
import CenteredCardWithGraphic from 'components/CenteredCardWithGraphic/CenteredCardWithGraphic';
import OverlappingCardsWithBackground from 'components/OverlappingCardsWithBackground/OverlappingCardsWithBackground';
import ThreeColumnCards from 'components/ThreeColumnCards/ThreeColumnCards';
import {
  AlternativeWithImagesData,
  heroData,
  OverlappingCardsWithBackgroundData,
  ThreeColumnCardsData,
  CardWithGraphicData,
} from 'data/landing-page';
import Layout from 'shared/Layout/Layout';

import HeroSection from '../components/HeroSection/HeroSection';

const Home = () => (
  <Layout>
    <Head>
      <title>Epicarc | A Better Way To Architect Software</title>
      <meta name="description" content="home | epicarc.com.au" />
    </Head>
    <HeroSection data={heroData} />
    <AlternativeWithImages data={AlternativeWithImagesData} />
    <OverlappingCardsWithBackground
      header={OverlappingCardsWithBackgroundData.header}
      cards={OverlappingCardsWithBackgroundData.cards}
    />
    <ThreeColumnCards data={ThreeColumnCardsData} />
    <CenteredCardWithGraphic data={CardWithGraphicData} />
  </Layout>
);

export default Home;
