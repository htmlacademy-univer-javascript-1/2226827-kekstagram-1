import { renderPosts, generateErrorMessage } from './render-picture.js';
import { addForm } from './forms.js';
import { userValidation } from './validation.js';
import { getData } from './api.js';

getData(renderPosts, generateErrorMessage);

addForm();
userValidation();
