
import { browser, by, element } from 'protractor';
import { CoursePage } from './course.po';

describe('grader-frontend App', () => {
  let page: CoursePage;

  beforeEach(() => {
    page = new CoursePage();
  });

  afterEach(() => {
   page.resetDB();
  });


  it('should register the Course infor correctly ', () => {
    page.navigateTo();
    page.addNewCourse();
    page.clickCreateButton();
   
    const lastRow = page.getLastRowData();
    expect(lastRow).toContain("COM-SE-2018-A");
  });
});
