import React from 'react';
import Card from '../UI/Card';

// This Component will be landing page
const Dashboard = () => {
  return (
    <>
      <h1 className="display-4 mb-5">Let's get started!</h1>
      <div className="row">
        <Card title="Basic Concepts" link="/basic-concepts">
          Props, Events, Lists and Keys and Conditional Rendering
        </Card>
        <Card
          title="Styling React Components"
          description="xyz"
          link="/styling-react-components"
        >
          Normal CSS, Module CSS and Styled Components
        </Card>
        <Card title="Advance Concepts" link="/advance-concepts">
          State uplifting, Refs, Context API, Event Handling and Portals
        </Card>
        <Card title="Hooks" link="/hooks">
          useState, useEffect, useReducer, useMemo and useImperativeHandler
        </Card>
        <Card title="API Integration" link="/api-integration">
          <p className="my-4">CRUD operations with Axios</p>
        </Card>
        <Card title="Class Components" link="/class-components">
          <p className='my-4'>Basic examples of class components</p>
        </Card>
        <Card title="Practice Projects" link="/practice-project">
          Expense Tracker, Dummy Login App and Food Order App
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
