
import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import MainView from './MainView';
import{Navigation} from './Components';

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<MainView />} />
            </Routes>
        </Router>
    );
}

export default App;