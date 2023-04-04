// import './App.css';
// import axios from 'axios';
// import {Component} from "react";

// class PostsService {

// baseUrl = 'https://jsonplaceholder.typicode.com/posts';

// getAllPosts() {
// return axios.get(this.baseUrl);
// }

// createNewPost(title, body, userId) {
// return axios.post(this.baseUrl, {
// title, body, userId
// })
// }

// updatePost(updatedTitle, updatedBody, postBeforeUpdate) {
// return axios.put(`${this.baseUrl}/${postBeforeUpdate.id}`, {
// id: postBeforeUpdate.id,
// title: updatedTitle,
// body: updatedBody,
// userId: postBeforeUpdate.userId
// })
// }

// deletePost(postId) {
// return axios.delete(`${this.baseUrl}/${postId}`);
// }
// }

// class App extends Component {
// postsService = new PostsService();

// constructor() {
// super();
// this.state = {posts: []};
// }

// componentDidMount() {
// this.postsService.getAllPosts()
// .then(json => {
// console.log(json.data);
// this.setState({posts: json.data});
// }).catch(error => {
// alert(`Error getting posts: ${error}`)
// });
// }

// deletePost = (el) => {
// this.postsService.deletePost(el.id)
// .then(data => {
// console.log(`deleted post with id ${el.id}`)
// this.setState({posts: this.removeObjectFromArray(this.state.posts, 'id', el.id)});
// })
// .catch(error => {
// alert(`Error deleting post with id ${el.id}: ${error}`)
// });
// }

// createPost = () => {
// //todo:show dialog to receive title & body. Hardcoded for now
// this.postsService.createNewPost('New Post', 'Post Content', 420).then(json => {
// console.log(json.data);
// this.setState(prevState => ({
// posts: [...prevState.posts, json.data]
// }))
// }).catch(error => {
// alert(`Error creating post: ${error}`)
// });
// }

// updatePost = (el) => {
// //todo:show dialog to receive updated title & body. Hardcoded for now
// console.log(`Post before update : ${JSON.stringify(el)}`)
// this.postsService.updatePost('Updated Title', 'Updated Body', el).then(json => {
// console.log(json.data);
// let prevData = this.state.posts;
// prevData[prevData.findIndex((obj => obj.id === el.id))]=json.data
// console.log(prevData);
// this.setState({posts: prevData})
// }).catch(error => {
// alert(`Error deleting post with id ${el.id}: ${error}`)
// });
// }

// removeObjectFromArray(array, attr, value) {
// let i = array.length;
// while (i--) {
// if (array[i]
// && array[i].hasOwnProperty(attr)
// && (arguments.length > 2 && array[i][attr] === value)) {
// array.splice(i, 1);
// }
// }
// return array;
// }

// render() {
// return (
// <div className='root'>
//     <div><button

// onClick={this.createPost}>Create post</button>

// <ul>
// {this.state.posts.map(el => (
// <li key={el.id}>
// <h3>{el.title}
// <button
// onClick={(e) => this.updatePost(el)}>Update
// </button>
// <button onClick={(e) => this.deletePost(el)}>Delete</button>
// </h3>
// <div>{el.body}</div>
// </li>
// ))}
// </ul>
// </div>
// </div>
// );
// }
// }

// export default App;