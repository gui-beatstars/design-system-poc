import{j as e}from"./jsx-runtime-CX4pd9K-.js";import"./iframe-biIA7_it.js";import"./preload-helper-Ct5FWWRu.js";const W="_button_15ay6_10",w="_primary_15ay6_36",M="_hover_15ay6_62",O="_focus_15ay6_70",P="_dark_15ay6_77",k="_disabled_15ay6_103",I="_small_15ay6_115",q="_medium_15ay6_124",D="_large_15ay6_133",H="_rounded_15ay6_146",F="_pill_15ay6_150",$="_icon_15ay6_158",A="_iconSmall_15ay6_165",E="_iconMedium_15ay6_170",U="_iconLarge_15ay6_175",Z="_iconLeft_15ay6_180",G="_iconRight_15ay6_187",J="_iconOnly_15ay6_194",K="_label_15ay6_223",Q="_labelText_15ay6_231",X="_labelSmall_15ay6_240",Y="_labelMedium_15ay6_245",ee="_labelLarge_15ay6_250",ae="_borderOverlay_15ay6_259",re="_fullWidth_15ay6_283",ne="_loading_15ay6_287",te="_spin_15ay6_1",a={button:W,primary:w,hover:M,focus:O,dark:P,disabled:k,small:I,medium:q,large:D,rounded:H,pill:F,icon:$,iconSmall:A,iconMedium:E,iconLarge:U,iconLeft:Z,iconRight:G,iconOnly:J,label:K,labelText:Q,labelSmall:X,labelMedium:Y,labelLarge:ee,borderOverlay:ae,fullWidth:re,loading:ne,spin:te},C={p15e73480:"M8 2.35C8.35899 2.35 8.65 2.64101 8.65 3V7.35H13C13.359 7.35 13.65 7.64102 13.65 8C13.65 8.35899 13.359 8.65 13 8.65H8.65V13C8.65 13.359 8.35899 13.65 8 13.65C7.64102 13.65 7.35 13.359 7.35 13V8.65H3C2.64101 8.65 2.35 8.35899 2.35 8C2.35 7.64102 2.64101 7.35 3 7.35H7.35V3C7.35 2.64101 7.64102 2.35 8 2.35Z",p78f2a80:"M12 3C12.5523 3 13 3.44772 13 4V11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H11V4C11 3.44772 11.4477 3 12 3Z"},V=({size:t,color:n})=>{const l={small:16,medium:16,large:24}[t],L=l===24?"0 0 24 24":"0 0 16 16",i=l===24?C.p78f2a80:C.p15e73480;return e.jsx("div",{className:`${a.icon} ${a[`icon${t.charAt(0).toUpperCase()+t.slice(1)}`]}`,children:e.jsx("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:L,children:e.jsx("path",{clipRule:"evenodd",d:i,fill:n,fillRule:"evenodd",style:{fillOpacity:"1"}})})})},r=({variant:t="primary",size:n="large",shape:S="rounded",label:l="Name me",iconLeft:L=!1,iconRight:i=!1,iconOnly:x=!1,onClick:N,disabled:o=!1,fullWidth:T=!1,loading:R=!1,className:j=""})=>{const z=o?"#9f9f9f":"white",B=[a.button,a[t],a[n],a[S],x&&a.iconOnly,T&&a.fullWidth,R&&a.loading,o&&a.disabled,j].filter(Boolean).join(" ");return e.jsxs("button",{className:B,onClick:o||R?void 0:N,disabled:o||R,children:[(L||x)&&!i&&e.jsx("div",{className:a.iconLeft,children:e.jsx(V,{size:n,color:z})}),!x&&e.jsx("div",{className:`${a.label} ${a[`label${n.charAt(0).toUpperCase()+n.slice(1)}`]}`,children:e.jsx("div",{className:a.labelText,children:e.jsx("p",{children:l})})}),i&&e.jsx("div",{className:a.iconRight,children:e.jsx(V,{size:n,color:z})})]})};r.__docgenInfo={description:`Button component using CSS Modules for scoped styling.
This version demonstrates the Button.module.css usage.`,methods:[],displayName:"ButtonWithModule",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'hover' | 'focus' | 'disabled' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'dark'"}]},description:"The button variant determines the color scheme",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"The button size",defaultValue:{value:"'large'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'rounded' | 'pill'",elements:[{name:"literal",value:"'rounded'"},{name:"literal",value:"'pill'"}]},description:"The button shape",defaultValue:{value:"'rounded'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Button text label",defaultValue:{value:"'Name me'",computed:!1}},iconLeft:{required:!1,tsType:{name:"boolean"},description:"Show icon on the left side",defaultValue:{value:"false",computed:!1}},iconRight:{required:!1,tsType:{name:"boolean"},description:"Show icon on the right side",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Icon only mode (no label)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const se={title:"Components/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"A button component using CSS Modules for scoped styling. Demonstrates an alternative approach to the Tailwind-based Button component."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary"],description:"The button color variant",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["large","medium","small"],description:"The button size",table:{type:{summary:"string"},defaultValue:{summary:"large"}}},shape:{control:"select",options:["rounded","pill"],description:"The button shape",table:{type:{summary:"string"},defaultValue:{summary:"rounded"}}},label:{control:"text",description:"Button text label",table:{type:{summary:"string"},defaultValue:{summary:"Name me"}}},iconLeft:{control:"boolean",description:"Show icon on the left side",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconRight:{control:"boolean",description:"Show icon on the right side",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconOnly:{control:"boolean",description:"Icon only mode (no label)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Full width button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Loading state with spinner",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onClick:{action:"clicked",description:"Click handler function",table:{type:{summary:"() => void"}}}}},s={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0}},c={args:{variant:"primary",size:"large",shape:"pill",iconOnly:!0,iconRight:!0}},d={args:{variant:"primary",size:"medium",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0}},u={args:{variant:"primary",size:"small",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0}},m={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!0,disabled:!0}},p={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!0,iconRight:!1}},g={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!1,iconRight:!0}},y={args:{variant:"primary",size:"large",shape:"rounded",label:"Name me",iconLeft:!1,iconRight:!1}},f={args:{variant:"primary",size:"large",shape:"rounded",label:"Processing...",loading:!0}},h={args:{variant:"primary",size:"large",shape:"rounded",label:"Full Width Button",fullWidth:!0},parameters:{layout:"padded"}},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r,{variant:"primary",size:"large",label:"Large",iconLeft:!0,iconRight:!0}),e.jsx(r,{variant:"primary",size:"medium",label:"Medium",iconLeft:!0,iconRight:!0}),e.jsx(r,{variant:"primary",size:"small",label:"Small",iconLeft:!0,iconRight:!0})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"primary",size:"large",label:"Default",iconLeft:!0,iconRight:!0}),e.jsx(r,{variant:"primary",size:"large",label:"Disabled",iconLeft:!0,iconRight:!0,disabled:!0}),e.jsx(r,{variant:"primary",size:"large",label:"Loading",iconLeft:!0,iconRight:!0,loading:!0})]})},_={args:{variant:"primary",size:"large",shape:"rounded",label:"Click me!",iconLeft:!0,iconRight:!0,disabled:!1,loading:!1,fullWidth:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'pill',
    iconOnly: true,
    iconRight: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'small',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: true,
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: true,
    iconRight: false
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: false,
    iconRight: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Name me',
    iconLeft: false,
    iconRight: false
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'large',
    shape: 'rounded',
    label: 'Processing...',
    loading: true
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Button variant="primary" size="large" label="Large" iconLeft iconRight />
      <Button variant="primary" size="medium" label="Medium" iconLeft iconRight />
      <Button variant="primary" size="small" label="Small" iconLeft iconRight />
    </div>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Button variant="primary" size="large" label="Default" iconLeft iconRight />
      <Button variant="primary" size="large" label="Disabled" iconLeft iconRight disabled />
      <Button variant="primary" size="large" label="Loading" iconLeft iconRight loading />
    </div>
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const ce=["Primary","PrimaryPill","PrimaryMedium","PrimarySmall","Disabled","IconLeftOnly","IconRightOnly","NoIcons","Loading","FullWidth","SizeComparison","StateComparison","Playground"];export{m as Disabled,h as FullWidth,p as IconLeftOnly,g as IconRightOnly,f as Loading,y as NoIcons,_ as Playground,s as Primary,d as PrimaryMedium,c as PrimaryPill,u as PrimarySmall,b as SizeComparison,v as StateComparison,ce as __namedExportsOrder,se as default};
