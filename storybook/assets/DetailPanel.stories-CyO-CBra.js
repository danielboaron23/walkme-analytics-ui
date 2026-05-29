import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./index-CrVRxQrG.js";import{S as x,b as h,a as S}from"./SwtDetailPanel-DyhWz_dO.js";import"./Icon-Crsy-5kb.js";import"./PanelAnalyticsChart-CpBasJ36.js";import"./generateCategoricalChart-r0B4o1Vq.js";import"./utils-BEhiKRD9.js";import"./tiny-invariant-CopsF_GD.js";import"./ViewModeMenu-Bn7cKURt.js";import"./StatusBadge-CApHojz9.js";const A={title:"Components/Detail Panel",parameters:{layout:"fullscreen"}},s={render:()=>{const d=()=>{const[o,r]=w.useState("side");return e.jsx("div",{style:{height:"100vh",background:"#f0f3f9"},children:o==="wide"?e.jsx(h,{name:"Time Off Approval",viewMode:o,onViewMode:r,onClose:()=>r("side")}):e.jsx(S,{name:"Time Off Approval",viewMode:o,onViewMode:r,onClose:()=>{}})})};return e.jsx(d,{})}},t={render:()=>{const d=()=>{const[o,r]=w.useState("wide");return e.jsx("div",{style:{height:"100vh",background:"#fff"},children:e.jsx(h,{name:"Time Off Approval",viewMode:o,onViewMode:r,onClose:()=>{}})})};return e.jsx(d,{})}},n={name:"Smart Walk-Thru steps analysis",render:()=>e.jsx("div",{style:{width:600,padding:24,background:"#fff"},children:e.jsxs("div",{className:"rounded-cr40 border border-divider-el p-sp60",children:[e.jsx("div",{className:"wm-t1-bold text-text-primary",style:{paddingBottom:16},children:"Smart Walk-Thu steps analysis"}),e.jsx("div",{style:{maxHeight:360,overflowY:"auto"},children:e.jsx(x,{})})]})})};var a,i,m;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [mode, setMode] = useState<ViewMode>("side");
      return <div style={{
        height: "100vh",
        background: "#f0f3f9"
      }}>
          {mode === "wide" ? <SwtDetailWide name="Time Off Approval" viewMode={mode} onViewMode={setMode} onClose={() => setMode("side")} /> : <SwtDetailPanel name="Time Off Approval" viewMode={mode} onViewMode={setMode} onClose={() => {}} />}
        </div>;
    };
    return <Demo />;
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [mode, setMode] = useState<ViewMode>("wide");
      return <div style={{
        height: "100vh",
        background: "#fff"
      }}>
          <SwtDetailWide name="Time Off Approval" viewMode={mode} onViewMode={setMode} onClose={() => {}} />
        </div>;
    };
    return <Demo />;
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,v,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Smart Walk-Thru steps analysis",
  render: () => <div style={{
    width: 600,
    padding: 24,
    background: "#fff"
  }}>
      <div className="rounded-cr40 border border-divider-el p-sp60">
        <div className="wm-t1-bold text-text-primary" style={{
        paddingBottom: 16
      }}>Smart Walk-Thu steps analysis</div>
        <div style={{
        maxHeight: 360,
        overflowY: "auto"
      }}>
          <StepsAnalysis />
        </div>
      </div>
    </div>
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const C=["SideDrawer","WideView","Steps"];export{s as SideDrawer,n as Steps,t as WideView,C as __namedExportsOrder,A as default};
