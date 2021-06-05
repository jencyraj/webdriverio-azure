const { default: $ } = require("webdriverio/build/commands/browser/$")

class homepage{
    get pageHeader(){return $('h2')}
    get subheaading(){return $('div.a.az.bb.dz.gk.gn.go.gp.gs.gt.gv.gw.gz.ha.hb.hc.hd.he.hf.hg.hh.hi.hz.ia.ib.ic.id.ie.if.ig.ih.ii.ij.ik.y > p')}
    get supportlink(){return $("//a[text()='Learn more']")}
}
