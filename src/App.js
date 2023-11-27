import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Counter from './components/counter';
import EffectList from './components/EffectList';

function App() {
    const [page, setPage] = useState(1);
  
    return (
        <div className="App">
            <Header updatePage={setPage} />
            <div className='examples'>
                {page === 1 ? <Counter />: ''}
                {page === 2 ? <EffectList />: ''}
            </div>
        </div>
    );
}

export default App;
