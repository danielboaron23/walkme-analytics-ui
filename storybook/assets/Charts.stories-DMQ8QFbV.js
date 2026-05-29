import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as I,E as W,T as O}from"./EngagementLineChart-PybhF3Ig.js";import{a as z,b as U,F as X,C as c,E as k,M as q}from"./ChartLegend-DGVGL2iU.js";import{P as H}from"./PanelAnalyticsChart-CpBasJ36.js";import"./SystemLogo-B3v5t-_c.js";import"./utils-BEhiKRD9.js";import"./generateCategoricalChart-r0B4o1Vq.js";import"./index-CrVRxQrG.js";import"./tiny-invariant-CopsF_GD.js";import"./Panel-DZHnjkTo.js";import"./Icon-Crsy-5kb.js";import"./ButtonGroupToggle-DKyClBy_.js";const te={title:"Charts",parameters:{backgrounds:{default:"surface"}}},a=({w:r=820,h:D=260,children:G})=>e.jsx("div",{style:{width:r,height:D,padding:16},children:G}),n={name:"Top systems — grouped bar",render:()=>e.jsx(a,{children:e.jsx(O,{})})},s={name:"Engagement — multi-line",render:()=>e.jsx(a,{children:e.jsx(I,{})})},t={name:"Exposure trend — gradient line",render:()=>e.jsx(a,{h:240,children:e.jsx(U,{})})},o={name:"Content type — horizontal bars",render:()=>e.jsx(a,{w:840,h:520,children:e.jsx(z,{})})},i={name:"Funnel widget",render:()=>e.jsx("div",{style:{width:480,height:320},children:e.jsx(X,{className:"h-full"})})},l={name:"Map widget",render:()=>e.jsx("div",{style:{width:884,height:560},children:e.jsx(q,{className:"h-full"})})},d={name:"Panel analytics — live tooltip",render:()=>e.jsx(a,{w:560,h:300,children:e.jsx(H,{})})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,padding:16},children:[e.jsx(c,{items:W.map(r=>({color:r.color,label:r.label}))}),e.jsx(c,{items:k.map(r=>({color:r.color,label:"Default text"}))})]})};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Top systems — grouped bar",
  render: () => <Box><TopSystemsBarChart /></Box>
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,x,E;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Engagement — multi-line",
  render: () => <Box><EngagementLineChart /></Box>
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var y,S,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Exposure trend — gradient line",
  render: () => <Box h={240}><ExposureTrendChart /></Box>
}`,...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,T,f;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Content type — horizontal bars",
  render: () => <Box w={840} h={520}><ContentTypeChart /></Box>
}`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var B,_,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Funnel widget",
  render: () => <div style={{
    width: 480,
    height: 320
  }}><FunnelWidget className="h-full" /></div>
}`,...(w=(_=i.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var b,v,L;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Map widget",
  render: () => <div style={{
    width: 884,
    height: 560
  }}><MapWidget className="h-full" /></div>
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var M,P,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Panel analytics — live tooltip",
  render: () => <Box w={560} h={300}><PanelAnalyticsChart /></Box>
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var N,F,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 16
  }}>
      <ChartLegend items={ENGAGEMENT_SERIES.map(s => ({
      color: s.color,
      label: s.label
    }))} />
      <ChartLegend items={EXPOSURE_SERIES.map(s => ({
      color: s.color,
      label: "Default text"
    }))} />
    </div>
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const oe=["TopSystems_Bar","Engagement_Line","ExposureTrend_Area","ContentType_Bars","Funnel","Map","PanelAnalytics_Tooltip","Legend"];export{o as ContentType_Bars,s as Engagement_Line,t as ExposureTrend_Area,i as Funnel,m as Legend,l as Map,d as PanelAnalytics_Tooltip,n as TopSystems_Bar,oe as __namedExportsOrder,te as default};
