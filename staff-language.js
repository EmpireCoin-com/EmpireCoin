(()=>{"use strict";
const URL="https://wytdpyvzbrvzlymifpjq.supabase.co";
const KEY="sb_publishable_OkC6Yd_xYZ8IcC-MK2ViVA_JEPJ7iqk";
const words={
"OFFICIAL STAFF PORTAL":["رسمي کارکوونکو پورټل","د کارمندان رسمی"],
"STAFF":["کارکوونکي","کارمندان"],"SIGN OUT":["وتل","خروج"],
"Home":["کور","خانه"],"Profile":["پروفایل","پروفایل"],"Wallet":["والټ","کیف پول"],"Tasks":["دندې","وظایف"],"Staff":["کارکوونکي","کارمندان"],
"Staff Dashboard":["د کارکوونکو ډشبورډ","داشبورد کارمندان"],
"Staff Profile":["د کارکوونکو پروفایل","پروفایل کارمندان"],
"Staff Wallet":["د کارکوونکو والټ","کیف پول کارمندان"],
"Staff Tasks":["د کارکوونکو دندې","وظایف کارمندان"],
"My Profile":["زما پروفایل","پروفایل من"],
"My Wallet":["زما والټ","کیف پول من"],
"Available Tasks":["شته دندې","وظایف موجود"],
"Loading your secure staff profile…":["ستاسو خوندي کارکوونکي پروفایل لوډ کېږي…","در حال بارگذاری پروفایل امن کارمندی شما…"],
"Loading your secure staff account…":["ستاسو خوندي کارکوونکی حساب لوډ کېږي…","در حال بارگذاری حساب امن کارمندی شما…"],
"Verifying your account…":["ستاسو حساب تاییدېږي…","در حال تأیید حساب شما…"],
"Verifying your secure account…":["ستاسو خوندي حساب تاییدېږي…","در حال تأیید حساب امن شما…"],
"Verifying your secure staff account…":["ستاسو خوندي کارکوونکی حساب تاییدېږي…","در حال تأیید حساب امن کارمندی شما…"],
"Your personal staff information and verified Telegram identity.":["ستاسو شخصي کارکوونکي معلومات او تایید شوی ټیلیګرام هویت.","اطلاعات شخصی کارمندی و هویت تأییدشده تلگرام شما."],
"Your private internal EMPC account balance and transaction history.":["ستاسو د EMPC داخلي حساب شخصي بیلانس او د راکړو ورکړو تاریخچه.","موجودی خصوصی حساب داخلی EMPC و تاریخچه تراکنش‌های شما."],
"Complete an assigned task, then submit your work or proof for administrator review. EMPC rewards are credited only after approval.":["سپارل شوې دنده بشپړه کړئ، بیا خپل کار یا ثبوت د اډمین کتنې لپاره وسپارئ. د EMPC انعام یوازې له تایید وروسته جمع کېږي.","وظیفه واگذارشده را تکمیل کنید و سپس کار یا مدرک خود را برای بررسی مدیر ارسال کنید. پاداش EMPC فقط پس از تأیید واریز می‌شود."],
"Staff name":["د کارکوونکي نوم","نام کارمند"],"Staff registration":["د کارکوونکي ثبت","ثبت کارمند"],
"Your official staff profile record.":["ستاسو د رسمي کارکوونکي پروفایل ریکارډ.","رکورد پروفایل رسمی کارمندی شما."],
"Your personal referral code":["ستاسو شخصي د معرفۍ کوډ","کد معرفی شخصی شما"],
"COPY REFERRAL CODE":["د معرفۍ کوډ کاپي کړئ","کپی کد معرفی"],
"Internal EMPC wallet":["داخلي EMPC والټ","کیف پول داخلی EMPC"],
"Loading balance…":["بیلانس لوډ کېږي…","در حال بارگذاری موجودی…"],
"Checking wallet":["والټ کتل کېږي","در حال بررسی کیف پول"],
"Recent transactions":["وروستۍ راکړې ورکړې","تراکنش‌های اخیر"],
"TON blockchain wallet":["د TON بلاک‌چېن والټ","کیف پول بلاک‌چین TON"],
"Not connected":["نه دی نښلول شوی","متصل نیست"],
"Wallet ownership not verified":["د والټ مالکیت نه دی تایید شوی","مالکیت کیف پول تأیید نشده است"],
"PREPARE OWNERSHIP VERIFICATION":["د مالکیت تایید چمتو کړئ","آماده‌سازی تأیید مالکیت"],
"Verification & activation":["تایید او فعالول","تأیید و فعال‌سازی"],
"Unpaid":["نه دی ورکړل شوی","پرداخت‌نشده"],
"Your official staff profile and verified Telegram identity.":["ستاسو رسمي کارکوونکي پروفایل او تایید شوی ټیلیګرام هویت.","پروفایل رسمی کارمندی و هویت تأییدشده تلگرام شما."],
"Staff account":["د کارکوونکي حساب","حساب کارمند"],"Official staff":["رسمي کارکوونکی","کارمند رسمی"],
"Registration date":["د ثبت نېټه","تاریخ ثبت"],"Telegram ID":["د ټیلیګرام پېژندشمېره","شناسه تلگرام"],
"STAFF DASHBOARD":["د کارکوونکو ډشبورډ","داشبورد کارمندان"],
"Open staff portal · TON wallet connection and staff tools":["د کارکوونکو پورټل پرانیزئ · د TON والټ نښلول او د کارکوونکو وسایل","ورود به پورتال کارمندان · اتصال کیف پول TON و ابزارهای کارمندی"],
"Available internal balance":["شته داخلي بیلانس","موجودی داخلی قابل دسترس"],
"Transaction history":["د راکړو ورکړو تاریخچه","تاریخچه تراکنش‌ها"],
"Latest 25 transactions":["وروستۍ ۲۵ راکړې ورکړې","۲۵ تراکنش اخیر"],
"Loading transaction history…":["د راکړو ورکړو تاریخچه لوډ کېږي…","در حال بارگذاری تاریخچه تراکنش‌ها…"],
"Work details / proof (required)":["د کار جزئیات / ثبوت (اړین)","جزئیات کار / مدرک (الزامی)"],
"Proof link (optional)":["د ثبوت لینک (اختیاري)","پیوند مدرک (اختیاری)"],
"SUBMIT FOR REVIEW":["د کتنې لپاره وسپارئ","ارسال برای بررسی"],
"SUBMITTING…":["سپارل کېږي…","در حال ارسال…"],
"Reward approved. Check your EMPC Wallet for the credited transaction.":["انعام تایید شو. د جمع شوې راکړې ورکړې لپاره خپل EMPC والټ وګورئ.","پاداش تأیید شد. برای مشاهده تراکنش واریزشده، کیف پول EMPC خود را بررسی کنید."],
"There are no available tasks at the moment.":["اوس مهال کومه دنده نشته.","در حال حاضر وظیفه‌ای موجود نیست."],
"No transactions yet.":["تر اوسه راکړه ورکړه نشته.","هنوز تراکنشی وجود ندارد."],
"Your internal wallet is loaded securely.":["ستاسو داخلي والټ په خوندي ډول لوډ شو.","کیف پول داخلی شما با امنیت بارگذاری شد."],
"Your available tasks are loaded.":["شته دندې مو لوډ شوې.","وظایف موجود شما بارگذاری شدند."],
"Language":["ژبه","زبان"],"English":["انګلیسي","انگلیسی"],"Pashto":["پښتو","پشتو"],"Persian":["فارسی","فارسی"]
};
let lang="en",observer;
const dict=()=>lang==="en"?{}:Object.fromEntries(Object.entries(words).map(([k,v])=>[k,v[lang==="ps"?0:1]]));
function translate(root=document.body){
 const d=dict();
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 for(const n of nodes){const p=n.parentElement;if(!p||/^(SCRIPT|STYLE|TEXTAREA|INPUT|OPTION|SELECT)$/.test(p.tagName)||p.closest("[data-lang-ignore]"))continue;
 const raw=n.nodeValue,trim=raw.trim();if(d[trim])n.nodeValue=raw.replace(trim,d[trim]);}
 root.querySelectorAll("[placeholder],[title],[aria-label]").forEach(el=>["placeholder","title","aria-label"].forEach(a=>{const v=el.getAttribute(a);if(v&&d[v])el.setAttribute(a,d[v])}));
}
function setLanguage(next){lang=next;document.documentElement.lang=lang;document.documentElement.dir=lang==="en"?"ltr":"rtl";translate();const s=document.getElementById("empireLanguage");if(s)s.value=lang;}
async function init(){
 const db=window.supabase?.createClient(URL,KEY);if(!db)return;
 const {data:{session}}=await db.auth.getSession();if(!session)return;
 const {data:profile}=await db.from("staff_profiles").select("preferred_language").eq("user_id",session.user.id).maybeSingle();
 if(profile?.preferred_language)setLanguage(profile.preferred_language);
 const header=document.querySelector("header");if(!header)return;
 const wrap=document.createElement("label");wrap.style.cssText="display:flex;align-items:center;gap:6px;color:#f0d99c;font-size:11px;white-space:nowrap";
 wrap.textContent="🌐 ";
 const select=document.createElement("select");select.id="empireLanguage";select.setAttribute("aria-label","Language");
 select.style.cssText="background:#102641;color:#f0d99c;border:1px solid #d8b66a66;padding:8px 6px;font:inherit;max-width:112px";
 [["en","English"],["ps","پښتو"],["fa","فارسی"]].forEach(([v,t])=>{const o=document.createElement("option");o.value=v;o.textContent=t;select.append(o)});
 select.value=lang;select.addEventListener("change",async()=>{const chosen=select.value;const {error}=await db.from("staff_profiles").update({preferred_language:chosen}).eq("user_id",session.user.id);if(error){select.value=lang;alert("Could not save language preference: "+error.message);return}setLanguage(chosen)});
 wrap.append(select);header.append(wrap);
 observer=new MutationObserver(records=>records.forEach(r=>{if(r.type==="childList")r.addedNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE)translate(n.parentElement||document.body);else if(n.nodeType===Node.ELEMENT_NODE)translate(n)});else if(r.type==="characterData")translate(r.target.parentElement||document.body)}));
 observer.observe(document.body,{subtree:true,childList:true,characterData:true});
 translate();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();