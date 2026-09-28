let currentSlide = 0;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timerInterval = null;
let timeLeft = 30;


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
                    DARSNI BOSQICHMA-BOSQICH QURING
                </div>

                <div class="constructor-track">

                    <div class="construct-block">
                        <b>01</b>
                        🎯
                        <span>MAQSAD</span>
                    </div>

                    <div class="construct-line"></div>

                    <div class="construct-block">
                        <b>02</b>
                        📚
                        <span>MAZMUN</span>
                    </div>

                    <div class="construct-line"></div>

                    <div class="construct-block">
                        <b>03</b>
                        ⚙
                        <span>METOD</span>
                    </div>

                    <div class="construct-line"></div>

                    <div class="construct-block">
                        <b>04</b>
                        🛠
                        <span>VOSITA</span>
                    </div>

                </div>

                <div class="constructor-bottom">
                    <div>TOPSHIRIQ</div>
                    <div>BAHOLASH</div>
                    <strong>→ DARS NATIJASI</strong>
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


// ===============================
// TEST SAVOLLARI
// ===============================

const questions = [

    {
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
        question: "Dars rejasini tuzishda birinchi navbatda nima belgilanadi?",
        answers: [
            "Maqsad",
            "Uyga vazifa",
            "Baholash",
            "Tanaffus vaqti"
        ],
        correct: 0
    },

    {
        question: "Texnologik xaritada kimning faoliyati aks ettiriladi?",
        answers: [
            "Faqat o‘qituvchining",
            "Faqat o‘quvchining",
            "O‘qituvchi va o‘quvchining",
            "Faqat direktorning"
        ],
        correct: 2
    },

    {
        question: "Texnologik ta’limda nazariy bilimdan keyin nima muhim?",
        answers: [
            "Amaliy faoliyat",
            "Faqat yozma nazorat",
            "Darsni to‘xtatish",
            "Faqat ma’ruza"
        ],
        correct: 0
    },

    {
        question: "Dars natijasi nimaga bog‘liq?",
        answers: [
            "Faqat darslikka",
            "Maqsad, jarayon va baholashning uyg‘unligiga",
            "Faqat o‘quvchiga",
            "Faqat texnikaga"
        ],
        correct: 1
    }

];


// ===============================
// EKRAN ALMASHTIRISH
// ===============================

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


// ===============================
// DARSNI BOSHLASH
// ===============================

function startLesson() {

    currentSlide = 0;

    showScreen("lesson");

    renderSlide();
}


// ===============================
// SLAYDNI CHIZISH
// ===============================

function renderSlide() {

    const slide = slides[currentSlide];

    document.getElementById("slideNumber").textContent =
        `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

    document.getElementById("progressBar").style.width =
        `${((currentSlide + 1) / slides.length) * 100}%`;

    document.querySelector(".section-label").textContent =
        slide.label;

    document.getElementById("slideTitle").textContent =
        slide.title;

    document.getElementById("slideDescription").innerHTML =
        slide.description;

    document.getElementById("slideVisual").innerHTML =
        slide.visual;

    document.getElementById("lesson").className =
        `screen active slide-${slide.type}`;

    const previousButton =
        document.querySelector(".lesson-navigation .nav-btn");

    const nextButton =
        document.querySelector(".lesson-navigation .next");

    previousButton.disabled = currentSlide === 0;

    if (currentSlide === slides.length - 1) {

        nextButton.textContent = "⚡ TESTGA O‘TISH";

        nextButton.onclick = startTest;

    } else {

        nextButton.textContent = "KEYINGI →";

        nextButton.onclick = nextSlide;
    }

    // Animatsiyani qayta ishga tushirish
    const visual = document.getElementById("slideVisual");

    visual.classList.remove("animate-slide");

    void visual.offsetWidth;

    visual.classList.add("animate-slide");
}


// ===============================
// KEYINGI SLAYD
// ===============================

function nextSlide() {

    if (currentSlide < slides.length - 1) {

        currentSlide++;

        renderSlide();
    }
}


// ===============================
// OLDINGI SLAYD
// ===============================

function previousSlide() {

    if (currentSlide > 0) {

        currentSlide--;

        renderSlide();
    }
}


// ===============================
// 2-SLAYD: TUSHUNCHA
// ===============================

function showConceptInfo(type) {

    const box = document.getElementById("conceptInfo");

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


// ===============================
// 3-SLAYD: METOD TANLASH
// ===============================

function selectMethod(method) {

    const result = document.getElementById("methodResult");

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


// ===============================
// 5-SLAYD: TEXNOLOGIK XARITA
// ===============================

function openMapRow(row) {

    document.querySelectorAll(".map-row").forEach(item => {
        item.classList.remove("opened");
    });

    row.classList.add("opened");
}


// ===============================
// TESTNI BOSHLASH
// ===============================

function startTest() {

    clearInterval(timerInterval);

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    showScreen("test");

    loadQuestion();
}


// ===============================
// SAVOLNI YUKLASH
// ===============================

function loadQuestion() {

    clearInterval(timerInterval);

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `SAVOL ${currentQuestion + 1} / ${questions.length}`;

    document.getElementById("questionText").textContent =
        question.question;

    const answersBox =
        document.getElementById("answers");

    answersBox.innerHTML = "";

    selectedAnswer = null;

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.innerHTML = `
            <span>${String.fromCharCode(65 + index)}</span>
            ${answer}
        `;

        button.onclick = () => selectAnswer(index);

        answersBox.appendChild(button);
    });

    document.getElementById("feedback").textContent = "";

    document.getElementById("confirmButton").disabled = false;

    startTimer();
}


// ===============================
// JAVOB TANLASH
// ===============================

function selectAnswer(index) {

    selectedAnswer = index;

    document.querySelectorAll(".answer").forEach((button, i) => {

        button.classList.toggle(
            "selected",
            i === index
        );
    });
}


// ===============================
// JAVOBNI TASDIQLASH
// ===============================

function confirmAnswer() {

    if (selectedAnswer === null) {

        document.getElementById("feedback").textContent =
            "Avval javoblardan birini tanlang.";

        return;
    }

    clearInterval(timerInterval);

    const correct =
        questions[currentQuestion].correct;

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

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showResult();
        }

    }, 1200);
}


// ===============================
// TIMER
// ===============================

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


// ===============================
// VAQT TUGADI
// ===============================

function timeIsUp() {

    clearInterval(timerInterval);

    document.getElementById("feedback").textContent =
        "⏱ Vaqt tugadi!";

    document.getElementById("confirmButton").disabled = true;

    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showResult();
        }

    }, 1000);
}


// ===============================
// NATIJA
// ===============================

function showResult() {

    clearInterval(timerInterval);

    showScreen("result");

    document.getElementById("score").textContent =
        score;

    let message = "";

    if (score >= 40) {

        message =
            "Mavzu bo‘yicha bilimlaringiz yaxshi shakllangan.";

    } else if (score >= 30) {

        message =
            "Asosiy tushunchalarni o‘zlashtirgansiz, ayrim jihatlarni takrorlash foydali.";

    } else {

        message =
            "Mavzuni yana bir bor ko‘rib chiqish tavsiya etiladi.";
    }

    document.getElementById("resultText").textContent =
        message;
}


// ===============================
// YAKUNIY EKRAN
// ===============================

function showFinal() {

    showScreen("final");
}


// ===============================
// QAYTA BOSHLASH
// ===============================

function restartLesson() {

    clearInterval(timerInterval);

    currentSlide = 0;
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    showScreen("home");
}


// ===============================
// KLAVIATURA BOSHQARUVI
// ===============================

document.addEventListener("keydown", event => {

    const lesson =
        document.getElementById("lesson");

    if (!lesson || !lesson.classList.contains("active")) {
        return;
    }

    if (event.key === "ArrowRight") {

        nextSlide();
    }

    if (event.key === "ArrowLeft") {

        previousSlide();
    }
});