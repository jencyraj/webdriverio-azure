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
});
