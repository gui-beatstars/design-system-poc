import{j as e}from"./jsx-runtime-DpaxUH3I.js";import"./iframe-n-wf9pBm.js";import"./preload-helper-Ct5FWWRu.js";const w="_button_15ay6_10",M="_primary_15ay6_36",O="_hover_15ay6_62",I="_focus_15ay6_70",q="_dark_15ay6_77",D="_disabled_15ay6_103",H="_small_15ay6_115",F="_medium_15ay6_124",$="_large_15ay6_133",A="_rounded_15ay6_146",E="_pill_15ay6_150",U="_icon_15ay6_158",Z="_iconSmall_15ay6_165",G="_iconMedium_15ay6_170",J="_iconLarge_15ay6_175",K="_iconLeft_15ay6_180",Q="_iconRight_15ay6_187",X="_iconOnly_15ay6_194",Y="_label_15ay6_223",ee="_labelText_15ay6_231",ae="_labelSmall_15ay6_240",re="_labelMedium_15ay6_245",ne="_labelLarge_15ay6_250",te="_borderOverlay_15ay6_259",oe="_fullWidth_15ay6_283",se="_loading_15ay6_287",le="_spin_15ay6_1",a={button:w,primary:M,hover:O,focus:I,dark:q,disabled:D,small:H,medium:F,large:$,rounded:A,pill:E,icon:U,iconSmall:Z,iconMedium:G,iconLarge:J,iconLeft:K,iconRight:Q,iconOnly:X,label:Y,labelText:ee,labelSmall:ae,labelMedium:re,labelLarge:ne,borderOverlay:te,fullWidth:oe,loading:se,spin:le},k={p15e73480:"M8 2.35C8.35899 2.35 8.65 2.64101 8.65 3V7.35H13C13.359 7.35 13.65 7.64102 13.65 8C13.65 8.35899 13.359 8.65 13 8.65H8.65V13C8.65 13.359 8.35899 13.65 8 13.65C7.64102 13.65 7.35 13.359 7.35 13V8.65H3C2.64101 8.65 2.35 8.35899 2.35 8C2.35 7.64102 2.64101 7.35 3 7.35H7.35V3C7.35 2.64101 7.64102 2.35 8 2.35Z",p78f2a80:"M12 3C12.5523 3 13 3.44772 13 4V11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H11V4C11 3.44772 11.4477 3 12 3Z"},T=({size:t,color:n})=>{const o={small:16,medium:16,large:24}[t],x=o===24?"0 0 24 24":"0 0 16 16",s=o===24?k.p78f2a80:k.p15e73480;return e.jsx("div",{className:`${a.icon} ${a[`icon${t.charAt(0).toUpperCase()+t.slice(1)}`]}`,children:e.jsx("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:x,children:e.jsx("path",{clipRule:"evenodd",d:s,fill:n,fillRule:"evenodd",style:{fillOpacity:"1"}})})})},r=({variant:t="primary",size:n="large",shape:N="rounded",label:o="Name me",iconLeft:x=!1,iconRight:s=!1,iconOnly:S=!1,onClick:j,disabled:l=!1,fullWidth:B=!1,loading:C=!1,className:W=""})=>{const V=l?"#9f9f9f":"white",P=[a.button,a[t],a[n],a[N],S&&a.iconOnly,B&&a.fullWidth,C&&a.loading,l&&a.disabled,W].filter(Boolean).join(" ");return e.jsxs("button",{className:P,onClick:l||C?void 0:j,disabled:l||C,children:[(x||S)&&!s&&e.jsx("div",{className:a.iconLeft,children:e.jsx(T,{size:n,color:V})}),!S&&e.jsx("div",{className:`${a.label} ${a[`label${n.charAt(0).toUpperCase()+n.slice(1)}`]}`,children:e.jsx("div",{className:a.labelText,children:e.jsx("p",{children:o})})}),s&&e.jsx("div",{className:a.iconRight,children:e.jsx(T,{size:n,color:V})})]})};r.__docgenInfo={description:`Button component using CSS Modules for scoped styling.
This version demonstrates the Button.module.css usage.`,methods:[],displayName:"ButtonWithModule",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'hover' | 'focus' | 'disabled' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'dark'"}]},description:"The button variant determines the color scheme",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"The button size",defaultValue:{value:"'large'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'rounded' | 'pill'",elements:[{name:"literal",value:"'rounded'"},{name:"literal",value:"'pill'"}]},description:"The button shape",defaultValue:{value:"'rounded'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Button text label",defaultValue:{value:"'Name me'",computed:!1}},iconLeft:{required:!1,tsType:{name:"boolean"},description:"Show icon on the left side",defaultValue:{value:"false",computed:!1}},iconRight:{required:!1,tsType:{name:"boolean"},description:"Show icon on the right side",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Icon only mode (no label)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const de={title:"Components/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"A button component using CSS Modules for scoped styling. Demonstrates an alternative approach to the Tailwind-based Button component."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","hover","focus","disabled","dark"],description:"The button color variant",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["large","medium","small"],description:"The button size",table:{type:{summary:"string"},defaultValue:{summary:"large"}}},shape:{control:"select",options:["rounded","pill"],description:"The button shape",table:{type:{summary:"string"},defaultValue:{summary:"rounded"}}},label:{control:"text",description:"Button text label",table:{type:{summary:"string"},defaultValue:{summary:"Name me"}}},iconLeft:{control:"boolean",description:"Show icon on the left side",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconRight:{control:"boolean",description:"Show icon on the right side",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconOnly:{control:"boolean",description:"Icon only mode (no label)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Full width button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Loading state with spinner",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Click handler function",table:{type:{summary:"() => void"}}}}},i={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0}},c={args:{variant:"primary",size:"large",shape:"pill",iconOnly:!0,iconRight:!0}},u={args:{variant:"primary",size:"medium",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0}},d={args:{variant:"primary",size:"small",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0}},m={args:{variant:"hover",size:"large",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0}},p={args:{variant:"focus",size:"large",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0}},g={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0,disabled:!0}},f={args:{variant:"dark",size:"large",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0},parameters:{backgrounds:{default:"light"}}},y={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!1}},h={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!1,iconRight:!0}},b={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!1,iconRight:!1}},v={args:{variant:"primary",size:"large",shape:"rounded",label:"Processing...",loading:!0}},_={args:{variant:"primary",size:"large",shape:"rounded",label:"Full Width Button",fullWidth:!0},parameters:{layout:"padded"}},L={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{variant:"primary",size:"large",label:"Large",iconLeft:!0,iconRight:!0}),e.jsx(r,{variant:"primary",size:"medium",label:"Medium",iconLeft:!0,iconRight:!0}),e.jsx(r,{variant:"primary",size:"small",label:"Small",iconLeft:!0,iconRight:!0})]})},R={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"primary",size:"large",label:"Primary",iconLeft:!0,iconRight:!0}),e.jsx(r,{variant:"hover",size:"large",label:"Hover",iconLeft:!0,iconRight:!0}),e.jsx(r,{variant:"focus",size:"large",label:"Focus",iconLeft:!0,iconRight:!0}),e.jsx(r,{variant:"primary",size:"large",label:"Disabled",iconLeft:!0,iconRight:!0,disabled:!0}),e.jsx(r,{variant:"dark",size:"large",label:"Dark",iconLeft:!0,iconRight:!0})]})},z={args:{variant:"primary",size:"large",shape:"rounded",label:"Click me!",iconLeft:!0,iconRight:!0,disabled:!1,loading:!1,fullWidth:!1}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'pill',
    iconOnly: true,
    iconRight: true
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'hover',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'focus',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true,
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: false
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: false,
    iconRight: true
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: false,
    iconRight: false
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Processing...',
    loading: true
  }
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Full Width Button',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,..._.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button variant="primary" size="large" label="Large" iconLeft iconRight />
      <Button variant="primary" size="medium" label="Medium" iconLeft iconRight />
      <Button variant="primary" size="small" label="Small" iconLeft iconRight />
    </div>
}`,...L.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button variant="primary" size="large" label="Primary" iconLeft iconRight />
      <Button variant="hover" size="large" label="Hover" iconLeft iconRight />
      <Button variant="focus" size="large" label="Focus" iconLeft iconRight />
      <Button variant="primary" size="large" label="Disabled" iconLeft iconRight disabled />
      <Button variant="dark" size="large" label="Dark" iconLeft iconRight />
    </div>
}`,...R.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Click me!',
    iconLeft: true,
    iconRight: true,
    disabled: false,
    loading: false,
    fullWidth: false
  }
}`,...z.parameters?.docs?.source}}};const me=["Primary","PrimaryPill","PrimaryMedium","PrimarySmall","Hover","Focus","Disabled","Dark","IconLeftOnly","IconRightOnly","NoIcons","Loading","FullWidth","SizeComparison","VariantComparison","Playground"];export{f as Dark,g as Disabled,p as Focus,_ as FullWidth,m as Hover,y as IconLeftOnly,h as IconRightOnly,v as Loading,b as NoIcons,z as Playground,i as Primary,u as PrimaryMedium,c as PrimaryPill,d as PrimarySmall,L as SizeComparison,R as VariantComparison,me as __namedExportsOrder,de as default};
