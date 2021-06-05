import { normalize, join } from 'path'
describe('WebdriverIO image comparison  in diffrent browsers', () => {
    const localBaseline = 'localBaseline';
    const checkBaseline = 'checkBaseline';

    beforeEach(() => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        browser.pause(500);
    });

    afterEach(() => browser.execute('window.scrollTo(0, 0);', []));

    it('compare screenshot screenshot', () => {
        const examplePage = 'examplePage';
        browser.saveScreen(examplePage);
        const { fileName, path } = browser.saveScreen(examplePage);

        copy(normalize(`${ path }/${ fileName }`), join(process.cwd(), `./${ localBaseline }/${ path.split('/').pop() }/${ fileName }`));
        copy(
            normalize(`${ path }/${ fileName }`),
            join(process.cwd(), `./${ localBaseline }/${ path.split('/').pop() }/${ fileName.replace(examplePage, 'examplePageFail') }`),
        );
        copy(
            normalize(`${ path }/${ fileName }`),
            join(
                process.cwd(),
                `./${ localBaseline }/${ checkBaseline }/${ path.split('/').pop() }/${ fileName.replace(examplePage, 'screenCheckFolders') }`
            ),
        );
    });

    it('compare element screenshot', () => {
        const FirstButtonElement = 'FirstButtonElement';
        const { fileName, path } = browser.saveElement($('.uk-button:nth-child(1)'), FirstButtonElement);

        copy(normalize(`${ path }/${ fileName }`), join(process.cwd(), `./${ localBaseline }/${ path.split('/').pop() }/${ fileName }`));
        copy(
            normalize(`${ path }/${ fileName }`),
            join(
                process.cwd(),
                `./${ localBaseline }/${ checkBaseline }/${ path.split('/').pop() }/${ fileName.replace(firstButtonElement, 'ele_check_fold') }`
            ),
        );
    });

    it('compare fullpage screenshot', () => {
        const fullPage = 'fullPage';
        const { fileName, path } = browser.saveFullPageScreen(fullPage, { fullPageScrollTimeout: '1500' });

        copy(normalize(`${ path }/${ fileName }`), join(process.cwd(), `./${ localBaseline }/${ path.split('/').pop() }/${ fileName }`));
        copy(
            normalize(`${ path }/${ fileName }`),
            join(
                process.cwd(),
                `./${ localBaseline }/${ checkBaseline }/${ path.split('/').pop() }/${ fileName.replace(fullPage, 'F_page_folder') }`,
            ),
        );
    });

    it('tabbable screenshot', () => {
        const tabbable = 'tabbable';
        const { fileName, path } = browser.saveTabbablePage(tabbable, { fullPageScrollTimeout: '1500' });
        copy(normalize(`${ path }/${ fileName }`), join(process.cwd(), `./${ localBaseline }/${ path.split('/').pop() }/${ fileName }`));
        copy(
            normalize(`${ path }/${ fileName }`),
            join(
                process.cwd(),
                `./${ localBaseline }/${ checkBaseline }/${ path.split('/').pop() }/${ fileName.replace(tabbable, 'Tab_check_folder') }`,
            ),
        );
    });
});
