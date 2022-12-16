import Banner from './components/Banner';
import Header from './components/Header';
import MovieList from './components/Movies/MovieList';
import Container from './Layouts/Container';
import NavBar from './Layouts/NavBar';
import Section from './Layouts/Section';
import { useState } from 'react';
import NewMovies from './components/Movies/NewMovies';
import TopRatedMovies from './components/Movies/TopRatedMovies';


function App() {

  const [sectionToggle, setSectionToggle] = useState({
    first: "On TV",
    second: "On TV",
    third: "Today"
  })

  const handleToggledValue = (section, selectedValue) => {
    // setSectionToggle(prev=>{
    //   return {
    //     ...prev,
    //     [section]: selectedValue
    //   }
    // })
  }

  return  <>
  <Header />
    <Container>
      <Banner />
      <Section 
        title="New-Releases"
        items={["Movies", "TV"]}
        onToggle={handleToggledValue.bind(null, 'first')}
        isToggled={sectionToggle.first === 'On TV'?false:true}
      >
        <NewMovies />
      </Section>
      <Section 
        title="Top-Rated"
        items={["Movies", "TV"]}
        onToggle={handleToggledValue.bind(null, 'first')}
        isToggled={sectionToggle.first === 'On TV'?false:true}
      >
        <TopRatedMovies />
      </Section>
      <Section 
        title="Favourite Shows"
        items={["On TV", "In Theatres"]}
        onToggle={handleToggledValue.bind(null, 'first')}
        isToggled={sectionToggle.first === 'On TV'?false:true}
      >
        <MovieList />
      </Section>
     
    </Container>
    
  </>
}

export default App;