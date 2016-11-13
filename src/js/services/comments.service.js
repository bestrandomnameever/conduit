export default class Comments{
  constructor(AppConstants, $http){
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  //add comment to article
  add(slug, payload) {
    return this._$http({
      url: `${this._AppConstants.api}/articles/${slug}/comments`,
      method: 'POST',
      data: { comment: { body: payload } }
    }).then((res) => res.data.comment);

  }

  // Retrieve the comments for an articles
  getAll(slug) {
    return this._$http({
      url: `${this._AppConstants.api}/articles/${slug}/comments`,
      method: 'GET'
    }).then((res) => res.data.comments);
  }

  // Delete a comments
  destroy(commentId, articleSlug) {
    return this._$http({
      url: `${this._AppConstants.api}/articles/${articleSlug}/comments/${commentId}`,
      method: 'DELETE'
    });
  }
}
