import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// services
import UserService from './user.service';
servicesModule.service('User', UserService);
import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);
import ProfileService from './profile.service';
servicesModule.service('Profile',ProfileService);
import ArticlesService from './articles.service';
servicesModule.service('Articles', ArticlesService);
import Comments from './comments.service';
servicesModule.service('Comments', Comments);
import Tags from './tags.service.js';
servicesModule.service('Tags', Tags);

export default servicesModule;
