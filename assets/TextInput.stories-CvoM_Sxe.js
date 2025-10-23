import{j as e}from"./jsx-runtime-H9YneURf.js";import{r as F}from"./iframe-BgpQ3o-x.js";import"./preload-helper-Ct5FWWRu.js";const de="_container_1of0o_60",he="_fullWidth_1of0o_71",me="_label_1of0o_79",fe="_requiredAsterisk_1of0o_117",be="_inputContainer_1of0o_127",xe="_inputContainerS_1of0o_140",ge="_inputContainerM_1of0o_145",ye="_inputContainerDefault_1of0o_151",ve="_inputContainerActive_1of0o_156",Ie="_inputContainerFilled_1of0o_166",Le="_inputContainerError_1of0o_171",Ce="_inputContainerDisabled_1of0o_176",_e="_textArea_1of0o_185",Se="_input_1of0o_127",De="_inputDefault_1of0o_222",Te="_inputActive_1of0o_226",Me="_inputFilled_1of0o_234",Ee="_inputError_1of0o_238",He="_inputDisabled_1of0o_242",ze="_cursor_1of0o_259",we="_cursorInner_1of0o_268",Be="_blink_1of0o_1",Fe="_iconArea_1of0o_286",je="_defaultIcon_1of0o_295",qe="_defaultIconDisabled_1of0o_303",Ae="_helper_1of0o_312",Ve="_helperText_1of0o_322",ke="_helperIcon_1of0o_331",We="_helperTextContent_1of0o_339",Re="_errorText_1of0o_366",t={container:de,fullWidth:he,label:me,requiredAsterisk:fe,inputContainer:be,inputContainerS:xe,inputContainerM:ge,inputContainerDefault:ye,inputContainerActive:ve,"inputContainerActive-Filling":"_inputContainerActive-Filling_1of0o_161",inputContainerFilled:Ie,inputContainerError:Le,inputContainerDisabled:Ce,textArea:_e,input:Se,inputDefault:De,inputActive:Te,"inputActive-Filling":"_inputActive-Filling_1of0o_230",inputFilled:Me,inputError:Ee,inputDisabled:He,cursor:ze,cursorInner:we,blink:Be,iconArea:Fe,defaultIcon:je,defaultIconDisabled:qe,helper:Ae,helperText:Ve,helperIcon:ke,helperTextContent:We,errorText:Re},Ne=({className:r,showIcon:n=!0,text:H="This is hint text placeholder."})=>e.jsxs("div",{className:`${t.helperText} ${r||""}`,children:[n&&e.jsx("div",{className:t.helperIcon,children:e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M6 4V6",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M6 8H6.01",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("div",{className:t.helperTextContent,children:e.jsx("p",{children:H})})]}),$e=({className:r,disabled:n=!1})=>e.jsx("div",{className:`${t.defaultIcon} ${n?t.defaultIconDisabled:""} ${r||""}`,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 1V15M1 8H15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Pe=({className:r})=>e.jsx("div",{className:`${t.cursor} ${r||""}`,children:e.jsx("div",{className:t.cursorInner})}),a=F.forwardRef(({size:r="M",type:n="text",placeholder:H="Change text here",value:j,defaultValue:q,label:W="Label",helperText:A="This is hint text placeholder.",error:o,status:R="Default",hasLabel:N=!0,hasIcon:$=!0,icon:P,hasBottomHelper:K=!0,disabled:z=!1,readOnly:O=!1,required:w=!1,fullWidth:Z=!1,autoFocus:G=!1,onChange:J,onFocus:Q,onBlur:U,onKeyDown:X,className:Y="",name:B,id:u,autoComplete:ee},te)=>{const[ae,V]=F.useState(!1),[k,re]=F.useState(j||q||""),se=o&&typeof o=="string"&&o.trim()!=="",s=z?"Disabled":se?"Error":ae?k?"Active-Filling":"Active":k?"Filled":R,le=l=>{V(!0),Q?.(l)},ne=l=>{V(!1),U?.(l)},oe=l=>{re(l.target.value),J?.(l)},ue=[t.container,t[`size${r}`],Z&&t.fullWidth,Y].filter(Boolean).join(" "),ie=[t.inputContainer,t[`inputContainer${r}`],t[`inputContainer${s}`]].filter(Boolean).join(" "),ce=[t.input,t[`input${r}`],t[`input${s}`]].filter(Boolean).join(" "),pe=[t.label,w&&t.required].filter(Boolean).join(" ");return e.jsxs("div",{className:ue,children:[N&&e.jsx("div",{className:pe,children:e.jsxs("label",{htmlFor:u,children:[W,w&&e.jsx("span",{className:t.requiredAsterisk,children:"*"})]})}),e.jsxs("div",{className:ie,children:[e.jsxs("div",{className:t.textArea,children:[e.jsx("input",{ref:te,type:n,id:u,name:B,value:j,defaultValue:q,placeholder:H,disabled:z,readOnly:O,required:w,autoFocus:G,autoComplete:ee,onChange:oe,onFocus:le,onBlur:ne,onKeyDown:X,className:ce,"aria-invalid":s==="Error","aria-describedby":[A&&`${u||B||"input"}-helper`,o&&`${u||B||"input"}-error`].filter(Boolean).join(" ")||void 0}),(s==="Active"||s==="Active-Filling")&&e.jsx(Pe,{})]}),$&&e.jsx("div",{className:t.iconArea,children:P||e.jsx($e,{disabled:z})})]}),K&&e.jsx("div",{className:t.helper,children:s==="Error"?e.jsx("div",{className:t.errorText,children:e.jsx("p",{children:o})}):e.jsx(Ne,{text:A})})]})});a.displayName="TextInput";a.__docgenInfo={description:`TextInput component matching the exact Figma design.
Supports S (40px) and M (48px) sizes with 6 different states.`,methods:[],displayName:"TextInput",props:{size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:"The input size - S (40px) or M (48px)",defaultValue:{value:"'M'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"},{name:"literal",value:"'search'"}]},description:"Input type (text, email, password, etc.)",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Change text here'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Input value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value for uncontrolled input"},label:{required:!1,tsType:{name:"string"},description:"Input label text",defaultValue:{value:"'Label'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the input",defaultValue:{value:"'This is hint text placeholder.'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message"},status:{required:!1,tsType:{name:"union",raw:"'Default' | 'Active' | 'Active-Filling' | 'Filled' | 'Disabled' | 'Error'",elements:[{name:"literal",value:"'Default'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Active-Filling'"},{name:"literal",value:"'Filled'"},{name:"literal",value:"'Disabled'"},{name:"literal",value:"'Error'"}]},description:"Input status state",defaultValue:{value:"'Default'",computed:!1}},hasLabel:{required:!1,tsType:{name:"boolean"},description:"Show label above input",defaultValue:{value:"true",computed:!1}},hasIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon in the right area",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon component"},hasBottomHelper:{required:!1,tsType:{name:"boolean"},description:"Show helper text below input",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only state",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Required field indicator",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width input",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus the input",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Key down handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},id:{required:!1,tsType:{name:"string"},description:"Input id attribute"},autoComplete:{required:!1,tsType:{name:"string"},description:"Input autocomplete attribute"}}};const Ke=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 1L10.5 5.5L15.5 6.5L12 10L12.5 15L8 12.5L3.5 15L4 10L0.5 6.5L5.5 5.5L8 1Z",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})}),Je={title:"Components/TextInput",component:a,parameters:{layout:"centered",docs:{description:{component:"A TextInput component that exactly matches the Figma design specifications. Supports S (40px) and M (48px) sizes with 4 different states."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["S","M"],description:"The input size - S (40px) or M (48px)",table:{type:{summary:"string"},defaultValue:{summary:"M"}}},status:{control:"select",options:["Default","Filled","Disabled","Error"],description:"The input status state",table:{type:{summary:"string"},defaultValue:{summary:"Default"}}},type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"The input type",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},label:{control:"text",description:"Input label text",table:{type:{summary:"string"},defaultValue:{summary:"Label"}}},placeholder:{control:"text",description:"Placeholder text",table:{type:{summary:"string"},defaultValue:{summary:"Change text here"}}},helperText:{control:"text",description:"Helper text below the input",table:{type:{summary:"string"},defaultValue:{summary:"This is hint text placeholder."}}},error:{control:"text",description:"Error message",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},hasLabel:{control:"boolean",description:"Show label above input",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},hasIcon:{control:"boolean",description:"Show icon in the right area",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},hasBottomHelper:{control:"boolean",description:"Show helper text below input",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showTrailing:{control:"boolean",description:"Show trailing element (like clear button)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},focus:{control:"boolean",description:"Focus state (controlled)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"Read-only state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:"boolean",description:"Required field indicator",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Full width input",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onChange:{action:"changed",description:"Change handler function",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}},onFocus:{action:"focused",description:"Focus handler function",table:{type:{summary:"(event: FocusEvent<HTMLInputElement>) => void"}}},onBlur:{action:"blurred",description:"Blur handler function",table:{type:{summary:"(event: FocusEvent<HTMLInputElement>) => void"}}}}},i={args:{size:"S",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},c={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},p={args:{size:"S",status:"Filled",label:"Label",placeholder:"Change text here",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},d={args:{size:"S",status:"Error",label:"Label",placeholder:"Change text here",value:"Invalid input",error:"Change error text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},h={args:{size:"S",status:"Disabled",label:"Label",placeholder:"Change text here",value:"Disabled text",disabled:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},m={args:{size:"M",status:"Filled",label:"Label",placeholder:"Change text here",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},f={args:{size:"M",status:"Error",label:"Label",placeholder:"Change text here",value:"Invalid input",error:"Change error text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},b={args:{size:"M",status:"Disabled",label:"Label",placeholder:"Change text here",value:"Disabled text",disabled:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},x={args:{size:"M",status:"Default",placeholder:"Change text here",hasLabel:!1,hasIcon:!0,hasBottomHelper:!0}},g={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!1,hasBottomHelper:!0}},y={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!1}},v={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,icon:e.jsx(Ke,{}),hasBottomHelper:!0}},I={args:{size:"M",status:"Default",label:"Required Field",placeholder:"This field is required",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},L={args:{size:"M",status:"Default",label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0},parameters:{layout:"padded"}},C={args:{size:"M",status:"Default",type:"email",label:"Email Address",placeholder:"Enter your email",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},_={args:{size:"M",status:"Default",type:"password",label:"Password",placeholder:"Enter your password",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},S={args:{size:"M",status:"Default",type:"search",label:"Search",placeholder:"Search...",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx(a,{size:"S",status:"Default",label:"Small (S)",placeholder:"40px height",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Default",label:"Medium (M)",placeholder:"48px height",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0})]})},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx(a,{size:"M",status:"Default",label:"Default",placeholder:"Default state",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Filled",label:"Filled",placeholder:"Filled state",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Error",label:"Error",placeholder:"Error state",value:"Invalid input",error:"This is an error message",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Disabled",label:"Disabled",placeholder:"Disabled state",value:"Disabled text",disabled:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0})]})},M={render:()=>e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"255px"},children:[e.jsx(a,{size:"M",status:"Default",type:"text",label:"Full Name",placeholder:"Enter your full name",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Default",type:"email",label:"Email Address",placeholder:"Enter your email",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Default",type:"password",label:"Password",placeholder:"Create a password",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0})]})},E={args:{size:"M",status:"Default",type:"text",label:"Playground Input",placeholder:"Try different props!",helperText:"This is a playground for testing",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0,required:!1,disabled:!1,fullWidth:!1}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    status: 'Filled',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    status: 'Error',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Invalid input',
    error: 'Change error text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    status: 'Disabled',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Disabled text',
    disabled: true,
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Filled',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Error',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Invalid input',
    error: 'Change error text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Disabled',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Disabled text',
    disabled: true,
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    placeholder: 'Change text here',
    hasLabel: false,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: false,
    hasBottomHelper: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: false
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    icon: <CustomIcon />,
    hasBottomHelper: true
  }
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...I.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...L.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...C.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    type: 'search',
    label: 'Search',
    placeholder: 'Search...',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...S.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center'
  }}>
      <TextInput size="S" status="Default" label="Small (S)" placeholder="40px height" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Default" label="Medium (M)" placeholder="48px height" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
    </div>
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center'
  }}>
      <TextInput size="M" status="Default" label="Default" placeholder="Default state" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Filled" label="Filled" placeholder="Filled state" value="Sample text" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Error" label="Error" placeholder="Error state" value="Invalid input" error="This is an error message" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Disabled" label="Disabled" placeholder="Disabled state" value="Disabled text" disabled={true} hasLabel={true} hasIcon={true} hasBottomHelper={true} />
    </div>
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <form style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '255px'
  }}>
      <TextInput size="M" status="Default" type="text" label="Full Name" placeholder="Enter your full name" required={true} hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Default" type="email" label="Email Address" placeholder="Enter your email" required={true} hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Default" type="password" label="Password" placeholder="Create a password" required={true} hasLabel={true} hasIcon={true} hasBottomHelper={true} />
    </form>
}`,...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    type: 'text',
    label: 'Playground Input',
    placeholder: 'Try different props!',
    helperText: 'This is a playground for testing',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true,
    required: false,
    disabled: false,
    fullWidth: false
  }
}`,...E.parameters?.docs?.source}}};const Qe=["SizeS","SizeM","SizeSFilled","SizeSError","SizeSDisabled","SizeMFilled","SizeMError","SizeMDisabled","WithoutLabel","WithoutIcon","WithoutHelper","WithCustomIcon","Required","FullWidth","EmailInput","PasswordInput","SearchInput","SizeComparison","StatusComparison","FormExample","Playground"];export{C as EmailInput,M as FormExample,L as FullWidth,_ as PasswordInput,E as Playground,I as Required,S as SearchInput,D as SizeComparison,c as SizeM,b as SizeMDisabled,f as SizeMError,m as SizeMFilled,i as SizeS,h as SizeSDisabled,d as SizeSError,p as SizeSFilled,T as StatusComparison,v as WithCustomIcon,y as WithoutHelper,g as WithoutIcon,x as WithoutLabel,Qe as __namedExportsOrder,Je as default};
