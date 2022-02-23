import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelTestComponent } from './level-test.component';

describe('LevelTestComponent', () => {
	let component: LevelTestComponent;
	let fixture: ComponentFixture<LevelTestComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ LevelTestComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LevelTestComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
