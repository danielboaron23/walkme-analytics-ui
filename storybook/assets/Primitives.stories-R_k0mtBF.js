import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-CrVRxQrG.js";import{a as r,I as N}from"./Icon-Crsy-5kb.js";import{S as w}from"./SystemLogo-B3v5t-_c.js";import{W as S}from"./WalkMeLogo-B7oW-7T4.js";import{B as M}from"./ButtonGroupToggle-DKyClBy_.js";import{V as D}from"./ViewModeMenu-Bn7cKURt.js";import"./utils-BEhiKRD9.js";const V={title:"Components/Primitives",parameters:{backgrounds:{default:"surface"}}},s={args:{name:"search",size:20},argTypes:{name:{control:"select",options:Object.keys(N)},size:{control:{type:"range",min:12,max:48,step:2}}},render:n=>e.jsx("span",{className:"text-icon",children:e.jsx(r,{...n})})},t={render:()=>e.jsx("div",{style:{display:"flex",gap:20,alignItems:"center"},children:["text-icon","text-brand","text-text-primary","text-info-success"].map(n=>e.jsxs("span",{className:n,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(r,{name:"bell",size:24}),e.jsx("span",{className:"wm-t4 text-text-secondary",children:n})]},n))})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(S,{}),e.jsx("div",{style:{display:"flex",gap:16},children:["SmartHighlight","Gsuite","Zoom","Service Now","Google Drive"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(w,{name:n}),e.jsx("span",{className:"wm-t4 text-text-secondary",children:n})]},n))})]})},o={render:()=>{const n=()=>{const[i,h]=I.useState("side");return e.jsxs("div",{style:{display:"flex",gap:40,alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{className:"wm-t3 text-text-secondary",style:{marginBottom:8},children:"ButtonGroupToggle"}),e.jsx(M,{active:"right",left:e.jsx(r,{name:"list",size:16}),right:e.jsx(r,{name:"globe",size:16})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"wm-t3 text-text-secondary",style:{marginBottom:8},children:["ViewModeMenu — ",i]}),e.jsx(D,{mode:i,onChange:h})]})]})};return e.jsx(n,{})}};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: "search",
    size: 20
  },
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(ICONS) as IconName[]
    },
    size: {
      control: {
        type: "range",
        min: 12,
        max: 48,
        step: 2
      }
    }
  },
  render: args => <span className="text-icon"><Icon {...args} /></span>
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 20,
    alignItems: "center"
  }}>
      {(["text-icon", "text-brand", "text-text-primary", "text-info-success"] as const).map(c => <span key={c} className={c} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }}>
          <Icon name="bell" size={24} />
          <span className="wm-t4 text-text-secondary">{c}</span>
        </span>)}
    </div>
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,y,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      <WalkMeLogo />
      <div style={{
      display: "flex",
      gap: 16
    }}>
        {["SmartHighlight", "Gsuite", "Zoom", "Service Now", "Google Drive"].map(n => <div key={n} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6
      }}>
            <SystemLogo name={n} />
            <span className="wm-t4 text-text-secondary">{n}</span>
          </div>)}
      </div>
    </div>
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var f,v,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [mode, setMode] = useState<ViewMode>("side");
      return <div style={{
        display: "flex",
        gap: 40,
        alignItems: "flex-start"
      }}>
          <div>
            <div className="wm-t3 text-text-secondary" style={{
            marginBottom: 8
          }}>ButtonGroupToggle</div>
            <ButtonGroupToggle active="right" left={<Icon name="list" size={16} />} right={<Icon name="globe" size={16} />} />
          </div>
          <div>
            <div className="wm-t3 text-text-secondary" style={{
            marginBottom: 8
          }}>ViewModeMenu — {mode}</div>
            <ViewModeMenu mode={mode} onChange={setMode} />
          </div>
        </div>;
    };
    return <Demo />;
  }
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const O=["IconPlayground","IconColors","Logos","Toggles"];export{t as IconColors,s as IconPlayground,a as Logos,o as Toggles,O as __namedExportsOrder,V as default};
