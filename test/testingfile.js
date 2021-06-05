function myfunc(massage,a,b,c){
    return document.querySelector('video').paused;
}
describe("intraction with web element", function(){
    it("Find the text value",function(){
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const header = $('h2=Ideas that change the world are often the most controversial.')
        
        
        //const label = $('div.a.az.bb.dz.gk.gn.go.gp.gs.gt.gv.gw.gz.ha.hb.hc.hd.he.hf.hg.hh.hi.hz.ia.ib.ic.id.ie.if.ig.ih.ii.ij.ik.y');
        let text = header.getText();
        console.log(text);
        console.log(header.getTagName())
    
        
    });
    it("find the text using class value",function(){
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const className = $('.a.ae.af.aj.ak.ao.az.ba.bb.bc.bd.be.bf.bg.bh.bi.bj.bk.bl.x.y')
        console.log(className.getText())
    });
    it("find the logo details",function(){
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const logo = $('._SiteNav-a._SiteNav-av._SiteNav-aw._SiteNav-ax')

        const size = logo.getSize()
        console.log(size) 

        const width = logo.getSize('width')
        console.log(width) 

        const height = logo.getSize('height')
        console.log(height)

    });
    it(' getValue command', () => {
        const inputUser = $('.a.az.bb.bz.gc.gd.gk.gl.gm.gn.go.gp.gq.gr.gs.gt.gu.gv.gw.gx.gy.gz.ha.hb.hc.hd.he.hf.hg.hh.hi.y');
        const value = inputUser.getValue();
        console.log(value); 
    });
    
    it("Url testing",function(){
       
    browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
    // receive url
    console.log(browser.getUrl());

    });
    it("get the image details",function(){
        //a ck cl co cp jq jr js
       // browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const image = $('.a.ck.cl.co.cp.jq.jr.js')

        const size = image.getSize()
        console.log(size) 

        const width = image.getSize('width')
        console.log(width) 

        const height = image.getSize('height')
        console.log(height)

    });
    it("getting logo tagname ",function(){
        //
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        const logo_d = $('._SiteNav-a._SiteNav-av._SiteNav-aw._SiteNav-ax')
        
        const imageSrc = logo_d.getTagName('src')
        console.log(imageSrc);
    });
    it('should return browser window size', function () {
        const windowSize = browser.getWindowSize();
        console.log(windowSize);
        
    });
    it('some testing with cookies', () => {
        browser.setCookies([
            {name: 'testing', value: '123'},
            {name: 'testing1', value: '1233'},
            
        ])
    
        let cookies = browser.getCookies()
        console.log(cookies)
       
        browser.deleteCookies(['testing1'])
        cookies = browser.getCookies()
        console.log(cookies)
       
        
        cookies = browser.getCookies()
        console.log(cookies) 
    });
    //it("window resulution",function(){
      //  const windowsize=browser.getWindowSize();
      //  console.log(windowSize);

    //});
    it("text link and details",function(){
        const subheading=$('div.a.az.bb.dz.gk.gn.go.gp.gs.gt.gv.gw.gz.ha.hb.hc.hd.he.hf.hg.hh.hi.hz.ia.ib.ic.id.ie.if.ig.ih.ii.ij.ik.y > p')
       // console.log(subheading.text)
        let textP = subheading.getText();
        console.log(textP);
        const alink=$('a.ab.as.ck.df.dh.di.dj.dk.dl.dm.dn.do.dp.dq.dr.ds.dt.du.dv.dx.dy.dz.eb.ee.hm.kl.km.kn.ko.kp.kq.kr.ks.kt.ku.l.y')
        console.log(alink.getAttribute('href'))
    });
    it("video paused",function(){
        var IsPaused = browser.execute(myfunc);
        console.log(IsPaused);
    });
});
