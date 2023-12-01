'use client'
import Character from './components/Character';
import FV from './components/FV';
import Header from './components/Header';
import News from './components/News';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import SectionMb from './components/items/SectionMb';

const Home = () => {
  return (
      <>
        <Header />
        <FV src='fv'/>
        <SectionMb />
        <Section1 />
        <SectionMb />
        <Section2 />
        <SectionMb />
        <Character />
        <SectionMb />
        <News />
        <SectionMb />
      </>  
    )
}

export default Home;

