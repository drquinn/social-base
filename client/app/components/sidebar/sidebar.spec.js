import SidebarModule from './sidebar'
import SidebarController from './sidebar.controller';
import SidebarComponent from './sidebar.component';
import SidebarTemplate from './sidebar.html';

describe('Sidebar', ()=>{
	let $rootScope,
	makeController;
	
	beforeEach(window.module(SidebarModule.name));
	beforeEach(inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=>{
			return new SidebarController();
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
		it('should have a friends property', ()=>{ 
			let controller = makeController();
			expect(controller).to.have.property('friends'); 
    });
    it('should have a status property', ()=>{ 
			let controller = makeController();
			expect(controller).to.have.property('status'); 
		});
	});
	
	describe('Template', ()=>{
		// test the template
		// use Regexes to test that you are using the right bindings {{  }}
		
		it('should have name in template [REMOVE]', ()=>{
			expect(SidebarTemplate).to.match(/{{\s?vm\.name\s?}}/g);
		});
	});
	
	
	describe('Component', ()=>{
			// test the component/directive itself
			let component = SidebarComponent();
			
			it('should use the right template',()=>{
				expect(component.template).to.equal(SidebarTemplate);
			});
			
			it('should use controllerAs', ()=>{
				expect(component).to.have.property('controllerAs');
			});
			
			it('should use the right controller', ()=>{
				expect(component.controller).to.equal(SidebarController);
			});
	});
});

 




