import { createPosts } from './data.js';
import { renderPosts } from './render-picture.js';
import { addForm } from './forms.js';
import { userValidation } from './validation.js';

const posts = createPosts();
renderPosts(posts);

addForm();
userValidation();
