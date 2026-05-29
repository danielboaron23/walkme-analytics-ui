import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as F,S as O}from"./Sidebar-yR2o8y7q.js";import{F as L,T as N,a as k}from"./TabStrip-CiSM52cy.js";import{a as H}from"./Icon-Crsy-5kb.js";import"./WalkMeLogo-B7oW-7T4.js";import"./Avatar-DKrS5qVR.js";import"./utils-BEhiKRD9.js";import"./TextButton-CV0m2poN.js";const z={title:"Components/Chrome",parameters:{layout:"fullscreen"}},a={name:"Header",render:()=>e.jsx(F,{showSearch:!0})},r={name:"Sidebar",render:()=>e.jsx("div",{style:{height:520},children:e.jsx(O,{})})},s={name:"TitleBar — Systems Overview",render:()=>e.jsx("div",{className:"bg-bg-app",children:e.jsx(k,{title:"Systems Overview",exportVariant:"outline"})})},t={name:"TitleBar — Dashboard (back + env + insights)",render:()=>e.jsx("div",{className:"bg-bg-app",children:e.jsx(k,{title:"Salesforce Lightning",environment:"Production",exportVariant:"link",showInsightsClassic:!0,onBack:()=>{},icon:e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-cr20 bg-bg-app text-icon",children:e.jsx(H,{name:"grid",size:16})})})})},i={name:"FilterRow + TabStrip",render:()=>e.jsxs("div",{className:"bg-bg-app",children:[e.jsx(L,{dateLabel:"Last week (Jan 1 - Jan 7)",showAddFilter:!0}),e.jsx(N,{active:"Smart Walk- Thrus"})]})},n={name:"TabStrip — active states",render:()=>e.jsx("div",{className:"bg-bg-app",style:{display:"flex",flexDirection:"column",gap:8},children:["Oveview","SmartTips","Surveys"].map(o=>e.jsx(N,{active:o},o))})};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Header",
  render: () => <Header showSearch />
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Sidebar",
  render: () => <div style={{
    height: 520
  }}><Sidebar /></div>
}`,...(v=(l=r.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var b,g,u;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "TitleBar — Systems Overview",
  render: () => <div className="bg-bg-app"><TitleBar title="Systems Overview" exportVariant="outline" /></div>
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var S,h,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "TitleBar — Dashboard (back + env + insights)",
  render: () => <div className="bg-bg-app">
      <TitleBar title="Salesforce Lightning" environment="Production" exportVariant="link" showInsightsClassic onBack={() => {}} icon={<span className="flex h-7 w-7 items-center justify-center rounded-cr20 bg-bg-app text-icon"><Icon name="grid" size={16} /></span>} />
    </div>
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,w,f;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "FilterRow + TabStrip",
  render: () => <div className="bg-bg-app">
      <FilterRow dateLabel="Last week (Jan 1 - Jan 7)" showAddFilter />
      <TabStrip active="Smart Walk- Thrus" />
    </div>
}`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var j,y,B;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "TabStrip — active states",
  render: () => <div className="bg-bg-app" style={{
    display: "flex",
    flexDirection: "column",
    gap: 8
  }}>
      {["Oveview", "SmartTips", "Surveys"].map(t => <TabStrip key={t} active={t} />)}
    </div>
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const E=["AppHeader","LeftNav","TitleBar_SystemsOverview","TitleBar_Dashboard","FilterAndTabs","TabStates"];export{a as AppHeader,i as FilterAndTabs,r as LeftNav,n as TabStates,t as TitleBar_Dashboard,s as TitleBar_SystemsOverview,E as __namedExportsOrder,z as default};
