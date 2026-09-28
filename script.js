/* =========================================================
   INTERAKTIV DARS
   Mavzu:
   "Ta’lim texnologiyalariga asoslangan dars rejasini tuzish"
   ========================================================= */


/* =========================================================
   1. ASOSIY HOLATLAR
   ========================================================= */

let currentSlide = 0;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

let timerInterval = null;
let timeLeft = 30;

let testQuestions = [];


/* =========================================================
   2. 7-SLAYD UCHUN DARS LOYIHASI
   ========================================================= */

let lessonBuilder = {
    Maqsad: false,
    Metod: false,
    Amaliyot: false,
    Baholash: false
};


/* =========================================================
   3. YORDAMCHI FUNKSIYA
   ========================================================= */

function shuffleArray(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [newArray[i], newArray[j]] = [
            newArray[j],
            newArray[i]
        ];
    }

    return newArray;
}


/* =========================================================
   4. SLAYDLAR
   ========================================================= */

const slides = [

    /* =====================================================
       1-SLAYD
       ===================================================== */

    {
        title: "Nega darsni oldindan loyihalash kerak?",
        label: "01 / MUAMMO",
        type: "problem",

        description: `
            <p class="lead-text">
                Bir xil mavzuni ikki xil o‘qituvchi turlicha tashkil qilishi mumkin.
                Natijada o‘quvchilarning faolligi, tushunishi va amaliy natijasi ham farq qiladi.
            </p>

            <p>
                Shuning uchun zamonaviy dars faqat mavzuni tushuntirishdan iborat emas.
                O‘qituvchi darsning <b>maqsadi</b>, <b>mazmuni</b>,
                <b>metodi</b>, <b>vositalari</b>,
                <b>o‘quvchi faoliyati</b> va
                <b>baholash mezonlarini</b> oldindan loyihalashi kerak.
            </p>

            <div class="important-question">
                <span>?</span>

                <div>
                    <strong>Asosiy savol</strong>

                    <p>
                        Qanday qilib darsni shunday loyihalash mumkinki,
                        o‘quvchi bilimni nafaqat eshitsin,
                        balki uni amalda qo‘llay olsin?
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

                        <strong>
                            DARS NATIJASI<br>
                            NIMAGA BOG‘LIQ?
                        </strong>
                    </div>

                </div>


                <div class="lesson-flow">

                    <div class="flow-person teacher">

                        <div class="person-icon">
                            👨‍🏫
                        </div>

                        <span>O‘QITUVCHI</span>

                    </div>


                    <div class="flow-arrow">
                        <span></span>
                    </div>


                    <div class="flow-center">

                        <div class="center-ring">
                            <div class="center-core">
                                DARS
                            </div>
                        </div>

                        <small>LOYIHA</small>

                    </div>


                    <div class="flow-arrow">
                        <span></span>
                    </div>


                    <div class="flow-person student">

                        <div class="person-icon">
                            👨‍🎓
                        </div>

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


    /* =====================================================
       2-SLAYD
       ===================================================== */

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


                <button
                    type="button"
                    class="concept-node node-top"
                    onclick="showConceptInfo('Maqsad')"
                >
                    🎯
                    <span>MAQSAD</span>
                </button>


                <button
                    type="button"
                    class="concept-node node-left"
                    onclick="showConceptInfo('Jarayon')"
                >
                    ⚙
                    <span>JARAYON</span>
                </button>


                <button
                    type="button"
                    class="concept-node node-right"
                    onclick="showConceptInfo('Natija')"
                >
                    ✓
                    <span>NATIJA</span>
                </button>


                <div id="conceptInfo" class="concept-info">
                    Elementlardan birini tanlang
                </div>

            </div>
        `
    },


    /* =====================================================
       3-SLAYD
       ===================================================== */

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
                Ayniqsa texnologik ta’limda nazariy bilimni
                amaliy faoliyat bilan bog‘lash muhim hisoblanadi.
            </p>
        `,

        visual: `
            <div class="methods-visual">

                <div class="method-title">
                    VAZIYATNI TANLANG
                </div>


                <div class="scenario-grid">

                    <button
                        type="button"
                        onclick="selectMethod('Muammoli ta’lim')"
                    >
                        <span>?</span>
                        <b>Muammo mavjud</b>
                        <small>O‘quvchi yechim izlaydi</small>
                    </button>


                    <button
                        type="button"
                        onclick="selectMethod('Hamkorlikdagi ta’lim')"
                    >
                        <span>👥</span>
                        <b>Guruh bilan ishlash</b>
                        <small>Birgalikda faoliyat</small>
                    </button>


                    <button
                        type="button"
                        onclick="selectMethod('Loyihaviy ta’lim')"
                    >
                        <span>◈</span>
                        <b>Loyiha yaratish</b>
                        <small>Amaliy mahsulot</small>
                    </button>


                    <button
                        type="button"
                        onclick="selectMethod('Amaliy ta’lim')"
                    >
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


    /* =====================================================
       4-SLAYD
       ===================================================== */

    {
        title: "Dars rejasining tuzilishi",
        label: "04 / LOYIHALASH",
        type: "constructor",

        description: `
            <p class="lead-text">
                Dars rejasi tasodifiy tuzilmaydi.
                Uning har bir qismi oldingi bosqich bilan
                mantiqan bog‘lanadi.
            </p>

            <p>
                Maqsad aniqlanadi → mazmun tanlanadi →
                metod belgilanadi → vositalar tayyorlanadi →
                amaliy topshiriq beriladi → natija baholanadi.
            </p>
        `,

        visual: `
            <div class="constructor-visual">

                <div class="constructor-label">
                    DARSNI O‘ZINGIZ QURING
                </div>


                <p style="text-align:center;margin-bottom:20px;opacity:.75;">
                    Bosqichlardan birini tanlang
                </p>


                <div class="constructor-track">

                    <button
                        type="button"
                        class="construct-block"
                        onclick="showLessonPart('Maqsad')"
                    >
                        <b>01</b>
                        <div>🎯</div>
                        <span>MAQSAD</span>
                    </button>


                    <div class="construct-line"></div>


                    <button
                        type="button"
                        class="construct-block"
                        onclick="showLessonPart('Mazmun')"
                    >
                        <b>02</b>
                        <div>📚</div>
                        <span>MAZMUN</span>
                    </button>


                    <div class="construct-line"></div>


                    <button
                        type="button"
                        class="construct-block"
                        onclick="showLessonPart('Metod')"
                    >
                        <b>03</b>
                        <div>⚙</div>
                        <span>METOD</span>
                    </button>


                    <div class="construct-line"></div>


                    <button
                        type="button"
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

                    <button
                        type="button"
                        onclick="showLessonPart('Topshiriq')"
                    >
                        TOPSHIRIQ
                    </button>


                    <button
                        type="button"
                        onclick="showLessonPart('Baholash')"
                    >
                        BAHOLASH
                    </button>


                    <strong>
                        → DARS NATIJASI
                    </strong>

                </div>

            </div>
        `
    },


    /* =====================================================
       5-SLAYD
       ===================================================== */

    {
        title: "Texnologik xarita",
        label: "05 / AMALIY LOYIHA",
        type: "map",

        description: `
            <p class="lead-text">
                Texnologik xarita dars jarayonini bosqichlar
                bo‘yicha oldindan ko‘rish imkonini beradi.
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


                <button
                    type="button"
                    class="map-row"
                    onclick="openMapRow(this, 'Kirish')"
                >
                    <b>01</b>
                    <span>Kirish</span>
                    <span>Motivatsiya beradi</span>
                    <span>Faol qatnashadi</span>
                </button>


                <button
                    type="button"
                    class="map-row"
                    onclick="openMapRow(this, 'Yangi bilim')"
                >
                    <b>02</b>
                    <span>Yangi bilim</span>
                    <span>Tushuntiradi</span>
                    <span>Tahlil qiladi</span>
                </button>


                <button
                    type="button"
                    class="map-row"
                    onclick="openMapRow(this, 'Amaliy ish')"
                >
                    <b>03</b>
                    <span>Amaliy ish</span>
                    <span>Yo‘naltiradi</span>
                    <span>Bajaradi</span>
                </button>


                <button
                    type="button"
                    class="map-row"
                    onclick="openMapRow(this, 'Nazorat')"
                >
                    <b>04</b>
                    <span>Nazorat</span>
                    <span>Baholaydi</span>
                    <span>Natijasini ko‘rsatadi</span>
                </button>


                <div
                    id="mapInfo"
                    class="method-result"
                >
                    Bosqichni tanlang →
                </div>

            </div>
        `
    },


    /* =====================================================
       6-SLAYD
       ===================================================== */

    {
        title: "Texnologik ta’limga moslashtirish",
        label: "06 / TEXNOLOGIK TA’LIM",
        type: "technology",

        description: `
            <p class="lead-text">
                “Metallar va metallmaslarga ishlov berishni o‘qitish metodikasi”
                fanida dars nazariya va amaliy faoliyat birligiga asoslanadi.
            </p>

            <p>
                O‘quvchi avval material va texnologik jarayon haqida bilim oladi,
                keyin o‘qituvchi namoyishini kuzatadi, amaliy topshiriqni bajaradi
                va yakunda natijasi baholanadi.
            </p>
        `,

        visual: `
            <div class="technology-visual">

                <div
                    style="
                        position:relative;
                        width:min(100%,430px);
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
                            background:linear-gradient(
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
                            TEXNOLOGIK TA’LIM
                        </strong>
                    </div>

                </div>


                <div class="material-orbit">

                    <button
                        type="button"
                        class="tech-step"
                        onclick="showTechStep('Nazariya')"
                    >
                        <b>01</b>
                        <span>NAZARIYA</span>
                    </button>


                    <button
                        type="button"
                        class="tech-step"
                        onclick="showTechStep('Namoyish')"
                    >
                        <b>02</b>
                        <span>NAMOYISH</span>
                    </button>


                    <button
                        type="button"
                        class="tech-step"
                        onclick="showTechStep('Amaliy ish')"
                    >
                        <b>03</b>
                        <span>AMALIY ISH</span>
                    </button>


                    <button
                        type="button"
                        class="tech-step"
                        onclick="showTechStep('Nazorat')"
                    >
                        <b>04</b>
                        <span>NAZORAT</span>
                    </button>

                </div>


                <div
                    id="techStepInfo"
                    class="method-result"
                >
                    Bosqichni tanlang →
                </div>


                <div class="tech-process">

                    <div>NAZARIYA</div>
                    <i>→</i>

                    <div>NAMOYISH</div>
                    <i>→</i>

                    <div>AMALIY ISH</div>
                    <i>→</i>

                    <div>NAZORAT</div>

                </div>

            </div>
        `
    },


    /* =====================================================
       7-SLAYD
       ===================================================== */

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
                birlashtiring: maqsad, metod, vosita,
                amaliy topshiriq va baholash.
            </p>


            <div class="final-message">
                <strong>
                    DARS REJASI = MAQSAD + JARAYON + NATIJA
                </strong>
            </div>
        `,

        visual: `
            <div class="final-visual">

                <div class="final-title">
                    DARS LOYIHASINI YIG‘ING
                </div>


                <p
                    style="
                        text-align:center;
                        opacity:.75;
                        margin-bottom:25px;
                    "
                >
                    4 ta elementni tanlang
                </p>


                <div class="final-flow">

                    <button
                        type="button"
                        onclick="buildLesson('Maqsad')"
                    >
                        🎯
                        <span>MAQSAD</span>
                    </button>


                    <i>→</i>


                    <button
                        type="button"
                        onclick="buildLesson('Metod')"
                    >
                        ⚙
                        <span>METOD</span>
                    </button>


                    <i>→</i>


                    <button
                        type="button"
                        onclick="buildLesson('Amaliyot')"
                    >
                        🛠
                        <span>AMALIYOT</span>
                    </button>


                    <i>→</i>


                    <button
                        type="button"
                        onclick="buildLesson('Baholash')"
                    >
                        ✓
                        <span>BAHOLASH</span>
                    </button>

                </div>


                <div
                    id="lessonBuilder"
                    class="ready-box"
                >
                    <span>?</span>

                    <strong>
                        DARS LOYIHASI
                    </strong>

                    <small>
                        Yuqoridagi bosqichlarni tanlang
                    </small>
                </div>


                <div
                    id="lessonBuilderMessage"
                    class="final-message"
                ></div>


                <button
                    type="button"
                    class="nav-btn"
                    onclick="startTest()"
                    style="margin-top:25px;width:100%;"
                >
                    ⚡ BILIMNI TESTDA TEKSHIRISH
                </button>

            </div>
        `
    }

];


/* =========================================================
   5. TEST SAVOLLARI
   ========================================================= */

const questionBank = [

    /* -----------------------------------------------------
       OSON
       ----------------------------------------------------- */

    {
        difficulty: "easy",
        question: "Ta’lim texnologiyasi nima?",
        answers: [
            "Ta’lim jarayonini oldindan rejalashtirish va tashkil etish tizimi",
            "Faqat kompyuterdan foydalanish",
            "Faqat nazorat ishlari yig‘indisi",
            "Faqat o‘qituvchining ma’ruzasi"
        ],
        correct: 0
    },

    {
        difficulty: "easy",
        question: "Dars loyihasining eng muhim boshlang‘ich elementi qaysi?",
        answers: [
            "Maqsad",
            "Tanaffus",
            "Reklama",
            "Tasodifiy topshiriq"
        ],
        correct: 0
    },

    {
        difficulty: "easy",
        question: "Dars natijasini aniqlash uchun nima amalga oshiriladi?",
        answers: [
            "Baholash",
            "Dam olish",
            "Rasm chizish",
            "Faqat ma’ruza"
        ],
        correct: 0
    },

    {
        difficulty: "easy",
        question: "Texnologik xarita nimani ko‘rsatadi?",
        answers: [
            "Dars bosqichlari va ishtirokchilar faoliyatini",
            "Faqat o‘qituvchining ish vaqtini",
            "Faqat xona joylashuvini",
            "Faqat o‘quvchilar ro‘yxatini"
        ],
        correct: 0
    },

    {
        difficulty: "easy",
        question: "Amaliy topshiriqning asosiy vazifasi nima?",
        answers: [
            "Bilimni amalda qo‘llash",
            "Darsni qisqartirish",
            "Faqat vaqt o‘tkazish",
            "Faqat nazariyani takrorlash"
        ],
        correct: 0
    },

    {
        difficulty: "easy",
        question: "Metod nimaga mos tanlanadi?",
        answers: [
            "Maqsad va mazmunga",
            "Faqat xona rangiga",
            "Faqat dars vaqtiga",
            "Tasodifiy ravishda"
        ],
        correct: 0
    },

    {
        difficulty: "easy",
        question: "Texnologik ta’limda nazariya bilan nima bog‘lanishi muhim?",
        answers: [
            "Amaliy faoliyat",
            "Faqat suhbat",
            "Faqat uy vazifasi",
            "Faqat nazorat"
        ],
        correct: 0
    },

    {
        difficulty: "easy",
        question: "Dars rejasi qanday tuzilishi kerak?",
        answers: [
            "Mantiqiy ketma-ketlikda",
            "Tasodifiy",
            "Faqat bitta bosqichdan",
            "Faqat nazariy qismdan"
        ],
        correct: 0
    },

    {
        difficulty: "easy",
        question: "O‘quvchi faoliyati darsda qanday bo‘lishi kerak?",
        answers: [
            "Faol va maqsadga yo‘naltirilgan",
            "Faqat tinglovchi",
            "Faqat kuzatuvchi",
            "Darsda ishtirok etmasligi kerak"
        ],
        correct: 0
    },

    {
        difficulty: "easy",
        question: "Dars loyihasi nimaga xizmat qiladi?",
        answers: [
            "Kutilayotgan natijaga erishishni tashkil etishga",
            "Darsni murakkablashtirishga",
            "Faqat hujjat ko‘paytirishga",
            "O‘quvchini darsdan chetlashtirishga"
        ],
        correct: 0
    },


    /* -----------------------------------------------------
       O‘RTA
       ----------------------------------------------------- */

    {
        difficulty: "medium",
        question: "Dars loyihalashning mantiqiy ketma-ketligi qaysi?",
        answers: [
            "Maqsad → mazmun → metod → vosita → topshiriq → baholash",
            "Baholash → vosita → maqsad → tanaffus",
            "Metod → tanaffus → maqsad → baholash",
            "Vosita → baholash → mazmun → maqsad"
        ],
        correct: 0
    },

    {
        difficulty: "medium",
        question: "Texnologik xaritada o‘qituvchi faoliyati bilan birga yana nima ko‘rsatiladi?",
        answers: [
            "O‘quvchi faoliyati",
            "Faqat direktor faoliyati",
            "Faqat ota-ona faoliyati",
            "Faqat texnika ro‘yxati"
        ],
        correct: 0
    },

    {
        difficulty: "medium",
        question: "Muammoli ta’limda o‘quvchining asosiy faoliyati nima?",
        answers: [
            "Muammoni tahlil qilib, yechim izlash",
            "Faqat matnni ko‘chirish",
            "Faqat tinglash",
            "Faqat tayyor javobni yodlash"
        ],
        correct: 0
    },

    {
        difficulty: "medium",
        question: "Hamkorlikdagi ta’limning asosiy belgisi qaysi?",
        answers: [
            "Birgalikdagi faoliyat",
            "Faqat individual ishlash",
            "Faqat o‘qituvchi nutqi",
            "Faqat test ishlash"
        ],
        correct: 0
    },

    {
        difficulty: "medium",
        question: "Loyihaviy ta’limda asosiy natija nimaga bog‘liq?",
        answers: [
            "Amaliy mahsulot yoki loyiha yaratishga",
            "Faqat ma’ruzani tinglashga",
            "Faqat yozma diktantga",
            "Faqat baho olishga"
        ],
        correct: 0
    },

    {
        difficulty: "medium",
        question: "Texnologik ta’limda o‘qituvchi namoyishi nima uchun kerak?",
        answers: [
            "Amaliy harakatni to‘g‘ri ko‘rsatish uchun",
            "Darsni tugatish uchun",
            "O‘quvchini almashtirish uchun",
            "Faqat nazariyani o‘qish uchun"
        ],
        correct: 0
    },

    {
        difficulty: "medium",
        question: "Amaliy ish bosqichida o‘quvchi nima qiladi?",
        answers: [
            "O‘zlashtirgan bilimini amalda qo‘llaydi",
            "Faqat o‘qituvchini kuzatadi",
            "Faqat baho kutadi",
            "Faqat savol beradi"
        ],
        correct: 0
    },

    {
        difficulty: "medium",
        question: "Baholash mezonlari qachon belgilanishi maqsadga muvofiq?",
        answers: [
            "Dars loyihalash jarayonida oldindan",
            "Faqat dars tugagandan keyin",
            "Faqat o‘quvchi so‘raganda",
            "Hech qachon"
        ],
        correct: 0
    },

    {
        difficulty: "medium",
        question: "Dars vositalari qanday tanlanadi?",
        answers: [
            "Maqsad, mazmun va faoliyatga mos ravishda",
            "Faqat qimmatligiga qarab",
            "Tasodifiy",
            "Faqat tashqi ko‘rinishiga qarab"
        ],
        correct: 0
    },

    {
        difficulty: "medium",
        question: "Ta’lim texnologiyasining uchta asosiy elementi qaysilar?",
        answers: [
            "Maqsad, jarayon, natija",
            "Kitob, doska, ruchka",
            "O‘qituvchi, direktor, ota-ona",
            "Sinf, tanaffus, uy vazifasi"
        ],
        correct: 0
    },


    /* -----------------------------------------------------
       QIYIN
       ----------------------------------------------------- */

    {
        difficulty: "hard",
        question: "Agar dars maqsadi amaliy ko‘nikmani shakllantirish bo‘lsa, qaysi yondashuv ko‘proq mos keladi?",
        answers: [
            "Nazariya bilan birga amaliy faoliyatni tashkil etish",
            "Faqat ma’ruza o‘qish",
            "Faqat matn yodlatish",
            "Faqat yakuniy test o‘tkazish"
        ],
        correct: 0
    },

    {
        difficulty: "hard",
        question: "Texnologik xaritaning pedagogik ahamiyati nimada?",
        answers: [
            "Dars jarayonidagi faoliyatlarni oldindan tizimlashtirishda",
            "Faqat hujjat sonini oshirishda",
            "Faqat baholarni yozishda",
            "Faqat o‘qituvchiga dam berishda"
        ],
        correct: 0
    },

    {
        difficulty: "hard",
        question: "Dars maqsadi bilan baholash mezoni o‘rtasidagi munosabat qanday bo‘lishi kerak?",
        answers: [
            "Baholash mezoni erishilishi kerak bo‘lgan maqsadga mos bo‘lishi kerak",
            "Ular bir-biriga bog‘liq bo‘lmasligi kerak",
            "Baholash faqat o‘qituvchining xohishiga bog‘liq",
            "Maqsad baholashdan keyin belgilanadi"
        ],
        correct: 0
    },

    {
        difficulty: "hard",
        question: "Texnologik ta’limda xavfsizlik qoidalari qaysi bosqichda hisobga olinishi kerak?",
        answers: [
            "Darsni loyihalash va amaliy faoliyatni tashkil etish jarayonida",
            "Faqat dars tugagandan keyin",
            "Faqat test vaqtida",
            "Umuman kerak emas"
        ],
        correct: 0
    },

    {
        difficulty: "hard",
        question: "O‘qituvchi namoyishi va o‘quvchining mustaqil amaliyoti o‘rtasidagi asosiy farq nima?",
        answers: [
            "Namoyishda o‘qituvchi harakatni ko‘rsatadi, amaliyotda o‘quvchi bajaradi",
            "Ikkalasining farqi yo‘q",
            "Namoyishda o‘quvchi, amaliyotda direktor ishlaydi",
            "Amaliyot faqat nazariy tushuntirishdan iborat"
        ],
        correct: 0
    },

    {
        difficulty: "hard",
        question: "Dars loyihasida metod noto‘g‘ri tanlansa, qanday muammo yuzaga kelishi mumkin?",
        answers: [
            "Maqsadga erishish samaradorligi pasayishi mumkin",
            "Dars avtomatik ravishda mukammal bo‘ladi",
            "O‘quvchi hech qanday ta’sir ko‘rmaydi",
            "Baholashga ehtiyoj qolmaydi"
        ],
        correct: 0
    },

    {
        difficulty: "hard",
        question: "Amaliy topshiriqning murakkabligi nimaga mos bo‘lishi kerak?",
        answers: [
            "O‘quvchining tayyorgarligi va dars maqsadiga",
            "Faqat o‘qituvchining xohishiga",
            "Faqat vaqtning uzunligiga",
            "Tasodifiy ravishda"
        ],
        correct: 0
    },

    {
        difficulty: "hard",
        question: "Dars loyihasida 'natija' tushunchasi nimani anglatadi?",
        answers: [
            "O‘quvchida shakllangan bilim, ko‘nikma yoki malakani",
            "Faqat darsning davomiyligini",
            "Faqat o‘qituvchining faoliyatini",
            "Faqat foydalanilgan vositalarni"
        ],
        correct: 0
    },

    {
        difficulty: "hard",
        question: "Nazariya → namoyish → amaliy ish → nazorat ketma-ketligi nimani ifodalaydi?",
        answers: [
            "Texnologik ta’limdagi mantiqiy o‘quv jarayonini",
            "Faqat test tizimini",
            "Faqat nazorat ishini",
            "Faqat uy vazifasini"
        ],
        correct: 0
    },

    {
        difficulty: "hard",
        question: "Yaxshi loyihalangan darsning asosiy belgisi qaysi?",
        answers: [
            "Maqsad, jarayon, faoliyat va natija o‘zaro bog‘langan bo‘ladi",
            "Faqat ko‘p ma’lumot beriladi",
            "Faqat o‘qituvchi faol bo‘ladi",
            "Faqat ko‘p test beriladi"
        ],
        correct: 0
    }

];


/* =========================================================
   6. TEST SAVOLLARINI TANLASH
   ========================================================= */

function createTestQuestions() {

    const easy = shuffleArray(
        questionBank.filter(q => q.difficulty === "easy")
    ).slice(0, 3);


    const medium = shuffleArray(
        questionBank.filter(q => q.difficulty === "medium")
    ).slice(0, 4);


    const hard = shuffleArray(
        questionBank.filter(q => q.difficulty === "hard")
    ).slice(0, 3);


    const selected = [
        ...easy,
        ...medium,
        ...hard
    ];


    return shuffleArray(selected).map(question => {

        const answers = question.answers.map(
            (answer, index) => ({
                text: answer,
                correct: index === question.correct
            })
        );


        return {
            question: question.question,
            answers: shuffleArray(answers)
        };

    });
}


/* =========================================================
   7. SLAYDNI KO‘RSATISH
   ========================================================= */

function renderSlide() {

    const slide = slides[currentSlide];

    if (!slide) return;


    const titleElement =
        document.getElementById("slideTitle");

    const descriptionElement =
        document.getElementById("slideDescription");

    const visualElement =
        document.getElementById("slideVisual");


    if (titleElement) {
        titleElement.textContent = slide.title;
    }


    if (descriptionElement) {
        descriptionElement.innerHTML =
            slide.description;
    }


    if (visualElement) {
        visualElement.innerHTML =
            slide.visual;
    }


    const labels =
        document.querySelectorAll(".section-label");


    labels.forEach(label => {
        label.textContent = slide.label;
    });


    updateProgress();


    updateNavigation();


    if (slide.type === "final") {
        updateLessonBuilder();
    }
}


/* =========================================================
   8. PROGRESS
   ========================================================= */

function updateProgress() {

    const progressBar =
        document.getElementById("progressBar");

    if (!progressBar) return;


    const percent =
        ((currentSlide + 1) / slides.length) * 100;


    progressBar.style.width =
        percent + "%";
}


/* =========================================================
   9. NAVIGATSIYA
   ========================================================= */

function updateNavigation() {

    const prevButton =
        document.getElementById("prevBtn");

    const nextButton =
        document.getElementById("nextBtn");


    if (prevButton) {
        prevButton.disabled =
            currentSlide === 0;
    }


    if (nextButton) {

        if (currentSlide === slides.length - 1) {

            nextButton.textContent =
                "⚡ TESTGA O‘TISH";

        } else {

            nextButton.textContent =
                "KEYINGI →";

        }
    }
}


/* =========================================================
   10. DARSNI BOSHLASH
   ========================================================= */

function startLesson() {

    currentSlide = 0;


    lessonBuilder = {
        Maqsad: false,
        Metod: false,
        Amaliyot: false,
        Baholash: false
    };


    const startScreen =
        document.getElementById("startScreen");

    const lessonScreen =
        document.getElementById("lesson");


    if (startScreen) {
        startScreen.classList.remove("active");
    }


    if (lessonScreen) {
        lessonScreen.classList.add("active");
    }


    renderSlide();
}


/* =========================================================
   11. KEYINGI SLAYD
   ========================================================= */

function nextSlide() {

    if (currentSlide <
        slides.length - 1) {

        currentSlide++;

        renderSlide();

    } else {

        startTest();

    }
}


/* =========================================================
   12. OLDINGI SLAYD
   ========================================================= */

function previousSlide() {

    if (currentSlide > 0) {

        currentSlide--;

        renderSlide();

    }
}


/* =========================================================
   13. 2-SLAYD — KONSEPT
   ========================================================= */

function showConceptInfo(type) {

    const box =
        document.getElementById("conceptInfo");

    if (!box) return;


    const information = {

        "Maqsad": `
            <strong>🎯 MAQSAD</strong>
            <p>
                Dars yakunida o‘quvchi qanday bilim,
                ko‘nikma yoki malakaga ega bo‘lishi
                kerakligi belgilanadi.
            </p>
        `,

        "Jarayon": `
            <strong>⚙ JARAYON</strong>
            <p>
                Belgilangan maqsadga erishish uchun
                o‘qituvchi va o‘quvchi faoliyati
                qanday tashkil etilishini anglatadi.
            </p>
        `,

        "Natija": `
            <strong>✓ NATIJA</strong>
            <p>
                Dars yakunida o‘quvchida shakllangan
                bilim, ko‘nikma va malakalar aniqlanadi.
            </p>
        `

    };


    box.innerHTML =
        information[type] || "";


    box.classList.remove("selected");


    void box.offsetWidth;


    box.classList.add("selected");
}


/* =========================================================
   14. 3-SLAYD — METOD
   ========================================================= */

function selectMethod(method) {

    const box =
        document.getElementById("methodResult");

    if (!box) return;


    const information = {

        "Muammoli ta’lim": `
            <strong>❓ MUAMMOLI TA’LIM</strong>
            <p>
                O‘quvchiga muammoli vaziyat beriladi.
                U vaziyatni tahlil qiladi va mustaqil
                ravishda yechim izlaydi.
            </p>
        `,

        "Hamkorlikdagi ta’lim": `
            <strong>👥 HAMKORLIKDAGI TA’LIM</strong>
            <p>
                O‘quvchilar guruh yoki juftliklarda
                hamkorlikda topshiriqni bajaradilar.
            </p>
        `,

        "Loyihaviy ta’lim": `
            <strong>◈ LOYIHAVIY TA’LIM</strong>
            <p>
                O‘quvchi ma’lum bir muammoni hal qilish
                yoki amaliy mahsulot yaratish orqali
                bilim oladi.
            </p>
        `,

        "Amaliy ta’lim": `
            <strong>⚙ AMALIY TA’LIM</strong>
            <p>
                Nazariy bilim bevosita amaliy harakat
                orqali mustahkamlanadi.
            </p>
        `

    };


    box.innerHTML =
        information[method] || "";


    box.classList.remove("selected");


    void box.offsetWidth;


    box.classList.add("selected");
}


/* =========================================================
   15. 4-SLAYD — DARS KONSTRUKTORI
   ========================================================= */

function showLessonPart(type) {

    const box =
        document.getElementById("lessonPartInfo");

    if (!box) return;


    const information = {

        "Maqsad": `
            <strong>🎯 MAQSAD</strong>
            <p>
                Dars yakunida o‘quvchi qanday bilim,
                ko‘nikma yoki malakaga ega bo‘lishi
                kerakligi belgilanadi.
            </p>
        `,

        "Mazmun": `
            <strong>📚 MAZMUN</strong>
            <p>
                O‘quvchiga beriladigan bilimlar,
                tushunchalar va amaliy materiallar
                mazmunini belgilaydi.
            </p>
        `,

        "Metod": `
            <strong>⚙ METOD</strong>
            <p>
                Belgilangan maqsadga erishish uchun
                qanday o‘qitish usulidan foydalanish
                aniqlanadi.
            </p>
        `,

        "Vosita": `
            <strong>🛠 VOSITA</strong>
            <p>
                Darsni tashkil etishda foydalaniladigan
                asbob-uskunalar, texnika, materiallar
                va didaktik vositalar tanlanadi.
            </p>
        `,

        "Topshiriq": `
            <strong>📋 TOPSHIRIQ</strong>
            <p>
                O‘quvchi o‘zlashtirgan bilimini amalda
                qo‘llashi uchun aniq vazifa beriladi.
            </p>
        `,

        "Baholash": `
            <strong>✓ BAHOLASH</strong>
            <p>
                O‘quvchining belgilangan maqsadga
                qanchalik erishgani aniqlanadi.
            </p>
        `

    };


    box.innerHTML =
        information[type] || "";


    box.classList.remove("selected");


    void box.offsetWidth;


    box.classList.add("selected");
}


/* =========================================================
   16. 5-SLAYD — TEXNOLOGIK XARITA
   ========================================================= */

function openMapRow(row, type) {

    document
        .querySelectorAll(".map-row")
        .forEach(item => {

            item.classList.remove("opened");

        });


    if (row) {
        row.classList.add("opened");
    }


    const box =
        document.getElementById("mapInfo");

    if (!box) return;


    const information = {

        "Kirish": `
            <strong>01 / KIRISH</strong>

            <p>
                O‘qituvchi o‘quvchilarning e’tiborini
                mavzuga jalb qiladi va dars maqsadini
                ochib beradi.
            </p>
        `,

        "Yangi bilim": `
            <strong>02 / YANGI BILIM</strong>

            <p>
                Yangi tushuncha va nazariy ma’lumotlar
                tushuntiriladi. O‘quvchi ma’lumotni
                tahlil qiladi.
            </p>
        `,

        "Amaliy ish": `
            <strong>03 / AMALIY ISH</strong>

            <p>
                O‘quvchi o‘zlashtirilgan bilimni
                amaliy topshiriq orqali qo‘llaydi.
            </p>
        `,

        "Nazorat": `
            <strong>04 / NAZORAT</strong>

            <p>
                O‘quvchining bajargan ishi, bilim va
                ko‘nikmalari baholanadi.
            </p>
        `

    };


    box.innerHTML =
        information[type] || "";


    box.classList.remove("selected");


    void box.offsetWidth;


    box.classList.add("selected");
}


/* =========================================================
   17. 6-SLAYD — TEXNOLOGIK TA’LIM
   ========================================================= */

function showTechStep(type) {

    const box =
        document.getElementById("techStepInfo");

    if (!box) return;


    const information = {

        "Nazariya": `
            <strong>📚 01 / NAZARIYA</strong>

            <p>
                O‘quvchi metall yoki metallmas material,
                uning xususiyatlari va unga ishlov berish
                texnologiyasi haqida nazariy bilim oladi.
            </p>
        `,

        "Namoyish": `
            <strong>👁 02 / NAMOYISH</strong>

            <p>
                O‘qituvchi asbob-uskunadan foydalanish,
                ishlov berish ketma-ketligi va xavfsizlik
                qoidalarini amalda ko‘rsatadi.
            </p>
        `,

        "Amaliy ish": `
            <strong>⚙ 03 / AMALIY ISH</strong>

            <p>
                O‘quvchi berilgan topshiriqni mustaqil
                bajarib, nazariy bilimini amaliy
                ko‘nikmaga aylantiradi.
            </p>
        `,

        "Nazorat": `
            <strong>✓ 04 / NAZORAT</strong>

            <p>
                Bajarilgan ishning sifati, texnologik
                ketma-ketlik va xavfsizlik qoidalariga
                rioya qilinishi baholanadi.
            </p>
        `

    };


    box.innerHTML =
        information[type] || "";


    document
        .querySelectorAll(".tech-step")
        .forEach(button => {

            button.classList.remove("selected");

        });


    document
        .querySelectorAll(".tech-step")
        .forEach(button => {

            if (
                button.innerText
                    .toUpperCase()
                    .includes(type.toUpperCase())
            ) {

                button.classList.add("selected");

            }

        });


    box.classList.remove("selected");


    void box.offsetWidth;


    box.classList.add("selected");
}


/* =========================================================
   18. 7-SLAYD — DARS LOYIHASINI YIG‘ISH
   ========================================================= */

function buildLesson(type) {

    lessonBuilder[type] =
        !lessonBuilder[type];


    const buttons =
        document.querySelectorAll(
            ".final-flow button"
        );


    const names = [
        "Maqsad",
        "Metod",
        "Amaliyot",
        "Baholash"
    ];


    buttons.forEach((button, index) => {

        if (
            lessonBuilder[names[index]]
        ) {

            button.classList.add("selected");

        } else {

            button.classList.remove("selected");

        }

    });


    updateLessonBuilder();
}


/* =========================================================
   19. 7-SLAYD NATIJASINI YANGILASH
   ========================================================= */

function updateLessonBuilder() {

    const box =
        document.getElementById("lessonBuilder");

    const message =
        document.getElementById(
            "lessonBuilderMessage"
        );


    if (!box) return;


    const count =
        Object.values(lessonBuilder)
            .filter(Boolean)
            .length;


    if (count === 0) {

        box.innerHTML = `
            <span>?</span>

            <strong>
                DARS LOYIHASI
            </strong>

            <small>
                Yuqoridagi bosqichlarni tanlang
            </small>
        `;


        if (message) {
            message.textContent = "";
        }


        return;
    }


    if (count < 4) {

        box.innerHTML = `
            <span>${count}</span>

            <strong>
                BOSQICH TANLANDI
            </strong>

            <small>
                Yana ${4 - count} ta bosqichni tanlang
            </small>
        `;


        if (message) {

            message.textContent =
                "Dars loyihasi hali to‘liq emas.";

        }


        return;
    }


    box.innerHTML = `
        <span>✓</span>

        <strong>
            DARS REJASI TAYYOR
        </strong>

        <small>
            Maqsad → Metod → Amaliyot → Baholash
        </small>
    `;


    if (message) {

        message.innerHTML = `
            <strong>🎉 Juda yaxshi!</strong>

            <p>
                Siz dars loyihasining asosiy
                elementlarini to‘g‘ri birlashtirdingiz.
            </p>
        `;

    }
}


/* =========================================================
   20. TESTNI BOSHLASH
   ========================================================= */

function startTest() {

    clearInterval(timerInterval);


    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    timeLeft = 30;


    testQuestions =
        createTestQuestions();


    const lessonScreen =
        document.getElementById("lesson");

    const testScreen =
        document.getElementById("test");


    if (lessonScreen) {
        lessonScreen.classList.remove("active");
    }


    if (testScreen) {
        testScreen.classList.add("active");
    }


    loadQuestion();
}


/* =========================================================
   21. SAVOLNI YUKLASH
   ========================================================= */

function loadQuestion() {

    clearInterval(timerInterval);


    selectedAnswer = null;

    timeLeft = 30;


    const question =
        testQuestions[currentQuestion];


    if (!question) {

        showResult();

        return;

    }


    const questionNumber =
        document.getElementById(
            "questionNumber"
        );


    const questionText =
        document.getElementById(
            "questionText"
        );


    const answersContainer =
        document.getElementById(
            "answers"
        );


    const timer =
        document.getElementById(
            "timer"
        );


    if (questionNumber) {

        questionNumber.textContent =
            `${currentQuestion + 1} / ${testQuestions.length}`;

    }


    if (questionText) {

        questionText.textContent =
            question.question;

    }


    if (answersContainer) {

        answersContainer.innerHTML = "";


        question.answers.forEach(
            (answer, index) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type = "button";


                button.className =
                    "answer";


                button.innerHTML = `
                    <span class="answer-number">
                        ${String.fromCharCode(65 + index)}
                    </span>

                    <span>
                        ${answer.text}
                    </span>
                `;


                button.onclick = function () {

                    selectAnswer(
                        index,
                        button
                    );

                };


                answersContainer.appendChild(
                    button
                );

            }
        );

    }


    if (timer) {

        timer.textContent =
            timeLeft;

    }


    updateTestProgress();

    startTimer();
}


/* =========================================================
   22. JAVOB TANLASH
   ========================================================= */

function selectAnswer(index, button) {

    selectedAnswer = index;


    document
        .querySelectorAll(".answer")
        .forEach(answer => {

            answer.classList.remove(
                "selected"
            );

        });


    if (button) {

        button.classList.add(
            "selected"
        );

    }
}


/* =========================================================
   23. JAVOBNI TASDIQLASH
   ========================================================= */

function confirmAnswer() {

    if (selectedAnswer === null) {

        return;

    }


    clearInterval(timerInterval);


    const question =
        testQuestions[currentQuestion];


    const selected =
        question.answers[selectedAnswer];


    if (selected && selected.correct) {

        score += 10;

    }


    currentQuestion++;


    if (
        currentQuestion >=
        testQuestions.length
    ) {

        showResult();

    } else {

        loadQuestion();

    }
}


/* =========================================================
   24. TIMER
   ========================================================= */

function startTimer() {

    clearInterval(timerInterval);


    timerInterval =
        setInterval(() => {

            timeLeft--;


            const timer =
                document.getElementById(
                    "timer"
                );


            if (timer) {

                timer.textContent =
                    timeLeft;

            }


            if (timeLeft <= 0) {

                timeIsUp();

            }

        }, 1000);
}


/* =========================================================
   25. VAQT TUGADI
   ========================================================= */

function timeIsUp() {

    clearInterval(timerInterval);


    currentQuestion++;


    if (
        currentQuestion >=
        testQuestions.length
    ) {

        showResult();

    } else {

        loadQuestion();

    }
}


/* =========================================================
   26. TEST PROGRESS
   ========================================================= */

function updateTestProgress() {

    const progressBar =
        document.getElementById(
            "testProgressBar"
        );


    if (!progressBar) return;


    const percent =
        (currentQuestion /
            testQuestions.length) * 100;


    progressBar.style.width =
        percent + "%";
}


/* =========================================================
   27. TEST NATIJASI
   ========================================================= */

function showResult() {

    clearInterval(timerInterval);


    const testScreen =
        document.getElementById("test");

    const resultScreen =
        document.getElementById("result");


    if (testScreen) {
        testScreen.classList.remove("active");
    }


    if (resultScreen) {
        resultScreen.classList.add("active");
    }


    const scoreElement =
        document.getElementById("score");


    const resultMessage =
        document.getElementById(
            "resultMessage"
        );


    if (scoreElement) {

        scoreElement.textContent =
            score;

    }


    if (resultMessage) {

        if (score >= 90) {

            resultMessage.textContent =
                "A’lo natija! Mavzuni juda yaxshi o‘zlashtirgansiz.";

        } else if (score >= 70) {

            resultMessage.textContent =
                "Yaxshi natija! Mavzuning asosiy qismlarini o‘zlashtirgansiz.";

        } else if (score >= 50) {

            resultMessage.textContent =
                "Qoniqarli natija. Mavzuni yana bir bor takrorlash foydali.";

        } else {

            resultMessage.textContent =
                "Mavzuni qayta ko‘rib chiqish va testni yana ishlash tavsiya etiladi.";

        }

    }
}


/* =========================================================
   28. YAKUNIY EKRAN
   ========================================================= */

function showFinal() {

    const resultScreen =
        document.getElementById("result");

    const finalScreen =
        document.getElementById("final");


    if (resultScreen) {

        resultScreen.classList.remove(
            "active"
        );

    }


    if (finalScreen) {

        finalScreen.classList.add(
            "active"
        );

    }
}


/* =========================================================
   29. DARSNI QAYTA BOSHLASH
   ========================================================= */

function restartLesson() {

    clearInterval(timerInterval);


    currentSlide = 0;

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    timeLeft = 30;


    lessonBuilder = {
        Maqsad: false,
        Metod: false,
        Amaliyot: false,
        Baholash: false
    };


    const screens =
        document.querySelectorAll(
            ".screen"
        );


    screens.forEach(screen => {

        screen.classList.remove(
            "active"
        );

    });


    const startScreen =
        document.getElementById(
            "startScreen"
        );


    if (startScreen) {

        startScreen.classList.add(
            "active"
        );

    }
}


/* =========================================================
   30. KLAVIATURA ORQALI BOSHQARISH
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        const lesson =
            document.getElementById(
                "lesson"
            );


        if (
            !lesson ||
            !lesson.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (event.key === "ArrowRight") {

            nextSlide();

        }


        if (event.key === "ArrowLeft") {

            previousSlide();

        }

    }
);


/* =========================================================
   31. SAHIFA YUKLANGANDA
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * Agar lesson ekrani boshidan
         * active bo‘lsa, birinchi slaydni chiqaramiz.
         */

        const lesson =
            document.getElementById(
                "lesson"
            );


        if (
            lesson &&
            lesson.classList.contains(
                "active"
            )
        ) {

            renderSlide();

        }

    }
);