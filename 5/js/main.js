import {createPosts} from './data.js';
import {createPicture} from './render-picture.js';

const posts = createPosts();
for(const post of posts) {
  createPicture(post);
}
