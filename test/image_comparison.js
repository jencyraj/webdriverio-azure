describe("image comparison example",function(){
  it('here we have some screenshot', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        // save the screen
          browser.saveScreen('examplePaged', { /* some options */ });
        // Save an element 
        browser.saveElement($('.rightSideBarUL'), 'firstButtonElement', { /* some options */ });
        
          browser.saveFullPageScreen('fullPage', { /* some options */ });
          browser.saveTabbablePage('save-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
    });
    it('should compare successful with a baseline', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        // Check a screen
          expect(browser.checkScreen('examplePaged', { /* some options */ })).toEqual(0);
        // Check an element
        expect(browser.checkElement($('.rightSideBarUL'), 'firstButtonElement', { /* some options */ })).toEqual(0);
        // Check a full page screenshot
          expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0);
       
          expect(browser.checkTabbablePage('check-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).toEqual(0);
    });
});
