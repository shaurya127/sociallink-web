import Message from './components/Message';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Message />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
