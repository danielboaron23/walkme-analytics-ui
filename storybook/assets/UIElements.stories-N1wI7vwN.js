import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{A as a}from"./Avatar-DKrS5qVR.js";import{C as n,S as d,P as j}from"./Pagination-CpvwKb3A.js";import{a as s,S as l}from"./StatusBadge-CApHojz9.js";import{T as r}from"./TextButton-CV0m2poN.js";import"./utils-BEhiKRD9.js";import"./Icon-Crsy-5kb.js";const A={title:"Components/UI Elements",parameters:{backgrounds:{default:"surface"}}};function e({title:h,children:g}){return t.jsxs("div",{style:{marginBottom:28},children:[t.jsx("div",{className:"wm-t1-bold text-text-primary",style:{marginBottom:12},children:h}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:24,flexWrap:"wrap"},children:g})]})}const i={render:()=>t.jsxs("div",{style:{padding:24,fontFamily:"var(--font-body)"},children:[t.jsxs(e,{title:"Avatar — sizes",children:[t.jsx(a,{initials:"DT",size:32}),t.jsx(a,{initials:"OH",size:24}),t.jsx(a,{initials:"SM",size:16})]}),t.jsxs(e,{title:"Counter (count badge)",children:[t.jsx(n,{children:"12"}),t.jsx(n,{children:"132"}),t.jsx(n,{children:"670"}),t.jsx(n,{children:"99+"})]}),t.jsxs(e,{title:"StatusBadge",children:[t.jsx(s,{label:"Published",color:l.published}),t.jsx(s,{label:"Draft",color:l.draft}),t.jsx(s,{label:"Error",color:l.error})]}),t.jsxs(e,{title:"SearchInput",children:[t.jsx(d,{}),t.jsx(d,{width:320,placeholder:"Search systems..."})]}),t.jsxs(e,{title:"TextButton — variants",children:[t.jsx(r,{icon:"export",children:"Export"}),t.jsx(r,{icon:"export",variant:"outline",children:"Export"}),t.jsx(r,{icon:"insights",children:"Go to Insights Classic"}),t.jsx(r,{icon:"filter",children:"Add Filter"})]})]})},o={name:"Pagination",render:()=>t.jsx("div",{style:{width:1e3,padding:24,fontFamily:"var(--font-body)"},children:t.jsx(j,{summary:"Showing 1–10 of 72",pages:["1","2","3","…","28"],active:"1",perPage:"10"})})};var c,u,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24,
    fontFamily: "var(--font-body)"
  }}>
      <Section title="Avatar — sizes">
        <Avatar initials="DT" size={32} />
        <Avatar initials="OH" size={24} />
        <Avatar initials="SM" size={16} />
      </Section>

      <Section title="Counter (count badge)">
        <Counter>12</Counter>
        <Counter>132</Counter>
        <Counter>670</Counter>
        <Counter>99+</Counter>
      </Section>

      <Section title="StatusBadge">
        <StatusBadge label="Published" color={STATUS_COLORS.published} />
        <StatusBadge label="Draft" color={STATUS_COLORS.draft} />
        <StatusBadge label="Error" color={STATUS_COLORS.error} />
      </Section>

      <Section title="SearchInput">
        <SearchInput />
        <SearchInput width={320} placeholder="Search systems..." />
      </Section>

      <Section title="TextButton — variants">
        <TextButton icon="export">Export</TextButton>
        <TextButton icon="export" variant="outline">Export</TextButton>
        <TextButton icon="insights">Go to Insights Classic</TextButton>
        <TextButton icon="filter">Add Filter</TextButton>
      </Section>
    </div>
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var p,m,S;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Pagination",
  render: () => <div style={{
    width: 1000,
    padding: 24,
    fontFamily: "var(--font-body)"
  }}>
      <Pagination summary="Showing 1–10 of 72" pages={["1", "2", "3", "…", "28"]} active="1" perPage="10" />
    </div>
}`,...(S=(m=o.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};const O=["Atoms","PaginationStory"];export{i as Atoms,o as PaginationStory,O as __namedExportsOrder,A as default};
