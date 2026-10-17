const letters=["A","R","T","E","O","S","L"],center="E";
const dictionary=["ALERTA","ALERTAS","ALTERA","ALTERAR","ARTE","ATERRA","ELES","ELAS","ESTAR","ESTELA","ESTRELA","LESTE","LESTES","LETRA","LETRAS","LOTE","LOTES","ORLA","ORLAS","RASTE","REST A","RESTA","RESTAR","SELO","SELOS","SETA","SETAS","SORTE","TELA","TELAS","TERRA","TESTA","TESTAR","TESTE","TESTES","TRES"].map(word=>word.replace(" ",""));
const input=document.querySelector("#word"),message=document.querySelector("#message"),found=document.querySelector("#found"),scoreEl=document.querySelector("#score"),countEl=document.querySelector("#count"),goalEl=document.querySelector("#goal");
let score=0,foundWords=[];
function addLetter(letter){if(input.value.length<12)input.value+=letter;input.focus()}
function submit(){const word=input.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();if(word.length<4){message.textContent="Use pelo menos quatro letras.";return}if(!word.includes(center)){message.textContent="A letra central E é obrigatória.";return}if(!word.split("").every(l=>letters.includes(l))){message.textContent="Use somente as letras da colmeia.";return}if(foundWords.includes(word)){message.textContent="Você já encontrou essa palavra.";return}if(!dictionary.includes(word)){message.textContent="Essa palavra não está na lista da rodada.";return}const points=word.length+(word.length>=7?5:0)+(new Set(word).size===7?10:0);score+=points;foundWords.push(word);scoreEl.textContent=score;countEl.textContent=foundWords.length;found.innerHTML=foundWords.map(w=>`<span>${w} +${w.length}</span>`).join("");message.textContent=score>=50?"Meta alcançada! Continue descobrindo.":`Boa! +${points} pontos.`;input.value=""}
document.querySelectorAll(".hive button").forEach(b=>b.onclick=()=>addLetter(b.dataset.letter));
document.querySelector("#send").onclick=submit;
document.querySelector("#clear").onclick=()=>{input.value="";input.focus()};
input.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();submit()}});
document.querySelector("#help").onclick=()=>document.querySelector("#dialog").showModal();
document.querySelector("#close").onclick=()=>document.querySelector("#dialog").close();
document.querySelector("#start").onclick=()=>document.querySelector("#dialog").close();
setTimeout(()=>document.querySelector("#dialog").showModal(),450);
const loadAds=()=>{if(loadAds.done)return;loadAds.done=true;const s=document.createElement("script");s.async=true;s.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3634602303672600";s.crossOrigin="anonymous";document.head.append(s)};window.addEventListener("pointerdown",loadAds,{once:true,passive:true});window.addEventListener("keydown",loadAds,{once:true,passive:true});
