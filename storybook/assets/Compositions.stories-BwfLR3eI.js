import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as h,O as v,S as g}from"./SwtContent-DleQOO-Z.js";import"./Sidebar-yR2o8y7q.js";import"./Icon-Crsy-5kb.js";import"./WalkMeLogo-B7oW-7T4.js";import"./Avatar-DKrS5qVR.js";import"./utils-BEhiKRD9.js";import"./Panel-DZHnjkTo.js";import"./ChartLegend-DGVGL2iU.js";import"./generateCategoricalChart-r0B4o1Vq.js";import"./index-CrVRxQrG.js";import"./tiny-invariant-CopsF_GD.js";import"./ButtonGroupToggle-DKyClBy_.js";import"./SwtKpiCard-bNJCBAO6.js";import"./SwtSummaryTable-DDrKn_-f.js";import"./Pagination-CpvwKb3A.js";import"./StatusBadge-CApHojz9.js";const I={title:"Components/Compositions",parameters:{layout:"fullscreen"}},t={name:"AppShell (chrome only)",render:()=>e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{showSearch:!0,children:e.jsx("div",{className:"flex h-[400px] items-center justify-center wm-t1 text-text-secondary",children:"Page content slots here"})})})},n={name:"OverviewContent (4 widgets)",render:()=>e.jsx("div",{className:"bg-bg-app",style:{padding:32,minWidth:1400},children:e.jsx(v,{})})},r={name:"SwtContent (KPI cards + table)",render:()=>e.jsx("div",{className:"bg-bg-app",style:{padding:32,minWidth:1400},children:e.jsx(g,{onOpenDetail:()=>{}})})};var s,o,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "AppShell (chrome only)",
  render: () => <div style={{
    height: "100vh"
  }}>
      <AppShell showSearch>
        <div className="flex h-[400px] items-center justify-center wm-t1 text-text-secondary">
          Page content slots here
        </div>
      </AppShell>
    </div>
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,p,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "OverviewContent (4 widgets)",
  render: () => <div className="bg-bg-app" style={{
    padding: 32,
    minWidth: 1400
  }}>
      <OverviewContent />
    </div>
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "SwtContent (KPI cards + table)",
  render: () => <div className="bg-bg-app" style={{
    padding: 32,
    minWidth: 1400
  }}>
      <SwtContent onOpenDetail={() => {}} />
    </div>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const K=["AppShell_Empty","Overview_Content","SWT_Content"];export{t as AppShell_Empty,n as Overview_Content,r as SWT_Content,K as __namedExportsOrder,I as default};
