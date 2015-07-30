import angular from 'angular';
import uiRouter from 'angular-ui-router';
import statuslistComponent from './statuslist.component'; 

let statuslistModule = angular.module('statuslist', [
	uiRouter
])
.directive('statuslist', statuslistComponent);

export default statuslistModule;