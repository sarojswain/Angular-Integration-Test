import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs'

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from server', () => {
      let service = TestBed.get(TodoService); //if service is declared in Module level 
      //  fixture.debugElement.injector.get(TodoService);
      //  this is only for, if service is declared in Component level 

      spyOn(service, 'getTodos').and.callFake(() => {
        return of([1, 2, 3]);
      });
      fixture.detectChanges(); 
      // removed from before each, bcoz angular called before this test case execution

      expect(component.todos.length).toBe(3);
  });
});
