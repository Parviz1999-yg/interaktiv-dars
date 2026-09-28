/* =========================================================
   INTERAKTIV DARS
   script.js
   ========================================================= */


/* =========================================================
   1. GLOBAL HOLAT
   ========================================================= */

let currentSlide = 0;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

let timerInterval = null;
let timeLeft = 30;

let testQuestions = [];


/* =========================================================
   2. YORDAMCHI FUNKSIYA
   MASSIVNI TASODIFIY ARALASHTIRISH
   ========================================================= */

function shuffleArray(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [newArray[i], newArray[j]] =
            [newArray[j], newArray[i]];
    }

    return newArray;
}


/* =========================================================
   3. DARS SLAYDLARI
   ========================================================= */

const slides = [

    /* -----------------------------------------------------
       1-SLAYD
       ----------------------------------------------------- */

    {
        type: "problem",

        label: "01 / MUAMMO",

        title:
            "Nega darsni oldindan loyihalash kerak?",

        description: `
            Samarali dars tasodifan yuzaga kelmaydi.
            O‘qituvchi darsning maqsadi, mazmuni, metodlari,
            vositalari va kutilayotgan natijasini oldindan
            belgilab olishi kerak.
        `,

        visual: `
            <div class="problem-visual">

                <div class="problem-circle">
                    <span>?</span>
                </div>

                <div class="problem-lines">

                    <div class="mini-card">
                        <strong>MAQSAD</strong>
                        <span>Qayerga boramiz?</span>
                    </div>

                    <div class="mini-card">
                        <strong>JARAYON</strong>
                        <span>Qanday boramiz?</span>
                    </div>

                    <div class="mini-card">
                        <strong>NATIJA</strong>
                        <span>Nimaga erishamiz?</span>
                    </div>

                </div>

            </div>
        `
    },


    /* -----------------------------------------------------
       2-SLAYD
       ----------------------------------------------------- */

    {
        type: "concept",

        label: "02 / TUSHUNCHA",

        title:
            "Ta’lim texnologiyasi nima?",

        description: `
            Ta’lim texnologiyasi — belgilangan ta’limiy
            maqsadga erishish uchun mazmun, metod, vosita,
            o‘qituvchi va o‘quvchi faoliyatini tizimli
            tashkil etish jarayonidir.
        `,

        visual: `
            <div class="concept-visual">

                <div
                    class="concept-node"
                    onclick="showConceptInfo('goal')"
                >
                    <span>01</span>
                    <strong>MAQSAD</strong>
                    <small>Nimani o‘rganamiz?</small>
                </div>

                <div
                    class="concept-node"
                    onclick="showConceptInfo('content')"
                >
                    <span>02</span>
                    <strong>MAZMUN</strong>
                    <small>Nimani o‘rgatamiz?</small>
                </div>

                <div
                    class="concept-node"
                    onclick="showConceptInfo('method')"
                >
                    <span>03</span>
                    <strong>METOD</strong>
                    <small>Qanday o‘rgatamiz?</small>
                </div>

                <div
                    class="concept-node"
                    onclick="showConceptInfo('result')"
                >
                    <span>04</span>
                    <strong>NATIJA</strong>
                    <small>Nimaga erishamiz?</small>
                </div>

            </div>

            <div
                id="conceptInfo"
                class="concept-info"
                style="display:none;"
            ></div>
        `
    },


    /* -----------------------------------------------------
       3-SLAYD
       ----------------------------------------------------- */

    {
        type: "methods",

        label: "03 / METOD",

        title:
            "Ta’lim texnologiyalarining asosiy turlari",

        description: `
            Ta’lim jarayonida metod tanlash o‘quvchilarning
            faolligi, mustaqil fikrlashi va amaliy faoliyatini
            tashkil etishda muhim ahamiyatga ega.
        `,

        visual: `
            <div class="method-visual">

                <div
                    class="method-card"
                    onclick="selectMethod('traditional')"
                >
                    <span>01</span>
                    <strong>AN’ANAVIY</strong>
                    <small>
                        Tushuntirish va namoyish
                    </small>
                </div>

                <div
                    class="method-card"
                    onclick="selectMethod('interactive')"
                >
                    <span>02</span>
                    <strong>INTERAKTIV</strong>
                    <small>
                        Muloqot va hamkorlik
                    </small>
                </div>

                <div
                    class="method-card"
                    onclick="selectMethod('problem')"
                >
                    <span>03</span>
                    <strong>MUAMMOLI</strong>
                    <small>
                        Muammo va yechim
                    </small>
                </div>

                <div
                    class="method-card"
                    onclick="selectMethod('project')"
                >
                    <span>04</span>
                    <strong>LOYIHA</strong>
                    <small>
                        Amaliy natijaga yo‘naltirish
                    </small>
                </div>

            </div>

            <div
                id="methodResult"
                class="method-result"
                style="display:none;"
            ></div>
        `
    },


    /* -----------------------------------------------------
       4-SLAYD
       ----------------------------------------------------- */

    {
        type: "constructor",

        label: "04 / LOYIHALASH",

        title:
            "Dars rejasining tuzilishi",

        description: `
            Darsni loyihalashda asosiy bosqichlar ketma-ketligi
            saqlanishi kerak. Maqsad aniqlanadi, mazmun va
            metodlar tanlanadi, faoliyat tashkil etiladi va
            natija baholanadi.
        `,

        visual: `
            <div class="constructor-visual">

                <div class="construct-block">
                    <span>01</span>
                    <strong>Maqsad</strong>
                    <small>
                        Kutilayotgan natija
                    </small>
                </div>

                <div class="construct-arrow">
                    →
                </div>

                <div class="construct-block">
                    <span>02</span>
                    <strong>Mazmun</strong>
                    <small>
                        O‘quv materiali
                    </small>
                </div>

                <div class="construct-arrow">
                    →
                </div>

                <div class="construct-block">
                    <span>03</span>
                    <strong>Metod</strong>
                    <small>
                        O‘qitish usuli
                    </small>
                </div>

                <div class="construct-arrow">
                    →
                </div>

                <div class="construct-block">
                    <span>04</span>
                    <strong>Natija</strong>
                    <small>
                        Baholash
                    </small>
                </div>

            </div>
        `
    },


    /* -----------------------------------------------------
       5-SLAYD
       ----------------------------------------------------- */

    {
        type: "map",

        label: "05 / AMALIY LOYIHA",

        title:
            "Texnologik xarita",

        description: `
            Texnologik xarita darsning bosqichlarini,
            o‘qituvchi va o‘quvchi faoliyatini hamda
            foydalaniladigan metod va vositalarni tizimli
            ravishda ko‘rsatib beradi.
        `,

        visual: `
            <div class="map-visual">

                <div class="map-header">
                    DARS JARAYONI
                </div>

                <div
                    class="map-row"
                    onclick="openMapRow(this)"
                >
                    <span>01</span>

                    <strong>
                        Tashkiliy qism
                    </strong>

                    <small>
                        Darsga tayyorgarlik
                    </small>
                </div>

                <div
                    class="map-row"
                    onclick="openMapRow(this)"
                >
                    <span>02</span>

                    <strong>
                        Motivatsiya
                    </strong>

                    <small>
                        Muammoli vaziyat yaratish
                    </small>
                </div>

                <div
                    class="map-row"
                    onclick="openMapRow(this)"
                >
                    <span>03</span>

                    <strong>
                        Yangi bilim
                    </strong>

                    <small>
                        Asosiy mazmunni o‘zlashtirish
                    </small>
                </div>

                <div
                    class="map-row"
                    onclick="openMapRow(this)"
                >
                    <span>04</span>

                    <strong>
                        Amaliy faoliyat
                    </strong>

                    <small>
                        Bilimni amalda qo‘llash
                    </small>
                </div>

                <div
                    class="map-row"
                    onclick="openMapRow(this)"
                >
                    <span>05</span>

                    <strong>
                        Baholash
                    </strong>

                    <small>
                        Natijani aniqlash
                    </small>
                </div>

            </div>
        `
    },


    /* -----------------------------------------------------
       6-SLAYD
       ----------------------------------------------------- */

    {
        type: "technology",

        label: "06 / TEXNOLOGIK TA’LIM",

        title:
            "Texnologik ta’limga moslashtirish",

        description: `
            Texnologik ta’limda nazariy bilim amaliy faoliyat
            bilan bog‘lanadi. O‘quvchi nafaqat ma’lumotni
            eslab qoladi, balki uni real vazifani bajarishda
            qo‘llaydi.
        `,

        visual: `

            <div
                style="
                    position:relative;
                    width:min(100%, 430px);
                    margin:0 auto 25px;
                    border-radius:20px;
                    overflow:hidden;
                    border:1px solid rgba(255,255,255,.15);
                    box-shadow:0 15px 45px rgba(0,0,0,.35);
                "
            >

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

                <div
                    style="
                        position:absolute;
                        left:0;
                        right:0;
                        bottom:0;
                        padding:35px 18px 15px;
                        background:
                            linear-gradient(
                                transparent,
                                rgba(0,0,0,.85)
                            );
                    "
                >

                    <strong
                        style="
                            display:block;
                            font-size:14px;
                            letter-spacing:2px;
                        "
                    >
                        AMALIY TA’LIM
                    </strong>

                    <span
                        style="
                            display:block;
                            margin-top:4px;
                            font-size:12px;
                            opacity:.75;
                        "
                    >
                        Texnologik ta’lim jarayoni
                    </span>

                </div>

            </div>


            <div class="material-orbit">

                <div class="tech-step">
                    <span>01</span>
                    <strong>NAZARIYA</strong>
                    <small>
                        Bilim va tushuncha
                    </small>
                </div>

                <div class="tech-step">
                    <span>02</span>
                    <strong>AMALIYOT</strong>
                    <small>
                        Vazifani bajarish
                    </small>
                </div>

                <div class="tech-step">
                    <span>03</span>
                    <strong>MAHSULOT</strong>
                    <small>
                        Yakuniy natija
                    </small>
                </div>

            </div>


            <div class="tech-process">

                <div>
                    MUAMMO
                </div>

                <span>→</span>

                <div>
                    LOYIHA
                </div>

                <span>→</span>

                <div>
                    AMALIYOT
                </div>

                <span>→</span>

                <div>
                    NATIJA
                </div>

            </div>

        `
    },


    /* -----------------------------------------------------
       7-SLAYD
       ----------------------------------------------------- */

    {
        type: "final",

        label: "07 / XULOSA",

        title:
            "Darsni o‘zimiz tuzamiz",

        description: `
            Yaxshi dars — bu faqat ma’lumot berish emas.
            Bu maqsadni aniqlash, faoliyatni loyihalash,
            o‘quvchini jarayonga jalb qilish va natijani
            baholash tizimidir.
        `,

        visual: `

            <div class="ready-box">

                <div class="ready-icon">
                    ✓
                </div>

                <strong>
                    DARS REJASI
                </strong>

                <div class="ready-equation">
                    MAQSAD
                    +
                    JARAYON
                    +
                    NATIJA
                </div>

                <p>
                    Endi bilimlaringizni test orqali
                    tekshirib ko‘ramiz.
                </p>

            </div>

            <div class="important-question">

                <span>
                    SAVOL
                </span>

                <strong>
                    Darsni loyihalashda eng muhim narsa nima?
                </strong>

                <small>
                    Maqsad va natija o‘rtasidagi mantiqiy bog‘liqlik.
                </small>

            </div>

        `
    }

];


/* =========================================================
   4. DARSNI KO‘RSATISH
   ========================================================= */

function renderSlide() {

    const slide = slides[currentSlide];

    if (!slide) {
        return;
    }


    /* ---------------------------------------------
       SLAYD RAQAMI
       --------------------------------------------- */

    const slideNumber =
        document.querySelector("#slideNumber");

    if (slideNumber) {
        slideNumber.textContent =
            String(currentSlide + 1).padStart(2, "0");
    }


    /* ---------------------------------------------
       PROGRESS
       --------------------------------------------- */

    const progressBar =
        document.querySelector("#progressBar");

    if (progressBar) {

        const progress =
            ((currentSlide + 1) / slides.length) * 100;

        progressBar.style.width =
            `${progress}%`;
    }


    /* ---------------------------------------------
       SECTION LABEL
       --------------------------------------------- */

    const lessonLabel =
        document.querySelector(
            "#lesson .section-label"
        );

    if (lessonLabel) {
        lessonLabel.textContent =
            slide.label;
    }


    /* ---------------------------------------------
       TITLE
       --------------------------------------------- */

    const slideTitle =
        document.querySelector("#slideTitle");

    if (slideTitle) {
        slideTitle.textContent =
            slide.title;
    }


    /* ---------------------------------------------
       DESCRIPTION
       --------------------------------------------- */

    const slideDescription =
        document.querySelector("#slideDescription");

    if (slideDescription) {

        slideDescription.innerHTML =
            slide.description;
    }


    /* ---------------------------------------------
       VISUAL
       --------------------------------------------- */

    const slideVisual =
        document.querySelector("#slideVisual");

    if (slideVisual) {

        slideVisual.innerHTML =
            slide.visual;
    }


    /* ---------------------------------------------
       SLIDE CLASS
       --------------------------------------------- */

    const lessonScreen =
        document.querySelector("#lesson");

    if (lessonScreen) {

        lessonScreen.className =
            `screen active lesson-screen slide-${slide.type}`;
    }


    /* ---------------------------------------------
       ANIMATIONNI QAYTA ISHLATISH
       --------------------------------------------- */

    if (slideTitle) {

        slideTitle.classList.remove(
            "slide-animation"
        );

        void slideTitle.offsetWidth;

        slideTitle.classList.add(
            "slide-animation"
        );
    }


    /* ---------------------------------------------
       OLD BUTTON
       --------------------------------------------- */

    const prevButton =
        document.querySelector("#prevBtn");

    if (prevButton) {

        prevButton.disabled =
            currentSlide === 0;
    }


    /* ---------------------------------------------
       NEXT BUTTON
       --------------------------------------------- */

    const nextButton =
        document.querySelector("#nextBtn");

    if (nextButton) {

        if (currentSlide === slides.length - 1) {

            nextButton.textContent =
                "⚡ TESTGA O‘TISH";

            nextButton.onclick =
                startTest;

        } else {

            nextButton.textContent =
                "KEYINGI →";

            nextButton.onclick =
                nextSlide;
        }
    }
}


/* =========================================================
   5. KEYINGI SLAYD
   ========================================================= */

function nextSlide() {

    if (
        currentSlide <
        slides.length - 1
    ) {

        currentSlide++;

        renderSlide();
    }
}


/* =========================================================
   6. OLDINGI SLAYD
   ========================================================= */

function previousSlide() {

    if (currentSlide > 0) {

        currentSlide--;

        renderSlide();
    }
}


/* =========================================================
   7. EKRANNI ALMASHTIRISH
   ========================================================= */

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    const target =
        document.querySelector(`#${screenId}`);

    if (target) {

        target.classList.add("active");
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   8. DARSNI BOSHLASH
   ========================================================= */

function startLesson() {

    clearInterval(timerInterval);

    currentSlide = 0;

    showScreen("lesson");

    renderSlide();
}


/* =========================================================
   9. KONSEPT MA’LUMOTLARI
   ========================================================= */

function showConceptInfo(type) {

    const info =
        document.querySelector("#conceptInfo");

    if (!info) {
        return;
    }


    const concepts = {

        goal: `
            <strong>MAQSAD</strong>
            <p>
                O‘quvchi dars yakunida nimani bilishi,
                tushunishi yoki bajara olishi kerakligini
                aniq belgilaydi.
            </p>
        `,

        content: `
            <strong>MAZMUN</strong>
            <p>
                Dars davomida o‘zlashtirilishi kerak bo‘lgan
                bilim, ko‘nikma va malakalar majmuasi.
            </p>
        `,

        method: `
            <strong>METOD</strong>
            <p>
                Maqsadga erishish uchun tanlanadigan
                o‘qitish usullari va faoliyat shakllari.
            </p>
        `,

        result: `
            <strong>NATIJA</strong>
            <p>
                Dars yakunida o‘quvchida shakllangan bilim,
                ko‘nikma, malaka yoki kompetensiya.
            </p>
        `
    };


    info.innerHTML =
        concepts[type] || "";

    info.style.display =
        "block";


    info.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


/* =========================================================
   10. METODNI TANLASH
   ========================================================= */

function selectMethod(method) {

    const result =
        document.querySelector("#methodResult");

    if (!result) {
        return;
    }


    const methods = {

        traditional: `
            <strong>AN’ANAVIY METOD</strong>
            <p>
                O‘qituvchi asosiy axborotni tushuntiradi,
                namoyish qiladi va o‘quvchi uni
                o‘zlashtiradi.
            </p>
        `,

        interactive: `
            <strong>INTERAKTIV METOD</strong>
            <p>
                O‘quvchilar o‘zaro muloqot qiladi,
                fikr almashadi va hamkorlikda
                topshiriqlarni bajaradi.
            </p>
        `,

        problem: `
            <strong>MUAMMOLI TA’LIM</strong>
            <p>
                O‘quvchi oldiga muammo qo‘yiladi va
                u mustaqil ravishda yechim izlashga
                yo‘naltiriladi.
            </p>
        `,

        project: `
            <strong>LOYIHA METODI</strong>
            <p>
                O‘quvchi aniq vazifa ustida ishlab,
                yakunda amaliy mahsulot yoki
                loyiha natijasini yaratadi.
            </p>
        `
    };


    result.innerHTML =
        methods[method] || "";

    result.style.display =
        "block";
}


/* =========================================================
   11. TEXNOLOGIK XARITA QATORI
   ========================================================= */

function openMapRow(row) {

    if (!row) {
        return;
    }


    const allRows =
        document.querySelectorAll(".map-row");


    allRows.forEach(item => {

        if (item !== row) {

            item.classList.remove("opened");
        }
    });


    row.classList.toggle("opened");
}


/* =========================================================
   12. TEST SAVOLLARI
   ========================================================= */

const questions = [

    /* =====================================================
       OSON — 10 TA
       ===================================================== */

    {
        difficulty: "easy",

        question:
            "Ta’lim texnologiyasining asosiy maqsadi nima?",

        answers: [
            "Ta’lim maqsadiga tizimli ravishda erishish",
            "Faqat nazorat ishlarini o‘tkazish",
            "Faqat ma’ruza o‘qish",
            "Dars vaqtini qisqartirish"
        ],

        correct: 0
    },


    {
        difficulty: "easy",

        question:
            "Darsni loyihalashda birinchi navbatda nima aniqlanadi?",

        answers: [
            "Maqsad",
            "Uyga vazifa",
            "Tanaffus vaqti",
            "Sinf bezagi"
        ],

        correct: 0
    },


    {
        difficulty: "easy",

        question:
            "Texnologik xarita nimani ko‘rsatadi?",

        answers: [
            "Dars jarayonining bosqichlarini",
            "Faqat o‘quvchilar ro‘yxatini",
            "Faqat baholarni",
            "Faqat uyga vazifani"
        ],

        correct: 0
    },


    {
        difficulty: "easy",

        question:
            "Interaktiv ta’limda asosiy e’tibor nimaga qaratiladi?",

        answers: [
            "O‘quvchining faol ishtirokiga",
            "Faqat o‘qituvchining nutqiga",
            "Faqat yozma nazoratga",
            "Faqat darslikka"
        ],

        correct: 0
    },


    {
        difficulty: "easy",

        question:
            "Dars natijasi nimani ifodalaydi?",

        answers: [
            "O‘quvchida shakllangan bilim va ko‘nikmalarni",
            "Darsning davomiyligini",
            "Sinf xonasining hajmini",
            "O‘qituvchining ish vaqtini"
        ],

        correct: 0
    },


    {
        difficulty: "easy",

        question:
            "Muammoli ta’limda o‘quvchi nima qiladi?",

        answers: [
            "Muammoga yechim izlaydi",
            "Faqat tinglaydi",
            "Faqat ko‘chiradi",
            "Faqat yodlaydi"
        ],

        correct: 0
    },


    {
        difficulty: "easy",

        question:
            "Loyiha metodining yakunida odatda nima yaratiladi?",

        answers: [
            "Amaliy mahsulot yoki loyiha natijasi",
            "Faqat konspekt",
            "Faqat test",
            "Faqat baho"
        ],

        correct: 0
    },


    {
        difficulty: "easy",

        question:
            "Dars mazmuni nimani anglatadi?",

        answers: [
            "O‘zlashtiriladigan bilim va ko‘nikmalarni",
            "Dars vaqtini",
            "O‘qituvchi jadvalini",
            "Sinf xonasini"
        ],

        correct: 0
    },


    {
        difficulty: "easy",

        question:
            "Baholashning asosiy vazifalaridan biri nima?",

        answers: [
            "Erishilgan natijani aniqlash",
            "Darsni bekor qilish",
            "O‘quvchini jazolash",
            "Vaqtni to‘ldirish"
        ],

        correct: 0
    },


    {
        difficulty: "easy",

        question:
            "Ta’lim jarayonida metod nima uchun tanlanadi?",

        answers: [
            "Maqsadga erishish uchun",
            "Faqat vaqt o‘tkazish uchun",
            "Faqat baho qo‘yish uchun",
            "Sinfni bezash uchun"
        ],

        correct: 0
    },


    /* =====================================================
       O‘RTA — 10 TA
       ===================================================== */

    {
        difficulty: "medium",

        question:
            "Dars maqsadi va natijasi o‘rtasidagi munosabat qanday bo‘lishi kerak?",

        answers: [
            "Mantiqiy va o‘zaro bog‘langan",
            "Bir-biriga bog‘liq bo‘lmagan",
            "Faqat nazariy",
            "Tasodifiy"
        ],

        correct: 0
    },


    {
        difficulty: "medium",

        question:
            "Texnologik xaritaning afzalligi nimada?",

        answers: [
            "Dars jarayonini oldindan tizimlashtiradi",
            "Darsni butunlay avtomatik o‘tkazadi",
            "O‘qituvchini almashtiradi",
            "Baholashni bekor qiladi"
        ],

        correct: 0
    },


    {
        difficulty: "medium",

        question:
            "Interaktiv metodlarning muhim belgisi qaysi?",

        answers: [
            "O‘zaro faol muloqot",
            "Faqat monolog",
            "Faqat yozma ish",
            "Faqat yodlash"
        ],

        correct: 0
    },


    {
        difficulty: "medium",

        question:
            "Texnologik ta’limda nazariya va amaliyot qanday bog‘lanadi?",

        answers: [
            "Nazariy bilim amaliy vazifada qo‘llanadi",
            "Ular alohida olib boriladi",
            "Faqat nazariya o‘rganiladi",
            "Faqat amaliyot bajariladi"
        ],

        correct: 0
    },


    {
        difficulty: "medium",

        question:
            "Darsni loyihalash o‘qituvchiga qanday imkon beradi?",

        answers: [
            "Jarayonni oldindan rejalashtirishga",
            "Baholashni bekor qilishga",
            "Darsni rejasiz o‘tkazishga",
            "Faqat nazorat qilishga"
        ],

        correct: 0
    },


    {
        difficulty: "medium",

        question:
            "Muammoli ta’limning muhim jihati nima?",

        answers: [
            "Mustaqil fikrlashni rag‘batlantirish",
            "Faqat ma’lumot yodlatish",
            "O‘qituvchini faoliyatdan chiqarish",
            "Baholashni to‘xtatish"
        ],

        correct: 0
    },


    {
        difficulty: "medium",

        question:
            "Loyiha metodida o‘quvchi faoliyati qanday bo‘ladi?",

        answers: [
            "Mustaqil va amaliy faoliyatga yo‘naltiriladi",
            "Faqat tinglashga",
            "Faqat ko‘chirishga",
            "Faqat test yechishga"
        ],

        correct: 0
    },


    {
        difficulty: "medium",

        question:
            "Darsning amaliy bosqichida asosiy vazifa nima?",

        answers: [
            "O‘zlashtirilgan bilimni qo‘llash",
            "Faqat yangi mavzuni e’lon qilish",
            "Faqat davomat olish",
            "Faqat baho qo‘yish"
        ],

        correct: 0
    },


    {
        difficulty: "medium",

        question:
            "Ta’lim texnologiyasi tushunchasida tizimlilik nimani anglatadi?",

        answers: [
            "Elementlarning o‘zaro bog‘liq holda tashkil etilishini",
            "Faqat bitta metoddan foydalanishni",
            "Faqat texnik vositalarni",
            "Faqat darslikdan foydalanishni"
        ],

        correct: 0
    },


    {
        difficulty: "medium",

        question:
            "Baholash dars loyihasida nima bilan bog‘liq bo‘lishi kerak?",

        answers: [
            "Kutilayotgan natijalar bilan",
            "Sinf xonasi bilan",
            "Tanaffus bilan",
            "Darslik hajmi bilan"
        ],

        correct: 0
    },


    /* =====================================================
       QIYIN — 10 TA
       ===================================================== */

    {
        difficulty: "hard",

        question:
            "Dars loyihasida maqsad, faoliyat va baholashning mosligi nima uchun muhim?",

        answers: [
            "Ta’lim natijasining izchil va o‘lchanadigan bo‘lishi uchun",
            "Darsni uzunroq qilish uchun",
            "Ko‘proq topshiriq berish uchun",
            "Faqat hujjatni to‘ldirish uchun"
        ],

        correct: 0
    },


    {
        difficulty: "hard",

        question:
            "Texnologik yondashuvning oddiy rejalashtirishdan asosiy farqi nimada?",

        answers: [
            "Jarayon va natijalar o‘rtasidagi tizimli bog‘liqlikda",
            "Faqat reja yozilishida",
            "Faqat vaqt belgilanishida",
            "Faqat darslik tanlanishida"
        ],

        correct: 0
    },


    {
        difficulty: "hard",

        question:
            "Agar dars maqsadi amaliy ko‘nikmani shakllantirish bo‘lsa, qaysi faoliyat ko‘proq mos keladi?",

        answers: [
            "Amaliy topshiriq bajarish",
            "Faqat matn o‘qish",
            "Faqat ma’ruza tinglash",
            "Faqat terminlarni yodlash"
        ],

        correct: 0
    },


    {
        difficulty: "hard",

        question:
            "Texnologik ta’limda o‘quv natijasining amaliy qiymati nimada?",

        answers: [
            "Bilimning real faoliyatda qo‘llanishida",
            "Faqat nazariy ta’rifni bilishda",
            "Faqat yuqori baho olishda",
            "Faqat konspekt yozishda"
        ],

        correct: 0
    },


    {
        difficulty: "hard",

        question:
            "Dars loyihasida metod tanlashda eng muhim mezonlardan biri nima?",

        answers: [
            "Metodning belgilangan maqsadga mosligi",
            "Metodning murakkab nomi",
            "Metodning uzunligi",
            "Metodning zamonaviy ko‘rinishi"
        ],

        correct: 0
    },


    {
        difficulty: "hard",

        question:
            "Texnologik xaritada o‘qituvchi va o‘quvchi faoliyatining alohida ko‘rsatilishi nima beradi?",

        answers: [
            "Har bir ishtirokchining vazifasini aniqlashtiradi",
            "Faqat hujjatni uzaytiradi",
            "Baholashni bekor qiladi",
            "Darsni avtomatik o‘tkazadi"
        ],

        correct: 0
    },


    {
        difficulty: "hard",

        question:
            "Ta’lim texnologiyasida qayta aloqa nima uchun kerak?",

        answers: [
            "Jarayon va natijani tahlil qilish uchun",
            "Faqat bahoni oshirish uchun",
            "Dars vaqtini uzaytirish uchun",
            "Uy vazifasini bekor qilish uchun"
        ],

        correct: 0
    },


    {
        difficulty: "hard",

        question:
            "Agar kutilayotgan natija o‘lchanmasa, qanday muammo yuzaga kelishi mumkin?",

        answers: [
            "Natijaga erishilganini obyektiv aniqlash qiyinlashadi",
            "Dars avtomatik ravishda yaxshi bo‘ladi",
            "O‘quvchi faolroq bo‘ladi",
            "Metod tanlash osonlashadi"
        ],

        correct: 0
    },


    {
        difficulty: "hard",

        question:
            "Texnologik ta’limda loyiha faoliyatining kuchli jihatlaridan biri nima?",

        answers: [
            "Nazariya va amaliy faoliyatni birlashtirish",
            "Faqat ma’lumot yodlash",
            "Faqat o‘qituvchini tinglash",
            "Faqat test ishlash"
        ],

        correct: 0
    },


    {
        difficulty: "hard",

        question:
            "Samarali dars loyihasining mantiqiy zanjiri qaysi javobda to‘g‘ri berilgan?",

        answers: [
            "Maqsad → faoliyat → natija → baholash",
            "Baholash → tanaffus → maqsad → natija",
            "Natija → mavzu → tanaffus → metod",
            "Metod → baho → maqsad → mavzu"
        ],

        correct: 0
    }

];


/* =========================================================
   13. TEST SAVOLLARINI YARATISH
   ========================================================= */

function createTestQuestions() {

    const easyQuestions =
        shuffleArray(
            questions.filter(
                q => q.difficulty === "easy"
            )
        ).slice(0, 3);


    const mediumQuestions =
        shuffleArray(
            questions.filter(
                q => q.difficulty === "medium"
            )
        ).slice(0, 4);


    const hardQuestions =
        shuffleArray(
            questions.filter(
                q => q.difficulty === "hard"
            )
        ).slice(0, 3);


    const selectedQuestions = [

        ...easyQuestions,
        ...mediumQuestions,
        ...hardQuestions

    ];


    testQuestions =
        shuffleArray(
            selectedQuestions
        ).map(question => {

            const answerObjects =
                question.answers.map(
                    (answer, index) => ({

                        text: answer,

                        correct:
                            index === question.correct

                    })
                );


            const shuffledAnswers =
                shuffleArray(answerObjects);


            return {

                ...question,

                answers:
                    shuffledAnswers.map(
                        answer => answer.text
                    ),

                correct:
                    shuffledAnswers.findIndex(
                        answer => answer.correct
                    )

            };

        });
}


/* =========================================================
   14. TESTNI BOSHLASH
   ========================================================= */

function startTest() {

    clearInterval(timerInterval);


    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    timeLeft = 30;


    createTestQuestions();


    showScreen("test");


    loadQuestion();
}


/* =========================================================
   15. SAVOLNI YUKLASH
   ========================================================= */

function loadQuestion() {

    clearInterval(timerInterval);


    const question =
        testQuestions[currentQuestion];


    if (!question) {

        showResult();

        return;
    }


    selectedAnswer = null;


    /* ---------------------------------------------
       SAVOL RAQAMI
       --------------------------------------------- */

    const questionNumber =
        document.querySelector("#questionNumber");

    if (questionNumber) {

        questionNumber.textContent =
            `SAVOL ${currentQuestion + 1} / ${testQuestions.length}`;
    }


    /* ---------------------------------------------
       SAVOL MATNI
       --------------------------------------------- */

    const questionText =
        document.querySelector("#questionText");

    if (questionText) {

        questionText.textContent =
            question.question;
    }


    /* ---------------------------------------------
       QIYINLIK
       --------------------------------------------- */

    const difficulty =
        document.querySelector("#questionDifficulty");

    if (difficulty) {

        const labels = {

            easy: "OSON",

            medium: "O‘RTA",

            hard: "QIYIN"

        };

        difficulty.textContent =
            labels[question.difficulty]
            || "";
    }


    /* ---------------------------------------------
       JAVOBLAR
       --------------------------------------------- */

    const answersContainer =
        document.querySelector("#answers");

    if (answersContainer) {

        answersContainer.innerHTML = "";


        question.answers.forEach(
            (answer, index) => {

                const button =
                    document.createElement("button");


                button.className =
                    "answer";


                button.type =
                    "button";


                button.innerHTML = `
                    <span class="answer-number">
                        ${String.fromCharCode(65 + index)}
                    </span>

                    <span class="answer-text">
                        ${answer}
                    </span>
                `;


                button.onclick = () => {

                    selectAnswer(index);
                };


                answersContainer.appendChild(
                    button
                );
            }
        );
    }


    /* ---------------------------------------------
       FEEDBACKNI TOZALASH
       --------------------------------------------- */

    const feedback =
        document.querySelector("#answerFeedback");

    if (feedback) {

        feedback.textContent = "";

        feedback.className =
            "answer-feedback";
    }


    /* ---------------------------------------------
       CONFIRM BUTTON
       --------------------------------------------- */

    const confirmButton =
        document.querySelector("#confirmBtn");

    if (confirmButton) {

        confirmButton.disabled =
            true;

        confirmButton.textContent =
            "JAVOBNI TASDIQLASH";
    }


    /* ---------------------------------------------
       TIMER
       --------------------------------------------- */

    updateTimer();

    startTimer();
}


/* =========================================================
   16. JAVOBNI TANLASH
   ========================================================= */

function selectAnswer(index) {

    selectedAnswer = index;


    const answerButtons =
        document.querySelectorAll(".answer");


    answerButtons.forEach(
        (button, buttonIndex) => {

            button.classList.toggle(
                "selected",
                buttonIndex === index
            );
        }
    );


    const confirmButton =
        document.querySelector("#confirmBtn");


    if (confirmButton) {

        confirmButton.disabled =
            false;
    }
}


/* =========================================================
   17. TIMERNI BOSHLASH
   ========================================================= */

function startTimer() {

    timeLeft = 30;

    updateTimer();


    timerInterval =
        setInterval(() => {

            timeLeft--;

            updateTimer();


            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                timeIsUp();
            }

        }, 1000);
}


/* =========================================================
   18. TIMERNI YANGILASH
   ========================================================= */

function updateTimer() {

    const timer =
        document.querySelector("#timer");


    if (timer) {

        timer.textContent =
            `${timeLeft}`;
    }


    const timerCircle =
        document.querySelector("#timerCircle");


    if (timerCircle) {

        timerCircle.style.setProperty(
            "--timer-progress",
            `${(timeLeft / 30) * 100}%`
        );


        timerCircle.classList.toggle(
            "warning",
            timeLeft <= 10
        );
    }
}


/* =========================================================
   19. JAVOBNI TASDIQLASH
   ========================================================= */

function confirmAnswer() {

    if (selectedAnswer === null) {
        return;
    }


    clearInterval(timerInterval);


    const question =
        testQuestions[currentQuestion];


    if (!question) {
        return;
    }


    const answerButtons =
        document.querySelectorAll(".answer");


    /* ---------------------------------------------
       QAYTA BOSISHNI BLOKLASH
       --------------------------------------------- */

    answerButtons.forEach(button => {

        button.disabled = true;

    });


    /* ---------------------------------------------
       TO‘G‘RI JAVOB
       --------------------------------------------- */

    answerButtons.forEach(
        (button, index) => {

            if (index === question.correct) {

                button.classList.add(
                    "correct"
                );
            }
        }
    );


    /* ---------------------------------------------
       NATIJA
       --------------------------------------------- */

    const feedback =
        document.querySelector("#answerFeedback");


    if (
        selectedAnswer ===
        question.correct
    ) {

        score += 10;


        if (feedback) {

            feedback.textContent =
                "✓ TO‘G‘RI JAVOB!";

            feedback.classList.add(
                "correct"
            );
        }

    } else {

        const selectedButton =
            answerButtons[selectedAnswer];


        if (selectedButton) {

            selectedButton.classList.add(
                "wrong"
            );
        }


        if (feedback) {

            feedback.textContent =
                "✕ NOTO‘G‘RI JAVOB!";

            feedback.classList.add(
                "wrong"
            );
        }
    }


    /* ---------------------------------------------
       KEYINGI SAVOL
       --------------------------------------------- */

    setTimeout(() => {

        currentQuestion++;


        if (
            currentQuestion >=
            testQuestions.length
        ) {

            showResult();

        } else {

            loadQuestion();
        }

    }, 1200);
}


/* =========================================================
   20. VAQT TUGADI
   ========================================================= */

function timeIsUp() {

    const question =
        testQuestions[currentQuestion];


    if (!question) {
        return;
    }


    const answerButtons =
        document.querySelectorAll(".answer");


    answerButtons.forEach(button => {

        button.disabled = true;

    });


    /* To‘g‘ri javobni ko‘rsatish */

    if (answerButtons[question.correct]) {

        answerButtons[
            question.correct
        ].classList.add(
            "correct"
        );
    }


    const feedback =
        document.querySelector("#answerFeedback");


    if (feedback) {

        feedback.textContent =
            "⏱ VAQT TUGADI!";

        feedback.className =
            "answer-feedback wrong";
    }


    setTimeout(() => {

        currentQuestion++;


        if (
            currentQuestion >=
            testQuestions.length
        ) {

            showResult();

        } else {

            loadQuestion();
        }

    }, 1000);
}


/* =========================================================
   21. NATIJANI KO‘RSATISH
   ========================================================= */

function showResult() {

    clearInterval(timerInterval);


    showScreen("result");


    const scoreElement =
        document.querySelector("#finalScore");


    if (scoreElement) {

        scoreElement.textContent =
            `${score} / 100`;
    }


    const resultMessage =
        document.querySelector("#resultMessage");


    if (resultMessage) {

        if (score >= 90) {

            resultMessage.textContent =
                "Mavzu bo‘yicha bilimlaringiz juda yaxshi shakllangan.";

        } else if (score >= 70) {

            resultMessage.textContent =
                "Mavzuning asosiy tushunchalarini yaxshi o‘zlashtirgansiz.";

        } else if (score >= 50) {

            resultMessage.textContent =
                "Asosiy tushunchalar mavjud, ayrim jihatlarni takrorlash foydali.";

        } else {

            resultMessage.textContent =
                "Mavzuni yana bir bor ko‘rib chiqish va takrorlash tavsiya etiladi.";
        }
    }


    /* ---------------------------------------------
       FOIZ
       --------------------------------------------- */

    const scorePercent =
        document.querySelector("#scorePercent");


    if (scorePercent) {

        scorePercent.textContent =
            `${score}%`;
    }


    /* ---------------------------------------------
       NATIJAGA MOS KLASS
       --------------------------------------------- */

    const resultScreen =
        document.querySelector("#result");


    if (resultScreen) {

        resultScreen.classList.remove(
            "excellent",
            "good",
            "average",
            "low"
        );


        if (score >= 90) {

            resultScreen.classList.add(
                "excellent"
            );

        } else if (score >= 70) {

            resultScreen.classList.add(
                "good"
            );

        } else if (score >= 50) {

            resultScreen.classList.add(
                "average"
            );

        } else {

            resultScreen.classList.add(
                "low"
            );
        }
    }
}


/* =========================================================
   22. YAKUNIY RAHMAT EKRANI
   ========================================================= */

function showFinal() {

    clearInterval(timerInterval);


    showScreen("final");


    const finalScore =
        document.querySelector("#finalResultScore");


    if (finalScore) {

        finalScore.textContent =
            `${score} / 100`;
    }
}


/* =========================================================
   23. DARSNI QAYTA BOSHLASH
   ========================================================= */

function restartLesson() {

    clearInterval(timerInterval);


    currentSlide = 0;

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    timeLeft = 30;

    testQuestions = [];


    showScreen("home");
}


/* =========================================================
   24. TESTNI QAYTA ISHLASH
   ========================================================= */

function restartTest() {

    clearInterval(timerInterval);


    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    timeLeft = 30;


    createTestQuestions();


    showScreen("test");


    loadQuestion();
}


/* =========================================================
   25. KLAVIATURA BOSHQARUVI
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const lesson =
            document.querySelector("#lesson");


        if (
            !lesson ||
            !lesson.classList.contains("active")
        ) {

            return;
        }


        if (
            event.key === "ArrowRight"
        ) {

            nextSlide();
        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousSlide();
        }

    }
);


/* =========================================================
   26. BOSHLANG‘ICH HOLAT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* -----------------------------------------
           DARS NAVIGATSIYASI
           ----------------------------------------- */

        const prevButton =
            document.querySelector("#prevBtn");


        if (prevButton) {

            prevButton.onclick =
                previousSlide;
        }


        const nextButton =
            document.querySelector("#nextBtn");


        if (nextButton) {

            nextButton.onclick =
                nextSlide;
        }


        /* -----------------------------------------
           START BUTTON
           ----------------------------------------- */

        const startLessonButton =
            document.querySelector(
                "#startLessonBtn"
            );


        if (startLessonButton) {

            startLessonButton.onclick =
                startLesson;
        }


        /* -----------------------------------------
           TEST BUTTON
           ----------------------------------------- */

        const startTestButton =
            document.querySelector(
                "#startTestBtn"
            );


        if (startTestButton) {

            startTestButton.onclick =
                startTest;
        }


        /* -----------------------------------------
           CONFIRM BUTTON
           ----------------------------------------- */

        const confirmButton =
            document.querySelector(
                "#confirmBtn"
            );


        if (confirmButton) {

            confirmButton.onclick =
                confirmAnswer;
        }


        /* -----------------------------------------
           RESULT → FINAL
           ----------------------------------------- */

        const resultNextButton =
            document.querySelector(
                "#resultNextBtn"
            );


        if (resultNextButton) {

            resultNextButton.onclick =
                showFinal;
        }


        /* -----------------------------------------
           RESTART LESSON
           ----------------------------------------- */

        const restartLessonButton =
            document.querySelector(
                "#restartLessonBtn"
            );


        if (restartLessonButton) {

            restartLessonButton.onclick =
                restartLesson;
        }


        /* -----------------------------------------
           RESTART TEST
           ----------------------------------------- */

        const restartTestButton =
            document.querySelector(
                "#restartTestBtn"
            );


        if (restartTestButton) {

            restartTestButton.onclick =
                restartTest;
        }


        /* -----------------------------------------
           FINAL → HOME
           ----------------------------------------- */

        const finalHomeButton =
            document.querySelector(
                "#finalHomeBtn"
            );


        if (finalHomeButton) {

            finalHomeButton.onclick =
                restartLesson;
        }


        /* -----------------------------------------
           DASTLABKI SLAYD
           ----------------------------------------- */

        renderSlide();

    }
);