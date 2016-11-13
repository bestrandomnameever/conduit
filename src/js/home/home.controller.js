class HomeCtrl {
  constructor(AppConstants, Tags, User, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Get list of all tags
    Tags.getAll().then(
      (tags) => {
        this.tagsLoaded = true;
        this.tags = tags;
      }
    );

    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    }

  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }


}

export default HomeCtrl;
