import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Form from './components/form';
import Weare from './components/weare';
import People from './components/people';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className = 'about'>
        <p className = 'title'>About</p>
        <h3>Building a better future together</h3>
        <p>For more than 50 years we’ve been pioneers, using science and
          different perspectives to make the environment
          safer and healthier for us all.</p>
      </div>
      <Weare />
      <People />
      <Form />
    </div>
  );
}

export default App;
