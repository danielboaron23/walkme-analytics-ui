import{j as e}from"./jsx-runtime-D_zvdyIk.js";const d={title:"Foundations/Colors"},s=[{title:"Brand / Action",tokens:[{name:"brand",value:"#385feb",varName:"--color-brand"},{name:"brand-hover",value:"#2f51c9",varName:"--color-brand-hover"},{name:"brand-ghost",value:"#385feb0d",varName:"--color-brand-ghost"},{name:"brand-ghost-hover",value:"#385feb17",varName:"--color-brand-ghost-hover"}]},{title:"Text",tokens:[{name:"text-primary",value:"#2f426c"},{name:"text-secondary",value:"#616f8f"},{name:"text-tertiary",value:"#8b95ad"},{name:"text-inverted",value:"#ffffff"},{name:"text-link",value:"#385feb"}]},{title:"Icon",tokens:[{name:"icon",value:"#6d81a6"},{name:"icon-secondary",value:"#616f8f"}]},{title:"Backgrounds / Surfaces",tokens:[{name:"bg-app",value:"#f0f3f9"},{name:"bg-surface",value:"#ffffff"},{name:"bg-sky",value:"#f7f9fc"},{name:"bg-tint",value:"#fafafc"},{name:"bg-input",value:"#f0f3f9"},{name:"dark",value:"#172034"}]},{title:"Dividers / Elements",tokens:[{name:"divider",value:"#f0f3f9"},{name:"divider-el",value:"#ebeff7"},{name:"divider-on-gray",value:"#d5d9e2"}]},{title:"Infographic",tokens:[{name:"info-lavender",value:"#485686"},{name:"info-lavender-tint",value:"#e9ecf8"},{name:"info-success",value:"#22917a"}]},{title:"Color boxes (status chips)",tokens:[{name:"box-aqua",value:"#1e606c"},{name:"box-aqua-bg",value:"#b4dae1"},{name:"box-orange",value:"#8e4215"},{name:"box-orange-bg",value:"#f5c9af"},{name:"box-violet",value:"#6a4a87"},{name:"box-violet-bg",value:"#e0cef0"}]},{title:"Chart palette",tokens:[{name:"bar-active",value:"#afbff7"},{name:"bar-interacted",value:"#8b9ddb"},{name:"line-coral",value:"#d0716c"},{name:"line-purple",value:"#a976d6"},{name:"line-orange",value:"#e26921"},{name:"line-teal",value:"#3099ab"},{name:"line-pink",value:"#d06d91"},{name:"series-blue",value:"#6b85d8"},{name:"series-blue-tint",value:"#9eb0e5"}]}];function i({t:a}){return e.jsxs("div",{style:{width:150},children:[e.jsx("div",{style:{height:64,borderRadius:8,backgroundColor:a.value,border:"1px solid #ebeff7"}}),e.jsx("div",{className:"wm-t3-semibold text-text-primary",style:{marginTop:6},children:a.name}),e.jsx("div",{className:"wm-t4 text-text-secondary",style:{textTransform:"uppercase"},children:a.value})]})}const t={render:()=>e.jsxs("div",{style:{padding:24,fontFamily:"var(--font-body)"},children:[e.jsx("h1",{className:"wm-h1 text-text-primary",style:{marginBottom:24},children:"Colors"}),s.map(a=>e.jsxs("section",{style:{marginBottom:32},children:[e.jsx("h3",{className:"wm-t1-bold text-text-primary",style:{marginBottom:12},children:a.title}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:a.tokens.map(n=>e.jsx(i,{t:n},n.name))})]},a.title))]})};var l,r,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24,
    fontFamily: "var(--font-body)"
  }}>
      <h1 className="wm-h1 text-text-primary" style={{
      marginBottom: 24
    }}>Colors</h1>
      {GROUPS.map(g => <section key={g.title} style={{
      marginBottom: 32
    }}>
          <h3 className="wm-t1-bold text-text-primary" style={{
        marginBottom: 12
      }}>{g.title}</h3>
          <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16
      }}>
            {g.tokens.map(t => <Swatch key={t.name} t={t} />)}
          </div>
        </section>)}
    </div>
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const v=["Palette"];export{t as Palette,v as __namedExportsOrder,d as default};
