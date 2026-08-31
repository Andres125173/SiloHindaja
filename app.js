
const CRITERIA=[{"type":"Maisisilo","part":"A","name":"Kuivaine","unit":"%","w":0.15,"a1":32.0,"a2":38.0,"b1":30.0,"b2":40.0,"c1":27.0,"c2":43.0,"critical":false,"limit":"4 p 32–38; 3 p 30–40; 2 p 27–43","comment":"Liiga märg silo suurendab mahlaeralduse ja intensiivse käärimise riski; liiga kuiv silo võib olla raskesti tihendatav."},{"type":"Maisisilo","part":"A","name":"Toorproteiin","unit":"% KA","w":0.1,"a1":8.5,"a2":999.0,"b1":7.5,"b2":999.0,"c1":6.5,"c2":999.0,"critical":false,"limit":"4 p ≥8,5; 3 p ≥7,5; 2 p ≥6,5","comment":"Madal proteiin vähendab silo valgupanust ning vajab ratsioonis korrigeerimist."},{"type":"Maisisilo","part":"A","name":"Toortuhk","unit":"% KA","w":0.1,"a1":-999.0,"a2":4.5,"b1":-999.0,"b2":5.5,"c1":-999.0,"c2":7.0,"critical":false,"limit":"4 p ≤4,5; 3 p ≤5,5; 2 p ≤7,0","comment":"Kõrge tuhk võib viidata mullasaastele ja vähendab orgaanilise aine osakaalu."},{"type":"Maisisilo","part":"A","name":"Toorkiud","unit":"% KA","w":0.05,"a1":-999.0,"a2":20.0,"b1":-999.0,"b2":25.0,"c1":-999.0,"c2":30.0,"critical":false,"limit":"4 p ≤20; 3 p ≤25; 2 p ≤30","comment":"Kõrge toorkiud viitab küpsemale või väiksema teraosaga materjalile."},{"type":"Maisisilo","part":"A","name":"Toorrasv","unit":"% KA","w":0.05,"a1":2.8,"a2":3.8,"b1":2.5,"b2":4.2,"c1":2.0,"c2":5.0,"critical":false,"limit":"4 p 2,8–3,8; 3 p 2,5–4,2; 2 p 2,0–5,0","comment":"Tõlgenda koos kogu ratsiooni rasvasisaldusega."},{"type":"Maisisilo","part":"A","name":"Tärklis","unit":"g/kg KA","w":0.2,"a1":350.0,"a2":999.0,"b1":300.0,"b2":999.0,"c1":250.0,"c2":999.0,"critical":false,"limit":"4 p ≥350; 3 p ≥300; 2 p ≥250","comment":"Madal tärklis võib viidata vähesele teraosale; tegelikku väärtust täpsustavad IVSD7 ja CSPS."},{"type":"Maisisilo","part":"A","name":"NDF","unit":"% KA","w":0.15,"a1":-999.0,"a2":38.0,"b1":-999.0,"b2":43.0,"c1":-999.0,"c2":50.0,"critical":false,"limit":"4 p ≤38; 3 p ≤43; 2 p ≤50","comment":"Kõrget NDF-i tuleb alati hinnata koos NDFD ja uNDF240-ga."},{"type":"Maisisilo","part":"A","name":"ADF","unit":"% KA","w":0.1,"a1":-999.0,"a2":24.0,"b1":-999.0,"b2":28.0,"c1":-999.0,"c2":32.0,"critical":false,"limit":"4 p ≤24; 3 p ≤28; 2 p ≤32","comment":"Kõrge ADF viitab tavaliselt väiksemale seeduvusele."},{"type":"Maisisilo","part":"A","name":"Metaboliseeruv energia","unit":"MJ/kg KA","w":0.05,"a1":11.3,"a2":99.0,"b1":10.8,"b2":99.0,"c1":10.2,"c2":99.0,"critical":false,"limit":"4 p ≥11,3; 3 p ≥10,8; 2 p ≥10,2","comment":"Madal ME piirab silo energiapanust ja võib vähendada toodangupotentsiaali."},{"type":"Maisisilo","part":"A","name":"Orgaanilise aine seeduvus","unit":"%","w":0.05,"a1":72.0,"a2":100.0,"b1":68.0,"b2":100.0,"c1":64.0,"c2":100.0,"critical":false,"limit":"4 p ≥72; 3 p ≥68; 2 p ≥64","comment":"Madal seeduvus kinnitab väiksemat energiasisaldust."},{"type":"Maisisilo","part":"B","name":"NDFD30","unit":"% NDF-ist","w":0.15,"a1":60.0,"a2":100.0,"b1":55.0,"b2":100.0,"c1":48.0,"c2":100.0,"critical":true,"limit":"4 p ≥60; 3 p ≥55; 2 p ≥48","comment":"Madal NDFD võib piirata söömust ja piimatoodangut."},{"type":"Maisisilo","part":"B","name":"NDFD48","unit":"% NDF-ist","w":0.25,"a1":65.0,"a2":100.0,"b1":58.0,"b2":100.0,"c1":50.0,"c2":100.0,"critical":true,"limit":"4 p ≥65; 3 p ≥58; 2 p ≥50","comment":"NDFD48 on üks olulisemaid silo tegeliku kiuväärtuse näitajaid."},{"type":"Maisisilo","part":"B","name":"uNDF240","unit":"% KA","w":0.25,"a1":-999.0,"a2":8.0,"b1":-999.0,"b2":10.0,"c1":-999.0,"c2":13.0,"critical":true,"limit":"4 p ≤8; 3 p ≤10; 2 p ≤13","comment":"Kõrge uNDF240 suurendab vatsatäidet ja võib piirata kuivaine söömust."},{"type":"Maisisilo","part":"B","name":"IVSD7","unit":"% tärklisest","w":0.15,"a1":85.0,"a2":100.0,"b1":75.0,"b2":100.0,"c1":65.0,"c2":100.0,"critical":true,"limit":"4 p ≥85; 3 p ≥75; 2 p ≥65","comment":"Madal IVSD7 näitab tärklise aeglasemat kättesaadavust."},{"type":"Maisisilo","part":"B","name":"CSPS/KPS","unit":"%","w":0.15,"a1":70.0,"a2":100.0,"b1":60.0,"b2":100.0,"c1":50.0,"c2":100.0,"critical":false,"limit":"4 p ≥70; 3 p ≥60; 2 p ≥50","comment":"Madal CSPS viitab ebapiisavalt purustatud maisiteradele."},{"type":"Maisisilo","part":"B","name":"Ligniin","unit":"% KA","w":0.05,"a1":-999.0,"a2":2.5,"b1":-999.0,"b2":3.0,"c1":-999.0,"c2":4.0,"critical":false,"limit":"4 p ≤2,5; 3 p ≤3,0; 2 p ≤4,0","comment":"Kõrge ligniin piirab kiu seeduvust."},{"type":"Maisisilo","part":"C","name":"pH","unit":"pH","w":0.15,"a1":3.7,"a2":4.0,"b1":3.6,"b2":4.2,"c1":3.4,"c2":4.4,"critical":false,"limit":"4 p 3,7–4,0; 3 p 3,6–4,2; 2 p 3,4–4,4","comment":"pH-d tuleb tõlgendada koos kuivaine ja hapetega."},{"type":"Maisisilo","part":"C","name":"Piimhape","unit":"g/kg KA","w":0.1,"a1":40.0,"a2":70.0,"b1":30.0,"b2":80.0,"c1":20.0,"c2":100.0,"critical":false,"limit":"4 p 40–70; 3 p 30–80; 2 p 20–100","comment":"Väga madal või väga kõrge piimhape viitab ebatüüpilisele fermentatsioonile."},{"type":"Maisisilo","part":"C","name":"Äädikhape","unit":"g/kg KA","w":0.1,"a1":10.0,"a2":30.0,"b1":5.0,"b2":35.0,"c1":0.0,"c2":50.0,"critical":true,"limit":"4 p 10–30; 3 p 5–35; 2 p 0–50","comment":"Väga kõrge äädikhape võib vähendada maitstavust ja söömust."},{"type":"Maisisilo","part":"C","name":"Propioonhape","unit":"g/kg KA","w":0.05,"a1":-999.0,"a2":5.0,"b1":-999.0,"b2":10.0,"c1":-999.0,"c2":15.0,"critical":false,"limit":"4 p ≤5; 3 p ≤10; 2 p ≤15","comment":"Kõrge propioonhape vajab ühiku ja sekundaarse fermentatsiooni kontrolli."},{"type":"Maisisilo","part":"C","name":"Võihape","unit":"g/kg KA","w":0.2,"a1":-999.0,"a2":1.0,"b1":-999.0,"b2":2.0,"c1":-999.0,"c2":5.0,"critical":true,"limit":"4 p ≤1; 3 p ≤2; 2 p ≤5","comment":"Kõrge võihape viitab klostriidse käärimise riskile."},{"type":"Maisisilo","part":"C","name":"Etanool","unit":"g/kg KA","w":0.1,"a1":-999.0,"a2":10.0,"b1":-999.0,"b2":20.0,"c1":-999.0,"c2":30.0,"critical":true,"limit":"4 p ≤10; 3 p ≤20; 2 p ≤30","comment":"Kõrge etanool viitab pärmide aktiivsusele ja energiakaole."},{"type":"Maisisilo","part":"C","name":"NH3-N kogu N-st","unit":"%","w":0.15,"a1":-999.0,"a2":7.0,"b1":-999.0,"b2":10.0,"c1":-999.0,"c2":15.0,"critical":true,"limit":"4 p ≤7; 3 p ≤10; 2 p ≤15","comment":"Kõrge NH3-N näitab tugevat proteolüüsi."},{"type":"Maisisilo","part":"C","name":"Hapete summa","unit":"g/kg KA","w":0.1,"a1":50.0,"a2":90.0,"b1":40.0,"b2":100.0,"c1":30.0,"c2":120.0,"critical":true,"limit":"4 p 50–90; 3 p 40–100; 2 p 30–120","comment":"Väga suur hapete summa viitab suurtele käärimiskadudele."},{"type":"Maisisilo","part":"C","name":"Piimhape : äädikhape","unit":"suhe","w":0.05,"a1":2.0,"a2":4.0,"b1":1.5,"b2":4.0,"c1":1.0,"c2":999.0,"critical":false,"limit":"4 p 2–4; 3 p 1,5–4; 2 p ≥1 või >4","comment":"Väike suhe näitab äädikhappe domineerimist."},{"type":"Rohusilo","part":"A","name":"Kuivaine","unit":"%","w":0.15,"a1":30.0,"a2":40.0,"b1":25.0,"b2":45.0,"c1":20.0,"c2":50.0,"critical":false,"limit":"4 p 30–40; 3 p 25–45; 2 p 20–50","comment":"Kuivaine mõjutab tihendamist, käärimist ja silo säilivust."},{"type":"Rohusilo","part":"A","name":"Toorproteiin","unit":"% KA","w":0.2,"a1":14.0,"a2":18.0,"b1":12.0,"b2":20.0,"c1":10.0,"c2":22.0,"critical":false,"limit":"4 p 14–18; 3 p 12–20; 2 p 10–22","comment":"Proteiini tuleb tõlgendada koos proteiinifraktsioonide ja NH3-N-ga."},{"type":"Rohusilo","part":"A","name":"Toortuhk","unit":"% KA","w":0.1,"a1":-999.0,"a2":9.0,"b1":-999.0,"b2":10.0,"c1":-999.0,"c2":12.0,"critical":false,"limit":"4 p ≤9; 3 p ≤10; 2 p ≤12","comment":"Kõrge tuhk võib viidata mullasaastele."},{"type":"Rohusilo","part":"A","name":"Toorkiud","unit":"% KA","w":0.1,"a1":-999.0,"a2":24.0,"b1":-999.0,"b2":26.0,"c1":-999.0,"c2":30.0,"critical":false,"limit":"4 p ≤24; 3 p ≤26; 2 p ≤30","comment":"Kõrge toorkiud viitab hilisemale koristusele."},{"type":"Rohusilo","part":"A","name":"Toorrasv","unit":"% KA","w":0.05,"a1":3.0,"a2":5.0,"b1":2.5,"b2":6.0,"c1":2.0,"c2":7.0,"critical":false,"limit":"4 p 3–5; 3 p 2,5–6; 2 p 2–7","comment":"Tõlgenda koos kogu ratsiooni rasvaga."},{"type":"Rohusilo","part":"A","name":"NDF","unit":"% KA","w":0.15,"a1":-999.0,"a2":42.0,"b1":-999.0,"b2":50.0,"c1":-999.0,"c2":58.0,"critical":false,"limit":"4 p ≤42; 3 p ≤50; 2 p ≤58","comment":"Vaata NDF-i alati koos NDFD ja uNDF240-ga."},{"type":"Rohusilo","part":"A","name":"ADF","unit":"% KA","w":0.1,"a1":-999.0,"a2":28.0,"b1":-999.0,"b2":33.0,"c1":-999.0,"c2":38.0,"critical":false,"limit":"4 p ≤28; 3 p ≤33; 2 p ≤38","comment":"Kõrge ADF viitab väiksemale seeduvusele."},{"type":"Rohusilo","part":"A","name":"Metaboliseeruv energia","unit":"MJ/kg KA","w":0.1,"a1":10.5,"a2":99.0,"b1":9.8,"b2":99.0,"c1":9.2,"c2":99.0,"critical":false,"limit":"4 p ≥10,5; 3 p ≥9,8; 2 p ≥9,2","comment":"Madal ME võib piirata toodangupotentsiaali."},{"type":"Rohusilo","part":"A","name":"Orgaanilise aine seeduvus","unit":"%","w":0.05,"a1":72.0,"a2":100.0,"b1":68.0,"b2":100.0,"c1":64.0,"c2":100.0,"critical":false,"limit":"4 p ≥72; 3 p ≥68; 2 p ≥64","comment":"Madal seeduvus vähendab energiasisaldust."},{"type":"Rohusilo","part":"B","name":"NDFD30","unit":"% NDF-ist","w":0.25,"a1":65.0,"a2":100.0,"b1":58.0,"b2":100.0,"c1":50.0,"c2":100.0,"critical":true,"limit":"4 p ≥65; 3 p ≥58; 2 p ≥50","comment":"Madal NDFD võib piirata söömust."},{"type":"Rohusilo","part":"B","name":"NDFD48","unit":"% NDF-ist","w":0.25,"a1":68.0,"a2":100.0,"b1":60.0,"b2":100.0,"c1":52.0,"c2":100.0,"critical":true,"limit":"4 p ≥68; 3 p ≥60; 2 p ≥52","comment":"NDFD48 täpsustab kiu praktilist väärtust."},{"type":"Rohusilo","part":"B","name":"uNDF240","unit":"% KA","w":0.3,"a1":-999.0,"a2":9.0,"b1":-999.0,"b2":12.0,"c1":-999.0,"c2":15.0,"critical":true,"limit":"4 p ≤9; 3 p ≤12; 2 p ≤15","comment":"Kõrge uNDF240 võib piirata kuivaine söömust."},{"type":"Rohusilo","part":"B","name":"Ligniin","unit":"% KA","w":0.2,"a1":-999.0,"a2":4.0,"b1":-999.0,"b2":5.0,"c1":-999.0,"c2":6.0,"critical":false,"limit":"4 p ≤4; 3 p ≤5; 2 p ≤6","comment":"Kõrge ligniin piirab kiuseeduvust."},{"type":"Rohusilo","part":"C","name":"pH","unit":"pH","w":0.15,"a1":4.0,"a2":4.5,"b1":3.8,"b2":4.8,"c1":3.6,"c2":5.0,"critical":false,"limit":"4 p 4,0–4,5; 3 p 3,8–4,8; 2 p 3,6–5,0","comment":"pH-d tuleb hinnata koos kuivainega."},{"type":"Rohusilo","part":"C","name":"Piimhape","unit":"g/kg KA","w":0.1,"a1":20.0,"a2":70.0,"b1":10.0,"b2":100.0,"c1":5.0,"c2":120.0,"critical":false,"limit":"4 p 20–70; 3 p 10–100; 2 p 5–120","comment":"Ebatavaline piimhape vajab teiste fermentatsiooninäitajate kontrolli."},{"type":"Rohusilo","part":"C","name":"Äädikhape","unit":"g/kg KA","w":0.1,"a1":5.0,"a2":20.0,"b1":3.0,"b2":25.0,"c1":0.0,"c2":40.0,"critical":true,"limit":"4 p 5–20; 3 p 3–25; 2 p 0–40","comment":"Kõrge äädikhape võib vähendada maitstavust."},{"type":"Rohusilo","part":"C","name":"Propioonhape","unit":"g/kg KA","w":0.05,"a1":-999.0,"a2":1.0,"b1":-999.0,"b2":3.0,"c1":-999.0,"c2":6.0,"critical":false,"limit":"4 p ≤1; 3 p ≤3; 2 p ≤6","comment":"Kõrge propioonhape vajab kontrolli."},{"type":"Rohusilo","part":"C","name":"Võihape","unit":"g/kg KA","w":0.2,"a1":-999.0,"a2":0.5,"b1":-999.0,"b2":2.0,"c1":-999.0,"c2":5.0,"critical":true,"limit":"4 p ≤0,5; 3 p ≤2; 2 p ≤5","comment":"Kõrge võihape viitab klostriidse käärimise riskile."},{"type":"Rohusilo","part":"C","name":"Etanool","unit":"g/kg KA","w":0.1,"a1":-999.0,"a2":10.0,"b1":-999.0,"b2":20.0,"c1":-999.0,"c2":30.0,"critical":true,"limit":"4 p ≤10; 3 p ≤20; 2 p ≤30","comment":"Kõrge etanool viitab pärmide aktiivsusele."},{"type":"Rohusilo","part":"C","name":"NH3-N kogu N-st","unit":"%","w":0.15,"a1":-999.0,"a2":7.0,"b1":-999.0,"b2":10.0,"c1":-999.0,"c2":15.0,"critical":true,"limit":"4 p ≤7; 3 p ≤10; 2 p ≤15","comment":"Kõrge NH3-N näitab proteolüüsi."},{"type":"Rohusilo","part":"C","name":"Hapete summa","unit":"g/kg KA","w":0.1,"a1":50.0,"a2":100.0,"b1":25.0,"b2":120.0,"c1":15.0,"c2":140.0,"critical":true,"limit":"4 p 50–100; 3 p 25–120; 2 p 15–140","comment":"Ebatavaline hapete summa viitab käärimisprobleemile."},{"type":"Rohusilo","part":"C","name":"Piimhape : äädikhape","unit":"suhe","w":0.05,"a1":2.0,"a2":4.0,"b1":1.5,"b2":4.5,"c1":1.0,"c2":6.0,"critical":false,"limit":"4 p 2–4; 3 p 1,5–4,5; 2 p 1–6","comment":"Väike suhe näitab äädikhappe domineerimist."}];
const OUTER={A:0.40,B:0.35,C:0.25};
const LABELS={A:'A. Toiteväärtus',B:'B. Kiu ja tärklise seeduvus',C:'C. Fermentatsioon'};
const aliases={
'Kuivaine':['kuivaine','dry matter','trockenmasse','dm'],
'Toorproteiin':['toorproteiin','toorprotelin','toorprotelin','crude protein','rohprotein','cp'],
'Toortuhk':['toortuhk','crude ash','rohasche','ash'],
'Toorkiud':['toorkiud','crude fiber','crude fibre','rohfas'],
'Toorrasv':['toorrasv','toorrasy','crude fat','rohfett','ether extract'],
'Tärklis':['tärklis','starch','stärke','staerke'],
'NDF':['andfom','ndf'], 'ADF':['adf'],
'Metaboliseeruv energia':['metaboliseeruv energia','metabolizable energy','metabolisable energy','umsetzbare energie','me'],
'Orgaanilise aine seeduvus':['orgaanilise aine seeduvus','organic matter digestibility','omd'],
'NDFD30':['ndfd30','ndfd 30','30 h ndf'], 'NDFD48':['ndfd48','ndfd 48','48 h ndf'], 'uNDF240':['undf240','undf 240'],
'IVSD7':['ivsd7','ivsd 7','7 h starch digestibility'], 'CSPS/KPS':['csps','kps'], 'Ligniin':['ligniin','lignin'], 'pH':['ph'],
'Piimhape':['piimhape','lactic acid','milchsäure','milchsaure'], 'Äädikhape':['äädikhape','acetic acid','essigsäure','essigsaure'],
'Propioonhape':['propioonhape','propionic acid','propionsäure','propionsaure'], 'Võihape':['võihape','butyric acid','buttersäure','buttersaure'],
'Etanool':['etanool','ethanol'], 'NH3-N kogu N-st':['nh3-n','ammonia','ammoniaak','ammoniak'], 'Hapete summa':['hapete summa','kokku happeid','total acids','sum acids']
};
let currentType='Maisisilo';
let samples=[];
let activeColumn=null;
const $=id=>document.getElementById(id);
function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/ä/g,'a').replace(/ö/g,'o').replace(/ü/g,'u').replace(/õ/g,'o')}
function parseNum(s){if(s==null)return null; const m=String(s).replace(/\s/g,'').replace(',','.').match(/[-+]?\d+(?:\.\d+)?/); if(!m)return null; const v=Number(m[0]); return Number.isFinite(v)?v:null}
function grade(p){return p>=3.5?'VÄGA HEA':p>=2.75?'HEA':p>=2?'KESKMINE':'HALB'}
function gradeLabel(g){return g==='HALB'?'PEAKS OLEMA PAREM':g}
function score(c,v){if(v>=c.a1&&v<=c.a2)return 4;if(v>=c.b1&&v<=c.b2)return 3;if(v>=c.c1&&v<=c.c2)return 2;return 1}
function grassPHVeryGoodMax(dm){
  if(dm<25)return 4.1;
  if(dm<=40)return 4.3;
  return 4.7;
}
function scoreCriterion(c,v,vals){
  if(c.type==='Rohusilo'&&c.name==='pH'&&Number.isFinite(vals?.['Kuivaine'])){
    const max4=grassPHVeryGoodMax(vals['Kuivaine']);
    if(v>=4.0&&v<=max4)return 4;
    if(v>=3.8&&v<=max4+0.3)return 3;
    if(v>=3.6&&v<=max4+0.5)return 2;
    return 1;
  }
  return score(c,v);
}
function grassPHBasisText(vals){
  if(currentType!=='Rohusilo'||!Number.isFinite(vals?.['Kuivaine'])||!Number.isFinite(vals?.['pH']))return '';
  const dm=vals['Kuivaine'],max4=grassPHVeryGoodMax(dm);
  const dmBand=dm<25?'alla 25%':(dm<=40?'25–40%':'üle 40%');
  return `pH hindamise alus: rohusilo kuivaine ${dm.toFixed(1).replace('.',',')}% (${dmBand} KA); VÄGA HEA pH ülempiir ${max4.toFixed(1).replace('.',',')}.`;
}
const COMMON_FUTURE_ACTIONS={
  'Toortuhk':'tõsta niite- või lõikekõrgust, väldi mulla sattumist vaalu ja hoidlasse ning hoia kogur, veoteed ja tihendamistehnika puhtad.',
  'Toorrasv':'kontrolli proovi esinduslikkust. Seda näitajat saab valmistamisega vähe muuta; korista õigel ajal ja väldi rohusilo lehekadu.',
  'pH':{
    low:'väldi liiga märja materjali sileerimist ja liigset käärimist; korista sihtkuivaines ning kontrolli hapete ja silokindlustuslisandi koosmõju.',
    high:'tihenda õhukeste kihtidena, täida hoidla kiiresti, sule see kohe õhukindlalt ning kasuta vajaduse korral kultuurile sobivat piimhappebakterit.'
  },
  'Piimhape':{
    low:'väldi mulla ja sõnnikuga saastumist, tihenda kiiresti ja sule õhukindlalt; vähese suhkruga rohul kasuta sobivat piimhappebakterit.',
    high:'väldi liiga märja materjali sileerimist; närvuta rohi või korista mais sihtkuivaines, et käärimine ei muutuks liiga intensiivseks.'
  },
  'Äädikhape':{
    low:'hoia silo õhukindel. Kui silo kipub avamisel kuumenema, kasuta järgmisel korral tõendatud aeroobset stabiilsust parandavat silokindlustuslisandit.',
    high:'korista sihtkuivaines, täida ja tihenda hoidla kiiresti ning sule kohe; väldi aeglast täitmist, õhu sissepääsu ja ebasobivat silokindlustuslisandit.'
  },
  'Propioonhape':'korista puhas materjal sihtkuivaines, tihenda ja sule kiiresti ning väldi õhu sissepääsu ja sekundaarset käärimist.',
  'Võihape':'väldi mulla ja sõnnikuga saastumist, närvuta rohi piisavalt, täida kiiresti ja sule õhukindlalt; märjal või raskesti sileeruval rohul kasuta sobivat silokindlustuslisandit.',
  'Etanool':'tihenda õhukeste kihtidena, lõpeta täitmine kiiresti ja sule kohe; paranda kile, servade ning avatud silo pinna õhukindlust.',
  'NH3-N kogu N-st':'lühenda närvutamisaega, väldi vihma ja saastumist ning taga kiire hapestumine tugeva tihendamise, kohese sulgemise ja vajaduse korral sobiva silokindlustuslisandiga.',
  'Hapete summa':{
    low:'taga kiire piimhappekäärimine: korista sobivas kuivaines, tihenda korralikult, sule kohe ja kasuta vajaduse korral kultuurile sobivat silokindlustuslisandit.',
    high:'väldi liiga märja materjali sileerimist; korista sihtkuivaines, täida kiiresti ja sule kohe, et vähendada liigset käärimist ning kuivainekadu.'
  },
  'Piimhape : äädikhape':{
    low:'vähenda äädikhappekäärimist kiire täitmise, tugeva tihendamise, kohese sulgemise ja kultuurile sobiva silokindlustuslisandiga.',
    high:'kontrolli eelkõige silo kuumenemist avamisel; korduva kuumenemise korral kasuta aeroobset stabiilsust parandavat silokindlustuslisandit ja taga piisav etteandekiirus.'
  }
};
const TYPE_FUTURE_ACTIONS={
  'Maisisilo':{
    'Kuivaine':{
      low:'korista veidi hiljem ja mõõda põllul kogu taime kuivainet, sihiga 32–38%.',
      high:'korista varem; kuiva massi korral lühenda hekslit, tihenda õhukeste kihtidena eriti hoolikalt ja sule hoidla kohe.'
    },
    'Toorproteiin':'vali põllule sobiv hübriid, väeta mullaproovi ja saagiootuse järgi ning väldi liiga hilist koristust; ära suurenda lämmastikku üksnes proteiininäidu tõstmiseks.',
    'Toorkiud':'korista mais õiges küpsusastmes ning eelista suurema terade osakaalu ja hea kiuseeduvusega hübriidi.',
    'Tärklis':'väldi liiga varast koristust, kontrolli tera küpsust ja kogu taime kuivainet ning eelista põllule sobiva küpsusajaga, hea terasaagiga hübriidi.',
    'NDF':'korista õiges küpsusastmes, eelista hästi seeduva kiuga hübriidi ja kaalu lõikekõrguse mõõdukat tõstmist, kui saagikadu on vastuvõetav.',
    'ADF':'väldi üleküpsenud maisi, eelista hästi seeduva kiuga hübriidi ja korista sihtkuivaines.',
    'Metaboliseeruv energia':'korista sihtkuivaines, eelista hea tärklise- ja kiuseeduvusega hübriidi, purusta kõik terad ning vähenda koristus- ja säilituskadusid.',
    'Orgaanilise aine seeduvus':'väldi liiga hilist koristust, eelista hea kiuseeduvusega hübriidi ning taga korralik terade purustamine ja õhukindel säilitamine.',
    'NDFD30':'eelista hästi seeduva kiuga hübriidi, väldi liiga hilist koristust ja korista sihtkuivaines.',
    'NDFD48':'eelista hästi seeduva kiuga hübriidi, väldi liiga hilist koristust ja korista sihtkuivaines.',
    'uNDF240':'eelista väiksema seedumatu kiu osaga hübriidi, korista õigel ajal ja kaalu lõikekõrguse mõõdukat tõstmist.',
    'IVSD7':'seadista teramuljur koristuspäeva kuivainesisalduse järgi, kontrolli hekslit mitu korda päevas ja veendu, et ükski terve tera ei jääks alles.',
    'CSPS/KPS':'vähenda teramuljuri vahet, kontrolli rullide kulumist ja rööpsust ning testi töö käigus, et kõik terad oleksid purustatud.',
    'Ligniin':'eelista väiksema ligniinisisalduse ja hea kiuseeduvusega hübriidi, väldi hilist koristust ning kaalu lõikekõrguse mõõdukat tõstmist.'
  },
  'Rohusilo':{
    'Kuivaine':{
      low:'närvuta rohi kiiresti laias vaalus 30–40% kuivaineni, kuid väldi vihma ja liiga pikka põllul olekut.',
      high:'lühenda närvutamisaega ja korista varem; kuiva massi korral kasuta lühemat hekslit ning tihenda eriti hoolikalt.'
    },
    'Toorproteiin':{
      low:'niida nooremas arengujärgus, vähenda lehekadu, hoia liblikõieliste sobiv osakaal ning väeta mulla- ja saagianalüüsi järgi.',
      high:'väldi liigset lämmastikväetamist, närvuta kiiresti sihtkuivaineni ja taga kiire hapestumine, et vähendada proteiini lagunemist.'
    },
    'Toorkiud':'niida nooremas, leherikkamas arengujärgus ning väldi koristuse hilinemist.',
    'NDF':'niida varem ja leherikkamas arengujärgus, eelista hea kiuseeduvusega liike ja sorte ning väldi vihmakahjustust.',
    'ADF':'niida varem, enne varte tugevat puitumist, ning lühenda närvutamisaega.',
    'Metaboliseeruv energia':'niida nooremas arengujärgus, närvuta kiiresti ning vähenda vihma-, hingamis- ja säilituskadusid.',
    'Orgaanilise aine seeduvus':'niida varem, vali hästi seeduv taimik, närvuta kiiresti ja väldi mulla ning vihmaga saastumist.',
    'NDFD30':'niida nooremas arengujärgus, eelista hea kiuseeduvusega liike ja sorte ning väldi pikka närvutamist.',
    'NDFD48':'niida nooremas arengujärgus, eelista hea kiuseeduvusega liike ja sorte ning väldi pikka närvutamist.',
    'uNDF240':'niida enne taimiku vananemist ja varte puitumist ning eelista hea kiuseeduvusega liike ja sorte.',
    'Ligniin':'niida nooremas arengujärgus, enne varte puitumist, ja hoia taimikus leherikaste liikide sobiv osakaal.'
  }
};
function improvementDirection(c,v){
  const hasLow=c.a1>-900,hasHigh=c.a2<900;
  if(hasLow&&v<c.a1)return 'low';
  if(hasHigh&&v>c.a2)return 'high';
  if(!hasLow)return 'high';
  if(!hasHigh)return 'low';
  return v<(c.a1+c.a2)/2?'low':'high';
}
function futureAction(c,v){
  const action=TYPE_FUTURE_ACTIONS[c.type]?.[c.name]??COMMON_FUTURE_ACTIONS[c.name];
  if(!action)return 'Järgmisel silo tegemisel: määra kõrvalekalde põhjus koos labori ja põlluandmetega ning korrigeeri koristusaega, kuivainet, tihendamist ja sulgemist.';
  const text=typeof action==='string'?action:(action[improvementDirection(c,v)]||action.low||action.high);
  return `Järgmisel silo tegemisel: ${text}`;
}
const MILK_LOSS_MODEL={
  silageDmKg:12,
  milkMeEfficiency:0.66,
  milkNelMjPerKg:3.19,
  idealMe:{Maisisilo:11.3,Rohusilo:10.5},
  idealTotalAcids:80,
  aceticHigh:{Maisisilo:50,Rohusilo:40},
  aceticMilkPenalty:0.5,
  acidIntakeSlopeKg:0.0128
};
function milkKg(value){return Math.max(0,value).toFixed(1).replace('.',',')}
function milkKgUpper(value){return (Math.ceil(Math.max(0,value)*10-1e-9)/10).toFixed(1).replace('.',',')}
function calculateMilkLoss(vals,type=currentType){
  const cfg=MILK_LOSS_MODEL,me=vals['Metaboliseeruv energia'],acetic=vals['Äädikhape'],acids=vals['Hapete summa'],ethanol=vals['Etanool'];
  const hasMe=Number.isFinite(me),hasAcids=Number.isFinite(acids),idealMe=cfg.idealMe[type],aceticLimit=cfg.aceticHigh[type];
  const energyLoss=hasMe?Math.max(0,cfg.silageDmKg*(idealMe-me)*cfg.milkMeEfficiency/cfg.milkNelMjPerKg):null;
  const aceticLoss=Number.isFinite(acetic)&&acetic>aceticLimit?cfg.aceticMilkPenalty:0;
  const central=(energyLoss??0)+aceticLoss;
  const intakeDrop=hasAcids?Math.max(0,(acids-cfg.idealTotalAcids)*cfg.acidIntakeSlopeKg):null;
  const intakeMilkLoss=hasMe&&hasAcids?intakeDrop*me*cfg.milkMeEfficiency/cfg.milkNelMjPerKg:null;
  const low=energyLoss;
  const high=hasMe&&hasAcids?Math.max(central,energyLoss+intakeMilkLoss):null;
  let main;
  if(hasMe&&hasAcids)main=`Tinglikult saamata piim: ${milkKg(central)} kg/lehm/päev. Võimalik vahemik ${milkKg(low)}-${milkKgUpper(high)} kg.`;
  else if(hasMe)main=`Tinglikult saamata piim: ${milkKg(central)} kg/lehm/päev. Vahemiku arvutamiseks puudub hapete summa.`;
  else if(aceticLoss>0)main=`Tinglikult saamata piim: vähemalt ${milkKg(aceticLoss)} kg/lehm/päev. Täielikuks arvutuseks puudub ME.`;
  else main='Tinglikku piimakadu ei saa arvutada, sest metaboliseeruva energia (ME) tulemus puudub.';
  const ethanolText=Number.isFinite(ethanol)&&ethanol>30?'Etanool on kõrge, kuid seda ei liideta eraldi piimakaona.':'Etanooli ei liideta eraldi piimakaona.';
  const fibreMissing=vals['NDFD48']==null||vals['uNDF240']==null;
  const fibreText=fibreMissing?' NDFD48/uNDF240 puudumisel ei sisalda hinnang kiu võimalikku lisamõju.':' Kiu seeduvuse mõju ei teisendata selles lihtsustatud mudelis eraldi piimakaoks.';
  const note=`Alus: 12 kg silo KA ja võrdlus VÄGA HEA siloga. Arvestatud on ME, kõrge äädikhape ning hapete võimalik söömusmõju. ${ethanolText}${fibreText}`;
  return {main,note,central,low,high,energyLoss,aceticLoss,intakeDrop,intakeMilkLoss};
}
function typeCriteria(){return CRITERIA.filter(c=>c.type===currentType)}
function sampleLabel(sample){return `Veerg ${sample.column} – ${sample.type}`}
function getAssignments(){
  return [...document.querySelectorAll('#columnAssignments select[data-column]')]
    .map(el=>({column:Number(el.dataset.column),type:el.value}))
    .filter(x=>x.type==='Maisisilo'||x.type==='Rohusilo');
}
function saveActiveValues(){
  if(activeColumn==null)return;
  const sample=samples.find(x=>x.column===activeColumn);
  if(sample)sample.values=getValues();
}
function renderSampleSelect(){
  const select=$('sampleSelect');
  if(!samples.length){
    select.innerHTML='<option value="">Ühtegi siloveergu pole valitud</option>';
    select.disabled=true;
    $('sampleSummary').textContent='Määra ülal vähemalt üks prooviveerg maisi- või rohusiloks.';
    return;
  }
  select.disabled=false;
  select.innerHTML=samples.map(s=>`<option value="${s.column}">${sampleLabel(s)}</option>`).join('');
}
function activateSample(column,save=true){
  if(save)saveActiveValues();
  const sample=samples.find(x=>x.column===Number(column));
  if(!sample)return;
  activeColumn=sample.column;
  currentType=sample.type;
  $('sampleSelect').value=String(sample.column);
  const count=sample.detectedCount;
  $('sampleSummary').textContent=count==null
    ?`${sampleLabel(sample)}. Sisesta väärtused käsitsi või loe foto/PDF.`
    :`${sampleLabel(sample)}. Automaatselt tuvastatud näitajaid: ${count}.`;
  renderFields(sample.values||{});
  $('resultCard').hidden=true;
}
function syncSamplesFromAssignments(){
  saveActiveValues();
  const old=new Map(samples.map(s=>[s.column,s]));
  const previous=activeColumn;
  samples=getAssignments().map(a=>{
    const prior=old.get(a.column);
    return {column:a.column,type:a.type,values:prior?.values||{},detectedCount:prior?.detectedCount};
  });
  activeColumn=null;
  renderSampleSelect();
  if(samples.length)activateSample(samples.some(s=>s.column===previous)?previous:samples[0].column,false);
  else{currentType='Maisisilo';renderFields();$('resultCard').hidden=true;}
}
function renderColumnAssignments(){
  const host=$('columnAssignments');
  const previous=new Map([...host.querySelectorAll('select[data-column]')].map(el=>[Number(el.dataset.column),el.value]));
  const count=Math.max(1,Math.min(20,parseInt($('columnCount').value||'1',10)));
  $('columnCount').value=String(count);
  host.innerHTML='';
  for(let column=1;column<=count;column++){
    const value=previous.has(column)?previous.get(column):(column===1?'Maisisilo':'');
    host.insertAdjacentHTML('beforeend',`<div class="assignment-row"><label for="columnType${column}">Veerg ${column}</label><select id="columnType${column}" data-column="${column}"><option value="">Ei kasutata</option><option value="Maisisilo"${value==='Maisisilo'?' selected':''}>Maisisilo</option><option value="Rohusilo"${value==='Rohusilo'?' selected':''}>Rohusilo</option></select></div>`);
  }
  syncSamplesFromAssignments();
}
function renderFields(keep={}){const host=$('fields');host.innerHTML='<div class="head">Näitaja</div><div class="head">Väärtus</div><div class="head">Ühik</div>';let part='';for(const c of typeCriteria()){if(c.part!==part){part=c.part;host.insertAdjacentHTML('beforeend',`<div class="sectiontag">${LABELS[part]}</div>`)}const id='v_'+btoa(unescape(encodeURIComponent(c.name))).replace(/=/g,'');const value=keep[c.name]??'';host.insertAdjacentHTML('beforeend',`<label for="${id}">${c.name}</label><input id="${id}" data-name="${c.name}" inputmode="decimal" type="text" value="${String(value).replace(/"/g,'&quot;')}"><div>${c.unit}</div>`)}}
function getValues(){const out={};document.querySelectorAll('#fields input[data-name]').forEach(el=>{const v=parseNum(el.value);if(v!==null)out[el.dataset.name]=v});if(out['Piimhape']!=null&&out['Äädikhape']!=null&&out['Äädikhape']!==0)out['Piimhape : äädikhape']=out['Piimhape']/out['Äädikhape'];return out}
function setValues(vals,clear=false){document.querySelectorAll('#fields input[data-name]').forEach(el=>{if(clear)el.value='';if(vals[el.dataset.name]!=null)el.value=String(Math.round(vals[el.dataset.name]*1000)/1000).replace('.',',')})}

// OCR loeb Eesti Maaülikooli tabelites koma vahel ekslikult sageli märgi ")" või "]".
// Parandame ainult selgelt numbrilise kuju; ülejäänud teksti ei muudeta.
function extractNumbers(s){
  const cleaned=String(s||'')
    .replace(/[−–—]/g,'-')
    .replace(/([-+]?\d+)\s*[\)\]]\s*(?:[|Il1])?/g,'$1.1');
  return [...cleaned.matchAll(/[-+]?\d+(?:[\.,]\d+)?/g)]
    .map(m=>parseNum(m[0])).filter(v=>v!==null);
}

const VALUE_RANGES={
  'Kuivaine':[10,80],'Toorproteiin':[2,35],'Toortuhk':[0,20],
  'Toorkiud':[3,65],'Toorrasv':[0,15],'Tärklis':[0,700],
  'NDF':[10,90],'ADF':[5,70],'Metaboliseeruv energia':[5,18],
  'Orgaanilise aine seeduvus':[20,100],'NDFD30':[0,100],
  'NDFD48':[0,100],'uNDF240':[0,50],'IVSD7':[0,100],
  'CSPS/KPS':[0,100],'Ligniin':[0,20],'pH':[2.5,8],
  'Piimhape':[0,250],'Äädikhape':[0,250],'Propioonhape':[0,100],
  'Võihape':[0,100],'Etanool':[0,250],'NH3-N kogu N-st':[0,30],
  'Hapete summa':[0,400]
};
const MAY_HAVE_LOST_DECIMAL=new Set([
  'Kuivaine','Toorproteiin','Toortuhk','Toorkiud','Toorrasv','NDF','ADF',
  'Metaboliseeruv energia','Orgaanilise aine seeduvus','NDFD30','NDFD48',
  'uNDF240','IVSD7','CSPS/KPS','Ligniin','pH','NH3-N kogu N-st'
]);

function aliasEnd(line,alias){
  const nl=norm(line),na=norm(alias).trim();
  if(!na)return -1;
  let from=0;
  while(from<=nl.length-na.length){
    const pos=nl.indexOf(na,from);
    if(pos<0)return -1;
    const before=pos===0?' ':nl[pos-1],after=nl[pos+na.length]||' ';
    if(!/[a-z0-9]/.test(before)&&!/[a-z0-9]/.test(after))return pos+na.length;
    from=pos+1;
  }
  return -1;
}
function containsKnownLabel(line){
  return Object.values(aliases).some(als=>als.some(a=>aliasEnd(line,a)>=0));
}
function numericOnlyLine(line){
  if(!extractNumbers(line).length)return false;
  const rest=norm(line).replace(/[-+]?\d+(?:[\.,]\d+)?/g,'')
    .replace(/[\s%.,;:|()[\]\-+]/g,'');
  return !/[a-z]/.test(rest);
}
function plausibleValue(name,value){
  const range=VALUE_RANGES[name];
  return !range||(value>=range[0]&&value<=range[1]);
}
function normalizeOcrValue(name,value){
  if(value==null||!Number.isFinite(value))return null;
  if(plausibleValue(name,value))return value;
  // Kui kümnendkoma kadus (nt 10,5 -> 105), lubame ainult ühe kümnekordse paranduse.
  const shifted=value/10;
  if(MAY_HAVE_LOST_DECIMAL.has(name)&&plausibleValue(name,shifted))return shifted;
  return null;
}
function parseText(text,column=1){
  const lines=String(text||'').split(/[\r\n\v\f]+/).map(x=>x.trim()).filter(Boolean);
  const out={};
  column=Math.max(1,Number(column)||1);
  for(const [name,unsortedAliases] of Object.entries(aliases)){
    const als=[...unsortedAliases].sort((a,b)=>b.length-a.length);
    let found=null;
    for(let i=0;i<lines.length&&found===null;i++){
      for(const a of als){
        const end=aliasEnd(lines[i],a);
        if(end<0)continue;
        let nums=extractNumbers(lines[i].slice(end));
        if(nums.length<column){
          // Tesseract võib panna ühe tabelirea väärtuse järgmisele reale.
          // Loeme ainult vahetult järgnevaid puhtalt numbrilisi ridu, mitte suvalisi hilisemaid numbreid.
          const near=[];
          for(let j=i+1;j<Math.min(lines.length,i+column+2);j++){
            if(containsKnownLabel(lines[j])||!numericOnlyLine(lines[j]))break;
            near.push(...extractNumbers(lines[j]));
            if(near.length>=column)break;
          }
          nums=near;
        }
        if(nums.length>=column){
          const candidate=normalizeOcrValue(name,nums[column-1]);
          if(candidate!==null)found=candidate;
        }
        if(found!==null)break;
      }
    }
    if(found!==null)out[name]=found;
  }
// Existing EXE behavior: starch is evaluated as g/kg DM; convert an obvious percentage value to g/kg.
if(out['Tärklis']!=null&&out['Tärklis']<=100)out['Tärklis']*=10;
if(out['Piimhape']!=null&&out['Äädikhape']!=null&&out['Äädikhape']!==0)out['Piimhape : äädikhape']=out['Piimhape']/out['Äädikhape'];return out}
function calc(){const vals=getValues();const active=samples.find(s=>s.column===activeColumn);if(active)active.values=vals;const pcs={},pws={},details=[];let critical=0;for(const c of typeCriteria()){if(vals[c.name]==null)continue;const v=vals[c.name],p=scoreCriterion(c,v,vals),g=grade(p);let crit=false;if(c.name==='Hapete summa'&&c.critical){const highLimit=currentType==='Maisisilo'?120:140;crit=v>highLimit}else{crit=(p===1&&c.critical)}if(crit)critical++;pcs[c.part]=(pcs[c.part]||0)+p*c.w;pws[c.part]=(pws[c.part]||0)+c.w;details.push({...c,v,p,g,crit})}let num=0,den=0,parts={};for(const part of ['A','B','C']){if(pws[part]>0){parts[part]=pcs[part]/pws[part];num+=parts[part]*OUTER[part];den+=OUTER[part]}}if(!den){$('status').textContent='Sisesta vähemalt üks tulemus.';return}const overall=num/den, computed=grade(overall);let final=computed;if(critical>0){if(overall>=3.5)final='HEA';else if(overall>=2.75)final='KESKMINE';else final='HALB'}const complete=['A','B','C'].every(p=>pws[p]>0);showResults({vals,details,parts,overall,computed,final,critical,complete})}
function showResults(r){resetPreparedPdf();$('resultCard').hidden=false;const fg=$('finalGrade'),finalText=gradeLabel(r.final);fg.textContent=finalText;fg.className='result '+(r.final==='HALB'?'grade-bad':(r.final==='KESKMINE'?'grade-warn':'grade-good'))+(finalText==='PEAKS OLEMA PAREM'?' long-grade':'');fg.style.fontSize=finalText==='PEAKS OLEMA PAREM'?'15px':'';$('scoreLine').textContent=`Arvutuslik hinne: ${gradeLabel(r.computed)} (${r.overall.toFixed(2).replace('.',',')} p)${r.critical?` · Kriitilisi piiranguid: ${r.critical}`:''}`;$('completeLine').textContent=r.complete?'Staatus: TÄIELIK HINNANG':'Staatus: ESIALGNE – vähemalt ühe osa andmed puuduvad';$('reportMeta').textContent=`Silo: ${currentType} · Prooviveerg: ${activeColumn??'–'} · Analüüsi nr: ${$('analysis').value||'–'} · Ettevõte/hoidla: ${$('farm').value||'–'} · Koostaja: ${$('author').value||'–'} · Kuupäev: ${new Date().toLocaleDateString('et-EE')}`;
$('partScores').innerHTML=['A','B','C'].map(p=>r.parts[p]!=null?`<p><strong>${LABELS[p]}:</strong> ${r.parts[p].toFixed(2).replace('.',',')} p – ${gradeLabel(grade(r.parts[p]))}</p>`:`<p><strong>${LABELS[p]}:</strong> ANDMED PUUDUVAD</p>`).join('');
const milkLoss=calculateMilkLoss(r.vals,currentType);$('milkLossMain').textContent=milkLoss.main;$('milkLossNote').textContent=milkLoss.note;
$('detailBody').innerHTML=r.details.map(x=>`<tr><td>${x.part}</td><td>${x.name}</td><td>${x.v.toFixed(2).replace('.',',')} ${x.unit}</td><td>${x.p}</td><td>${gradeLabel(x.g)}</td><td class="${x.crit?'crit':''}">${x.crit?'KRIITILINE':''}</td></tr>`).join('');
const rec=r.details.filter(x=>x.p<=2).sort((a,b)=>a.p-b.p||a.name.localeCompare(b.name));const phBasis=grassPHBasisText(r.vals);$('recommendations').innerHTML=(phBasis?`<p><strong>${phBasis}</strong></p>`:'')+(rec.length?rec.map(x=>`<p><strong>${x.name}:</strong> ${x.v.toFixed(2).replace('.',',')} ${x.unit} – <span class="${x.crit?'crit':''}">${x.crit?'KRIITILINE PROBLEEM':'VAJAB TÄHELEPANU'}</span>. ${x.comment} <strong>${futureAction(x,x.v)}</strong></p>`).join(''):'<p>Olulisi 1–2 punkti näitajaid ei ole sisestatud andmete põhjal.</p>');window.scrollTo({top:$('resultCard').offsetTop-70,behavior:'smooth'})}
function setStatus(t,p){$('status').textContent=t;if(p!=null)$('progressBar').style.width=Math.max(0,Math.min(100,p))+'%'}
async function ensureTesseract(){if(window.Tesseract)return;setStatus('Laen OCR-moodulit…',5);await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='./tesseract.min.js';s.onload=()=>window.Tesseract?resolve():reject(new Error('OCR-moodulit ei õnnestunud käivitada.'));s.onerror=()=>reject(new Error('OCR-mooduli kohalik fail puudub.'));document.head.appendChild(s)})}
async function ocrImage(file){
  let worker;
  try{
    await ensureTesseract();
    setStatus('Loen fotolt teksti…',10);
    worker=await Tesseract.createWorker(['eng','deu','est'],Tesseract.OEM.LSTM_ONLY,{workerPath:'./worker.min.js',corePath:'./',langPath:'./',gzip:true,logger:m=>{
      if(m.progress!=null)setStatus('Loen fotolt teksti… '+Math.round(m.progress*100)+'%',10+80*m.progress);
    }});
    await worker.setParameters({
      tessedit_pageseg_mode:Tesseract.PSM.SINGLE_COLUMN,
      preserve_interword_spaces:'1',
      user_defined_dpi:'300'
    });
    const res=await worker.recognize(file);
    return res.data.text;
  }catch(e){
    throw new Error('Foto OCR ei käivitunud. Sulge ja ava programm uuesti. '+e.message);
  }finally{
    if(worker)await worker.terminate().catch(()=>{});
  }
}
async function loadPdfJs(){return await import('./pdf.mjs')}
function pdfItemsToText(items){
  const rows=[];
  for(const item of items){
    const str=String(item.str||'').trim();
    if(!str)continue;
    const x=item.transform?.[4]||0,y=item.transform?.[5]||0;
    let row=rows.find(r=>Math.abs(r.y-y)<=3);
    if(!row){row={y,items:[]};rows.push(row)}
    row.items.push({x,str});
  }
  return rows.sort((a,b)=>b.y-a.y)
    .map(r=>r.items.sort((a,b)=>a.x-b.x).map(x=>x.str).join('   ')).join('\n');
}
async function readPdf(file){
  setStatus('Loen PDF-i…',10);
  const pdfjs=await loadPdfJs();
  pdfjs.GlobalWorkerOptions.workerSrc=new URL('./pdf.worker.min.mjs',document.baseURI).href;
  const data=new Uint8Array(await file.arrayBuffer());
  const pdf=await pdfjs.getDocument({data}).promise;
  let text='';
  for(let i=1;i<=Math.min(pdf.numPages,5);i++){
    setStatus(`Loen PDF-i lehekülge ${i}/${Math.min(pdf.numPages,5)}…`,10+70*i/Math.min(pdf.numPages,5));
    const page=await pdf.getPage(i),tc=await page.getTextContent();
    text+=pdfItemsToText(tc.items)+'\n';
  }
  if(text.replace(/\s/g,'').length>80)return text;
  setStatus('PDF sisaldab vähe loetavat teksti; proovin esimese lehe OCR-i…',40);
  const page=await pdf.getPage(1),vp=page.getViewport({scale:2.2});
  const canvas=document.createElement('canvas');canvas.width=vp.width;canvas.height=vp.height;
  await page.render({canvasContext:canvas.getContext('2d'),viewport:vp}).promise;
  const blob=await new Promise(r=>canvas.toBlob(r,'image/jpeg',0.94));
  return await ocrImage(blob);
}
async function handleFile(file,kind){
  if(!file)return;
  try{
    const text=kind==='pdf'?await readPdf(file):await ocrImage(file);
    $('ocrPreview').textContent=text||'Teksti ei tuvastatud.';
    const assignments=getAssignments();
    if(!assignments.length){setStatus('Määra enne vähemalt üks veerg maisi- või rohusiloks.',0);return}
    samples=assignments.map(a=>{
      const values=parseText(text,a.column);
      return {...a,values,detectedCount:Object.keys(values).length};
    });
    activeColumn=null;
    renderSampleSelect();
    activateSample(samples[0].column,false);
    const total=samples.reduce((sum,s)=>sum+s.detectedCount,0);
    setStatus(`Valmis. Lugesin ${samples.length} siloveergu ja tuvastasin kokku ${total} näitajat. Vali „Praegu hinnatav silo“, kontrolli väärtused ning arvuta hinnang.`,100);
  }catch(e){setStatus('Viga: '+e.message,0)}
}
async function ensurePdfMaker(){
  if(window.PDFLib)return;
  await new Promise((resolve,reject)=>{
    const s=document.createElement('script');
    s.src='./pdf-lib.min.js';
    s.onload=()=>window.PDFLib?resolve():reject(new Error('PDF-moodulit ei õnnestunud käivitada.'));
    s.onerror=()=>reject(new Error('PDF-mooduli kohalik fail puudub.'));
    document.head.appendChild(s);
  });
}
function pdfFileName(){
  const farm=($('farm').value||'SiloHindaja').trim().replace(/[^a-zA-Z0-9À-ž_-]+/g,'_').replace(/^_+|_+$/g,'');
  return `${farm||'SiloHindaja'}_silo_hinnang_${new Date().toISOString().slice(0,10)}.pdf`;
}
const PDF_MARGIN_MM=20;
function pdfSafeText(value){return String(value??'').normalize('NFC').replace(/\u00a0/g,' ').replace(/[‐‑‒–—−]/g,'-').replace(/[“”„]/g,'"').replace(/[‘’]/g,"'").replace(/·/g,' - ').replace(/≥/g,'>=').replace(/≤/g,'<=').replace(/→/g,'->').replace(/[^\x20-\x7E\u00C0-\u00FF\u0152\u0153\u0160\u0161\u0178\u017D\u017E]/g,'?')}
function collectPdfReport(){
  const final=$('finalGrade'),notes=[...$('resultCard').querySelectorAll('p.note')];
  return {
    meta:$('reportMeta').textContent,final:final.textContent,score:$('scoreLine').textContent,status:$('completeLine').textContent,
    gradeKind:final.classList.contains('grade-bad')?'bad':(final.classList.contains('grade-warn')?'warn':'good'),
    parts:[...$('partScores').querySelectorAll('p')].map(p=>p.textContent),
    milkLossMain:$('milkLossMain').textContent,
    milkLossNote:$('milkLossNote').textContent,
    details:[...$('detailBody').querySelectorAll('tr')].map(tr=>[...tr.querySelectorAll('td')].map(td=>td.textContent.trim())),
    recommendations:[...$('recommendations').querySelectorAll('p')].map(p=>p.textContent.trim()),
    note:notes.length?notes[notes.length-1].textContent:''
  };
}
function wrapPdfText(text,font,size,maxWidth){
  const words=pdfSafeText(text).trim().split(/\s+/).filter(Boolean),lines=[];let line='';
  for(const word of words){
    const candidate=line?line+' '+word:word;
    if(font.widthOfTextAtSize(candidate,size)<=maxWidth){line=candidate;continue}
    if(line){lines.push(line);line=''}
    if(font.widthOfTextAtSize(word,size)<=maxWidth){line=word;continue}
    let part='';for(const ch of word){const next=part+ch;if(font.widthOfTextAtSize(next,size)>maxWidth&&part){lines.push(part);part=ch}else part=next}line=part;
  }
  if(line)lines.push(line);return lines.length?lines:[''];
}
async function renderVectorPdf(data,scale){
  const {PDFDocument,StandardFonts,rgb}=window.PDFLib,pdf=await PDFDocument.create();
  const regular=await pdf.embedFont(StandardFonts.Helvetica),bold=await pdf.embedFont(StandardFonts.HelveticaBold);
  const W=595.28,H=841.89,M=PDF_MARGIN_MM*72/25.4,CW=W-M*2;
  const green=rgb(.03,.37,.29),black=rgb(.08,.13,.11),muted=rgb(.38,.44,.41),red=rgb(.70,.14,.10),orange=rgb(.71,.28,.03),good=rgb(.14,.47,.02),line=rgb(.80,.86,.83),head=rgb(.93,.96,.94),paleRed=rgb(1,.91,.90),paleOrange=rgb(1,.95,.86);
  let page,y,pages=[],overflow=false;
  function addPage(continued=false){page=pdf.addPage([W,H]);pages.push(page);y=H-M;if(continued){page.drawText('VESKIMEISTER - Silo kvaliteedi hinnang (jätk)',{x:M,y:y-9,font:bold,size:9,color:green});y-=20}}
  function ensureSpace(height){if(y-height>=M)return true;if(pages.length>=2){overflow=true;return false}addPage(true);return y-height>=M}
  function drawWrapped(text,{font=regular,size=9.2*scale,color=black,x=M,width=CW,after=3*scale,background=null}={}){
    const lh=size*1.24,lines=wrapPdfText(text,font,size,width-4);
    for(const txt of lines){if(!ensureSpace(lh))return false;if(background)page.drawRectangle({x:x-2,y:y-lh+1,width:width+4,height:lh,backgroundColor:background,color:background});page.drawText(txt,{x,y:y-size,font,size,color});y-=lh}y-=after;return true
  }
  function heading(text,size=10.5*scale){if(!ensureSpace(size*1.5))return false;page.drawText(pdfSafeText(text),{x:M,y:y-size,font:bold,size,color:green});y-=size*1.5;return true}
  addPage(false);
  page.drawText('VESKIMEISTER',{x:M,y:y-14,font:bold,size:14,color:green});y-=19;
  page.drawText('Silo kvaliteedi hinnang',{x:M,y:y-12,font:bold,size:12,color:green});y-=18;
  if(!drawWrapped(data.meta,{font:bold,size:11,color:black,after:6*scale}))return {overflow:true};
  if(!heading('3. Hinnang',12*scale))return {overflow:true};
  const gradeColor=data.gradeKind==='bad'?red:(data.gradeKind==='warn'?orange:good),gradeSize=data.final==='PEAKS OLEMA PAREM'?11.25:18;
  if(!drawWrapped(data.final,{font:bold,size:gradeSize*scale,color:gradeColor,after:4*scale}))return {overflow:true};
  if(!drawWrapped(data.score,{size:9.2*scale,after:2*scale}))return {overflow:true};
  if(!drawWrapped(data.status,{size:8.5*scale,color:muted,after:4*scale}))return {overflow:true};
  for(const part of data.parts)if(!drawWrapped(part,{size:9*scale,after:1.5*scale}))return {overflow:true};
  y-=2*scale;if(!drawWrapped(data.milkLossMain,{font:bold,size:9.2*scale,color:black,after:2*scale,background:paleOrange}))return {overflow:true};
  if(!drawWrapped(data.milkLossNote,{size:7.8*scale,color:muted,after:3*scale}))return {overflow:true};
  y-=3*scale;if(!heading('Arvutuskäik',10.5*scale))return {overflow:true};
  const widths=[22,140,104,25,92,CW-383],headers=['Osa','Näitaja','Väärtus','P','Hinne','Märkus'],tableSize=7.8*scale,tableLh=tableSize*1.16;
  function tableHeader(){const rh=15*scale;if(!ensureSpace(rh))return false;let x=M;page.drawRectangle({x:M,y:y-rh,width:CW,height:rh,color:head,backgroundColor:head});for(let i=0;i<headers.length;i++){page.drawText(headers[i],{x:x+2,y:y-rh+4*scale,font:bold,size:7.2*scale,color:muted});x+=widths[i]}page.drawLine({start:{x:M,y:y-rh},end:{x:M+CW,y:y-rh},thickness:.5,color:line});y-=rh;return true}
  if(!tableHeader())return {overflow:true};
  for(const row of data.details){
    const cells=headers.map((_,i)=>wrapPdfText(row[i]||'',regular,tableSize,widths[i]-4)),rh=Math.max(14*scale,Math.max(...cells.map(c=>c.length))*tableLh+5*scale);
    if(y-rh<M){if(pages.length>=2)return {overflow:true};addPage(true);if(!heading('Arvutuskäik (jätk)',9.5*scale)||!tableHeader())return {overflow:true}}
    const top=y,bottom=y-rh;let x=M;
    for(let i=0;i<cells.length;i++){
      const value=row[i]||'';let bg=null;if(i===4)bg=value.includes('PEAKS')?paleRed:(value.includes('KESKMINE')?paleOrange:null);if(i===5&&value.includes('KRIITILINE'))bg=paleRed;if(bg)page.drawRectangle({x,y:bottom,width:widths[i],height:rh,color:bg,backgroundColor:bg});
      let cellColor=black,cellFont=regular;if(i===4){cellFont=bold;cellColor=value.includes('PEAKS')?red:(value.includes('KESKMINE')?orange:good)}if(i===5&&value){cellFont=bold;cellColor=red}
      cells[i].forEach((txt,j)=>page.drawText(txt,{x:x+2,y:top-3*scale-tableSize-j*tableLh,font:cellFont,size:tableSize,color:cellColor}));
      page.drawLine({start:{x,y:top},end:{x,y:bottom},thickness:.35,color:line});x+=widths[i]
    }
    page.drawLine({start:{x:M+CW,y:top},end:{x:M+CW,y:bottom},thickness:.35,color:line});page.drawLine({start:{x:M,y:bottom},end:{x:M+CW,y:bottom},thickness:.35,color:line});y=bottom;
  }
  y-=6*scale;if(!heading('Soovitused järgmise silo tegemiseks',10.5*scale))return {overflow:true};
  for(const rec of data.recommendations){const bg=rec.includes('KRIITILINE PROBLEEM')?paleRed:(rec.includes('VAJAB TÄHELEPANU')?paleOrange:null),color=rec.includes('KRIITILINE PROBLEEM')?red:black;if(!drawWrapped(rec,{size:8.8*scale,color,after:3*scale,background:bg}))return {overflow:true}}
  if(data.note){y-=3*scale;if(!drawWrapped(data.note,{size:7.8*scale,color:muted,after:0}))return {overflow:true}}
  if(overflow)return {overflow:true};
  if(pages.length>1)pages.forEach((p,i)=>{const t=`${i+1} / ${pages.length}`,s=8,x=W-M-regular.widthOfTextAtSize(t,s);p.drawText(t,{x,y:M/2,font:regular,size:s,color:muted})});
  return {overflow:false,bytes:await pdf.save()};
}
async function makeAddressFreePdf(){
  await ensurePdfMaker();const data=collectPdfReport();let result;
  for(const scale of [1,.92,.84,.76,.68]){result=await renderVectorPdf(data,scale);if(!result.overflow)return new Blob([result.bytes],{type:'application/pdf'})}
  throw new Error('Aruanne ei mahu loetavalt kahele lehele.');
}
let preparedPdfFile=null,preparedPdfBlobUrl='';
function resetPreparedPdf(){
  if(preparedPdfBlobUrl)URL.revokeObjectURL(preparedPdfBlobUrl);
  preparedPdfFile=null;preparedPdfBlobUrl='';
  const btn=$('printBtn'),ready=$('pdfReady');
  if(btn){btn.disabled=false;btn.textContent='Valmista PDF / prindi'}
  if(ready)ready.hidden=true;
}
async function createAndSharePdf(){
  const btn=$('printBtn'),ready=$('pdfReady');
  if(preparedPdfFile){
    try{
      const canShareFiles=navigator.share&&(!navigator.canShare||navigator.canShare({files:[preparedPdfFile]}));
      if(canShareFiles){
        await navigator.share({title:'Silo kvaliteedi hinnang',files:[preparedPdfFile]});
      }else{
        const a=document.createElement('a');a.href=preparedPdfBlobUrl;a.download=preparedPdfFile.name;a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();
      }
    }catch(e){if(e.name!=='AbortError')alert('PDF-i avamine ebaõnnestus: '+e.message)}
    return;
  }
  const old=btn.textContent;btn.disabled=true;btn.textContent='Valmistan PDF-i…';
  try{
    const blob=await makeAddressFreePdf(),name=pdfFileName();
    preparedPdfFile=new File([blob],name,{type:'application/pdf'});
    preparedPdfBlobUrl=URL.createObjectURL(blob);
    btn.textContent='Jaga / prindi valmis PDF';
    if(ready){ready.textContent='PDF on valmis. Puuduta nüüd nuppu „Jaga / prindi valmis PDF“ ja vali „Prindi“ või „Salvesta failidesse“.';ready.hidden=false}
  }catch(e){btn.textContent=old;alert('PDF-i valmistamine ebaõnnestus: '+e.message)}finally{btn.disabled=false}
}
$('columnCount').addEventListener('change',renderColumnAssignments);$('columnAssignments').addEventListener('change',syncSamplesFromAssignments);$('sampleSelect').addEventListener('change',e=>activateSample(e.target.value));$('calcBtn').addEventListener('click',calc);$('clearBtn').addEventListener('click',()=>{const sample=samples.find(s=>s.column===activeColumn);if(sample)sample.values={};renderFields();$('resultCard').hidden=true;setStatus('Praeguse prooviveeru väärtused tühjendatud.',0)});$('cameraInput').addEventListener('change',e=>handleFile(e.target.files[0],'image'));$('imageInput').addEventListener('change',e=>handleFile(e.target.files[0],'image'));$('pdfInput').addEventListener('change',e=>handleFile(e.target.files[0],'pdf'));$('printBtn').addEventListener('click',createAndSharePdf);$('shareBtn').addEventListener('click',async()=>{const text=`VESKIMEISTER – Silo kvaliteedi hinnang
${$('reportMeta').textContent}
Lõpphinne: ${$('finalGrade').textContent}
${$('scoreLine').textContent}
${$('milkLossMain').textContent}`;if(navigator.share){try{await navigator.share({title:'Silo kvaliteedi hinnang',text});return}catch(e){}}prompt('Kopeeri hinnangu tekst:',text)});
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(r=>r.update()).catch(()=>{});renderColumnAssignments();
