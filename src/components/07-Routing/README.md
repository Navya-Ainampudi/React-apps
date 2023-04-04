# React Router

What is React Router?
---------------------
Routing is a process in which a user is directed to different pages based on their action or request.
When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.


React Router Installation
-------------------------
`npm install react-router-dom` or `yarn add react-router-dom`


How to do routing?
------------------
1. You need to import line `import { Route, Link, BrowserRouter } from 'react-router-dom'` which helps us to implement the Routing.

2. Define route inside `BrowserRouter`. `Route` will help us to define and render component based on the specified path. It will accept components and render to define what should be rendered.   
For ex. <BrowserRouter><Route path="/about" component={About} /></BrowserRouter>

3. Add link for navigation. `Link` is used to create links which allow to navigate on different URLs and render its content without reloading the webpage.
