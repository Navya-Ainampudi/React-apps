# How To Use Axios With React

What is Axios?
--------------
Axios is an HTTP client library that allows you to make requests to a given endpoint.


How to Set Up Axios with React?
-------------------------------
`npm install axios` or `yarn add axios`

In this example, you'll use the JSON Placeholder API to get and change post data.


How to Make a GET Request?
--------------------------
To fetch data or retrieve it, make a GET request.
To perform this request when the component mounts, you use the useEffect hook. 
This involves importing Axios, using the `.get()` method to make a GET request to your endpoint, and using a `.then()` callback to get back all of the response data.


How to Make a POST Request?
---------------------------
To create new data, make a POST request.
If you look at the example, you'll see that there's a button to create a post.
When you click on the button, it calls the createPost function.
To make that POST request with Axios, you use the `.post()` method. As the second argument, you include an object property that specifies what you want the new post to be.
Once again, use a .then() callback to get back the response data and replace the first post you got with the new post you requested.


How to Make a PUT Request?
--------------------------
To update a given resource, make a PUT request.
In this case, you'll update the first post.
To do so, you'll once again create a button. But this time, the button will call a function to update a post.
In the example, you use the `.put()` method from Axios. And like with the POST method, you include the properties that you want to be in the updated resource.


How to Make a DELETE Request?
-----------------------------
Finally, to delete a resource, use the DELETE method.
As an example, we'll delete the first post.
Note that you do not need a second argument whatsoever to perform this request.
In most cases, you do not need the data that's returned from the .delete() method.
But in the code above, the .then() callback is still used to ensure that your request is successfully resolved.