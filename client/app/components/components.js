import angular from 'angular';
import Home from './home/home';
import Sidebar from './sidebar/sidebar';
import StatusList from './statuslist/statuslist';

let componentModule = angular.module('app.components', [
	Home.name,
  Sidebar.name,
  StatusList.name
]);

export default componentModule;
