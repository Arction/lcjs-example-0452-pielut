(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,a,t)=>{const l=t(89),{PieChartTypes:o,lightningChart:r,LegendBoxBuilders:s,SliceLabelFormatters:i,SliceSorters:n,LUT:c,ColorRGBA:d,Themes:h}=l,u=new c({steps:[{value:20,color:d(255,0,24)},{value:40,color:d(255,165,44)},{value:60,color:d(255,255,65)},{value:80,color:d(0,128,24)},{value:100,color:d(0,0,249)},{value:120,color:d(134,0,125)}],interpolate:!0}),m=r().Pie({theme:h[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,type:o.LabelsOnSides}).setTitle("Pie Chart").setMultipleSliceExplosion(!0).setLabelFormatter(i.NamePlusValue).setSliceSorter(n.None).setLUT(u).setLabelConnectorGap(10),p=[];for(let e=1;e<=10;e++)p.push({name:`Slice #${e}`,value:1+120*Math.random()});const v=p.map((e=>m.addSlice(e.name,e.value)));m.addLegendBox(s.VerticalLegendBox).setAutoDispose({type:"max-width",maxWidth:.3}).add(m),setTimeout((()=>{v.forEach((e=>e.setValue(1+120*Math.random())))}),2e3),setInterval((()=>{v.forEach((e=>e.setValue(1+120*Math.random())))}),5e3)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);