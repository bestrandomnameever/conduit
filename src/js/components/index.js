import angular from 'angular';

let componentsModule = angular.module('app.components', []);

 // Components (and directives)
 import ListErrors from './list-errors.component';
 componentsModule.component('listErrors', ListErrors);
 import ShowAuthed from './show-authed.directive';
 componentsModule.directive('showAuthed', ShowAuthed);
 import FollowBtn from './buttons/follow-btn.component';
 componentsModule.component('followBtn', FollowBtn);
 import ArticleMeta from './article-helpers/article-meta.component';
 componentsModule.component('articleMeta', ArticleMeta);
 import FavoriteBtn from './buttons/favorite-btn.component';
 componentsModule.component('favoriteBtn', FavoriteBtn);
 import ArticlePreview from './article-helpers/article-preview.component';
 componentsModule.component('articlePreview', ArticlePreview);
 import ArticleList from './article-helpers/article-list.component.js';
 componentsModule.component('articleList', ArticleList);
 import ListPagination from './article-helpers/list-pagination.component.js';
 componentsModule.component('listPagination', ListPagination);



export default componentsModule;
