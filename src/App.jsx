import Body from './Body/body';
import Footer from './Footer/footer';
import Header from './Header/header';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
