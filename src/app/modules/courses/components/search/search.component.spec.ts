import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component;
  let mockCoursesService;

  beforeEach(() => {
    mockCoursesService = jasmine.createSpyObj(['setFilterValue']);

    component = new SearchComponent(mockCoursesService);
  });

  afterEach(() => {
    component = null;
  });

  it('should use coursesService to trigger observable event', () => {
    component.findCourse();

    expect(mockCoursesService.setFilterValue).toHaveBeenCalled();
  });
});
