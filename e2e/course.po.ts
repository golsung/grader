import { browser, by, element, ElementFinder } from 'protractor';

export class CoursePage {
  navigateTo() {
    return browser.get('/course-reg');
  }

  getInputCode():ElementFinder {
    return element(by.name("CourseCode"));
  }

  getInputName(): ElementFinder {
    return element(by.name("CourseName"));
  }

  getInputOverview(): ElementFinder {
    return element(by.name("CourseDesc"));
  }

  getMockCourse(): any {
    let course: any = { code: "COM-SE-2018-A1", name: "SE", overview: "소프트웨어공학개요"}
    return course;
  }


  addNewCourse() {
    let newCourse: any = this.getMockCourse();

    this.getInputCode().sendKeys(newCourse.code);
    this.getInputName().sendKeys(newCourse.name);
    this.getInputOverview().sendKeys(newCourse.overview);

    //Convert the paste object into an array
    // return Object.keys(newPaste).map(key => newPaste[key]);
  }

  getCreateButton(): ElementFinder {
    return element(by.buttonText("CREATE"));
  }

  clickCreateButton() {
    this.getCreateButton().click();
  }


  getTable():ElementFinder {
    return element(by.name('courseList'));
    // return element(by.css('table'));
  }

  getTableHeader() {
    return this.getTable().all(by.tagName('tr')).get(0).getText();
  }

  getTableRow() {
    return this.getTable().all(by.tagName('tr'));
    }

 
  getFirstRowData()  {
    return this.getTableRow().get(1).getText();
  }

  getLastRowData() {
    return this.getTableRow().last().getText();
  }

  resetDB() {
    var delBtns = element.all(by.buttonText('삭제'));
    delBtns.each(function (elem) {
        elem.click();
        browser.sleep(500);
    });
  }
}
