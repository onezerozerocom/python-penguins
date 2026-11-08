/* ---------- penguins.csv (결측 9칸, 이상치 6행 포함) ---------- */
const PENG_CSV=`bill_length_mm,bill_depth_mm,flipper_length_mm,body_mass_g,species
47.2,16.2,225,5425,Gentoo
57.1,18.4,197,4050,Chinstrap
43.2,19.8,185,4425,Adelie
47.9,16.4,196,3850,Chinstrap
46.6,16.1,214,6200,Gentoo
35.7,18.2,181,3900,Adelie
38.8,18.3,190,3250,Adelie
115.4,18.8,200,3975,Chinstrap
34.1,18.5,197,3850,Adelie
42.2,18.1,198,4050,Adelie
44.7,16.4,191,3750,Chinstrap
47.7,18.8,186,3875,Chinstrap
,17,193,3225,Adelie
51.7,14.5,209,5750,Gentoo
36.6,17.5,188,3925,Adelie
50.7,17.7,203,3575,Chinstrap
50.9,14.6,230,5375,Gentoo
44.3,13.8,222,5225,Gentoo
38,16.9,189,4425,Adelie
39.1,17.7,185,,Adelie
48.5,17.8,198,3500,Chinstrap
55.1,16.1,215,5500,Gentoo
51.1,20.8,193,3450,Chinstrap
44.5,14.8,210,4500,Gentoo
49.7,15.1,219,4750,Gentoo
41.2,,220,5025,Gentoo
44.7,18.2,192,3975,Chinstrap
50.5,19.1,196,3475,Chinstrap
48.3,14.8,210,4775,Gentoo
50.5,14.2,205,4775,Gentoo
45.2,16.3,216,5500,Gentoo
46.2,16,189,3975,Chinstrap
40.6,17.6,194,3125,Adelie
44,15.9,218,12500,Gentoo
48.1,18.1,200,3625,Chinstrap
39.3,17.7,190,4400,Adelie
38,18.3,185,3775,Adelie
38.1,20.1,200,3275,Adelie
38.6,18.8,199,4475,Adelie
52.1,16.1,218,5225,Gentoo
45.9,14.8,213,5400,Gentoo
45.5,18.1,196,4025,Chinstrap
41.8,14.4,220,5750,Gentoo
48,15,223,4775,Gentoo
49.1,17.7,207,4075,Chinstrap
37.7,19.1,179,3875,Adelie
51.8,18.5,200,3900,Chinstrap
47.1,19.1,,3600,Chinstrap
49.9,15.9,222,5025,Gentoo
36.5,19.8,189,2725,Adelie
34.9,18,189,4575,Adelie
39.1,16.7,192,3475,Adelie
46.3,13.1,208,,Gentoo
40.9,19.3,181,3400,Adelie
49.4,14.4,207,4975,Gentoo
48.3,16.7,201,3300,Chinstrap
44.8,16.8,213,4250,Chinstrap
41.2,19.5,190,3225,Adelie
38.1,18.6,193,4025,Adelie
33.4,18.7,184,3650,Adelie
41.6,18.8,183,3750,Adelie
53.8,16.4,421,3500,Chinstrap
47,12.5,206,5850,Gentoo
54.1,17.8,206,3750,Chinstrap
48.6,16.8,201,3075,Chinstrap
41,19.9,188,3800,Adelie
48.9,16,214,4900,Gentoo
40,19.9,204,4575,Adelie
34.5,17.7,175,3875,Adelie
55.2,15.1,222,5125,Gentoo
47.6,16,216,5000,Gentoo
38.7,17.8,191,3375,Adelie
52.1,14.7,221,5350,Gentoo
,18.6,195,3550,Adelie
45.5,19.8,180,3850,Chinstrap
47.8,14.2,214,4675,Gentoo
48.9,17.6,205,2950,Chinstrap
33,17.9,189,3500,Adelie
36.1,17,188,3925,Adelie
40.8,19.9,195,3875,Adelie
45.9,14.9,214,4400,Gentoo
50.8,16.6,214,5075,Gentoo
50.7,17,190,3450,Chinstrap
41.1,17.5,188,2825,Adelie
36.7,18.5,187,3200,Adelie
48.8,18.3,200,3725,Chinstrap
45.7,14.3,211,5500,Gentoo
36.1,16.5,200,4200,Adelie
46.4,42.9,223,6250,Gentoo
48.2,15.3,221,5225,Gentoo
53.7,19.1,186,4175,Chinstrap
35.9,17.7,191,3400,Adelie
55.2,20.7,200,3600,Chinstrap
37.9,19.3,185,3550,Adelie
45.7,14.5,216,4600,Gentoo
39.4,,216,6100,Gentoo
35.8,18.5,194,3525,Adelie
37.1,16.5,182,3925,Adelie
45.9,15.8,213,4000,Gentoo
53.2,19.1,195,3750,Chinstrap
50.3,13.6,217,5125,Gentoo
50.6,15.7,229,6025,Gentoo
53.6,19,194,3000,Chinstrap
35.4,19.2,187,3825,Adelie
37.3,17.1,186,850,Adelie
48.6,14.7,213,5425,Gentoo
38.8,17,196,4025,Adelie
36.2,18.1,191,3175,Adelie
50.3,16.8,198,4200,Chinstrap
45.4,15.2,231,5250,Gentoo
48.7,14.3,220,5625,Gentoo
48.4,18.9,187,3300,Chinstrap
49.4,15.6,203,2800,Chinstrap
34.2,17.5,183,3075,Adelie
45.4,14.2,205,5000,Gentoo
36.1,19,184,3875,Adelie
36.8,18.2,193,3225,Adelie
48.4,17.7,200,,Chinstrap
44.4,18.2,190,3400,Chinstrap
45.6,15.8,223,5000,Gentoo
38.9,20.2,191,4075,Adelie
50.7,18.3,217,4050,Chinstrap
53,19.5,193,3525,Chinstrap
50.8,12.7,221,6775,Gentoo
50.3,14.5,221,5400,Gentoo
35,18.7,189,4200,Adelie
54.4,15,217,5700,Gentoo
37.7,19.1,183,4050,Adelie
47.3,18.7,195,4525,Chinstrap
2.5,18.6,189,4025,Chinstrap
36.7,19.3,184,3600,Adelie
42.6,18.4,201,3900,Adelie
42.3,19.6,184,3400,Adelie
47.4,17.9,215,3650,Chinstrap
49.3,19.8,185,3825,Chinstrap
37.5,18.1,201,4475,Adelie
48,12.8,217,5475,Gentoo
49.1,15,219,5550,Gentoo
51.9,18.2,195,4000,Chinstrap
45.8,18,212,5500,Gentoo
39.4,19,,3950,Adelie
42.6,13.7,224,5325,Gentoo
50.8,19,194,3675,Chinstrap
49.7,19.7,185,3850,Chinstrap
39.4,20.9,188,3475,Adelie
45.9,16.1,220,5875,Gentoo
51.8,16.8,192,3500,Chinstrap
51.5,14.9,213,4625,Gentoo
47.2,19.3,193,3675,Chinstrap
40.3,16.9,186,3750,Adelie`;

/* ---------- 유틸 ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const sum=a=>a.reduce((s,x)=>s+x,0);
const mean=a=>sum(a)/a.length;
const std=a=>{const m=mean(a);return Math.sqrt(sum(a.map(x=>(x-m)**2))/(a.length-1))};
const quantile=(a,q)=>{const s=[...a].sort((x,y)=>x-y);const p=(s.length-1)*q,b=Math.floor(p),f=p-b;return s[b+1]!==undefined?s[b]+f*(s[b+1]-s[b]):s[b]};
const median=a=>quantile(a,.5);
const r4=v=>+v.toFixed(4);
const CIRC='①②③④⑤⑥⑦⑧⑨⑩';
const COLS=['bill_length_mm','bill_depth_mm','flipper_length_mm','body_mass_g'];
const SHORT=['bill_length','bill_depth','flipper_length','body_mass'];
const KO=['부리 길이','부리 깊이','날개 길이','몸무게'];
const UNIT=['mm','mm','mm','g'];
const SPECIES=['Adelie','Chinstrap','Gentoo'];
const SP_KO={Adelie:'아델리',Chinstrap:'턱끈',Gentoo:'젠투'};
const spColor=s=>`var(--s${SPECIES.indexOf(s)+1})`;
const COLS_PY="['bill_length_mm', 'bill_depth_mm', 'flipper_length_mm', 'body_mass_g']";

/* ---------- 데이터: 원본 → 결측치 채움 → 이상치 제거 → 정규화 ---------- */
const RAW=PENG_CSV.trim().split('\n').slice(1).map((line,i)=>{const p=line.trim().split(',');return{i,v:p.slice(0,4).map(x=>x===''?null:+x),sp:p[4]}});
const colVals=(rows,j)=>rows.map(r=>r.v[j]).filter(x=>x!==null);
const MISS_CELLS=RAW.reduce((n,r)=>n+r.v.filter(x=>x===null).length,0);
const MISS_COUNT=COLS.map((_,j)=>RAW.length-colVals(RAW,j).length);
const MISS_ROWS=RAW.filter(r=>r.v.includes(null));
// numpy와 같은 pairwise 합산 → 파이썬 실행 결과와 끝자리까지 같은 평균
function pwSum(a){const n=a.length;if(n<8)return a.reduce((s,x)=>s+x,0);
  if(n<=128){const r=a.slice(0,8);let i=8;for(;i<n-(n%8);i+=8)for(let j=0;j<8;j++)r[j]+=a[i+j];let s=((r[0]+r[1])+(r[2]+r[3]))+((r[4]+r[5])+(r[6]+r[7]));for(;i<n;i++)s+=a[i];return s}
  let n2=Math.floor(n/2);n2-=n2%8;return pwSum(a.slice(0,n2))+pwSum(a.slice(n2))}
const MEANS=COLS.map((_,j)=>{const v=colVals(RAW,j);return pwSum(v)/v.length});
const m6=v=>v.toFixed(6);
const FILLED=RAW.map(r=>({...r,v:r.v.map((x,j)=>x===null?MEANS[j]:x),filled:r.v.map(x=>x===null)}));
const LIM=COLS.map((_,j)=>{const v=FILLED.map(r=>r.v[j]);const q1=quantile(v,.25),q3=quantile(v,.75),iqr=q3-q1;return{q1,q3,iqr,upper:q3+1.5*iqr,lower:q1-1.5*iqr}});
const isOutCell=(v,j)=>v>LIM[j].upper||v<LIM[j].lower;
const isOutRow=r=>r.v.some((x,j)=>isOutCell(x,j));
const OUTS=FILLED.filter(isOutRow);
const KEPT=FILLED.filter(r=>!isOutRow(r));
const OUT_N=COLS.map((_,j)=>FILLED.filter(r=>isOutCell(r.v[j],j)).length);
const MM=COLS.map((_,j)=>{const v=colVals(KEPT,j);return{min:Math.min(...v),max:Math.max(...v)}});
const NORMAL=KEPT.map((r,k)=>({i:k,v:r.v.map((x,j)=>(x-MM[j].min)/(MM[j].max-MM[j].min))}));
const fmtMax=v=>String(+v.toFixed(6));

/* ---------- pandas 출력 형식 ---------- */
function decNeeded(v){for(let d=0;d<6;d++){if(Math.abs(v-+v.toFixed(d))<1e-9*Math.max(1,Math.abs(v)))return d}return 6}
const colDec=vals=>Math.max(1,...vals.map(decNeeded));
function frameText(rows,labels){
  const trunc=rows.length>60,shown=trunc?[...rows.slice(0,5),null,...rows.slice(-5)]:rows;
  const cells=labels.map((_,j)=>{const d=colDec(shown.filter(Boolean).map(r=>r.v[j]));return shown.map(r=>r?r.v[j].toFixed(d):'...')});
  const w=labels.map((l,j)=>Math.max(l.length,...cells[j].map(c=>c.length)));
  const idx=shown.map(r=>r?String(r.i):'..'),iw=Math.max(...idx.map(s=>s.length));
  const lines=[' '.repeat(iw)+labels.map((l,j)=>'  '+l.padStart(w[j])).join('')];
  shown.forEach((r,k)=>lines.push(idx[k].padEnd(iw)+labels.map((_,j)=>'  '+cells[j][k].padStart(w[j])).join('')));
  if(trunc)lines.push('',`[${rows.length} rows x ${labels.length} columns]`);
  return lines.join('\n');
}
function seriesText(pairs,foot){const iw=Math.max(...pairs.map(p=>String(p[0]).length)),vw=Math.max(...pairs.map(p=>String(p[1]).length));return pairs.map(([i,v])=>String(i).padEnd(iw)+'    '+String(v).padStart(vw)).join('\n')+'\n'+foot}
const INFO_TEXT=`<class 'pandas.core.frame.DataFrame'>
RangeIndex: ${RAW.length} entries, 0 to ${RAW.length-1}
Data columns (total 5 columns):
 #   Column             Non-Null Count  Dtype
---  ------             --------------  -----
${COLS.map((c,j)=>` ${j}   ${c.padEnd(17)}  ${colVals(RAW,j).length} non-null    float64`).join('\n')}
 4   species            ${RAW.length} non-null    object
dtypes: float64(4), object(1)
memory usage: 6.0+ KB`;

/* ---------- 차트 ---------- */
function niceStep(span,n){const s0=span/n;const mag=10**Math.floor(Math.log10(s0));const e=s0/mag;return(e>=7.5?10:e>=3.5?5:e>=1.5?2:1)*mag}
function ticks(lo,hi,n=5){if(hi===lo)return[lo];const st=niceStep(hi-lo,n);const out=[];for(let v=Math.ceil(lo/st-1e-9)*st;v<=hi+st*1e-9;v+=st)out.push(+v.toFixed(10));return out}
const tf=v=>{const a=Math.abs(v);return a>=100?String(Math.round(v)):String(+v.toFixed(a>=10?1:2))};
function boxStats(v){const q1=quantile(v,.25),q3=quantile(v,.75),iqr=q3-q1,lf=q1-1.5*iqr,uf=q3+1.5*iqr;const inn=v.filter(x=>x>=lf&&x<=uf);return{q1,q3,med:median(v),wlo:Math.min(...inn),whi:Math.max(...inn),outs:v.filter(x=>x<lf||x>uf),n:v.length}}
function vboxSVG(groups,o={}){
  const w=o.w||520,h=o.h||300,m={l:o.ml||46,r:12,t:12,b:30},iw=w-m.l-m.r,ih=h-m.t-m.b;
  const all=groups.flatMap(g=>g.vals);let lo=Math.min(...all),hi=Math.max(...all);const pad=(hi-lo||1)*.05;lo-=pad;hi+=pad;
  const Y=v=>m.t+ih-(v-lo)/(hi-lo)*ih,bw=iw/groups.length;
  let s=`<svg class="chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(o.label||'상자그림')}">`;
  ticks(lo,hi,6).filter(t=>t>=lo&&t<=hi).forEach(t=>{s+=`<line class="grid" x1="${m.l}" x2="${w-m.r}" y1="${Y(t)}" y2="${Y(t)}"/><text class="tick" x="${m.l-6}" y="${Y(t)+4}" text-anchor="end">${tf(t)}</text>`});
  s+=`<line class="base" x1="${m.l}" x2="${w-m.r}" y1="${m.t+ih}" y2="${m.t+ih}"/>`;
  groups.forEach((g,i)=>{const st=boxStats(g.vals),cx=m.l+bw*i+bw/2,hw=Math.min(30,bw*.28),cap=hw*.55;
    s+=`<line x1="${cx}" x2="${cx}" y1="${Y(st.whi)}" y2="${Y(st.q3)}" style="stroke:var(--ink-2)" stroke-width="1.3"/><line x1="${cx}" x2="${cx}" y1="${Y(st.q1)}" y2="${Y(st.wlo)}" style="stroke:var(--ink-2)" stroke-width="1.3"/>`;
    s+=`<line x1="${cx-cap}" x2="${cx+cap}" y1="${Y(st.whi)}" y2="${Y(st.whi)}" style="stroke:var(--ink-2)" stroke-width="1.3"/><line x1="${cx-cap}" x2="${cx+cap}" y1="${Y(st.wlo)}" y2="${Y(st.wlo)}" style="stroke:var(--ink-2)" stroke-width="1.3"/>`;
    s+=`<rect x="${cx-hw}" y="${Y(st.q3)}" width="${hw*2}" height="${Math.max(1,Y(st.q1)-Y(st.q3))}" rx="3" style="fill:color-mix(in oklab,var(--s1) 22%,var(--surface));stroke:var(--s1)" stroke-width="1.5" data-tip="${esc(`${g.tip||g.label}\nQ1 ${tf(st.q1)} · 중앙값 ${tf(st.med)} · Q3 ${tf(st.q3)}\n수염 ${tf(st.wlo)} ~ ${tf(st.whi)}`)}"/>`;
    s+=`<line x1="${cx-hw}" x2="${cx+hw}" y1="${Y(st.med)}" y2="${Y(st.med)}" style="stroke:var(--s2)" stroke-width="2.5" pointer-events="none"/>`;
    [...new Set(st.outs)].forEach(x=>{s+=`<circle cx="${cx}" cy="${Y(x)}" r="4" style="fill:var(--surface);stroke:var(--out-ink)" stroke-width="1.8" data-tip="${esc(`${g.tip||g.label} 이상치: ${tf(x)}`)}"/>`});
    s+=`<text class="lab" x="${cx}" y="${h-9}" text-anchor="middle">${esc(g.label)}</text>`;
  });
  return s+'<\/svg>';
}
// 한 열의 값을 점으로 쌓고 그 위에 상자그림·상한선·하한선을 그립니다
function stripChart(j){
  const vals=FILLED.map(r=>r.v[j]),L=LIM[j],inside=vals.filter(v=>!isOutCell(v,j));
  const maxIn=Math.max(...inside),minIn=Math.min(...inside);
  let lo=Math.min(L.lower,...vals),hi=Math.max(L.upper,...vals);const pad=(hi-lo)*.03;lo-=pad;hi+=pad;
  const x=v=>60+(v-lo)/(hi-lo)*660,baseY=210,boxY=64,bin=(hi-lo)/130,counts={};
  const dots=FILLED.map(r=>{const v=r.v[j],k=Math.round((v-lo)/bin);counts[k]=(counts[k]||0)+1;const o=isOutCell(v,j);
    return`<circle class="${o?'sw-dot-out':'sw-dot'}" cx="${x(v).toFixed(1)}" cy="${baseY-5-(counts[k]-1)*5.5}" r="${o?3.6:2.6}" data-tip="${esc(`${r.i}번 · ${COLS[j]} ${tf(v)}${o?'\n→ 이상치':''}`)}"/>`}).join('');
  const tk=ticks(lo,hi,8).filter(t=>t>=lo&&t<=hi).map(t=>`<line class="sw-tick" x1="${x(t)}" y1="${baseY}" x2="${x(t)}" y2="${baseY+5}"/><text class="sw-axis" x="${x(t)}" y="${baseY+19}">${tf(t)}</text>`).join('');
  const med=median(vals);
  return `<svg class="chart" viewBox="0 0 760 240" role="img" aria-label="${COLS[j]} 값 ${vals.length}개의 분포와 상한선 ${r4(L.upper)}, 하한선 ${r4(L.lower)}">
<rect class="sw-out-zone" x="${x(lo)}" y="26" width="${x(L.lower)-x(lo)}" height="${baseY-26}"/><rect class="sw-out-zone" x="${x(L.upper)}" y="26" width="${x(hi)-x(L.upper)}" height="${baseY-26}"/>
<line class="sw-limit" x1="${x(L.lower)}" y1="26" x2="${x(L.lower)}" y2="${baseY}"/><line class="sw-limit" x1="${x(L.upper)}" y1="26" x2="${x(L.upper)}" y2="${baseY}"/>
<text class="sw-limit-label" x="${x(L.lower)}" y="17">하한선 ${r4(L.lower)}</text><text class="sw-limit-label" x="${x(L.upper)}" y="17">상한선 ${r4(L.upper)}</text>
<line class="sw-whisker" x1="${x(minIn)}" y1="${boxY}" x2="${x(L.q1)}" y2="${boxY}"/><line class="sw-whisker" x1="${x(L.q3)}" y1="${boxY}" x2="${x(maxIn)}" y2="${boxY}"/>
<line class="sw-whisker" x1="${x(minIn)}" y1="${boxY-9}" x2="${x(minIn)}" y2="${boxY+9}"/><line class="sw-whisker" x1="${x(maxIn)}" y1="${boxY-9}" x2="${x(maxIn)}" y2="${boxY+9}"/>
<rect class="sw-box" x="${x(L.q1)}" y="${boxY-14}" width="${Math.max(1,x(L.q3)-x(L.q1))}" height="28" rx="3" data-tip="${esc(`${COLS[j]}\nQ1 ${r4(L.q1)} · 중앙값 ${tf(med)} · Q3 ${r4(L.q3)}\nIQR ${r4(L.iqr)}`)}"/><line x1="${x(med)}" x2="${x(med)}" y1="${boxY-14}" y2="${boxY+14}" style="stroke:var(--s2)" stroke-width="2.5" pointer-events="none"/>
${[...new Set(vals.filter(v=>isOutCell(v,j)))].map(v=>`<circle class="sw-box-out" cx="${x(v)}" cy="${boxY}" r="4.5"/>`).join('')}
${dots}<line class="sw-baseline" x1="60" y1="${baseY}" x2="720" y2="${baseY}"/>${tk}
<text class="sw-axis-title" x="390" y="${baseY+30}">${COLS[j]} (${UNIT[j]}) · 점 하나가 펭귄 한 마리</text><\/svg>`;
}
const BP_LABELS=[{y:36,from:162,t:'이상치',s:'1.5 × IQR보다 멀리 떨어진 값'},{y:72,from:176,t:'최댓값',s:'이상치를 뺀 가장 큰 값'},{y:114,from:196,t:'제3사분위수 (Q3)',s:'75% 위치의 값'},{y:158,from:196,t:'중앙값 (제2사분위수)',s:'50% 위치의 값'},{y:202,from:196,t:'제1사분위수 (Q1)',s:'25% 위치의 값'},{y:248,from:176,t:'최솟값',s:'이상치를 뺀 가장 작은 값'}];
const BP_DIAGRAM=`<svg class="chart" viewBox="0 0 560 280" style="max-width:560px" role="img" aria-label="상자그림의 이상치, 최댓값, 제3사분위수, 중앙값, 제1사분위수, 최솟값 위치">
<rect class="bp-panel" x="40" y="12" width="210" height="256" rx="10"/>
<circle class="bp-outlier" cx="145" cy="30" r="5"/><circle class="bp-outlier" cx="145" cy="42" r="5"/>
<line class="bp-line" x1="145" y1="72" x2="145" y2="114"/><line class="bp-line" x1="145" y1="202" x2="145" y2="248"/>
<line class="bp-line" x1="118" y1="72" x2="172" y2="72"/><line class="bp-line" x1="118" y1="248" x2="172" y2="248"/>
<rect class="bp-box" x="100" y="114" width="90" height="88"/><line class="bp-median" x1="100" y1="158" x2="190" y2="158"/>
<path class="bp-bracket" d="M88 114 H80 V202 H88"/><text class="bp-iqr" x="74" y="162">IQR</text>
${BP_LABELS.map(l=>`<line class="bp-leader" x1="${l.from}" y1="${l.y}" x2="292" y2="${l.y}"/><circle class="bp-dot" cx="${l.from}" cy="${l.y}" r="3"/><text class="bp-label" x="302" y="${l.y-2}">${l.t}<tspan class="bp-sub" x="302" dy="15">${l.s}</tspan></text>`).join('')}
<\/svg>`;
const tag=(cls,x,y,w,ko,en,lx,ly,px,py)=>`<g class="peng-tag ${cls}"><line x1="${px}" y1="${py}" x2="${lx}" y2="${ly}"/><rect x="${x}" y="${y}" width="${w}" height="38" rx="6"/><text x="${x+w/2}" y="${y+16}">${ko}</text><text class="en" x="${x+w/2}" y="${y+31}">${en}</text></g>`;
const PENG_SVG=`<svg class="peng-svg" viewBox="0 0 340 330" role="img" aria-label="펭귄의 부리 길이, 부리 깊이, 날개 길이, 몸무게를 표시한 그림">
<ellipse class="peng-feet" cx="122" cy="306" rx="22" ry="7"/><ellipse class="peng-feet" cx="168" cy="306" rx="22" ry="7"/>
<path class="peng-body" d="M150 40 C190 40 205 75 200 110 C220 160 222 230 200 280 C185 310 105 312 92 282 C70 232 78 160 104 110 C100 72 115 40 150 40 Z"/>
<path class="peng-belly" d="M168 104 C196 140 204 220 190 268 C180 296 128 298 118 270 C108 230 120 160 150 112 C156 104 162 100 168 104 Z"/>
<circle class="peng-eye" cx="170" cy="74" r="7"/><circle class="peng-pupil" cx="172" cy="74" r="3.4"/>
<path class="peng-bill" d="M194 80 L258 92 L194 106 Z"/>
<path class="peng-flip" d="M106 128 C84 160 72 210 74 246 C76 254 84 254 88 246 C98 214 110 176 118 140 Z"/>
<line class="peng-dim d1" x1="194" y1="70" x2="258" y2="70"/><line class="peng-dim d1" x1="194" y1="64" x2="194" y2="76"/><line class="peng-dim d1" x1="258" y1="64" x2="258" y2="76"/>
<line class="peng-dim d2" x1="186" y1="80" x2="186" y2="106"/><line class="peng-dim d2" x1="180" y1="80" x2="192" y2="80"/><line class="peng-dim d2" x1="180" y1="106" x2="192" y2="106"/>
<line class="peng-dim d3" x1="112" y1="134" x2="80" y2="250"/>
${tag('t1',232,8,100,'부리 길이','bill_length',258,46,226,70)}
${tag('t2',236,120,96,'부리 깊이','bill_depth',236,139,186,100)}
${tag('t3',6,276,92,'날개 길이','flipper_length',52,276,80,246)}
${tag('t4',236,220,96,'몸무게','body_mass',236,239,200,230)}
<\/svg>`;

/* ---------- 표·카드 ---------- */
function gridTable(head,body,o={}){const L=i=>i===0||o.left?'l ':'';return `<div class="tw"><table><thead><tr>${head.map((h,i)=>`<th class="${L(i)}">${h}</th>`).join('')}</tr></thead><tbody>${body.map(r=>`<tr>${r.map((c,i)=>typeof c==='object'&&c!==null?`<td class="${L(i)}${c.cls||''}">${c.v}</td>`:`<td class="${L(i)}">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`}
function card(title,body,o={}){return `<section class="card ${o.wide?'wide':''} ${o.cls||''}"${o.id?` id="${o.id}"`:''}><div class="card-h">${o.pre||''}<h3>${title}</h3>${o.sub?`<p>${o.sub}</p>`:''}</div>${body}</section>`}
const fact=(l,v,s,cls='')=>`<div class="fact ${cls}"><span>${l}</span><b>${v}</b>${s?`<small>${s}</small>`:''}</div>`;
const spCell=s=>`<span class="sp"><i style="background:${spColor(s)}"></i>${s}</span>`;
function pengTable(rows,cls,fmtCell,label='penguins 데이터 전체 (표 안에서 스크롤)'){
  return `<div class="tw scroll" tabindex="0" aria-label="${label}"><table><thead><tr><th class="l">번호</th>${COLS.map(c=>`<th>${c}</th>`).join('')}<th class="l">species</th></tr></thead><tbody>${
    rows.map(r=>`<tr><td class="idx l">${r.i}</td>${r.v.map((x,j)=>{const c=cls(r,j);return`<td${c?` class="${c}"`:''}>${fmtCell(r,j)}</td>`}).join('')}<td class="l">${spCell(r.sp)}</td></tr>`).join('')}</tbody></table></div>`;
}
const guide=(title,inner)=>`<details class="guide"><summary><span>더 알아보기</span>${title}</summary>${inner}</details>`;
const dl=items=>`<dl>${items.map(([t,d])=>`<dt>${t}</dt><dd>${d}</dd>`).join('')}</dl>`;
const pre=(t,cls='')=>`<pre class="py ${cls}">${esc(t)}</pre>`;
const missList=COLS.map((c,j)=>`${c} ${MISS_COUNT[j]}개`).join(', ');

/* ---------- 활동 정의 ---------- */
const ATTR=(o)=>['AttributeError',`${o} has no attribute '{v}'`];
const ACTS={
  intro:{no:'01',fill:1,title:'데이터 불러오기',desc:'CSV 파일을 판다스 데이터프레임으로 읽어 옵니다.',
    lines:["import pandas as pd","penguins = pd.{0}('penguins.csv')","penguins.{1}(3)"],
    blanks:[{a:['read_csv'],err:ATTR("module 'pandas'")},{a:['head'],err:ATTR("'DataFrame' object")}],
    msg:'좋아요.\nCSV를 데이터프레임으로 읽고 앞부분을 확인했습니다.',
    out:()=>{const rows=RAW.slice(0,3),d=COLS.map((_,j)=>colDec(rows.map(r=>r.v[j])));
      return gridTable(['',...COLS,'species'],rows.map(r=>[`<b>${r.i}</b>`,...r.v.map((x,j)=>x.toFixed(d[j])),{v:r.sp,cls:'l'}]))+
      `<div class="insight"><span>✦</span><p><b>무엇을 알 수 있나요?</b><br>첫 3행만 봐도 열 이름, 값의 형태, 종(species) 표기 방식을 알 수 있습니다.</p></div>`}},
  info:{no:'02',fill:1,title:'데이터의 구조 확인하기',desc:'열마다 자료형과 결측치 개수를 한눈에 확인합니다. <code>info()</code>는 각 열의 값 개수(Non-Null Count)와 자료형(Dtype)을 보여 줍니다.',
    lines:["penguins.{0}()"],blanks:[{a:['info'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\n열별 자료형과 결측치 개수를 확인했습니다.',
    out:()=>`<div class="facts">${fact('RangeIndex',`${RAW.length} entries`,`0 to ${RAW.length-1}`)}${fact('데이터 열','5 columns','수치형 4 · 범주형 1')}${fact('Non-Null Count',`${Math.min(...COLS.map((_,j)=>colVals(RAW,j).length))} ~ ${Math.max(...COLS.map((_,j)=>colVals(RAW,j).length))} / ${RAW.length}`,`수치형 4개 열 모두 누락`,'hl')}</div>${pre(INFO_TEXT)}<p class="note"><b>읽어 보기</b> 수치형 네 열은 값이 ${RAW.length}개보다 적으므로 모두 결측치가 있습니다. (${missList})</p>`,
    after:()=>guide('info() 결과의 각 항목',dl([['RangeIndex',`행 번호(인덱스)의 범위로, 0부터 ${RAW.length-1}까지 ${RAW.length}개의 행이 있습니다.`],['Data columns','데이터프레임에 있는 열의 전체 개수입니다.'],['#','열의 순서 번호로, 0부터 시작합니다.'],['Column','열의 이름입니다.'],['Non-Null Count','비어 있지 않은 값의 개수로, 전체 행 수보다 작으면 결측치가 있다는 뜻입니다.'],['Dtype','열의 자료형으로, float64는 실수이고 object는 문자열입니다.'],['dtypes','자료형별로 열이 몇 개인지 보여 줍니다.'],['memory usage','데이터프레임이 차지하는 메모리 크기입니다.']]))},
  describe:{no:'03',fill:1,title:'기초 통계량 확인하기',desc:'수치형 열마다 값의 개수, 평균, 표준편차, 최솟값, 사분위수, 최댓값을 확인합니다. <code>describe()</code>의 결과에서 펭귄의 측정값이라고 보기 어려운 값이 있는지 찾아보세요.',
    lines:["penguins.{0}()"],blanks:[{a:['describe'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\n수치형 열의 기초 통계량을 확인했습니다.',
    out:()=>{const st=COLS.map((_,j)=>{const v=colVals(RAW,j);return[v.length,mean(v),std(v),Math.min(...v),quantile(v,.25),median(v),quantile(v,.75),Math.max(...v)]});
      const d=st.map(colDec),names=['count','mean','std','min','25%','50%','75%','max'];
      const odd=(n,j,v)=>(n==='min'&&v<LIM[j].lower)||(n==='max'&&v>LIM[j].upper);
      return gridTable(['',...COLS],names.map((n,k)=>[`<b>${n}</b>`,...st.map((s,j)=>({v:s[k].toFixed(d[j]),cls:n==='count'&&s[k]<RAW.length?'c-miss':odd(n,j,s[k])?'c-out':''}))]))+
      `<p class="note"><span class="key"><i style="background:var(--miss-bg);outline:1px solid var(--miss-ink)"></i>count가 ${RAW.length}보다 작음 = 결측치가 있는 열</span> &nbsp;<span class="key"><i style="background:var(--out-bg);outline:1px solid var(--out-ink)"></i>사분위수(25%·75%)와 너무 멀리 떨어진 최솟값·최댓값</span></p>`},
    after:()=>guide('describe() 결과의 각 항목',dl([['count','비어 있지 않은 값의 개수입니다.'],['mean','값을 모두 더해 개수로 나눈 평균입니다.'],['std','표준편차로, 값들이 평균에서 얼마나 흩어져 있는지 나타냅니다.'],['min','가장 작은 값(최솟값)입니다.'],['25%','제1사분위수로, 값을 작은 순서로 늘어놓았을 때 25% 위치의 값입니다.'],['50%','중앙값(제2사분위수)으로, 값을 작은 순서로 늘어놓았을 때 가운데 위치의 값입니다.'],['75%','제3사분위수로, 값을 작은 순서로 늘어놓았을 때 75% 위치의 값입니다.'],['max','가장 큰 값(최댓값)입니다.']]))},
  'missing-check':{no:'04',fill:1,title:'결측치 개수 확인하기',desc:'각 열에서 비어 있는 값의 개수를 셉니다. 두 빈칸에 알맞은 함수 이름을 넣어 보세요.',
    lines:["penguins.{0}().{1}()"],blanks:[{a:['isnull','isna'],err:ATTR("'DataFrame' object")},{a:['sum'],err:ATTR("'DataFrame' object")}],
    msg:`정답입니다.\n수치형 네 열에 결측치가 모두 ${MISS_CELLS}칸 있음을 확인했습니다.`,
    out:()=>pre(seriesText([...COLS.map((c,j)=>[c,MISS_COUNT[j]]),['species',0]],'dtype: int64'))+`<p class="note">${MISS_COUNT.join(' + ')} = <b>${MISS_CELLS}칸</b>이 비어 있습니다. 결측치가 있는 행은 ${MISS_ROWS.length}개(${MISS_ROWS.map(r=>r.i).join(', ')}번)입니다.</p>`},
  mean:{no:'05',fill:1,title:'열마다 평균 구하기',desc:'결측치를 채울 값으로, 수치형 열마다 비어 있지 않은 값들의 평균을 구합니다. <code>numeric_only=True</code>는 문자열인 species 열을 빼고 숫자 열만 계산하라는 뜻입니다.',
    lines:["mean = penguins.{0}(numeric_only=True)","mean"],blanks:[{a:['mean'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\n비어 있는 값을 채울 열별 평균을 구했습니다.',
    out:()=>pre(seriesText(COLS.map((c,j)=>[c,m6(MEANS[j])]),'dtype: float64'))+`<p class="note">결측치는 평균 계산에서 자동으로 빠집니다. 예: body_mass_g는 값 ${colVals(RAW,3).length}개의 평균 ≈ <b>${MEANS[3].toFixed(2)} g</b></p>`},
  missing:{no:'06',fill:1,title:'평균값으로 채우기',desc:'네 수치형 열의 결측치를 앞에서 구한 열별 평균값으로 채운 뒤, 모든 열의 결측치가 0개인지 확인합니다.',
    lines:["penguins.{0}(mean, inplace=True)","penguins.{1}().{2}()"],
    blanks:[{a:['fillna'],err:ATTR("'DataFrame' object")},{a:['isnull','isna'],err:ATTR("'DataFrame' object")},{a:['sum'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\n네 수치형 열의 결측치를 열별 평균으로 채웠습니다.',
    out:()=>pre(seriesText([...COLS.map(c=>[c,0]),['species',0]],'dtype: int64'))+`<div class="insight"><span>!</span><p><b>실행 후 확인</b><br>fillna()에 열별 평균(Series)을 넣으면 각 열의 빈칸이 그 열의 평균으로 채워집니다. 모든 열의 결측치가 0개가 되었습니다.</p></div>`},
  'outlier-boxplot':{no:'07',title:'이상치 확인하기 1',desc:'네 수치형 열의 분포와 이상치를 상자그림으로 살펴봅니다. 열마다 단위와 크기가 달라서 <code>plt.subplot(1, 4, n)</code>으로 칸을 나누어 따로 그립니다.',
    lines:["import matplotlib.pyplot as plt","cols = "+COLS_PY,"plt.figure(figsize=(16, 4))","for i, col in enumerate(cols):","    plt.subplot(1, 4, i + 1)","    penguins[[col]].boxplot()","plt.show()"],blanks:[],
    msg:'상자그림을 그렸습니다.',
    out:()=>`<div class="quad">${COLS.map((c,j)=>`<figure><figcaption>subplot(1, 4, ${j+1})</figcaption>${vboxSVG([{label:c,vals:colVals(FILLED,j)}],{w:240,h:280,ml:50,label:c+' 상자그림'})}</figure>`).join('')}</div><p class="note">상자 = Q1~Q3, <span style="color:var(--s2);font-weight:600">주황 선</span> = 중앙값, <span style="color:var(--out-ink);font-weight:600">○</span> = 이상치. 상자·점에 마우스를 올려 보세요.</p>`,
    after:()=>guide('상자그림 읽는 법',`<p>상자그림은 사분위수를 이용해 데이터의 분포와 모양, 극단값을 한눈에 보여 주는 그래프입니다.</p>${BP_DIAGRAM}${dl([['상자','제1사분위수부터 제3사분위수까지로, 가운데 50%의 데이터가 들어 있습니다.'],['IQR','제3사분위수 - 제1사분위수로, 상자의 길이와 같습니다.'],['수염','상자 위아래로 뻗은 선으로, 이상치를 뺀 최댓값과 최솟값까지 이어집니다.'],['이상치','상자에서 1.5 × IQR보다 멀리 떨어진 값으로, 동그라미(○)로 표시됩니다.']])}<p>활동 07 결과에서는 네 열 모두 상자에서 멀리 떨어진 동그라미가 있습니다. 부리 길이 2.5 mm, 몸무게 12500 g처럼 실제 펭귄이라고 보기 어려운 값입니다.</p>`)},
  outlier:{no:'08',fill:1,title:'이상치 확인하기 2',desc:'제1사분위수, 제3사분위수와 IQR을 열마다 구해, 네 수치형 열 중 하나라도 이상치가 있는 행을 찾습니다.',
    lines:["import {0} as np","cols = "+COLS_PY,"q1, q3 = np.percentile(penguins[cols], [{1}, {2}], axis=0)","iqr = q3 - q1","upper = {3}","lower = {4}","mask = (penguins[cols] {5}) | (penguins[cols] {6})","outliers = penguins[cols][mask.{7}(axis=1)]","outliers"],
    blanks:[{a:['numpy'],err:['ModuleNotFoundError',"No module named '{v}'"]},{a:['25']},{a:['75']},{a:['q3 + (1.5 * iqr)','q3 + 1.5 * iqr','q3 + (iqr * 1.5)','q3 + iqr * 1.5']},{a:['q1 - (1.5 * iqr)','q1 - 1.5 * iqr','q1 - (iqr * 1.5)','q1 - iqr * 1.5']},{a:['> upper']},{a:['< lower']},{a:['any'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\n열마다 사분위수와 IQR을 구해 이상치가 있는 행을 찾았습니다.',
    out:()=>pre(frameText(OUTS,COLS))+gridTable(['열','q1','q3','iqr','하한 lower','상한 upper','이상치'],COLS.map((c,j)=>[`<b>${c}</b>`,r4(LIM[j].q1),r4(LIM[j].q3),r4(LIM[j].iqr),r4(LIM[j].lower),r4(LIM[j].upper),{v:`${OUT_N[j]}개`,cls:OUT_N[j]?'c-out':''}]))+
      `<p class="note"><code>axis=0</code>은 열마다 계산하라는 뜻이라 q1, q3, upper, lower는 값이 4개씩 들어 있는 배열입니다. <code>mask.any(axis=1)</code>은 한 행에서 하나라도 True이면 True가 됩니다. 왼쪽 숫자는 행 번호(인덱스)입니다.</p>`},
  'outlier-drop':{no:'09',fill:1,title:'이상치 처리하기',desc:'이상치가 있는 행을 제거하고, 제거 전후의 데이터 크기를 비교합니다.',
    lines:["penguins_outliers = penguins.{0}(index=outliers.index)","print('이상치 제거 전:', penguins.{1})","print('이상치 제거 후:', penguins_outliers.{2})"],
    blanks:[{a:['drop'],err:ATTR("'DataFrame' object")},{a:['shape'],err:ATTR("'DataFrame' object")},{a:['shape'],err:ATTR("'DataFrame' object")}],
    msg:'정답입니다.\n이상치 행을 제거하고 데이터 크기를 비교했습니다.',
    out:()=>pre(`이상치 제거 전: (${FILLED.length}, 5)\n이상치 제거 후: (${KEPT.length}, 5)`)+`<p class="note">이상치가 있던 ${OUTS.length}개 행(${OUTS.map(r=>r.i).join(', ')}번)이 지워지고, 열은 그대로 5개입니다.</p>`},
  normalize:{no:'10',fill:1,title:'MinMaxScaler로 정규화하기',desc:'네 수치형 열을 선택해 MinMaxScaler로 정규화합니다.',
    lines:["from sklearn.preprocessing import {0}","penguins_new = penguins_outliers[cols]","normal = MinMaxScaler().{1}(penguins_new)","normal = pd.{2}(normal, columns=penguins_new.columns)","print(normal); print(penguins_new)"],
    blanks:[{a:['MinMaxScaler'],err:['ImportError',"cannot import name '{v}' from 'sklearn.preprocessing'"]},{a:['fit_transform'],err:ATTR("'MinMaxScaler' object")},{a:['DataFrame'],err:ATTR("module 'pandas'")}],
    msg:'정답입니다.\n네 가지 수치형 열을 0부터 1 사이로 정규화했습니다.',
    out:()=>`<div class="out-cols"><div><p>normal (정규화 후)</p>${pre(frameText(NORMAL,COLS))}</div><div><p>penguins_new (정규화 전)</p>${pre(frameText(KEPT,COLS))}</div></div>`+
      gridTable(['열','최솟값 → 0','최댓값 → 1','계산식'],COLS.map((c,j)=>[`<b>${c}</b>`,fmtMax(MM[j].min),fmtMax(MM[j].max),`<span class="formula">(x − ${fmtMax(MM[j].min)}) / (${fmtMax(MM[j].max)} − ${fmtMax(MM[j].min)})</span>`]))},
  'normalize-boxplot':{no:'11',title:'상자그림으로 정규화 확인하기',desc:'정규화 전과 후의 분포를 상자그림 두 개로 나란히 비교합니다. <code>plt.subplot(1, 2, n)</code>은 그림 영역을 가로로 두 칸 나눈 뒤 n번째 칸을 선택합니다.',
    lines:['import matplotlib.pyplot as plt','plt.figure(figsize=(12, 6))','plt.subplot(1, 2, 1)','penguins_new.boxplot()','plt.subplot(1, 2, 2)','normal.boxplot()','plt.show()'],blanks:[],
    msg:'정규화 전후의 상자그림을 그렸습니다.',
    out:()=>`<div class="pair"><figure><figcaption>subplot(1, 2, 1) · penguins_new (정규화 전, 원래 단위)</figcaption>${vboxSVG(COLS.map((c,j)=>({label:SHORT[j],tip:c,vals:colVals(KEPT,j)})),{w:440,h:300,ml:46,label:'정규화 전 상자그림'})}</figure><figure><figcaption>subplot(1, 2, 2) · normal (정규화 후, 0 ~ 1)</figcaption>${vboxSVG(COLS.map((c,j)=>({label:SHORT[j],tip:c,vals:colVals(NORMAL,j)})),{w:440,h:300,label:'정규화 후 상자그림'})}</figure></div><p class="note">정규화 전에는 body_mass_g(수천 g)의 범위가 너무 커서 나머지 세 열의 상자가 바닥에 납작하게 붙어 보입니다. 정규화 후에는 네 열이 모두 0 ~ 1 사이에 놓여 같은 기준으로 비교할 수 있습니다.</p>`}
};
const ACT_IDS=Object.keys(ACTS);

/* ---------- 연습문제 ---------- */
const QUIZ={
  preprocess:{title:'실행 결과로 알 수 있는 사실',intro:'활동 02와 활동 03의 실행 결과를 보고 알맞은 답을 고르세요.',items:[
    {q:'활동 02의 결과에서 결측치가 가장 많은 열은 무엇인가요?',o:['bill_length_mm','bill_depth_mm','flipper_length_mm','body_mass_g'],a:4,e:`info()에서 body_mass_g만 ${colVals(RAW,3).length} non-null입니다.\n따라서 ${RAW.length} - ${colVals(RAW,3).length} = ${MISS_COUNT[3]}개의 값이 비어 있어 가장 많습니다.`},
    {q:'활동 02의 결과에서 자료형이 나머지 열과 다른 열은 무엇인가요?',o:['bill_length_mm','flipper_length_mm','body_mass_g','species'],a:4,e:'species의 자료형은 object이며, 펭귄의 종 이름을 문자로 기록한 범주형 자료입니다.\n나머지 네 열은 모두 float64(실수)입니다.'},
    {q:'활동 03의 결과에서 이상치가 있다고 의심할 수 있는 근거로 가장 알맞은 것은 무엇인가요?',o:['bill_length_mm의 min이 2.5, max가 115.4로 25%·75% 값과 크게 떨어져 있다','모든 열의 count가 150이다','species 열의 평균이 나오지 않는다','모든 열의 std가 0이다'],a:1,e:'bill_length_mm의 25% 값은 39.1, 75% 값은 49.4인데 최솟값 2.5와 최댓값 115.4는 이 범위에서 아주 멀리 떨어져 있습니다.\n펭귄의 부리 길이로 보기 어려우므로 잘못 기록된 값(이상치)일 가능성이 큽니다.'}]},
  missing:{title:'결측치 처리 코드와 결과 이해하기',intro:'활동 04~06의 코드와 실행 결과를 보고 알맞은 답을 고르세요.',items:[
    {q:'활동 04의 <code>penguins.isnull().sum()</code>은 무엇을 계산하나요?',o:['각 열의 평균','각 열의 결측치 개수','결측치가 있는 행의 개수','각 열의 전체 값 개수'],a:2,e:'isnull()은 값이 비어 있으면 True, 아니면 False로 바꿉니다.\nsum()은 True를 1로 세어 더하므로, 열마다 결측치 개수가 나옵니다.'},
    {q:'활동 04의 결과에서 비어 있는 칸은 모두 몇 개인가요?',o:['3개','4개',`${MISS_CELLS}개`,'150개'],a:3,e:`열별 결측치 ${MISS_COUNT.join(' + ')}를 모두 더하면 ${MISS_CELLS}칸입니다.\n한 행에 빈칸이 두 개 이상인 경우는 없으므로 결측치가 있는 행도 ${MISS_ROWS.length}개입니다.`},
    {q:'활동 06을 실행한 뒤 body_mass_g의 빈칸에 들어간 값은 무엇인가요?',o:['0','3975.0',m6(MEANS[3]),'12500.0'],a:3,e:`활동 06은 활동 05에서 구한 열별 평균 mean으로 빈칸을 채웁니다.\nbody_mass_g의 평균은 ${m6(MEANS[3])}입니다. 3975.0은 평균이 아니라 중앙값(50%)입니다.`}]},
  outlier:{title:'이상치 처리 코드와 결과 이해하기',intro:'활동 07~09의 코드와 실행 결과를 보고 알맞은 답을 고르세요.',items:[
    {q:'활동 08에서 body_mass_g의 <code>iqr = q3 - q1</code> 값은 얼마인가요?',o:[String(r4(LIM[3].iqr)),String(r4(LIM[3].q1)),String(r4(LIM[3].q3)),String(r4(LIM[3].upper))],a:1,e:`body_mass_g의 제1사분위수 q1은 ${r4(LIM[3].q1)}이고, 제3사분위수 q3는 ${r4(LIM[3].q3)}입니다.\n따라서 iqr = ${r4(LIM[3].q3)} - ${r4(LIM[3].q1)} = ${r4(LIM[3].iqr)}입니다.`},
    {q:'활동 08의 실행 결과에서 이상치로 찾은 값이 <u>아닌</u> 것은 무엇인가요?',o:['bill_length_mm 115.4','flipper_length_mm 421.0','body_mass_g 6775.0','body_mass_g 850.0'],a:3,e:`body_mass_g의 상한값은 ${r4(LIM[3].q3)} + 1.5 × ${r4(LIM[3].iqr)} = ${r4(LIM[3].upper)}이고, 하한값은 ${r4(LIM[3].lower)}입니다.\n6775.0은 이 범위 안에 있으므로 이상치가 아닙니다. 젠투펭귄은 원래 몸집이 큽니다.`},
    {q:'활동 09를 실행했을 때 <code>penguins_outliers.shape</code>의 결과는 무엇인가요?',o:['(150, 5)',`(${KEPT.length}, 5)`,'(150, 4)',`(${OUTS.length}, 5)`],a:2,e:`drop()으로 이상치가 있는 ${OUTS.length}개의 행을 지웠으므로 행은 ${RAW.length} - ${OUTS.length} = ${KEPT.length}개가 됩니다.\n열은 지우지 않았으므로 5개 그대로입니다.`}]},
  normalize:{title:'정규화 코드와 결과 이해하기',intro:'활동 10~11의 코드와 실행 결과를 보고 알맞은 답을 고르세요.',items:[
    {q:'활동 10에서 <code>MinMaxScaler</code>로 정규화한 값은 어느 범위에 있나요?',o:['-1부터 1 사이','0부터 1 사이','0부터 100 사이','평균 0, 표준편차 1'],a:2,e:'최소-최대 정규화는 각 열의 최솟값을 0, 최댓값을 1로 바꿉니다.\n그래서 활동 11의 오른쪽 상자그림은 모두 0부터 1 사이에 있습니다.'},
    {q:`정규화 전 body_mass_g의 최솟값 ${fmtMax(MM[3].min)}은 정규화 후 어떤 값이 되나요?`,o:['0','0.5','1',fmtMax(MM[3].min)],a:1,e:`정규화한 값은 (값 - 최솟값) ÷ (최댓값 - 최솟값)으로 계산합니다.\n${fmtMax(MM[3].min)}은 최솟값이므로 (${fmtMax(MM[3].min)} - ${fmtMax(MM[3].min)}) ÷ (${fmtMax(MM[3].max)} - ${fmtMax(MM[3].min)}) = 0이 됩니다.`},
    {q:'활동 11의 왼쪽 상자그림(정규화 전)에서 bill_depth_mm의 상자가 바닥에 납작하게 보이는 까닭은 무엇인가요?',o:['body_mass_g의 값이 수천 단위라 세로축 범위가 매우 넓어서','bill_depth_mm에 결측치가 가장 많아서','bill_depth_mm의 값이 모두 같아서','bill_depth_mm은 이미 정규화되어 있어서'],a:1,e:'한 그림에 네 열을 함께 그리면 세로축이 가장 큰 값(body_mass_g, 수천 g)에 맞춰집니다.\n그래서 20 mm 안팎인 bill_depth_mm은 거의 선처럼 보입니다. 정규화하면 단위가 다른 열도 같은 기준으로 비교할 수 있습니다.'}]}
};

/* ---------- 상태 ---------- */
const KEY='penguins-lab-v1';
const S={inputs:{},executed:new Set(),check:{},err:{},quiz:{},seen:new Set(),ui:{step:0,codeTab:'step',showMissing:false}};
try{const d=JSON.parse(localStorage.getItem(KEY)||'null');if(d){S.inputs=d.inputs||{};S.executed=new Set(d.executed||[]);S.quiz=d.quiz||{};S.seen=new Set(d.seen||[]);if(d.step>=0&&d.step<6)S.ui.step=d.step;S.ui.showMissing=!!d.showMissing}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify({inputs:S.inputs,executed:[...S.executed],quiz:S.quiz,seen:[...S.seen],step:S.ui.step,showMissing:S.ui.showMissing}))}catch(e){}}
const norm=v=>String(v||'').replace(/\s+/g,'').replace(/[‘’]/g,"'");
const inp=(id,k)=>(S.inputs[id]||[])[k]||'';
const blankOk=(id,k)=>ACTS[id].blanks[k].a.some(a=>norm(a)===norm(inp(id,k)));

/* ---------- 단계 정의 ---------- */
const fmtCellRaw=(r,j)=>r.v[j]===null?'':r.v[j].toFixed(1);
const fmtCellFilled=(r,j)=>r.filled[j]?m6(r.v[j]):r.v[j].toFixed(1);
const STEPS=[
{ title:'펭귄 데이터 살펴보기', short:'먼저 알아보기', acts:[],
  goal:'분석을 시작하기 전에 펭귄의 측정값이 CSV 파일에 어떻게 기록되어 있는지 확인해 보세요.',
  concept:'<p><b>펭귄(Penguins) 데이터</b>는 남극 파머 기지 근처에서 관찰한 펭귄의 몸 크기를 기록한 자료입니다. 이번 실습에서는 세 종(아델리 Adelie · 턱끈 Chinstrap · 젠투 Gentoo) 150마리의 측정값을 사용합니다. 측정한 값은 <b>부리 길이·부리 깊이·날개 길이·몸무게</b>입니다.</p>',
  results(){
    return `<div class="cards">
      ${card('펭귄을 관찰해 볼까요?',`<div class="intro-grid"><div style="display:grid;gap:12px"><p class="note" style="font-size:14.5px">펭귄은 종마다 몸집과 부리 모양이 다릅니다. 그래서 몸의 여러 부분을 재어 두면 데이터로 종을 비교할 수 있습니다. 이번 실습에서는 네 가지 측정값을 사용합니다.</p><div class="parts"><div class="m1"><b>부리 길이 bill_length</b><span>부리 끝에서 머리 쪽 시작점까지의 길이 (mm)</span></div><div class="m2"><b>부리 깊이 bill_depth</b><span>부리를 위아래로 잰 두께 (mm)</span></div><div class="m3"><b>날개 길이 flipper_length</b><span>헤엄칠 때 쓰는 날개(지느러미발)의 길이 (mm)</span></div><div class="m4"><b>몸무게 body_mass</b><span>펭귄의 몸무게 (g)</span></div></div></div>${PENG_SVG}</div>`,{wide:true})}
      ${card(`penguins.csv 전체 내용 <span style="font-weight:400;color:var(--muted);font-size:13px">${RAW.length}행 · 5열 · 결측 ${MISS_CELLS}칸</span>`,
        `<div class="seg" role="group" aria-label="결측치 표시"><button type="button" data-act="miss" data-v="0" aria-pressed="${!S.ui.showMissing}">있는 그대로</button><button type="button" data-act="miss" data-v="1" aria-pressed="${S.ui.showMissing}">결측치 표시</button></div>`+
        pengTable(RAW,(r,j)=>S.ui.showMissing&&r.v[j]===null?'c-miss':'',(r,j)=>r.v[j]===null?(S.ui.showMissing?'NaN':''):r.v[j].toFixed(1)),
        {wide:true,sub:`표 안에서 스크롤하면 ${RAW.length}개 관측값 전체를 확인할 수 있습니다. 빈칸이 어디에 있는지, 펭귄이라고 보기 어려운 값이 있는지 찾아보세요.`})}
      ${card('penguins.csv 한눈에',`<div class="facts">${fact('행',RAW.length,'관측값 (펭귄 한 마리 = 1행)')}${fact('열',5,'변수')}${fact('종',3,'범주')}${fact('확인할 결측치',MISS_CELLS,'수치형 네 열','hl')}</div>`,{wide:true})}
      ${card('CSV에서 사용하는 속성',gridTable(['속성','의미','값'],[['<b>bill_length_mm</b>','부리 길이','mm'],['<b>bill_depth_mm</b>','부리 깊이 (위아래 두께)','mm'],['<b>flipper_length_mm</b>','날개(지느러미발) 길이','mm'],['<b>body_mass_g</b>','몸무게','g'],['<b>species</b>','펭귄의 종 이름',SPECIES.map(s=>spCell(s)+` <small style="color:var(--muted)">${SP_KO[s]}</small>`).join(' &nbsp;')]],{left:1}),{wide:true,sub:'열 이름 끝의 _mm, _g가 단위를 나타냅니다.'})}
    </div>`;
  }},
{ title:'데이터 읽기', short:'데이터 읽기', acts:['intro'],
  goal:'CSV 파일을 불러오고 데이터의 앞부분을 확인합니다. 표의 열 이름과 값이 어떤 형태로 기록되어 있는지 살펴보세요.',
  concept:'<p><b>pd.read_csv()</b>는 CSV 파일을 행과 열로 된 표(<b>DataFrame</b>)로 읽어 옵니다. <b>head(n)</b>은 앞에서부터 n개 행만 보여 주어 데이터의 첫인상을 빠르게 확인할 수 있습니다.</p>'},
{ title:'데이터의 특성 분석', short:'특성 분석', acts:['info','describe'], quiz:'preprocess',
  goal:'분석을 시작하기 전에 데이터의 크기, 열의 자료형, 기초 통계량을 확인합니다. 아래 코드를 순서대로 완성하며 데이터의 상태를 읽어 봅니다.',
  concept:'<p><b>info()</b>는 열마다 비어 있지 않은 값의 개수와 자료형을 보여 줍니다. <b>describe()</b>는 수치형 열의 평균·표준편차·사분위수·최솟값·최댓값을 보여 줍니다.</p><p>Non-Null 개수가 행 수보다 작으면 <b>결측치</b>가 있다는 뜻입니다. 최솟값·최댓값이 사분위수와 너무 멀리 떨어져 있으면 <b>이상치</b>를 의심할 수 있습니다.</p>'},
{ title:'결측치 처리', short:'결측치', acts:['missing-check','mean','missing'], quiz:'missing',
  goal:'결측치는 값이 비어 있는 칸을 말합니다. 열마다 결측치 개수를 확인한 뒤 열별 평균값으로 빈칸을 채워 봅니다.',
  concept:`<p><b>isnull()</b>은 빈칸을 True로 바꾸고, <b>sum()</b>은 True를 1로 세어 열마다 결측치 개수를 구합니다. <b>fillna(값)</b>은 빈칸을 주어진 값으로 채웁니다.</p><p>여기서는 네 수치형 열의 빈칸 ${MISS_CELLS}개를 <b>각 열의 평균</b>으로 채웁니다.</p>`},
{ title:'이상치 처리', short:'이상치', acts:['outlier-boxplot','outlier','outlier-drop'], quiz:'outlier',
  goal:'이상치는 다른 값들과 동떨어진 값을 말합니다. 상자그림으로 분포를 살펴본 뒤, 사분위수와 IQR로 이상치를 찾아 제거합니다.',
  concept:'<p><b>IQR(사분위 범위)</b> <span class="formula">IQR = Q3 − Q1</span> 은 가운데 50% 데이터가 퍼진 폭입니다.</p><p><span class="formula">상한 = Q3 + 1.5 × IQR</span> &nbsp;<span class="formula">하한 = Q1 − 1.5 × IQR</span> 밖의 값을 이상치로 봅니다. 상자그림의 수염 밖 동그라미가 바로 이 이상치입니다. 네 열 중 <b>하나라도</b> 이상치가 있는 행을 지웁니다.</p>'},
{ title:'정규화', short:'정규화', acts:['normalize','normalize-boxplot'], quiz:'normalize',
  goal:'열마다 값의 범위가 다르면 서로 비교하기 어렵습니다. 최솟값을 0, 최댓값을 1로 바꾸는 최소-최대 정규화를 적용합니다.',
  concept:'<p><b>최소-최대 정규화</b>: <span class="formula">x\' = (x − min) / (max − min)</span></p><p>가장 작은 값은 0, 가장 큰 값은 1이 되고 나머지는 그 사이에 비율대로 놓입니다. 이상치를 제거한 <b>penguins_outliers</b>의 네 수치형 열에 적용합니다. 몸무게(g)와 부리 깊이(mm)처럼 단위와 크기가 크게 다른 열을 같은 기준으로 비교할 수 있게 됩니다.</p>'}
];
const GROUPS={0:'시작',1:'01 데이터의 특성 분석',3:'02 데이터의 전처리'};
const stepDone=i=>i===0?S.seen.has(0):STEPS[i].acts.every(a=>S.executed.has(a));

/* ---------- 코드 문자열 ---------- */
function hl(src){
  const re=/(#[^\n]*)|('(?:[^'\\\n]|\\.)*'|"(?:[^"\\\n]|\\.)*")|\b(import|from|as|for|in|if|else|def|return|True|False|None|and|or|not|lambda)\b|\b(\d+(?:\.\d+)?)\b|\b([A-Za-z_]\w*)(?=\()/g;
  let out='',last=0,m;
  while((m=re.exec(src))){out+=esc(src.slice(last,m.index));const t=esc(m[0]);
    out+=m[1]?`<span class="c">${t}</span>`:m[2]?`<span class="s">${t}</span>`:m[3]?`<span class="k">${t}</span>`:m[4]?`<span class="n">${t}</span>`:`<span class="f">${t}</span>`;last=re.lastIndex}
  return out+esc(src.slice(last));
}
const GAP='\u0001';
function actCode(id){return ACTS[id].lines.map(l=>l.replace(/\{(\d)\}/g,(_,k)=>inp(id,+k).trim()||GAP+CIRC[k]+GAP)).join('\n')}
function stepCode(i){return STEPS[i].acts.map(id=>`# 활동 ${ACTS[id].no} · ${ACTS[id].title}\n${actCode(id)}`).join('\n\n')}
function fullCode(){return STEPS.slice(1).map((s,i)=>`# ${'='.repeat(8)} ${i+1}. ${s.title} ${'='.repeat(8)}\n${stepCode(i+1)}`).join('\n\n\n')}
const codeText=()=>S.ui.step===0&&S.ui.codeTab==='step'?PENG_CSV:(S.ui.codeTab==='all'?fullCode():stepCode(S.ui.step));
function codeHTML(){
  if(S.ui.step===0&&S.ui.codeTab==='step')return esc(PENG_CSV);
  return hl(codeText()).replace(new RegExp(GAP+'(.)'+GAP,'g'),'<span class="gap">$1 빈칸</span>');
}

/* ---------- 렌더링 ---------- */
function cellHTML(id){
  const a=ACTS[id],chk=S.check[id];
  return a.lines.map((l,n)=>`<div class="cl"><span class="ln">${n+1}</span><span>${l.split(/(\{\d\})/).map(p=>{const m=p.match(/^\{(\d)\}$/);if(!m)return hl(p);const k=+m[1],b=a.blanks[k],v=inp(id,k);
    const cls=chk===undefined?'':(blankOk(id,k)?'ok':'bad');
    return `<input class="blank ${cls}" data-id="${id}" data-k="${k}" value="${esc(v)}" placeholder="${CIRC[k]}" style="width:${Math.max(4,b.a[0].length+1.5)}ch" aria-label="빈칸 ${CIRC[k]}" autocomplete="off" autocapitalize="off" spellcheck="false">`}).join('')}</span></div>`).join('');
}
function actCard(id){
  const a=ACTS[id],done=S.executed.has(id),chk=S.check[id],err=S.err[id];
  let out='';
  if(err)out=`<div class="out"><div class="out-h err">실행 결과 · 오류</div>${pre(err,'err')}</div>`;
  else if(done)out=`<div class="out"><div class="out-h">실행 결과</div>${a.out()}</div>`;
  return `<section class="card wide act" id="act-${id}">
    <div class="act-top"><span class="act-no">활동 ${a.no}</span><span class="tag ${a.fill?'fill':''}">${a.fill?'코드 완성':'소스 코드'}</span>${done?'<span class="act-state">✓ 실행 완료</span>':''}</div>
    <div class="card-h"><h3>${a.title}</h3><p>${a.desc}</p></div>
    <div class="cell">${cellHTML(id)}</div>
    <div class="act-actions"><button type="button" class="btn primary" data-act="run" data-id="${id}">▶ ${done?'다시 실행':'실행'}</button>${a.blanks.length?`<button type="button" class="btn ${chk===true?'ok':''}" data-act="check" data-id="${id}">${chk===true?'완료됨 ✓':'정답 확인'}</button>`:''}</div>
    ${chk!==undefined?`<p class="fb ${chk?'good':'bad'}">${esc(chk?a.msg:'아직 정답과 달라요.\n빨간 칸에 입력한 내용을 다시 확인해 보세요.')}</p>`:''}
    ${out}${a.after?a.after():''}
  </section>`;
}
function quizCard(key){
  const Q=QUIZ[key];
  return card(Q.title,Q.items.map((it,n)=>{const qid=key+n,p=S.quiz[qid],ok=p===it.a;
    return `<div class="quiz-item"><p class="q"><b>${n+1}.</b>${it.q}</p><div class="opts">${it.o.map((o,k)=>`<button type="button" class="opt ${p===k+1?(ok?'right':'wrong'):''}" data-act="quiz" data-q="${qid}" data-v="${k+1}">${CIRC[k]} ${esc(o)}</button>`).join('')}</div>${p?`<p class="fb ${ok?'good':'bad'}">${esc(ok?'정답입니다.\n'+it.e:'정답이 아니에요.\n실행 결과를 다시 확인하고 한 번 더 골라 보세요.')}</p>`:''}</div>`}).join(''),
    {wide:true,cls:'quiz',pre:'<p class="eyebrow">연습문제</p>',sub:Q.intro});
}
function stepResults(i){
  const s=STEPS[i];
  if(s.results)return s.results();
  let h='<div class="cards">';
  s.acts.forEach(id=>{
    h+=actCard(id);
    if(id==='missing'&&S.executed.has('missing'))h+=card(`평균값으로 채운 penguins 데이터 <span style="font-weight:400;color:var(--muted);font-size:13px">${RAW.length}행 · 5열 · 결측 0칸</span>`,
      pengTable(FILLED,(r,j)=>r.filled[j]?'c-imp':'',fmtCellFilled),
      {wide:true,sub:`<span class="key"><i style="background:var(--imp-bg);outline:1px solid var(--imp-ink)"></i>비어 있던 칸을 그 열의 평균값으로 채운 칸</span> (${MISS_ROWS.map(r=>r.i).join(', ')}번 행)`});
    if(id==='outlier'&&S.executed.has('outlier')){
      h+=card(`열마다 본 분포와 이상치 <span style="font-weight:400;color:var(--muted);font-size:13px">이상치가 있는 행 ${OUTS.length}개</span>`,
        `<div class="strips">${COLS.map((c,j)=>`<figure><figcaption>${c} · ${KO[j]} — 상한선 ${r4(LIM[j].upper)} · 하한선 ${r4(LIM[j].lower)} · 이상치 ${OUT_N[j]}개</figcaption>${stripChart(j)}</figure>`).join('')}</div>`+
        guide('상한선·하한선 계산',dl(COLS.map((c,j)=>[c,`상한선 = ${r4(LIM[j].q3)} + 1.5 × ${r4(LIM[j].iqr)} = ${r4(LIM[j].upper)}<br>하한선 = ${r4(LIM[j].q1)} - 1.5 × ${r4(LIM[j].iqr)} = ${r4(LIM[j].lower)}<br>이상치: ${FILLED.filter(r=>isOutCell(r.v[j],j)).map(r=>`${tf(r.v[j])} (${r.i}번)`).join(', ')||'없음'}`]))),
        {wide:true,sub:'열마다 값 150개를 점으로 쌓아 올리고, 그 위에 같은 데이터의 상자그림을 그렸습니다. 빨간 점선 바깥, 빨간 영역에 있는 값이 이상치입니다.'});
      h+=card('penguins 이상치 확인하기',pengTable(FILLED,(r,j)=>isOutCell(r.v[j],j)?'c-out':r.filled[j]?'c-imp':'',fmtCellFilled),
        {wide:true,sub:`<span class="key"><i style="background:var(--out-bg);outline:1px solid var(--out-ink)"></i>그 열의 상한값보다 크거나 하한값보다 작은 이상치</span> 표 안에서 스크롤하면 ${RAW.length}개 관측값 전체를 확인할 수 있습니다.`});
    }
  });
  if(s.quiz)h+=quizCard(s.quiz);
  return h+'</div>';
}
function renderRail(){
  $('#rail').innerHTML=STEPS.map((s,i)=>`${GROUPS[i]?`<li class="group">${GROUPS[i]}</li>`:''}<li><button type="button" data-act="go" data-step="${i}" class="${stepDone(i)&&i!==S.ui.step?'done':''}" ${i===S.ui.step?'aria-current="step"':''}><span class="num">${stepDone(i)&&i!==S.ui.step?'✓':i===0?'·':i}</span><span>${s.short}</span></button></li>`).join('');
  const n=S.executed.size,pct=Math.round(n/ACT_IDS.length*100);
  $('#prog').innerHTML=`<div class="prog-top"><span>학습 진행률</span><b>${pct}%</b></div><div class="bar"><i style="width:${pct}%"></i></div><small>${ACT_IDS.length}개 활동 중 ${n}개 실행</small>
    <div class="tools"><button type="button" class="btn" data-act="runall">▶ 위에서부터 모두 실행</button><button type="button" class="btn" data-act="fill">🧑‍🏫 이 단계 정답 채우기</button><button type="button" class="btn" data-act="reset">↻ 다시 시작</button></div>`;
}
function renderFlow(){
  const st=S.ui.step,x=id=>S.executed.has(id);
  const miss=x('missing'),out=x('outlier-drop'),nz=x('normalize'),info=x('info')&&x('describe');
  const stages=[
    {to:0,on:st<=1,d:x('intro'),l:'원본 penguins.csv',b:`${RAW.length}행 × 5열`,s:`결측 ${MISS_CELLS}칸 · 종 3개`},
    {to:2,on:st===2,d:info,l:'특성 분석',b:info?'수치형 4 · 범주형 1':'실행 전',s:'info() · describe()'},
    {to:3,on:st===3,d:miss,l:'결측치 처리',b:miss?'결측 0칸':`결측 ${MISS_CELLS}칸`,s:miss?'열별 평균으로 채움':'fillna() 실행 전'},
    {to:4,on:st===4,d:out,l:'이상치 처리',b:out?`${KEPT.length}행`:`${RAW.length}행`,s:out?`이상치 ${OUTS.length}행 제거`:'IQR 탐지 전'},
    {to:5,on:st===5,d:nz,l:'정규화',b:nz?'0 ~ 1':'원래 단위(mm, g)',s:nz?'4개 열 Min-Max':'MinMaxScaler 실행 전'}
  ];
  $('#flow').innerHTML=stages.map(g=>`<li><button type="button" class="stage ${g.on?'on':''}" data-act="go" data-step="${g.to}"><span class="st-l">${g.l}${g.d?'<i>✓</i>':''}</span><b class="${g.d||g.to===0?'':'wait'}">${g.b}</b><small>${g.s}</small></button></li>`).join('');
}
function renderStep(){
  const i=S.ui.step,s=STEPS[i];
  S.seen.add(i);
  $('#main').innerHTML=`<header class="step-h"><p class="eyebrow">${i===0?'먼저 알아보기':`STEP ${i} / ${STEPS.length-1}`}</p><h2>${s.title}</h2><p class="goal">${br(s.goal)}</p></header>
  <div class="body">
    <div class="left">
      <div class="concept">${br(s.concept)}</div>
      <div id="results"></div>
      <nav class="pager">${i>0?`<button class="btn" type="button" data-act="go" data-step="${i-1}">← ${STEPS[i-1].short}</button>`:'<span></span>'}${i<STEPS.length-1?`<button class="btn primary" type="button" data-act="go" data-step="${i+1}">${STEPS[i+1].short} →</button>`:'<span></span>'}</nav>
    </div>
    <aside class="code" aria-label="파이썬 코드">
      <div class="code-h"><div class="code-tabs"><button type="button" data-act="tab" data-v="step" aria-pressed="${S.ui.codeTab==='step'}">${i===0?'penguins.csv':'이 단계 코드'}</button><button type="button" data-act="tab" data-v="all" aria-pressed="${S.ui.codeTab==='all'}">전체 노트북</button></div><button class="btn" type="button" data-act="copy">복사</button></div>
      <div><pre id="code"></pre><p class="code-foot" id="code-foot"></p></div>
    </aside>
  </div>`;
  refresh();save();
}
function renderCode(){
  $('#code').innerHTML=codeHTML();
  const csv=S.ui.step===0&&S.ui.codeTab==='step';
  $('#code-foot').innerHTML=csv?'복사해서 메모장에 붙여 넣고 penguins.csv(UTF-8)로 저장하면 Colab이나 Jupyter에서 그대로 쓸 수 있습니다.':'빈칸에 입력한 내용이 코드에 바로 반영됩니다.<br>노란 칸이 아직 비어 있는 빈칸입니다.';
}
// 문장마다 줄을 바꿔 한 줄에 한 문장씩 보이게 합니다 (…다. / …요. / …요? 뒤의 공백 → 줄바꿈)
const br=h=>h.replace(/(다\.|요\.|요\?) +/g,'$1<br>');
function refresh(){renderRail();renderFlow();$('#results').innerHTML=br(stepResults(S.ui.step));renderCode()}

/* ---------- 실행·채점 ---------- */
function run(id){
  const a=ACTS[id];delete S.err[id];
  for(let k=0;k<a.blanks.length;k++){
    const v=inp(id,k).trim(),ln=a.lines.findIndex(l=>l.includes(`{${k}}`))+1;
    const src=a.lines[ln-1].replace(/\{(\d)\}/g,(_,j)=>inp(id,+j).trim());
    if(!v){S.err[id]=`  File "<cell>", line ${ln}\n    ${src}\n\nSyntaxError: invalid syntax\n\n# 빈칸 ${CIRC[k]}이(가) 비어 있어요.`;S.executed.delete(id);return false}
    if(!blankOk(id,k)){const e=a.blanks[k].err;
      S.err[id]=e?`Traceback (most recent call last):\n  File "<cell>", line ${ln}, in <module>\n    ${src}\n${e[0]}: ${e[1].replace('{v}',v)}`:`# 실행은 되었지만 기대한 결과와 다르게 나옵니다.\n# 빈칸 ${CIRC[k]}에 넣은 '${v}'을(를) 다시 확인해 보세요.`;
      S.executed.delete(id);return false}
  }
  S.executed.add(id);return true;
}
function check(id){S.check[id]=ACTS[id].blanks.every((_,k)=>blankOk(id,k))}

/* ---------- 이벤트 ---------- */
document.addEventListener('input',e=>{
  const el=e.target;if(!el.classList.contains('blank'))return;
  const id=el.dataset.id,k=+el.dataset.k;
  (S.inputs[id]=S.inputs[id]||[])[k]=el.value;
  if(S.check[id]!==undefined){delete S.check[id];const c=el.closest('.act');c.querySelectorAll('input.blank').forEach(x=>x.classList.remove('ok','bad'));c.querySelector('.fb')?.remove();const b=c.querySelector('[data-act="check"]');if(b){b.textContent='정답 확인';b.classList.remove('ok')}}
  renderCode();save();
});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.classList.contains('blank')){e.preventDefault();e.target.closest('.act').querySelector('[data-act="run"]').click()}});
document.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  const act=b.dataset.act;
  if(act==='go'){S.ui.step=+b.dataset.step;renderStep();$('.step-h').scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}
  else if(act==='run'){run(b.dataset.id);refresh();save();document.getElementById('act-'+b.dataset.id)?.querySelector('.out')?.scrollIntoView({block:'nearest',behavior:'smooth'})}
  else if(act==='check'){check(b.dataset.id);refresh()}
  else if(act==='quiz'){S.quiz[b.dataset.q]=+b.dataset.v;refresh();save()}
  else if(act==='miss'){S.ui.showMissing=b.dataset.v==='1';refresh();save()}
  else if(act==='runall'){ACT_IDS.forEach(run);refresh();save()}
  else if(act==='fill'){STEPS[S.ui.step].acts.forEach(id=>{S.inputs[id]=ACTS[id].blanks.map(x=>x.a[0]);delete S.check[id]});refresh();save()}
  else if(act==='reset'){S.inputs={};S.executed.clear();S.check={};S.err={};S.quiz={};refresh();save()}
  else if(act==='tab'){S.ui.codeTab=b.dataset.v;b.parentElement.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderCode()}
  else if(act==='copy'){
    const txt=codeText().replace(new RegExp(GAP+'(.)'+GAP,'g'),'___');
    const done=()=>{b.textContent='복사됨';setTimeout(()=>b.textContent='복사',1400)};
    const fallback=()=>{const r=document.createRange();r.selectNodeContents($('#code'));const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='선택됨 → Ctrl+C'};
    try{navigator.clipboard.writeText(txt).then(done,fallback)}catch(_){fallback()}
  }
});
const tip=$('#tip');
document.addEventListener('pointermove',e=>{
  const t=e.target.closest&&e.target.closest('[data-tip]');
  if(!t){tip.hidden=true;return}
  tip.textContent=t.getAttribute('data-tip');tip.hidden=false;
  const r=tip.getBoundingClientRect();let x=e.clientX+14,y=e.clientY+14;
  if(x+r.width>innerWidth-8)x=e.clientX-r.width-14;if(y+r.height>innerHeight-8)y=e.clientY-r.height-14;
  tip.style.left=Math.max(8,x)+'px';tip.style.top=Math.max(8,y)+'px';
});
document.addEventListener('pointerleave',()=>tip.hidden=true);

renderStep();
