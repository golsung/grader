import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

// describe('grader-frontend App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

//   afterEach(() => {
//     // var hrchy = element.all(by.buttonText('삭제'));
//     // hrchy.each(function (elem) {
//     //     elem.click();
//     //     browser.sleep(500);
//     // });
//   });

//   it('should disable the CREATE button', () => {
//     page.navigateTo();
//     element(by.name('CourseCode')).sendKeys('CE-SE-2018');
//     element(by.name('CourseName')).sendKeys('Software Engineering');
   

//     expect(element(by.buttonText('CREATE')).isEnabled()).toBeFalsy('The button should not be enabled now');
   
//   });

//   it('should enable the CREATE button ', () => {
//     page.navigateTo();
//     element(by.name('CourseCode')).sendKeys('CE-SE-2018');
//     element(by.name('CourseName')).sendKeys('Software Engineering');
//     element(by.name('CourseDesc')).sendKeys("puts 'Hello SE';");

//     expect(element(by.buttonText('CREATE')).isEnabled()).toBeTruthy('The button should be enabled now');
   
//   });

//   it('should register the Course infor correctly ', () => {
//     page.navigateTo();
//     element(by.name('CourseCode')).sendKeys('CE-SE-2018');
//     element(by.name('CourseName')).sendKeys('Software Engineering');
//     element(by.name('CourseDesc')).sendKeys("puts 'Hello SE';");

//     expect(element(by.buttonText('CREATE')).isEnabled()).toBeTruthy('The button should be enabled now');
//     element(by.buttonText('CREATE')).click();
   
//     const lastRow = element.all(by.tagName('tr')).last();
//     expect(lastRow.getText()).toContain("CE-SE-2018");
//   });
// });
