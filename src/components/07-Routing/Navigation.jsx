import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Dashboard from './Dashboard';
import BasicConcepts from '../02-Basic Concepts/index';
import StyleReactComponents from '../03-Styling React Components/index';
import AdvanceConcepts from '../04-Advance Concepts/index';
import ReactHooks from '../05-Hooks/index'
import ApiIntegrations from '../06-API Integration/index';
import PracticeProjects from '../09-Practice Project/PracticeProjects';
import Car from '../08-Class Components/Car';

// All routes are defined in this component
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="basic-concepts" element={<BasicConcepts />} />
        <Route path="styling-react-components" element={<StyleReactComponents />} />
        <Route path="advance-concepts" element={<AdvanceConcepts />} />
        <Route path="hooks" element={<ReactHooks />} />
        <Route path="api-integration" element={<ApiIntegrations />} />
        <Route path="class-components" element={<Car />} />
        <Route path="practice-project" element={<PracticeProjects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
