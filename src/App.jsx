import Banner from './components/Banner';
import Header from './components/Header';
import MovieList from './components/Movies/MovieList';
import Container from './Layouts/Container';
import NavBar from './Layouts/NavBar';
import Section from './Layouts/Section';

function App() {
  const handleToggledValue = (selectedValue) => {
    console.log(selectedValue)
  }
  return  <>
  <Header />
    <Container>
      <Banner />
      <Section 
        title="What's Popular"
        items={["On TV", "In Theatres"]}
        onToggle={handleToggledValue}
      >
        <MovieList />
      </Section>
    </Container>
    
  </>
}

export default App;