"use strict";
const questions = [
 ['EI','🔋','충전 방식','드디어 아무 약속 없는 토요일! 당신은?','친구에게 연락한다. 같이 놀면 에너지가 생기니까.','연락은 잠시 꺼두고 혼자만의 시간을 즐긴다.'],
 ['SN','🧳','여행의 시작','친구와 여행을 계획할 때 먼저 떠오르는 건?','교통편, 숙소, 맛집. 실제로 필요한 것부터 확인한다.','그곳에서 펼쳐질 장면과 새로운 경험을 상상한다.'],
 ['TF','💬','친구의 고민','친구가 “오늘 할 일 때문에 너무 힘들었어”라고 한다면?','어디서 막혔는지 물어보고 해결 방법을 같이 찾는다.','많이 지쳤겠다며 먼저 마음을 알아준다.'],
 ['JP','📝','할 일 등장','이번 주 안에 끝내야 하는 일이 생겼다!','할 일을 나누고 언제 할지 미리 정해둔다.','일단 시작하고 상황에 따라 방식을 바꾼다.'],
 ['EI','🎉','낯선 모임','아는 사람이 별로 없는 모임에 도착했다.','먼저 말을 걸면서 새로운 사람들을 알아간다.','분위기를 살피며 편한 사람과 차분히 이야기한다.'],
 ['SN','🍳','요리 도전','처음 만드는 요리, 레시피를 펼쳤다.','재료와 순서를 확인하고 적힌 방법대로 따라 한다.','기본 느낌을 파악하고 새로운 조합을 시도한다.'],
 ['TF','🛍️','선물 고르기','친구에게 줄 선물을 고르는 당신의 기준은?','실제로 자주 쓸 수 있는지, 품질이 좋은지 따진다.','우리의 추억이나 친구의 마음에 닿을 의미를 찾는다.'],
 ['JP','🌦️','예정 밖의 하루','나들이 당일, 갑자기 비가 오기 시작했다.','미리 알아둔 실내 장소로 계획을 변경한다.','근처를 둘러보며 그때 끌리는 곳으로 들어간다.'],
 ['EI','💡','생각 정리','머릿속에 새 아이디어가 떠올랐다!','누군가에게 이야기하다 보면 생각이 더 잘 정리된다.','혼자 충분히 생각을 정리한 뒤 이야기하고 싶다.'],
 ['SN','🎬','영화가 끝난 뒤','영화를 보고 더 오래 이야기하고 싶은 것은?','인상적인 장면과 배우의 연기, 세밀한 연출.','이야기에 숨은 의미와 “만약에”로 시작하는 해석.'],
 ['TF','⚖️','의견이 갈릴 때','함께하는 일에서 의견이 갈렸다. 우선 살필 것은?','어떤 의견이 근거와 기준에 더 잘 맞는지.','각자 왜 그렇게 느끼는지, 모두 납득할 수 있는지.'],
 ['JP','🧺','쉬는 날의 할 일','쉬는 날, 장보기와 청소를 해야 한다면?','순서와 시간을 정하고 끝낸 다음 마음 편히 쉰다.','그때의 기분과 상황에 맞춰 하나씩 처리한다.'],
 ['EI','☕','긴 하루 끝','오늘 하루 유독 지쳤다. 나를 회복시키는 건?','편한 사람을 만나 수다를 떨며 기분 전환하기.','조용한 공간에서 누구의 방해도 받지 않고 쉬기.'],
 ['SN','📦','새로운 도구','새로운 앱이나 도구를 배울 때 편한 방법은?','구체적인 사용 예시를 하나씩 따라 해본다.','전체 원리를 이해하고 활용 가능성을 떠올린다.'],
 ['TF','🌱','피드백의 순간','친구가 만든 작업물에 솔직한 의견을 부탁했다.','더 좋아질 부분을 정확하게 짚고 이유를 설명한다.','노력과 잘한 점을 먼저 짚고 조심스럽게 제안한다.'],
 ['JP','🚀','마감의 기술','마감이 다가오는 일, 나의 자연스러운 방식은?','미리 마무리하고 검토할 여유를 남긴다.','끝까지 가능성을 열어두고 집중해서 완성한다.']
];
// emoji, title, quote, description, power, mission
const heroes = {
 ISTJ:['📋','체크리스트 수호자','휴식도 계획표에 적어두었습니다.','작은 약속과 디테일을 놓치지 않는 당신. 모두가 잊은 준비물을 챙기는 든든한 영웅이에요. 가끔은 계획에 없는 휴식도 괜찮아요.','약속을 현실로 만드는 꾸준함','할 일 하나를 내일의 나에게 양보하기'],
 ISFJ:['🧣','주머니 속 온기 지킴이','혹시 몰라서 네 간식도 챙겼어.','말없이 주변을 살피고 필요한 순간 손을 내미는 당신. 작은 배려로 누군가의 하루를 구해요. 내 몫의 따뜻함도 남겨두세요.','말하지 않은 필요를 알아채는 세심함','나에게 좋아하는 간식 선물하기'],
 INFJ:['🔮','새벽 감정 예언자','괜찮다는 말 뒤의 한숨까지 들었습니다.','마음의 흐름과 숨은 의미를 조용히 읽는 당신. 깊이 있는 시선으로 방향을 건네요. 모든 마음을 혼자 책임지지는 않아도 돼요.','복잡한 마음에서 의미를 찾는 통찰력','오늘 내 기분을 한 문장으로 적기'],
 INTJ:['♟️','침대 위 전략 설계자','아직 안 움직였지만 계획은 3년 치입니다.','큰 그림을 그리며 더 나은 방법을 찾는 당신. 남들이 지나친 문제에도 새로운 길을 만들어요. 완벽한 설계 전 작은 실행도 충분해요.','흩어진 조각을 전략으로 연결하기','계획 하나를 5분만 실행해보기'],
 ISTP:['🔧','무심한 고장 해결사','말은 없지만 와이파이는 고쳐뒀어.','문제가 생기면 조용히 손부터 움직이는 당신. 직접 확인하고 풀어내는 실전 감각이 빛나요. 가끔은 도움받는 쪽이 되어도 괜찮아요.','위기에도 작동하는 실전 해결력','미뤄둔 작은 불편 하나 고치기'],
 ISFP:['🎨','소확행 색감 마법사','할 일은 남았지만 노을은 봐야 합니다.','작은 아름다움을 놓치지 않는 당신. 자신만의 감각으로 평범한 하루에 색을 입혀요. 당신의 취향은 그 자체로 충분히 소중해요.','평범한 순간을 특별하게 보는 감각','마음에 든 장면 하나 기록하기'],
 INFP:['🛌','이불 속 세계관 창조자','오늘도 누워서 세상을 세 번 구했습니다.','답장은 늦어도 머릿속에서는 대서사시를 완성하는 당신. 상상과 진심으로 일상에 의미를 더해요. 혼자 충전하는 시간도 능력이에요.','일상에서 이야기를 발견하는 상상력','머릿속 생각 하나를 메모해보기'],
 INTP:['🧪','딴생각 우주 연구원','왜 그런지 궁금해서 새벽 3시가 됐습니다.','당연한 것에도 질문을 던지는 당신. 엉뚱해 보이는 생각 사이에서 새로운 원리를 발견해요. 모든 궁금증을 오늘 풀 필요는 없어요.','익숙한 규칙을 새롭게 보는 분석력','궁금증을 적어두고 잠깐 쉬기'],
 ESTP:['🛹','일단 출동 돌격대원','설명은 가면서 듣겠습니다.','지금 할 수 있는 일을 빠르게 찾아 움직이는 당신. 예상 밖의 상황에서도 기회를 발견해요. 잠깐 멈추는 것도 다음 출동을 위한 기술이에요.','순간의 기회를 붙잡는 행동력','출발 전 필요한 것 세 가지 확인하기'],
 ESFP:['🪩','거실 무대 분위기 요정','편의점 가는 길도 작은 축제니까.','함께하는 순간에 생기를 불어넣는 당신. 소소한 즐거움을 나누는 재주가 있어요. 늘 분위기를 띄우지 않아도 당신은 반가운 사람이에요.','평범한 하루를 즐거운 추억으로 바꾸기','오늘의 즐거운 순간을 친구와 나누기'],
 ENFP:['🎈','작심삼일 원정대장','새로운 취미의 준비물은 모두 있습니다.','새로운 가능성 앞에서 눈이 반짝이는 당신. 설렘을 전하고 사람들을 모험으로 이끌어요. 모든 시작을 완성하지 않아도 발견은 남아요.','가능성을 발견하고 설렘을 전하는 힘','시작한 일 하나에 딱 5분 더 써보기'],
 ENTP:['💥','만약에 발명 대장','잠깐, 반대로 하면 더 재밌지 않을까?','익숙한 방식에 새로운 질문을 던지는 당신. 재치와 아이디어로 막힌 대화에 문을 열어요. 생각 하나만 현실로 옮겨도 멋진 시작이에요.','당연함을 뒤집어 새로운 길을 찾기','아이디어 하나를 작은 실험으로 만들기'],
 ESTJ:['📣','단톡방 일정 사령관','그래서 몇 시에 어디서 만나는 건데?','흩어진 의견을 모아 실제로 일이 되게 만드는 당신. 결정이 필요한 순간 방향을 줘요. 가끔은 다른 사람에게 진행을 맡겨도 괜찮아요.','복잡한 상황을 실행 순서로 정리하기','오늘 결정 하나는 다른 사람에게 맡기기'],
 ESFJ:['🍪','간식 보급 원정대장','다 먹었어? 진짜? 하나 더 먹어.','사람들의 표정과 분위기를 살피는 당신. 함께하는 자리를 편안하게 만드는 능력이 있어요. 모두의 만족보다 내 마음을 먼저 물어봐도 돼요.','사람 사이에 편안함을 만드는 배려','내가 원하는 메뉴를 먼저 말하기'],
 ENFJ:['🌻','응원 버프 전도사','너는 할 수 있어. 일단 물부터 마시자.','다른 사람의 가능성을 발견하고 응원하는 당신. 함께 한 발 나아갈 용기를 건네요. 당신에게도 쉬어갈 자리와 응원이 필요해요.','숨은 장점을 찾아 용기를 주기','나에게도 다정한 응원 한 줄 쓰기'],
 ENTJ:['👑','잠옷 입은 퀘스트 지휘관','이왕 쉬는 거 효율적으로 쉬겠습니다.','목표를 보면 길을 만들고 사람들을 모으는 당신. 생각을 현실로 바꾸는 추진력이 있어요. 아무 성과 없는 하루도 충분히 가치 있어요.','막막한 목표를 움직이는 계획으로 바꾸기','성과와 상관없는 즐거움에 10분 쓰기']
};
const $ = id => document.getElementById(id);
const storageKey = 'tiny-hero-progress-v1';
let answers = [], current = 0, resultType = null;
function calculateType(values) {
 return ['EI','SN','TF','JP'].map(axis => {
  const choices = questions.flatMap((q,i) => q[0] === axis ? [axis[values[i]]] : []);
  const count = choices.filter(c => c === axis[0]).length;
  return count === 2 ? choices[0] : axis[count > 2 ? 0 : 1];
 }).join('');
}
function saveProgress() { try { localStorage.setItem(storageKey,JSON.stringify(answers)); } catch {} }
function showScreen(name) {
 ['start','quiz','result'].forEach(s => { $(s+'-screen').hidden = s !== name; });
 window.scrollTo(0,0);
}
function showQuestion() {
 showScreen('quiz');
 const q = questions[current];
 $('progress-count').textContent = `${current+1} / 16`;
 $('progress').setAttribute('aria-valuenow',current);
 $('progress').setAttribute('aria-valuetext',`${current}개 완료, ${current+1}번째 질문`);
 $('progress-fill').style.width = `${current/16*100}%`;
 $('question-category').textContent = `SCENE ${String(current+1).padStart(2,'0')} · ${q[2]}`;
 $('question-emoji').textContent = q[1];
 $('question-title').textContent = q[3];
 $('answers').replaceChildren();
 q.slice(4).forEach((text,index) => {
  const button = document.createElement('button');
  button.className = 'answer';
  button.setAttribute('aria-pressed',String(answers[current]===index));
  const letter = document.createElement('span'); letter.className='letter'; letter.textContent=index===0?'A':'B';
  const label = document.createElement('span'); label.textContent=text;
  button.append(letter,label);
  button.addEventListener('click',() => {
   answers[current]=index; saveProgress();
   if(current===15) showResult(calculateType(answers));
   else {current++; showQuestion();}
  });
  $('answers').append(button);
 });
 $('back-button').disabled=current===0;
 $('question-title').focus();
}
function showResult(type) {
 resultType=type;
 ['emoji','title','quote','description','power','mission'].forEach((key,i) => { $('result-'+key).textContent=heroes[type][i]; });
 $('result-type').textContent=type;
 $('share-status').textContent=''; $('share-fallback').hidden=true;
 $('progress-fill').style.width='100%'; $('progress').setAttribute('aria-valuenow','16');
 showScreen('result'); $('result-title').focus();
}
function start() {
 answers=[];current=0;resultType=null;saveProgress();
 try { history.replaceState(null,'',location.pathname+location.search); } catch {}
 showQuestion();
}
$('start-button').addEventListener('click',start);
$('restart-button').addEventListener('click',start);
$('resume-button').addEventListener('click',() => {current=Math.min(answers.length,15);showQuestion();});
$('back-button').addEventListener('click',() => {if(current>0){current--;showQuestion();}});
$('share-button').addEventListener('click',async () => {
 const hero=heroes[resultType];
 const text=`${hero[0]} 내 안의 하찮은 영웅은 ‘${hero[1]}’ (${resultType})!\n${hero[2]}`;
 const isWeb=/^https?:$/.test(location.protocol);
 const url=new URL(location.href);url.hash=`result=${resultType}`;
 const shareText=isWeb?`${text}\n${url.href}`:text;
 $('share-button').disabled=true;
 try {
  if(navigator.share){
   try {await navigator.share({title:'내 안의 하찮은 영웅',text,...(isWeb?{url:url.href}:{})});$('share-status').textContent='공유를 완료했어요!';return;}
   catch(error){if(error.name==='AbortError')return;}
  }
  try {await navigator.clipboard.writeText(shareText);$('share-status').textContent=isWeb?'결과와 링크를 복사했어요. 친구에게 붙여넣어 주세요!':'결과를 복사했어요. 친구에게 붙여넣어 주세요!';}
  catch {$('share-fallback').hidden=false;$('share-fallback').value=shareText;$('share-fallback').focus();$('share-fallback').select();$('share-status').textContent='아래 내용을 길게 누르거나 Ctrl/Cmd+C로 복사해 주세요.';}
 }finally{$('share-button').disabled=false;}
});
try {
 const saved=JSON.parse(localStorage.getItem(storageKey));
 if(Array.isArray(saved)&&saved.length>0&&saved.length<16&&saved.every(v=>v===0||v===1)){answers=saved;$('resume-button').hidden=false;}
}catch{}
const sharedType=new URLSearchParams(location.hash.slice(1)).get('result');
if(sharedType&&Object.prototype.hasOwnProperty.call(heroes,sharedType))showResult(sharedType);
