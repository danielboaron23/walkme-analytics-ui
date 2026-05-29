import{j as e}from"./jsx-runtime-D_zvdyIk.js";const x={title:"Foundations/Typography"},n=[{cls:"wm-h1",label:"Heading H1",spec:"Poppins SemiBold · 24/32"},{cls:"wm-h2",label:"Heading H2",spec:"Poppins SemiBold · 20/28"},{cls:"wm-h3",label:"Heading H3",spec:"Poppins SemiBold · 16/24"},{cls:"wm-h4",label:"Heading H4",spec:"Poppins SemiBold · 14/20"},{cls:"wm-h5",label:"Heading H5",spec:"Poppins SemiBold · 10/16"}],p=[{cls:"wm-t1",label:"Text T1",spec:"Proxima Nova Regular · 16/24"},{cls:"wm-t1-bold",label:"Text T1 Bold",spec:"Proxima Nova Bold · 16/24"},{cls:"wm-t2",label:"Text T2",spec:"Proxima Nova Regular · 14/20"},{cls:"wm-t2-semibold",label:"Text T2 Semibold",spec:"Proxima Nova Semibold · 14/20"},{cls:"wm-t3",label:"Text T3",spec:"Proxima Nova Regular · 12/16"},{cls:"wm-t3-semibold",label:"Text T3 Semibold",spec:"Proxima Nova Semibold · 12/16"},{cls:"wm-t4",label:"Text T4",spec:"Proxima Nova Regular · 10/14"}];function a({cls:t,label:r,spec:i}){return e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:24,padding:"12px 0",borderBottom:"1px solid #ebeff7"},children:[e.jsxs("div",{style:{width:160},children:[e.jsx("div",{className:"wm-t2-semibold text-text-primary",children:t}),e.jsx("div",{className:"wm-t4 text-text-secondary",children:i})]}),e.jsxs("div",{className:`${t} text-text-primary`,children:[r," — The quick brown fox"]})]})}const s={render:()=>e.jsxs("div",{style:{padding:24,fontFamily:"var(--font-body)"},children:[e.jsx("h1",{className:"wm-h1 text-text-primary",style:{marginBottom:8},children:"Typography"}),e.jsx("p",{className:"wm-t2 text-text-secondary",style:{marginBottom:24},children:"Poppins for headings, Proxima Nova for body text."}),e.jsx("h3",{className:"wm-t1-bold text-text-primary",style:{margin:"16px 0 4px"},children:"Headings"}),n.map(t=>e.jsx(a,{...t},t.cls)),e.jsx("h3",{className:"wm-t1-bold text-text-primary",style:{margin:"28px 0 4px"},children:"Texts"}),p.map(t=>e.jsx(a,{...t},t.cls))]})};var l,o,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24,
    fontFamily: "var(--font-body)"
  }}>
      <h1 className="wm-h1 text-text-primary" style={{
      marginBottom: 8
    }}>Typography</h1>
      <p className="wm-t2 text-text-secondary" style={{
      marginBottom: 24
    }}>
        Poppins for headings, Proxima Nova for body text.
      </p>
      <h3 className="wm-t1-bold text-text-primary" style={{
      margin: "16px 0 4px"
    }}>Headings</h3>
      {HEADINGS.map(r => <Row key={r.cls} {...r} />)}
      <h3 className="wm-t1-bold text-text-primary" style={{
      margin: "28px 0 4px"
    }}>Texts</h3>
      {TEXTS.map(r => <Row key={r.cls} {...r} />)}
    </div>
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const c=["TypeRamp"];export{s as TypeRamp,c as __namedExportsOrder,x as default};
