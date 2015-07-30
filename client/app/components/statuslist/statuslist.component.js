import template from './statuslist.html';
import controller from './statuslist.controller';
import './statuslist.styl';

let statuslistComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default statuslistComponent;