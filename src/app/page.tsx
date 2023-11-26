'use client'
import FV from './components/FV';
import Header from './components/Header';
import Section1 from './components/Section1';
import SectionMb from './components/items/SectionMb';

const Home = () => {
  return (
      <>
        <Header />
        <FV src='fv'/>
        <SectionMb />
        <Section1 />
        <SectionMb />
      </>  
    )
}

export default Home;

