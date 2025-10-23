import{j as e}from"./jsx-runtime-CX4pd9K-.js";import{r as F}from"./iframe-biIA7_it.js";import"./preload-helper-Ct5FWWRu.js";const ce="_container_oop85_60",de="_fullWidth_oop85_71",he="_label_oop85_79",me="_requiredAsterisk_oop85_117",be="_inputContainer_oop85_127",fe="_inputContainerS_oop85_140",xe="_inputContainerM_oop85_145",ge="_inputContainerDefault_oop85_151",ye="_inputContainerActive_oop85_156",ve="_inputContainerFocus_oop85_162",Ie="_inputContainerError_oop85_168",Le="_inputContainerDisabled_oop85_174",Ce="_textArea_oop85_183",_e="_input_oop85_127",Se="_inputDefault_oop85_220",De="_inputActive_oop85_224",Te="_inputFocus_oop85_228",Me="_inputError_oop85_232",He="_inputDisabled_oop85_236",ze="_cursor_oop85_253",Ee="_cursorInner_oop85_262",Be="_blink_oop85_1",we="_iconArea_oop85_280",Fe="_defaultIcon_oop85_289",je="_defaultIconDisabled_oop85_297",qe="_helper_oop85_306",Ae="_helperText_oop85_316",Ve="_helperIcon_oop85_325",ke="_helperTextContent_oop85_333",We="_errorText_oop85_360",Re="_inputContainerFilled_oop85_446",t={container:ce,fullWidth:de,label:he,requiredAsterisk:me,inputContainer:be,inputContainerS:fe,inputContainerM:xe,inputContainerDefault:ge,inputContainerActive:ye,inputContainerFocus:ve,inputContainerError:Ie,inputContainerDisabled:Le,textArea:Ce,input:_e,inputDefault:Se,inputActive:De,inputFocus:Te,inputError:Me,inputDisabled:He,cursor:ze,cursorInner:Ee,blink:Be,iconArea:we,defaultIcon:Fe,defaultIconDisabled:je,helper:qe,helperText:Ae,helperIcon:Ve,helperTextContent:ke,errorText:We,"inputContainerActive-Filling":"_inputContainerActive-Filling_oop85_445",inputContainerFilled:Re},Ne=({className:r,showIcon:l=!0,text:z="This is hint text placeholder."})=>e.jsxs("div",{className:`${t.helperText} ${r||""}`,children:[l&&e.jsx("div",{className:t.helperIcon,children:e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M6 4V6",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M6 8H6.01",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]})}),e.jsx("div",{className:t.helperTextContent,children:e.jsx("p",{children:z})})]}),Pe=({className:r,disabled:l=!1})=>e.jsx("div",{className:`${t.defaultIcon} ${l?t.defaultIconDisabled:""} ${r||""}`,children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 1V15M1 8H15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),a=F.forwardRef(({size:r="M",type:l="text",placeholder:z="Change text here",value:j,defaultValue:q,label:k="Label",helperText:A="This is hint text placeholder.",error:n,status:W="Default",hasLabel:R=!0,hasIcon:N=!0,icon:P,hasBottomHelper:$=!0,disabled:E=!1,readOnly:K=!1,required:B=!1,fullWidth:O=!1,autoFocus:Z=!1,onChange:G,onFocus:J,onBlur:Q,onKeyDown:U,className:X="",name:w,id:o,autoComplete:Y},ee)=>{const[te,V]=F.useState(!1),[Ke,ae]=F.useState(j||q||""),re=n&&typeof n=="string"&&n.trim()!=="",u=E?"Disabled":re?"Error":te?"Focus":W,se=s=>{V(!0),J?.(s)},le=s=>{V(!1),Q?.(s)},ne=s=>{ae(s.target.value),G?.(s)},oe=[t.container,t[`size${r}`],O&&t.fullWidth,X].filter(Boolean).join(" "),ue=[t.inputContainer,t[`inputContainer${r}`],t[`inputContainer${u}`]].filter(Boolean).join(" "),ie=[t.input,t[`input${r}`],t[`input${u}`]].filter(Boolean).join(" "),pe=[t.label,B&&t.required].filter(Boolean).join(" ");return e.jsxs("div",{className:oe,children:[R&&e.jsx("div",{className:pe,children:e.jsxs("label",{htmlFor:o,children:[k,B&&e.jsx("span",{className:t.requiredAsterisk,children:"*"})]})}),e.jsxs("div",{className:ue,children:[e.jsx("div",{className:t.textArea,children:e.jsx("input",{ref:ee,type:l,id:o,name:w,value:j,defaultValue:q,placeholder:z,disabled:E,readOnly:K,required:B,autoFocus:Z,autoComplete:Y,onChange:ne,onFocus:se,onBlur:le,onKeyDown:U,className:ie,"aria-invalid":u==="Error","aria-describedby":[A&&`${o||w||"input"}-helper`,n&&`${o||w||"input"}-error`].filter(Boolean).join(" ")||void 0})}),N&&e.jsx("div",{className:t.iconArea,children:P||e.jsx(Pe,{disabled:E})})]}),$&&e.jsx("div",{className:t.helper,children:u==="Error"?e.jsx("div",{className:t.errorText,children:e.jsx("p",{children:n})}):e.jsx(Ne,{text:A})})]})});a.displayName="TextInput";a.__docgenInfo={description:`TextInput component matching the exact Figma design.
Supports S (40px) and M (48px) sizes with 5 different states.`,methods:[],displayName:"TextInput",props:{size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:"The input size - S (40px) or M (48px)",defaultValue:{value:"'M'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"},{name:"literal",value:"'search'"}]},description:"Input type (text, email, password, etc.)",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Change text here'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Input value"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value for uncontrolled input"},label:{required:!1,tsType:{name:"string"},description:"Input label text",defaultValue:{value:"'Label'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text below the input",defaultValue:{value:"'This is hint text placeholder.'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"Error message"},status:{required:!1,tsType:{name:"union",raw:"'Default' | 'Active' | 'Focus' | 'Error' | 'Disabled'",elements:[{name:"literal",value:"'Default'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Focus'"},{name:"literal",value:"'Error'"},{name:"literal",value:"'Disabled'"}]},description:"Input status state",defaultValue:{value:"'Default'",computed:!1}},hasLabel:{required:!1,tsType:{name:"boolean"},description:"Show label above input",defaultValue:{value:"true",computed:!1}},hasIcon:{required:!1,tsType:{name:"boolean"},description:"Show icon in the right area",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon component"},hasBottomHelper:{required:!1,tsType:{name:"boolean"},description:"Show helper text below input",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Read-only state",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Required field indicator",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width input",defaultValue:{value:"false",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus the input",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Key down handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},id:{required:!1,tsType:{name:"string"},description:"Input id attribute"},autoComplete:{required:!1,tsType:{name:"string"},description:"Input autocomplete attribute"}}};const $e=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 1L10.5 5.5L15.5 6.5L12 10L12.5 15L8 12.5L3.5 15L4 10L0.5 6.5L5.5 5.5L8 1Z",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})}),Je={title:"Components/TextInput",component:a,parameters:{layout:"centered",docs:{description:{component:"A TextInput component that exactly matches the Figma design specifications. Supports S (40px) and M (48px) sizes with 5 different states."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["S","M"],description:"The input size - S (40px) or M (48px)",table:{type:{summary:"string"},defaultValue:{summary:"M"}}},status:{control:"select",options:["Default","Active","Focus","Error","Disabled"],description:"The input status state",table:{type:{summary:"string"},defaultValue:{summary:"Default"}}},type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"The input type",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},label:{control:"text",description:"Input label text",table:{type:{summary:"string"},defaultValue:{summary:"Label"}}},placeholder:{control:"text",description:"Placeholder text",table:{type:{summary:"string"},defaultValue:{summary:"Change text here"}}},helperText:{control:"text",description:"Helper text below the input",table:{type:{summary:"string"},defaultValue:{summary:"This is hint text placeholder."}}},error:{control:"text",description:"Error message",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},hasLabel:{control:"boolean",description:"Show label above input",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},hasIcon:{control:"boolean",description:"Show icon in the right area",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},hasBottomHelper:{control:"boolean",description:"Show helper text below input",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showTrailing:{control:"boolean",description:"Show trailing element (like clear button)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},focus:{control:"boolean",description:"Focus state (controlled)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"Read-only state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:"boolean",description:"Required field indicator",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Full width input",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onChange:{action:"changed",description:"Change handler function",table:{type:{summary:"(event: ChangeEvent<HTMLInputElement>) => void"}}},onFocus:{action:"focused",description:"Focus handler function",table:{type:{summary:"(event: FocusEvent<HTMLInputElement>) => void"}}},onBlur:{action:"blurred",description:"Blur handler function",table:{type:{summary:"(event: FocusEvent<HTMLInputElement>) => void"}}}}},i={args:{size:"S",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},p={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},c={args:{size:"S",status:"Active",label:"Label",placeholder:"Change text here",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},d={args:{size:"S",status:"Error",label:"Label",placeholder:"Change text here",value:"Invalid input",error:"Change error text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},h={args:{size:"S",status:"Disabled",label:"Label",placeholder:"Change text here",value:"Disabled text",disabled:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},m={args:{size:"M",status:"Active",label:"Label",placeholder:"Change text here",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},b={args:{size:"M",status:"Error",label:"Label",placeholder:"Change text here",value:"Invalid input",error:"Change error text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},f={args:{size:"M",status:"Disabled",label:"Label",placeholder:"Change text here",value:"Disabled text",disabled:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},x={args:{size:"M",status:"Default",placeholder:"Change text here",hasLabel:!1,hasIcon:!0,hasBottomHelper:!0}},g={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!1,hasBottomHelper:!0}},y={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,hasBottomHelper:!1}},v={args:{size:"M",status:"Default",label:"Label",placeholder:"Change text here",hasLabel:!0,hasIcon:!0,icon:e.jsx($e,{}),hasBottomHelper:!0}},I={args:{size:"M",status:"Default",label:"Required Field",placeholder:"This field is required",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},L={args:{size:"M",status:"Default",label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0},parameters:{layout:"padded"}},C={args:{size:"M",status:"Default",type:"email",label:"Email Address",placeholder:"Enter your email",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},_={args:{size:"M",status:"Default",type:"password",label:"Password",placeholder:"Enter your password",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},S={args:{size:"M",status:"Default",type:"search",label:"Search",placeholder:"Search...",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx(a,{size:"S",status:"Default",label:"Small (S)",placeholder:"40px height",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Default",label:"Medium (M)",placeholder:"48px height",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0})]})},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx(a,{size:"M",status:"Default",label:"Default",placeholder:"Default state",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Active",label:"Active",placeholder:"Active state",value:"Sample text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Focus",label:"Focus",placeholder:"Focus state",value:"Focused text",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Error",label:"Error",placeholder:"Error state",value:"Invalid input",error:"This is an error message",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Disabled",label:"Disabled",placeholder:"Disabled state",value:"Disabled text",disabled:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0})]})},M={render:()=>e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"255px"},children:[e.jsx(a,{size:"M",status:"Default",type:"text",label:"Full Name",placeholder:"Enter your full name",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Default",type:"email",label:"Email Address",placeholder:"Enter your email",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0}),e.jsx(a,{size:"M",status:"Default",type:"password",label:"Password",placeholder:"Create a password",required:!0,hasLabel:!0,hasIcon:!0,hasBottomHelper:!0})]})},H={args:{size:"M",status:"Default",type:"text",label:"Playground Input",placeholder:"Try different props!",helperText:"This is a playground for testing",hasLabel:!0,hasIcon:!0,hasBottomHelper:!0,required:!1,disabled:!1,fullWidth:!1}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'M',
    status: 'Default',
    label: 'Label',
    placeholder: 'Change text here',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'S',
    status: 'Active',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    status: 'Active',
    label: 'Label',
    placeholder: 'Change text here',
    value: 'Sample text',
    hasLabel: true,
    hasIcon: true,
    hasBottomHelper: true
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
      <TextInput size="M" status="Active" label="Active" placeholder="Active state" value="Sample text" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
      <TextInput size="M" status="Focus" label="Focus" placeholder="Focus state" value="Focused text" hasLabel={true} hasIcon={true} hasBottomHelper={true} />
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
}`,...M.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};const Qe=["SizeS","SizeM","SizeSActive","SizeSError","SizeSDisabled","SizeMActive","SizeMError","SizeMDisabled","WithoutLabel","WithoutIcon","WithoutHelper","WithCustomIcon","Required","FullWidth","EmailInput","PasswordInput","SearchInput","SizeComparison","StatusComparison","FormExample","Playground"];export{C as EmailInput,M as FormExample,L as FullWidth,_ as PasswordInput,H as Playground,I as Required,S as SearchInput,D as SizeComparison,p as SizeM,m as SizeMActive,f as SizeMDisabled,b as SizeMError,i as SizeS,c as SizeSActive,h as SizeSDisabled,d as SizeSError,T as StatusComparison,v as WithCustomIcon,y as WithoutHelper,g as WithoutIcon,x as WithoutLabel,Qe as __namedExportsOrder,Je as default};
