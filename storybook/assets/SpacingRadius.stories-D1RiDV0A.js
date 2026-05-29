import{j as e}from"./jsx-runtime-D_zvdyIk.js";const c={title:"Foundations/Spacing & Radius"},p=[{name:"sp5",px:2},{name:"sp10",px:4},{name:"sp20",px:8},{name:"sp30",px:12},{name:"sp40",px:16},{name:"sp60",px:24},{name:"sp70",px:28},{name:"sp80",px:32},{name:"dashboard",px:24}],o=[{name:"cr20",px:4},{name:"cr30",px:8},{name:"cr40",px:12},{name:"pill",px:9999}],t={render:()=>e.jsxs("div",{style:{padding:24,fontFamily:"var(--font-body)"},children:[e.jsx("h1",{className:"wm-h1 text-text-primary",style:{marginBottom:24},children:"Spacing scale"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:p.map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("div",{className:"wm-t2-semibold text-text-primary",style:{width:90},children:n.name}),e.jsxs("div",{className:"wm-t3 text-text-secondary",style:{width:48},children:[n.px,"px"]}),e.jsx("div",{style:{height:16,width:n.px,backgroundColor:"#385feb",borderRadius:2}})]},n.name))})]})},a={render:()=>e.jsxs("div",{style:{padding:24,fontFamily:"var(--font-body)"},children:[e.jsx("h1",{className:"wm-h1 text-text-primary",style:{marginBottom:24},children:"Corner radius"}),e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:o.map(n=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:96,height:96,backgroundColor:"#e9ecf8",border:"1px solid #d5d9e2",borderRadius:n.px}}),e.jsx("div",{className:"wm-t2-semibold text-text-primary",style:{marginTop:8},children:n.name}),e.jsx("div",{className:"wm-t4 text-text-secondary",children:n.px===9999?"full":`${n.px}px`})]},n.name))})]})};var s,i,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24,
    fontFamily: "var(--font-body)"
  }}>
      <h1 className="wm-h1 text-text-primary" style={{
      marginBottom: 24
    }}>Spacing scale</h1>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 14
    }}>
        {SPACING.map(s => <div key={s.name} style={{
        display: "flex",
        alignItems: "center",
        gap: 16
      }}>
            <div className="wm-t2-semibold text-text-primary" style={{
          width: 90
        }}>{s.name}</div>
            <div className="wm-t3 text-text-secondary" style={{
          width: 48
        }}>{s.px}px</div>
            <div style={{
          height: 16,
          width: s.px,
          backgroundColor: "#385feb",
          borderRadius: 2
        }} />
          </div>)}
      </div>
    </div>
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var d,l,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24,
    fontFamily: "var(--font-body)"
  }}>
      <h1 className="wm-h1 text-text-primary" style={{
      marginBottom: 24
    }}>Corner radius</h1>
      <div style={{
      display: "flex",
      gap: 24,
      flexWrap: "wrap"
    }}>
        {RADIUS.map(r => <div key={r.name} style={{
        textAlign: "center"
      }}>
            <div style={{
          width: 96,
          height: 96,
          backgroundColor: "#e9ecf8",
          border: "1px solid #d5d9e2",
          borderRadius: r.px
        }} />
            <div className="wm-t2-semibold text-text-primary" style={{
          marginTop: 8
        }}>{r.name}</div>
            <div className="wm-t4 text-text-secondary">{r.px === 9999 ? "full" : \`\${r.px}px\`}</div>
          </div>)}
      </div>
    </div>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const y=["Spacing","Radius"];export{a as Radius,t as Spacing,y as __namedExportsOrder,c as default};
