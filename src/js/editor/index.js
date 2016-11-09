import angular from 'angular';

//Create the module where our funcitonality can attach to
let editorModule = angular.module('app.editor', []);

import EditorConfig from './editor.config'
editorModule.config(EditorConfig);
import EditorCtrl from './editor.controller';
editorModule.controller('EditorCtrl', EditorCtrl);

export default editorModule;
