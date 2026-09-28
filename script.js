let currentSlide = 0;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timerInterval = null;
let timeLeft = 30;

let testQuestions = [];

// ===============================
// YORDAMCHI — MASSIVNI ARALASHTIRISH
// ===============================

function shuffleArray(array) {

const copy = [...array];

for (let i = copy.length - 1; i > 0; i--) {

const j = Math.floor(Math.random() * (i + 1));    

[copy[i], copy[j]] = [copy[j], copy[i]];

}

return copy;

}

// ===============================
// DARS SLAYDLARI
// ===============================

const slides = [

{
title: "Nega darsni oldindan loyihalash kerak?",
label: "01 / MUAMMO",
type: "problem",

description: `    
    <p class="lead-text">    
        Bir xil mavzuni ikki xil o‘qituvchi turlicha tashkil qilishi    
        mumkin. Natijada o‘quvchilarning faolligi, tushunishi va    
        amaliy natijasi ham farq qiladi.    
    </p>    

    <p>    
        Shuning uchun zamonaviy dars faqat mavzuni tushuntirishdan    
        iborat emas. O‘qituvchi darsning <b>maqsadi</b>,    
        <b>mazmuni</b>, <b>metodi</b>, <b>vositalari</b>,    
        <b>o‘quvchi faoliyati</b> va <b>baholash mezonlarini</b>    
        oldindan loyihalashi kerak.    
    </p>    

    <div class="important-question">    
        <span>?</span>    
        <div>    
            <strong>Asosiy savol</strong>    
            <p>    
                Qanday qilib darsni shunday loyihalash mumkinki,    
                o‘quvchi bilimni nafaqat eshitsin, balki uni amalda qo‘llay olsin?    
            </p>    
        </div>    
    </div>    
`,    

visual: `    
    <div class="problem-visual">    

        <div class="visual-question">    
            <span class="question-mark">?</span>    
            <div>    
                <small>MUAMMO</small>    
                <strong>DARS NATIJASI<br>NIMAGA BOG‘LIQ?</strong>    
            </div>    
        </div>    

        <div class="lesson-flow">    

            <div class="flow-person teacher">    
                <div class="person-icon">👨‍🏫</div>    
                <span>O‘QITUVCHI</span>    
            </div>    

            <div class="flow-arrow">    
                <span></span>    
            </div>    

            <div class="flow-center">    
                <div class="center-ring">    
                    <div class="center-core">DARS</div>    
                </div>    
                <small>LOYIHA</small>    
            </div>    

            <div class="flow-arrow">    
                <span></span>    
            </div>    

            <div class="flow-person student">    
                <div class="person-icon">👨‍🎓</div>    
                <span>O‘QUVCHI</span>    
            </div>    

        </div>    

        <div class="visual-bottom">    
            <div class="mini-card">    
                <b>01</b>    
                <span>Maqsad</span>    
            </div>    

            <div class="mini-card">    
                <b>02</b>    
                <span>Jarayon</span>    
            </div>    

            <div class="mini-card">    
                <b>03</b>    
                <span>Natija</span>    
            </div>    
        </div>    

    </div>    
`

},

{
title: "Ta’lim texnologiyasi nima?",
label: "02 / TUSHUNCHA",
type: "concept",

description: `    
    <p class="lead-text">    
        Ta’lim texnologiyasi — ta’lim maqsadiga erishish uchun    
        o‘qituvchi va o‘quvchi faoliyatini oldindan rejalashtirish,    
        tashkil etish va nazorat qilish tizimidir.    
    </p>    

    <p>    
        Uning asosida uchta muhim element mavjud:    
        <b>maqsad</b>, <b>jarayon</b> va <b>natija</b>.    
        Ular bir-biri bilan uzviy bog‘langan.    
    </p>    
`,    

visual: `    
    <div class="concept-visual">    

        <div class="concept-center">    
            <div class="concept-pulse"></div>    
            <strong>TA’LIM</strong>    
            <strong>TEXNOLOGIYASI</strong>    
        </div>    

        <button class="concept-node node-top"    
            onclick="showConceptInfo('Maqsad')">    
            🎯    
            <span>MAQSAD</span>    
        </button>    

        <button class="concept-node node-left"    
            onclick="showConceptInfo('Jarayon')">    
            ⚙    
            <span>JARAYON</span>    
        </button>    

        <button class="concept-node node-right"    
            onclick="showConceptInfo('Natija')">    
            ✓    
            <span>NATIJA</span>    
        </button>    

        <div id="conceptInfo" class="concept-info">    
            Elementlardan birini tanlang    
        </div>    

    </div>    
`

},

{
title: "Ta’lim texnologiyalarining asosiy turlari",
label: "03 / METOD",
type: "methods",

description: `    
    <p class="lead-text">    
        Har bir dars uchun bitta universal metod mavjud emas.    
        Metod darsning maqsadi, mazmuni va o‘quvchi faoliyatiga    
        mos ravishda tanlanadi.    
    </p>    

    <p>    
        Ayniqsa texnologik ta’limda nazariy bilimni amaliy faoliyat    
        bilan bog‘lash muhim hisoblanadi.    
    </p>    
`,    

visual: `    
    <div class="methods-visual">    

        <div class="method-title">    
            VAZIYATNI TANLANG    
        </div>    

        <div class="scenario-grid">    

            <button onclick="selectMethod('Muammoli ta’lim')">    
                <span>?</span>    
                <b>Muammo mavjud</b>    
                <small>O‘quvchi yechim izlaydi</small>    
            </button>    

            <button onclick="selectMethod('Hamkorlikdagi ta’lim')">    
                <span>👥</span>    
                <b>Guruh bilan ishlash</b>    
                <small>Birgalikda faoliyat</small>    
            </button>    

            <button onclick="selectMethod('Loyihaviy ta’lim')">    
                <span>◈</span>    
                <b>Loyiha yaratish</b>    
                <small>Amaliy mahsulot</small>    
            </button>    

            <button onclick="selectMethod('Amaliy ta’lim')">    
                <span>⚙</span>    
                <b>Amaliy ko‘nikma</b>    
                <small>Harakat orqali o‘rganish</small>    
            </button>    

        </div>    

        <div id="methodResult" class="method-result">    
            Vaziyatni tanlang    
        </div>    

    </div>    
`

},

{
title: "Dars rejasining tuzilishi",
label: "04 / LOYIHALASH",
type: "constructor",

description: `    
    <p class="lead-text">    
        Dars rejasi tasodifiy tuzilmaydi. Uning har bir qismi    
        oldingi bosqich bilan mantiqan bog‘lanadi.    
    </p>    

    <p>    
        Maqsad aniqlanadi → mazmun tanlanadi → metod belgilanadi →    
        vositalar tayyorlanadi → amaliy topshiriq beriladi →    
        natija baholanadi.    
    </p>    
`,    

visual: `
    <div class="constructor-visual">

        <div class="constructor-label">
            DARSNI O‘ZINGIZ QURING
        </div>

        <p style="
            text-align:center;
            margin-bottom:20px;
            opacity:.75;
        ">
            Bosqichlardan birini tanlang
        </p>

        <div class="constructor-track">

            <button
                class="construct-block"
                onclick="showLessonPart('Maqsad')"
            >
                <b>01</b>
                <div>🎯</div>
                <span>MAQSAD</span>
            </button>

            <div class="construct-line"></div>

            <button
                class="construct-block"
                onclick="showLessonPart('Mazmun')"
            >
                <b>02</b>
                <div>📚</div>
                <span>MAZMUN</span>
            </button>

            <div class="construct-line"></div>

            <button
                class="construct-block"
                onclick="showLessonPart('Metod')"
            >
                <b>03</b>
                <div>⚙</div>
                <span>METOD</span>
            </button>

            <div class="construct-line"></div>

            <button
                class="construct-block"
                onclick="showLessonPart('Vosita')"
            >
                <b>04</b>
                <div>🛠</div>
                <span>VOSITA</span>
            </button>

        </div>

        <div
            id="lessonPartInfo"
            class="method-result"
        >
            Bosqichni tanlang →
        </div>

        <div class="constructor-bottom">

            <button onclick="showLessonPart('Topshiriq')">
                TOPSHIRIQ
            </button>

            <button onclick="showLessonPart('Baholash')">
                BAHOLASH
            </button>

            <strong>
                → DARS NATIJASI
            </strong>

        </div>

    </div>
`

},

{
title: "Texnologik xarita",
label: "05 / AMALIY LOYIHA",
type: "map",

description: `    
    <p class="lead-text">    
        Texnologik xarita dars jarayonini bosqichlar bo‘yicha    
        oldindan ko‘rish imkonini beradi.    
    </p>    

    <p>    
        Unda o‘qituvchi nima qiladi, o‘quvchi nima qiladi,    
        qanday metod va vositalardan foydalaniladi hamda    
        qanday natija kutilishi belgilanadi.    
    </p>    
`,    

visual: `    
    <div class="map-visual">    

        <div class="map-header">    
            <span>BOSQICH</span>    
            <span>O‘QITUVCHI</span>    
            <span>O‘QUVCHI</span>    
        </div>    

        <div class="map-row" onclick="openMapRow(this)">    
            <b>01</b>    
            <span>Kirish</span>    
            <span>Motivatsiya beradi</span>    
            <span>Faol qatnashadi</span>    
        </div>    

        <div class="map-row" onclick="openMapRow(this)">    
            <b>02</b>    
            <span>Yangi bilim</span>    
            <span>Tushuntiradi</span>    
            <span>Tahlil qiladi</span>    
        </div>    

        <div class="map-row" onclick="openMapRow(this)">    
            <b>03</b>    
            <span>Amaliy ish</span>    
            <span>Yo‘naltiradi</span>    
            <span>Bajaradi</span>    
        </div>    

        <div class="map-row" onclick="openMapRow(this)">    
            <b>04</b>    
            <span>Nazorat</span>    
            <span>Baholaydi</span>    
            <span>Natijasini ko‘rsatadi</span>    
        </div>    

    </div>    
`

},

{
title: "Texnologik ta’limga moslashtirish",
label: "06 / TEXNOLOGIK TA’LIM",
type: "technology",

description: `    
    <p class="lead-text">    
        “Metallar va metallmaslarga ishlov berishni o‘qitish    
        metodikasi” fanida dars nazariya va amaliy faoliyat    
        birligiga asoslanadi.    
    </p>    

    <p>    
        O‘quvchi avval material va texnologik jarayon haqida    
        bilim oladi, keyin o‘qituvchi namoyishini kuzatadi,    
        amaliy topshiriqni bajaradi va yakunda natijasi baholanadi.    
    </p>    
`,    

visual: `    
    <div class="technology-visual">    

        <!-- RASM -->    
        <div style="    
            position:relative;    
            width:min(100%, 430px);    
            margin:0 auto 25px;    
            border-radius:20px;    
            overflow:hidden;    
            border:1px solid rgba(255,255,255,.15);    
            box-shadow:0 15px 45px rgba(0,0,0,.35);    
        ">    

            <img    
                src="images/interaktiv-dars.jpg"    
                alt="Texnologik ta’lim jarayoni"    
                style="    
                    width:100%;    
                    aspect-ratio:16/9;    
                    object-fit:cover;    
                    display:block;    
                "    
            >    

            <div style="    
                position:absolute;    
                left:0;    
                right:0;    
                bottom:0;    
                padding:35px 18px 15px;    
                background:linear-gradient(    
                    transparent,    
                    rgba(0,0,0,.85)    
                );    
            ">    
                <strong style="    
                    display:block;    
                    font-size:14px;    
                    letter-spacing:2px;    
                ">    
                    AMALIY TA’LIM    
                </strong>    

                <span style="    
                    display:block;    
                    margin-top:4px;    
                    font-size:12px;    
                    opacity:.75;    
                ">    
                    Texnologik ta’lim jarayoni    
                </span>    
            </div>    

        </div>    


        <!-- ASOSIY ANIMATSIYA -->    

        <div class="material-orbit">    

            <div class="metal-core">⚙</div>    

            <div class="orbit orbit-1">    
                <span>METALL</span>    
            </div>    

            <div class="orbit orbit-2">    
                <span>ASBOB</span>    
            </div>    

            <div class="orbit orbit-3">    
                <span>AMALIYOT</span>    
            </div>    

        </div>    


        <!-- TEXNOLOGIK JARAYON -->    

        <div class="tech-process">    

            <div class="tech-step">    
                <b>01</b>    
                <span>NAZARIYA</span>    
            </div>    

            <i>→</i>    

            <div class="tech-step">    
                <b>02</b>    
                <span>NAMOYISH</span>    
            </div>    

            <i>→</i>    

            <div class="tech-step">    
                <b>03</b>    
                <span>AMALIY ISH</span>    
            </div>    

            <i>→</i>    

            <div class="tech-step">    
                <b>04</b>    
                <span>NAZORAT</span>    
            </div>    

        </div>    

    </div>    
`

},

{
title: "Darsni o‘zimiz tuzamiz",
label: "07 / XULOSA",
type: "final",

description: `    
    <p class="lead-text">    
        Endi dars loyihachisi — siz.    
    </p>    

    <p>    
        Yaxshi dars uchun asosiy elementlarni bir tizimga    
        birlashtiring: maqsad, metod, vosita, amaliy topshiriq    
        va baholash.    
    </p>    

    <div class="final-message">    
        <strong>DARS REJASI = MAQSAD + JARAYON + NATIJA</strong>    
    </div>    
`,    

visual: `    
    <div class="final-visual">    

        <div class="final-title">    
            DARS LOYIHASI    
        </div>    

        <div class="final-flow">    

            <div>🎯<span>MAQSAD</span></div>    
            <i>→</i>    
            <div>⚙<span>METOD</span></div>    
            <i>→</i>    
            <div>🛠<span>AMALIYOT</span></div>    
            <i>→</i>    
            <div>✓<span>BAHOLASH</span></div>    

        </div>    

        <div class="ready-box">    
            <span>✓</span>    
            <strong>DARS REJASI TAYYOR</strong>    
        </div>    

    </div>    
`

}

];

// ======================================================
// 30 TA TEST
// 10 OSON + 10 O‘RTA + 10 QIYIN
// ======================================================

const questions = [

// ==========================
// OSON — 1-10
// ==========================

{
difficulty: "easy",
question: "Ta’lim texnologiyasining asosiy maqsadi nima?",
answers: [
"Faqat o‘qituvchini nazorat qilish",
"Ta’lim jarayonini maqsadli va samarali tashkil etish",
"Faqat dars vaqtini qisqartirish",
"Faqat baho qo‘yish"
],
correct: 1
},

{
difficulty: "easy",
question: "Dars rejasini tuzishda birinchi navbatda nima belgilanadi?",
answers: [
"Maqsad",
"Uyga vazifa",
"Tanaffus vaqti",
"Sinf jihozlari"
],
correct: 0
},

{
difficulty: "easy",
question: "Texnologik xaritada kimlarning faoliyati aks ettiriladi?",
answers: [
"Faqat direktorning",
"Faqat o‘qituvchining",
"O‘qituvchi va o‘quvchining",
"Faqat ota-onaning"
],
correct: 2
},

{
difficulty: "easy",
question: "Texnologik ta’limda nazariy bilimdan keyin nima muhim?",
answers: [
"Amaliy faoliyat",
"Darsni to‘xtatish",
"Faqat ma’ruza",
"Faqat yozma ish"
],
correct: 0
},

{
difficulty: "easy",
question: "Dars natijasi nimaga bog‘liq?",
answers: [
"Faqat darslikka",
"Maqsad, jarayon va baholashning uyg‘unligiga",
"Faqat o‘quvchiga",
"Faqat texnikaga"
],
correct: 1
},

{
difficulty: "easy",
question: "Dars maqsadi nimani belgilaydi?",
answers: [
"Dars yakunida qanday natijaga erishilishi kerakligini",
"Tanaffus vaqtini",
"O‘qituvchining ish vaqtini",
"Sinf xonasining rangini"
],
correct: 0
},

{
difficulty: "easy",
question: "Ta’lim jarayonining asosiy ishtirokchilaridan biri kim?",
answers: [
"O‘quvchi",
"Faqat direktor",
"Faqat qorovul",
"Faqat ota-ona"
],
correct: 0
},

{
difficulty: "easy",
question: "Baholashning asosiy vazifasi nima?",
answers: [
"O‘quvchi natijasini aniqlash",
"Darsni bekor qilish",
"O‘quvchini jazolash",
"Tanaffusni uzaytirish"
],
correct: 0
},

{
difficulty: "easy",
question: "Metod nima uchun tanlanadi?",
answers: [
"Ta’lim maqsadiga erishish uchun",
"Faqat vaqt o‘tkazish uchun",
"Faqat daftar to‘ldirish uchun",
"Faqat baho qo‘yish uchun"
],
correct: 0
},

{
difficulty: "easy",
question: "Texnologik ta’limda amaliy mashg‘ulotning ahamiyati nimada?",
answers: [
"Nazariy bilimni amaliy ko‘nikma bilan bog‘laydi",
"Darsni qisqartiradi",
"Faqat nazoratni bekor qiladi",
"O‘quvchini darsdan ozod qiladi"
],
correct: 0
},

// ==========================
// O‘RTA — 11-20
// ==========================

{
difficulty: "medium",
question: "Dars rejasida maqsad va baholash o‘rtasidagi bog‘liqlik nimada?",
answers: [
"Baholash belgilangan maqsadga erishish darajasini ko‘rsatadi",
"Ular bir-biriga bog‘liq emas",
"Baholash faqat dars boshida bo‘ladi",
"Maqsad faqat o‘qituvchi uchun kerak"
],
correct: 0
},

{
difficulty: "medium",
question: "Texnologik xaritaning asosiy afzalligi nima?",
answers: [
"Dars jarayonini bosqichma-bosqich rejalashtirish imkonini beradi",
"Faqat baholarni saqlaydi",
"Faqat uyga vazifani yozadi",
"Darslik o‘rnini to‘liq egallaydi"
],
correct: 0
},

{
difficulty: "medium",
question: "Muammoli ta’lim metodida o‘quvchi qanday faoliyat olib boradi?",
answers: [
"Muammoga yechim izlaydi",
"Faqat o‘qituvchini tinglaydi",
"Faqat matn ko‘chiradi",
"Faqat tayyor javobni yodlaydi"
],
correct: 0
},

{
difficulty: "medium",
question: "Loyihaviy ta’limning muhim belgisi qaysi?",
answers: [
"Muayyan loyiha yoki mahsulot yaratish",
"Faqat nazariy ma’ruza",
"Faqat test ishlash",
"Faqat o‘qituvchi nutqi"
],
correct: 0
},

{
difficulty: "medium",
question: "Hamkorlikdagi ta’limning asosiy xususiyati nima?",
answers: [
"O‘quvchilarning birgalikda faoliyat olib borishi",
"Faqat individual ishlash",
"Faqat o‘qituvchi faoliyati",
"Faqat yozma nazorat"
],
correct: 0
},

{
difficulty: "medium",
question: "Texnologik ta’limda namoyish bosqichi nima uchun kerak?",
answers: [
"Amaliy harakatni to‘g‘ri bajarish usulini ko‘rsatish uchun",
"O‘quvchilarni baholashni bekor qilish uchun",
"Faqat vaqtni to‘ldirish uchun",
"Faqat nazariy matn o‘qish uchun"
],
correct: 0
},

{
difficulty: "medium",
question: "O‘qituvchi amaliy mashg‘ulot vaqtida asosan qanday rol bajaradi?",
answers: [
"Yo‘naltiradi, tushuntiradi va nazorat qiladi",
"O‘quvchi o‘rniga barcha ishni bajaradi",
"Faqat kuzatib turadi",
"Darsni to‘liq o‘quvchiga topshiradi"
],
correct: 0
},

{
difficulty: "medium",
question: "O‘quvchi faoliyatini dars rejasida ko‘rsatish nima uchun muhim?",
answers: [
"O‘quvchining darsdagi faol ishtirokini oldindan loyihalash uchun",
"Faqat o‘qituvchini nazorat qilish uchun",
"Faqat dars vaqtini belgilash uchun",
"Faqat xona jihozlarini yozish uchun"
],
correct: 0
},

{
difficulty: "medium",
question: "Ta’lim vositalari qanday tanlanishi kerak?",
answers: [
"Dars maqsadi va mazmuniga mos ravishda",
"Faqat eng qimmat vosita tanlanadi",
"Faqat o‘qituvchi xohishiga ko‘ra",
"Har doim bir xil vosita ishlatiladi"
],
correct: 0
},

{
difficulty: "medium",
question: "Nazariya va amaliyotning birligi nimani ta’minlaydi?",
answers: [
"Bilimni amaliy ko‘nikmaga aylantirish imkonini",
"Faqat dars vaqtini qisqartirishni",
"Faqat baholarni oshirishni",
"Nazariyani butunlay bekor qilishni"
],
correct: 0
},

// ==========================
// QIYIN — 21-30
// ==========================

{
difficulty: "hard",
question: "Dars maqsadi, metod va baholash o‘rtasidagi mantiqiy uyg‘unlik qanday natija beradi?",
answers: [
"Ta’lim jarayonining tizimliligi va natijadorligini oshiradi",
"Faqat dars davomiyligini uzaytiradi",
"Faqat nazariy material hajmini oshiradi",
"O‘quvchi faoliyatini kamaytiradi"
],
correct: 0
},

{
difficulty: "hard",
question: "Agar dars maqsadi amaliy ko‘nikma shakllantirish bo‘lsa, qaysi faoliyat ustuvor bo‘lishi kerak?",
answers: [
"Amaliy topshiriq va bajarilgan ishni baholash",
"Faqat ma’ruza tinglash",
"Faqat darslikni o‘qish",
"Faqat og‘zaki savol-javob"
],
correct: 0
},

{
difficulty: "hard",
question: "Texnologik xaritada o‘qituvchi va o‘quvchi faoliyatining parallel ko‘rsatilishi nimani ta’minlaydi?",
answers: [
"Darsdagi subyektlar faoliyatining o‘zaro bog‘liqligini ko‘rsatadi",
"Faqat o‘qituvchining faoliyatini baholaydi",
"O‘quvchi faoliyatini cheklaydi",
"Faqat vaqt taqsimotini ko‘rsatadi"
],
correct: 0
},

{
difficulty: "hard",
question: "Metod tanlashda faqat mavzuga emas, yana nimaga e’tibor berish kerak?",
answers: [
"Maqsad, o‘quvchi imkoniyati va kutilayotgan natijaga",
"Faqat darslik hajmiga",
"Faqat sinf xonasining kattaligiga",
"Faqat o‘qituvchining xohishiga"
],
correct: 0
},

{
difficulty: "hard",
question: "Texnologik ta’lim darsida xavfsizlik qoidalarini rejalashtirish qaysi jihat bilan bog‘liq?",
answers: [
"Amaliy faoliyatni xavfsiz va tartibli tashkil etish bilan",
"Faqat baholash bilan",
"Faqat nazariy ma’ruza bilan",
"Faqat uyga vazifa bilan"
],
correct: 0
},

{
difficulty: "hard",
question: "Metallga ishlov berish darsida o‘quvchining faqat tayyor mahsulotini baholash qanday kamchilikka olib kelishi mumkin?",
answers: [
"Jarayon davomida shakllangan ko‘nikma va xavfsizlikka rioya qilish e’tibordan chetda qolishi mumkin",
"Nazariya ortiqcha bo‘lib qoladi",
"Maqsad avtomatik ravishda yo‘qoladi",
"Texnologik xarita kerak bo‘lmay qoladi"
],
correct: 0
},

{
difficulty: "hard",
question: "Dars loyihasida kutilayotgan natija qanday bo‘lishi kerak?",
answers: [
"Aniq, kuzatiladigan va baholash mumkin bo‘lgan",
"Umumiy va noaniq",
"Faqat o‘qituvchiga tushunarli",
"Faqat nazariy ko‘rinishda"
],
correct: 0
},

{
difficulty: "hard",
question: "Agar tanlangan metod dars maqsadiga mos kelmasa, qanday muammo yuzaga kelishi mumkin?",
answers: [
"Faoliyat bilan kutilayotgan natija o‘rtasida nomuvofiqlik paydo bo‘ladi",
"Dars avtomatik ravishda samarali bo‘ladi",
"Baholashga ehtiyoj qolmaydi",
"O‘quvchi faoliyati har doim oshadi"
],
correct: 0
},

{
difficulty: "hard",
question: "Texnologik ta’limda “nazariya → namoyish → amaliyot → nazorat” ketma-ketligi qanday pedagogik mantiqqa ega?",
answers: [
"Bilimni tushunishdan uni amalda qo‘llash va natijani tekshirishga olib boradi",
"Faqat nazoratni kuchaytiradi",
"Nazariyani amaliyotdan ajratadi",
"Faqat o‘qituvchi faoliyatini kuchaytiradi"
],
correct: 0
},

{
difficulty: "hard",
question: "Dars loyihasining samaradorligini aniqlashda eng muhim mezonlardan biri nima?",
answers: [
"Rejalashtirilgan maqsad va real o‘quv natijasining mosligi",
"Slaydlar sonining ko‘pligi",
"Darslikdagi sahifalar soni",
"O‘qituvchi qancha ko‘p gapirgani"
],
correct: 0
}

];

// ======================================================
// EKRAN ALMASHTIRISH
// ======================================================

function showScreen(screenId) {

document.querySelectorAll(".screen").forEach(screen => {
screen.classList.remove("active");
});

const target = document.getElementById(screenId);

if (target) {
target.classList.add("active");
}

window.scrollTo({
top: 0,
behavior: "smooth"
});

}

// ======================================================
// DARSNI BOSHLASH
// ======================================================

function startLesson() {

currentSlide = 0;

showScreen("lesson");

renderSlide();

}

// ======================================================
// SLAYDNI CHIZISH
// ======================================================

function renderSlide() {

const slide = slides[currentSlide];

document.getElementById("slideNumber").textContent =
${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")};

document.getElementById("progressBar").style.width =
${((currentSlide + 1) / slides.length) * 100}%;

const lessonLabel =
document.querySelector("#lesson .section-label");

if (lessonLabel) {
lessonLabel.textContent = slide.label;
}

document.getElementById("slideTitle").textContent =
slide.title;

document.getElementById("slideDescription").innerHTML =
slide.description;

document.getElementById("slideVisual").innerHTML =
slide.visual;

document.getElementById("lesson").className =
screen active slide-${slide.type};

const previousButton =
document.querySelector(".lesson-navigation .nav-btn");

const nextButton =
document.querySelector(".lesson-navigation .next");

if (previousButton) {
previousButton.disabled = currentSlide === 0;
}

if (nextButton) {

if (currentSlide === slides.length - 1) {    

    nextButton.textContent = "⚡ TESTGA O‘TISH";    

    nextButton.onclick = startTest;    

} else {    

    nextButton.textContent = "KEYINGI →";    

    nextButton.onclick = nextSlide;    
}

}

const visual =
document.getElementById("slideVisual");

visual.classList.remove("animate-slide");

void visual.offsetWidth;

visual.classList.add("animate-slide");

}

// ======================================================
// KEYINGI SLAYD
// ======================================================

function nextSlide() {

if (currentSlide < slides.length - 1) {

currentSlide++;    

renderSlide();

}

}

// ======================================================
// OLDINGI SLAYD
// ======================================================

function previousSlide() {

if (currentSlide > 0) {

currentSlide--;    

renderSlide();

}

}

// ======================================================
// 2-SLAYD — TUSHUNCHA
// ======================================================

function showConceptInfo(type) {

const box =
document.getElementById("conceptInfo");

if (!box) return;

const information = {

"Maqsad": `    
    <strong>🎯 MAQSAD</strong>    
    <p>    
        Dars yakunida o‘quvchi qanday bilim, ko‘nikma    
        yoki kompetensiyaga ega bo‘lishi kerakligini belgilaydi.    
    </p>    
`,    

"Jarayon": `    
    <strong>⚙ JARAYON</strong>    
    <p>    
        Maqsadga erishish uchun metodlar, vositalar,    
        topshiriqlar va o‘quvchi faoliyati tashkil etiladi.    
    </p>    
`,    

"Natija": `    
    <strong>✓ NATIJA</strong>    
    <p>    
        Dars yakunida o‘quvchining bilim va amaliy    
        ko‘nikmalari orqali erishilgan natija aniqlanadi.    
    </p>    
`

};

box.innerHTML = information[type];

box.classList.remove("show");

void box.offsetWidth;

box.classList.add("show");

}

// ======================================================
// 3-SLAYD — METOD TANLASH
// ======================================================

function selectMethod(method) {

const result =
document.getElementById("methodResult");

if (!result) return;

result.innerHTML = `
<span>✓</span>

<div>    
    <small>MOS METOD</small>    
    <strong>${method}</strong>    
</div>

`;

result.classList.add("selected");

}

// ======================================================
// 5-SLAYD — TEXNOLOGIK XARITA
// ======================================================

function openMapRow(row) {

document.querySelectorAll(".map-row").forEach(item => {
item.classList.remove("opened");
});

row.classList.add("opened");

}

// ======================================================
// TESTNI SHAKLLANTIRISH
// ======================================================

function createTestQuestions() {

const easyQuestions =
shuffleArray(
questions.filter(q => q.difficulty === "easy")
).slice(0, 3);

const mediumQuestions =
shuffleArray(
questions.filter(q => q.difficulty === "medium")
).slice(0, 4);

const hardQuestions =
shuffleArray(
questions.filter(q => q.difficulty === "hard")
).slice(0, 3);

const selectedQuestions = [
...easyQuestions,
...mediumQuestions,
...hardQuestions
];

testQuestions = shuffleArray(selectedQuestions).map(question => {

const answerObjects =    
    question.answers.map((answer, index) => ({    
        text: answer,    
        correct: index === question.correct    
    }));    

const shuffledAnswers =    
    shuffleArray(answerObjects);    

return {    
    ...question,    

    answers:    
        shuffledAnswers.map(answer => answer.text),    

    correct:    
        shuffledAnswers.findIndex(    
            answer => answer.correct    
        )    
};

});

}

// ======================================================
// TESTNI BOSHLASH
// ======================================================

function startTest() {

clearInterval(timerInterval);

currentQuestion = 0;
score = 0;
selectedAnswer = null;

createTestQuestions();

showScreen("test");

loadQuestion();

}

// ======================================================
// SAVOLNI YUKLASH
// ======================================================

function loadQuestion() {

clearInterval(timerInterval);

const question =
testQuestions[currentQuestion];

if (!question) {
showResult();
return;
}

document.getElementById("questionNumber").textContent =
SAVOL ${currentQuestion + 1} / ${testQuestions.length};

document.getElementById("questionText").textContent =
question.question;

const answersBox =
document.getElementById("answers");

answersBox.innerHTML = "";

selectedAnswer = null;

question.answers.forEach((answer, index) => {

const button =    
    document.createElement("button");    

button.className = "answer";    

button.innerHTML = `    
    <span>${String.fromCharCode(65 + index)}</span>    
    ${answer}    
`;    

button.onclick = () =>    
    selectAnswer(index);    

answersBox.appendChild(button);

});

document.getElementById("feedback").textContent = "";

document.getElementById("confirmButton").disabled = false;

startTimer();

}

// ======================================================
// JAVOB TANLASH
// ======================================================

function selectAnswer(index) {

selectedAnswer = index;

document.querySelectorAll(".answer").forEach((button, i) => {

button.classList.toggle(    
    "selected",    
    i === index    
);

});

}

// ======================================================
// JAVOBNI TASDIQLASH
// ======================================================

function confirmAnswer() {

if (selectedAnswer === null) {

document.getElementById("feedback").textContent =    
    "Avval javoblardan birini tanlang.";    

return;

}

clearInterval(timerInterval);

const correct =
testQuestions[currentQuestion].correct;

if (selectedAnswer === correct) {

score += 10;    

document.getElementById("feedback").textContent =    
    "✓ To‘g‘ri javob!";

} else {

document.getElementById("feedback").textContent =    
    "✕ Noto‘g‘ri javob.";

}

document.getElementById("confirmButton").disabled = true;

document.querySelectorAll(".answer").forEach((button, index) => {

if (index === correct) {    

    button.classList.add("correct");    
}    

if (    
    index === selectedAnswer &&    
    selectedAnswer !== correct    
) {    

    button.classList.add("wrong");    
}

});

setTimeout(() => {

currentQuestion++;    

if (    
    currentQuestion <    
    testQuestions.length    
) {    

    loadQuestion();    

} else {    

    showResult();    
}

}, 1200);

}

// ======================================================
// TIMER
// ======================================================

function startTimer() {

timeLeft = 30;

document.getElementById("timer").textContent =
timeLeft;

timerInterval = setInterval(() => {

timeLeft--;    

document.getElementById("timer").textContent =    
    timeLeft;    

if (timeLeft <= 0) {    

    timeIsUp();    
}

}, 1000);

}

// ======================================================
// VAQT TUGADI
// ======================================================

function timeIsUp() {

clearInterval(timerInterval);

document.getElementById("feedback").textContent =
"⏱ Vaqt tugadi!";

document.getElementById("confirmButton").disabled = true;

setTimeout(() => {

currentQuestion++;    

if (    
    currentQuestion <    
    testQuestions.length    
) {    

    loadQuestion();    

} else {    

    showResult();    
}

}, 1000);

}

// ======================================================
// NATIJA
// ======================================================

function showResult() {

clearInterval(timerInterval);

showScreen("result");

document.getElementById("score").textContent =
score;

let message = "";

if (score >= 90) {

message =    
    "Mavzu bo‘yicha bilimlaringiz juda yaxshi shakllangan.";

} else if (score >= 70) {

message =    
    "Mavzuning asosiy tushunchalarini yaxshi o‘zlashtirgansiz.";

} else if (score >= 50) {

message =    
    "Asosiy tushunchalar mavjud, ayrim jihatlarni takrorlash foydali.";

} else {

message =    
    "Mavzuni yana bir bor ko‘rib chiqish va takrorlash tavsiya etiladi.";

}

document.getElementById("resultText").textContent =
message;

}

// ======================================================
// YAKUNIY EKRAN
// ======================================================

function showFinal() {

showScreen("final");

}

// ======================================================
// QAYTA BOSHLASH
// ======================================================

function restartLesson() {

clearInterval(timerInterval);

currentSlide = 0;
currentQuestion = 0;
score = 0;
selectedAnswer = null;
testQuestions = [];

showScreen("home");

}

// ======================================================
// KLAVIATURA BOSHQARUVI
// ======================================================

document.addEventListener("keydown", event => {

const lesson =
document.getElementById("lesson");

if (
!lesson ||
!lesson.classList.contains("active")
) {

return;

}

if (event.key === "ArrowRight") {

nextSlide();

}

if (event.key === "ArrowLeft") {

previousSlide();

}

});
