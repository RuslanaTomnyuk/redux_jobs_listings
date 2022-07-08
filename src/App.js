import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';

import { addPositionsAction } from './store/positions/positionActions';

import data from './mock/data.json';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositionsAction(data));
  });

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
