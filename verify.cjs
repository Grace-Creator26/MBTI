const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
class Element {constructor(){this.children=[];this.style={};this.events={};this.hidden=false;}setAttribute(k,v){this[k]=v;}addEventListener(k,v){this.events[k]=v;}append(...c){this.children.push(...c);}replaceChildren(){this.children=[];}focus(){}select(){}}
const elements={};const context={document:{getElementById:id=>elements[id]??=new Element(),createElement:()=>new Element()},window:{scrollTo(){}},localStorage:{getItem(){return null},setItem(){}},location:{hash:'',pathname:'/index.html',search:'',protocol:'file:',href:'file:///index.html'},history:{replaceState(){}},navigator:{},URL,URLSearchParams};
vm.createContext(context);vm.runInContext(fs.readFileSync('script.js','utf8'),context);
vm.runInContext(`
if(questions.length!==16||Object.keys(heroes).length!==16)throw Error('Content count');
for(const axis of ['EI','SN','TF','JP'])if(questions.filter(q=>q[0]===axis).length!==4)throw Error('Axis count');
const seen=new Set();
for(let mask=0;mask<65536;mask++){
 const a=Array.from({length:16},(_,i)=>(mask>>i)&1),t=calculateType(a);
 if(!heroes[t])throw Error('Missing result'); seen.add(t);
 for(let axis=0;axis<4;axis++){
  const bits=[a[axis],a[axis+4],a[axis+8],a[axis+12]],sum=bits.reduce((x,y)=>x+y,0);
  const expected=['EI','SN','TF','JP'][axis][sum===2?bits[0]:sum>2?1:0];
  if(t[axis]!==expected)throw Error('Scoring');
 }
}
if(seen.size!==16)throw Error('Unreachable type');
start();
`,context);
for(let i=0;i<16;i++)elements.answers.children[0].events.click();
assert.equal(elements['result-type'].textContent,'ESTJ');assert.equal(elements['result-screen'].hidden,false);
elements['restart-button'].events.click();assert.equal(elements['quiz-screen'].hidden,false);assert.equal(elements['progress-count'].textContent,'1 / 16');
elements.answers.children[1].events.click();elements['back-button'].events.click();assert.equal(elements['progress-count'].textContent,'1 / 16');assert.equal(elements.answers.children[1]['aria-pressed'],'true');
for(let i=0;i<16;i++)elements.answers.children[1].events.click();assert.equal(elements['result-type'].textContent,'INFP');
(async()=>{await elements['share-button'].events.click();assert.equal(elements['share-fallback'].hidden,false);assert.match(elements['share-fallback'].value,/INFP/);assert.equal(elements['share-button'].disabled,false);console.log('PASS: 65,536 answer combinations; all 16 results; restart, back, answer retention, share fallback.');})();
