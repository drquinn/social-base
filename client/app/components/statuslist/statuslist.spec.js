import StatuslistModule from './statuslist'
import StatuslistController from './statuslist.controller';
import StatuslistComponent from './statuslist.component';
import StatuslistTemplate from './statuslist.html';

describe('Statuslist', ()=>{
	let $rootScope,
	makeController;
	
	beforeEach(window.module(StatuslistModule.name));
	beforeEach(inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new StatuslistController();
		};
	}));
	
	describe('Module', ()=>{
		// test things about the component module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});
	
	describe('Controller', ()=>{
		// test your controller here
		
		it('should have a name property', ()=>{ 
			let controller = makeController();
			expect(controller).to.have.property('name'); 
		});
		it('should have a statusMessages property', ()=>{ 
			let controller = makeController();
			expect(controller).to.have.property('statusMessages'); 
		});
	});
	
	describe('Component', ()=>{
			// test the component/directive itself
			let component = StatuslistComponent();
			
			it('should use the right template',()=>{
				expect(component.template).to.equal(StatuslistTemplate);
			});
			
			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});
			
			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(StatuslistController);
			});
	});
});

 




