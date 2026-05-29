import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as u}from"./DashboardCard-BpOXpPBq.js";import{P as y}from"./Panel-DZHnjkTo.js";import{S as t}from"./SwtKpiCard-bNJCBAO6.js";import{B as x}from"./ButtonGroupToggle-DKyClBy_.js";import{a as n}from"./Icon-Crsy-5kb.js";import"./utils-BEhiKRD9.js";const k={title:"Components/Cards"},a={name:"DashboardCard",render:()=>e.jsx("div",{style:{width:520},children:e.jsx(u,{title:"Top 5 systems",children:e.jsx("div",{className:"wm-t2 text-text-secondary",style:{padding:"32px 0"},children:"Card body content goes here."})})})},r={name:"Panel",render:()=>e.jsx("div",{style:{width:520},children:e.jsx(y,{title:"From where users access",headerRight:e.jsx(x,{active:"right",left:e.jsx(n,{name:"list",size:16}),right:e.jsx(n,{name:"globe",size:16})}),children:e.jsx("div",{className:"wm-t2 text-text-secondary",style:{padding:"32px 0"},children:"Panel body content goes here."})})})},s={name:"SwtKpiCard — all colors",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24,width:980},children:[e.jsx(t,{title:"Users played Smart Walk-Thrus",value:"79",lead:"11.6%",rest:"  of total users exposed to WalkMe",icon:"kpi-users",color:{bg:"#b4dae1",fg:"#1e606c"}}),e.jsx(t,{title:"Smart Walk-Thru plays",value:"76",lead:"1.7",rest:" plays per user",icon:"kpi-play",color:{bg:"#f5c9af",fg:"#8e4215"}}),e.jsx(t,{title:"Main goal completions",value:"34",lead:"22%",rest:" of plays resulted in reaching a main goal",icon:"kpi-goal",color:{bg:"#e0cef0",fg:"#6a4a87"}})]})};var o,d,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "DashboardCard",
  render: () => <div style={{
    width: 520
  }}>
      <DashboardCard title="Top 5 systems">
        <div className="wm-t2 text-text-secondary" style={{
        padding: "32px 0"
      }}>Card body content goes here.</div>
      </DashboardCard>
    </div>
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Panel",
  render: () => <div style={{
    width: 520
  }}>
      <Panel title="From where users access" headerRight={<ButtonGroupToggle active="right" left={<Icon name="list" size={16} />} right={<Icon name="globe" size={16} />} />}>
        <div className="wm-t2 text-text-secondary" style={{
        padding: "32px 0"
      }}>Panel body content goes here.</div>
      </Panel>
    </div>
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "SwtKpiCard — all colors",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    width: 980
  }}>
      <SwtKpiCard title="Users played Smart Walk-Thrus" value="79" lead="11.6%" rest="  of total users exposed to WalkMe" icon="kpi-users" color={{
      bg: "#b4dae1",
      fg: "#1e606c"
    }} />
      <SwtKpiCard title="Smart Walk-Thru plays" value="76" lead="1.7" rest=" plays per user" icon="kpi-play" color={{
      bg: "#f5c9af",
      fg: "#8e4215"
    }} />
      <SwtKpiCard title="Main goal completions" value="34" lead="22%" rest=" of plays resulted in reaching a main goal" icon="kpi-goal" color={{
      bg: "#e0cef0",
      fg: "#6a4a87"
    }} />
    </div>
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const P=["Dashboard_Card","Panel_Card","KpiCards"];export{a as Dashboard_Card,s as KpiCards,r as Panel_Card,P as __namedExportsOrder,k as default};
