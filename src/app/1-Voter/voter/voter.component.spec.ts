import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  // beforeEach(async(() => {
   
  //   .compileComponents();
  // }));

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shound render othersVote', () => {
     component.othersVote = 5;
     fixture.detectChanges();

     let de = fixture.debugElement.query(By.css('.vote-count'));
     let el: HTMLElement = de.nativeElement;

     expect(el.innerText).toBe('5');
  });

  it('it should highlight the upvote button if i have upvoted', () => {
     component.myVote = 1;
     fixture.detectChanges();

     let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
     expect(de.classes['highlighted']).toBeTruthy();
  });

  it('checking event binding', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);

    expect(component.myVote).toBe(1);
  });
});
