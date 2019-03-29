import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NbThemeModule } from '@nebular/theme';
import { NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({ selector: 'app-beers', template: '' })
class BeersStubModule { }


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        BeersStubModule
      ],
      imports: [
        NbLayoutModule,
        NbThemeModule,
        NbSidebarModule
       ],
      providers: [NbSidebarService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('can instantiate the component', () => {
    expect(component).not.toBeNull();
  });
});
