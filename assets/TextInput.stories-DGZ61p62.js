import{j as e}from"./jsx-runtime-DpaxUH3I.js";import{r as W}from"./iframe-n-wf9pBm.js";import"./preload-helper-Ct5FWWRu.js";const xe="_container_1of0o_60",ve="_fullWidth_1of0o_71",Ie="_label_1of0o_79",ye="_requiredAsterisk_1of0o_117",Le="_inputContainer_1of0o_127",Se="_inputContainerS_1of0o_140",Ce="_inputContainerM_1of0o_145",Me="_inputContainerDefault_1of0o_151",ze="_inputContainerActive_1of0o_156",De="_inputContainerFilled_1of0o_166",_e="_inputContainerError_1of0o_171",He="_inputContainerDisabled_1of0o_176",Te="_textArea_1of0o_185",Be="_input_1of0o_127",Fe="_inputDefault_1of0o_222",Ee="_inputActive_1of0o_226",we="_inputFilled_1of0o_234",Ae="_inputError_1of0o_238",je="_inputDisabled_1of0o_242",qe="_cursor_1of0o_259",Ve="_cursorInner_1of0o_268",ke="_blink_1of0o_1",We="_iconArea_1of0o_286",Re="_defaultIcon_1of0o_295",Ne="_defaultIconDisabled_1of0o_303",$e="_helper_1of0o_312",Pe="_helperText_1of0o_322",Ke="_helperIcon_1of0o_331",Oe="_helperTextContent_1of0o_339",Ze="_errorText_1of0o_366",t={container:xe,fullWidth:ve,label:Ie,requiredAsterisk:ye,inputContainer:Le,inputContainerS:Se,inputContainerM:Ce,inputContainerDefault:Me,inputContainerActive:ze,"inputContainerActive-Filling":"_inputContainerActive-Filling_1of0o_161",inputContainerFilled:De,inputContainerError:_e,inputContainerDisabled:He,textArea:Te,input:Be,inputDefault:Fe,inputActive:Ee,"inputActive-Filling":"_inputActive-Filling_1of0o_230",inputFilled:we,inputError:Ae,inputDisabled:je,cursor:qe,cursorInner:Ve,blink:ke,iconArea:We,defaultIcon:Re,defaultIconDisabled:Ne,helper:$e,helperText:Pe,helperIcon:Ke,helperTextContent:Oe,errorText:Ze},Ge=({className:r,showIcon:n=!0,text:j="This is hint text placeholder."})=>e.jsxs("div",{className:`${t.helperText} ${r||""}`,children:[n&&e.jsx("div",{className:t.helperIcon,children:e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M6 4V6",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M6 8H6.01",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("div",{className:t.helperTextContent,children:e.jsx("p",{children:j})})]}),Je=({className:r,disabled:n=!1})=>e.jsx("div",{className:`${t.defaultIcon} ${n?t.defaultIconDisabled:""} ${r||""}`,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 1V15M1 8H15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Qe=({className:r})=>e.jsx("div",{className:`${t.cursor} ${r||""}`,children:e.jsx("div",{className:t.cursorInner})}),a=W.forwardRef(({size:r="M",type:n="text",placeholder:j="Change text here",value:R,defaultValue:N,label:O="Label",helperText:$="This is hint text placeholder.",error:o,status:Z="Default",hasLabel:G=!0,hasIcon:J=!0,icon:Q,hasBottomHelper:U=!0,disabled:q=!1,readOnly:X=!1,required:V=!1,fullWidth:Y=!1,autoFocus:ee=!1,onChange:te,onFocus:ae,onBlur:re,onKeyDown:se,className:le="",name:k,id:u,autoComplete:ne},oe)=>{const[ue,P]=W.useState(!1),[K,ie]=W.useState(R||N||""),ce=o&&typeof o=="string"&&o.trim()!=="",s=q?"Disabled":ce?"Error":ue?K?"Active-Filling":"Active":K?"Filled":Z,pe=l=>{P(!0),ae?.(l)},de=l=>{P(!1),re?.(l)},he=l=>{ie(l.target.value),te?.(l)},me=[t.container,t[`size${r}`],Y&&t.fullWidth,le].filter(Boolean).join(" "),be=[t.inputContainer,t[`inputContainer${r}`],t[`inputContainer${s}`]].filter(Boolean).join(" "),fe=[t.input,t[`input${r}`],t[`input${s}`]].filter(Boolean).join(" "),ge=[t.label,V&&t.required].filter(Boolean).join(" ");return e.jsxs("div",{className:me,children:[G&&e.jsx("div",{className:ge,children:e.jsxs("label",{htmlFor:u,children:[O,V&&e.jsx("span",{className:t.requiredAsterisk,children:"*"})]})}),e.jsxs("div",{className:be,children:[e.jsxs("div",{className:t.textArea,children:[e.jsx("input",{ref:oe,type:n,id:u,name:k,value:R,defaultValue:N,placeholder:j,disabled:q,readOnly:X,required:V,autoFocus:ee,autoComplete:ne,onChange:he,onFocus:pe,onBlur:de,onKeyDown:se,className:fe,"aria-invalid":s==="Error","aria-describedby":[$&&`${u||k||"input"}-helper`,o&&`${u||k||"input"}-error`].filter(Boolean).join(" ")||void 0}),(s==="Active"||s==="Active-Filling")&&e.jsx(Qe,{})]}),J&&e.jsx("div",{className:t.iconArea,children:Q||e.jsx(Je,{disabled:q})})]}),U&&e.jsx("div",{className:t.helper,children:s==="Error"?e.jsx("div",{className:t.errorText,children:e.jsx("p",{children:o})}):e.jsx(Ge,{text:$})})]})});a.displayName="TextInput";a.__docgenInfo={description:`TextInput component matching the exact Figma design.
Supports S (40px) and M (48px) sizes with 6 different states.`,methods:[],displayName:"TextInput",props:{size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:"The input size - S (40px) or M (48px)",defaultValue:{value:"'M'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"},{name:"literal",value:"'search'"}]},description:"Input type (text, email, password, etc.)",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Change text here'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Input value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value for uncontrolled input"},label:{required:!1,tsType:{name:"string"},description:"Input label text",defaultValue:{value:"'Label'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the input",defaultValue:{value:"'This is hint text placeholder.'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message"},status:{required:!1,tsType:{name:"union",raw:"'Default' | 'Active' | 'Active-Filling' | 'Filled' | 'Disabled' | 'Error'",elements:[{name:"literal",value:"'Default'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Active-Filling'"},{name:"literal",value:"'Filled'"},{name:"literal",value:"'Disabled'"},{name:"literal",value:"'Error'"}]},description:"Input status state",defaultValue:{value:"'Default'",computed:!1}},hasLabel:{required:!1,tsType:{name:"boolean"},description:"Show label above input",defaultValue:{value:"true",computed:!1}},hasIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon in the right area",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon component"},hasBottomHelper:{required:!1,tsType:{name:"boolean"},description:"Show helper text below input",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only state",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Required field indicator",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width input",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus the input",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Key down handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},id:{required:!1,tsType:{name:"string"},description:"Input id attribute"},autoComplete:{required:!1,tsType:{name:"string"},description:"Input autocomplete attribute"}}};const Ue=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 1L10.5 5.5L15.5 6.5L12 10L12.5 15L8 12.5L3.5 15L4 10L0.5 6.5L5.5 5.5L8 1Z",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})}),tt={title:"Components/TextInput",component:a,parameters:{layout:"centered",docs:{description:{component:"A TextInput component that exactly matches the Figma design specifications. Supports S (40px) and M (48px) sizes with 6 different states."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["S","M"],description:"The input size - S (40px) or M (48px)",table:{type:{summary:"string"},defaultValue:{summary:"M"}}},status:{control:"select",options:["Default","Active","Active-Filling","Filled","Disabled","Error"],description:"The input status state",table:{type:{summary:"string"},defaultValue:{summary:"Default"}}},type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"The input type",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},label:{control:"text",description:"Input label text",table:{type:{summary:"string"},defaultValue:{summary:"Label"}}},placeholder:{control:"text",description:"Placeholder text",table:{type:{summary:"string"},defaultValue:{summary:"Change text here"}}},helperText:{control:"text",description:"Helper text below the input",table:{type:{summary:"string"},defaultValue:{summary:"This is hint text placeholder."}}},error:{control:"text",description:"Error message",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},hasLabel:{control:"boolean",description:"Show label above input",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},hasIcon:{control:"boolean",description:"Show icon in the right area",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},hasBottomHelper:{control:"boolean",description:"Show helper text below input",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showTrailing:{control:"boolean",description:"Show trailing element (like clear button)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},focus:{control:"boolean",description:"Focus state (controlled)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"Read-only state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:"boolean",description:"Required field indicator",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Full width input",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onChange:{action:"changed",description:"Change handler function",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}},onFocus:{action:"focused",description:"Focus handler function",table:{type:{summary:"(event: FocusEvent<HTMLInputElement>) => void"}}},onBlur:{action:"blurred",description:"Blur handler function",table:{type:{summary:"(event: FocusEvent<HTMLInputElement>) => void"}}}}},i={args:{size:"S",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},c={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},p={args:{size:"S",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},d={args:{size:"S",status:"Active",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},h={args:{size:"S",status:"Active-Filling",label:"Label",placeholder:"Change text here",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},m={args:{size:"S",status:"Filled",label:"Label",placeholder:"Change text here",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},b={args:{size:"S",status:"Error",label:"Label",placeholder:"Change text here",value:"Invalid input",error:"Change error text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},f={args:{size:"S",status:"Disabled",label:"Label",placeholder:"Change text here",value:"Disabled text",disabled:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},g={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},x={args:{size:"M",status:"Active",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},v={args:{size:"M",status:"Active-Filling",label:"Label",placeholder:"Change text here",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},I={args:{size:"M",status:"Filled",label:"Label",placeholder:"Change text here",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},y={args:{size:"M",status:"Error",label:"Label",placeholder:"Change text here",value:"Invalid input",error:"Change error text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},L={args:{size:"M",status:"Disabled",label:"Label",placeholder:"Change text here",value:"Disabled text",disabled:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},S={args:{size:"M",status:"Default",placeholder:"Change text here",hasLabel:!1,hasIcon:!0,hasBottomHelper:!0}},C={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!1,hasBottomHelper:!0}},M={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!1}},z={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,icon:e.jsx(Ue,{}),hasBottomHelper:!0}},D={args:{size:"M",status:"Default",label:"Required Field",placeholder:"This field is required",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},_={args:{size:"M",status:"Default",label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0},parameters:{layout:"padded"}},H={args:{size:"M",status:"Default",type:"email",label:"Email Address",placeholder:"Enter your email",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},T={args:{size:"M",status:"Default",type:"password",label:"Password",placeholder:"Enter your password",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},B={args:{size:"M",status:"Default",type:"search",label:"Search",placeholder:"Search...",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},F={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx(a,{size:"S",status:"Default",label:"Small (S)",placeholder:"40px height",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Default",label:"Medium (M)",placeholder:"48px height",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0})]})},E={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx(a,{size:"M",status:"Default",label:"Default",placeholder:"Default state",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Active",label:"Active",placeholder:"Active state",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Active-Filling",label:"Active-Filling",placeholder:"Active-Filling state",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Filled",label:"Filled",placeholder:"Filled state",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Error",label:"Error",placeholder:"Error state",value:"Invalid input",error:"This is an error message",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Disabled",label:"Disabled",placeholder:"Disabled state",value:"Disabled text",disabled:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0})]})},w={render:()=>e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"255px"},children:[e.jsx(a,{size:"M",status:"Default",type:"text",label:"Full Name",placeholder:"Enter your full name",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Default",type:"email",label:"Email Address",placeholder:"Enter your email",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Default",type:"password",label:"Password",placeholder:"Create a password",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0})]})},A={args:{size:"M",status:"Default",type:"text",label:"Playground Input",placeholder:"Try different props!",helperText:"This is a playground for testing",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0,required:!1,disabled:!1,fullWidth:!1}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    status: 'Active',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    status: 'Active-Filling',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Active',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Active-Filling',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    placeholder: 'Change text here',
    hasLabel: false,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: false,
    hasBottomHelper: true
  }
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: false
  }
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center'
  }}>
      <TextInput size="S" status="Default" label="Small (S)" placeholder="40px height" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Default" label="Medium (M)" placeholder="48px height" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
    </div>
}`,...F.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center'
  }}>
      <TextInput size="M" status="Default" label="Default" placeholder="Default state" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Active" label="Active" placeholder="Active state" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Active-Filling" label="Active-Filling" placeholder="Active-Filling state" value="Sample text" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Filled" label="Filled" placeholder="Filled state" value="Sample text" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Error" label="Error" placeholder="Error state" value="Invalid input" error="This is an error message" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Disabled" label="Disabled" placeholder="Disabled state" value="Disabled text" disabled={true} hasLabel={true} hasIcon={true} hasBottomHelper={true} />
    </div>
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const at=["SizeS","SizeM","SizeSDefault","SizeSActive","SizeSActiveFilling","SizeSFilled","SizeSError","SizeSDisabled","SizeMDefault","SizeMActive","SizeMActiveFilling","SizeMFilled","SizeMError","SizeMDisabled","WithoutLabel","WithoutIcon","WithoutHelper","WithCustomIcon","Required","FullWidth","EmailInput","PasswordInput","SearchInput","SizeComparison","StatusComparison","FormExample","Playground"];export{H as EmailInput,w as FormExample,_ as FullWidth,T as PasswordInput,A as Playground,D as Required,B as SearchInput,F as SizeComparison,c as SizeM,x as SizeMActive,v as SizeMActiveFilling,g as SizeMDefault,L as SizeMDisabled,y as SizeMError,I as SizeMFilled,i as SizeS,d as SizeSActive,h as SizeSActiveFilling,p as SizeSDefault,f as SizeSDisabled,b as SizeSError,m as SizeSFilled,E as StatusComparison,z as WithCustomIcon,M as WithoutHelper,C as WithoutIcon,S as WithoutLabel,at as __namedExportsOrder,tt as default};
