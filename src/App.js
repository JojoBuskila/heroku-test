import Login from './components/Login';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <p style={{ marginTop: '40px' }}>
          env: {process.env.REACT_APP_SERVICE_PATH}
        </p>
      </header>
    </div>
  );
}

export default App;
