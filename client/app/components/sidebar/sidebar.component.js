import template from './sidebar.html';
import controller from './sidebar.controller';
import './sidebar.styl';

let sidebarComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default sidebarComponent;