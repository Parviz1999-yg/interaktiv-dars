const slides = [
    {
        label: "KIRISH",
        title: "Nega darsni oldindan loyihalash kerak?",
        type: "problem",
        description: `
            Zamonaviy dars faqat mavzuni tushuntirishdan iborat emas.
            O‘qituvchi dars maqsadini, mazmunini, metodlarini, vositalarini
            va kutilayotgan natijani oldindan loyihalashi kerak.
            
            To‘g‘ri tuzilgan dars rejasi o‘qituvchi faoliyati bilan
            o‘quvchi faoliyatini yagona tizimga birlashtiradi.
        `,
        visual: `
            <div class="problem-visual">
                <div class="visual-question">?</div>

                <div class="lesson-flow">
                    <div class="flow-person">
                        <span>O‘QITUVCHI</span>
                    </div>

                    <div class="flow-arrow">→</div>

                    <div class="flow-person">
                        <span>DARS</span>
                    </div>

                    <div class="flow-arrow">→</div>

                    <div class="flow-person">
                        <span>O‘QUVCHI</span>
                    </div>
                </div>

                <div class="mini-cards">
                    <div class="mini-card">
                        <strong>MAQSAD</strong>
                        <span>Qaerga boramiz?</span>
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

                <div class="important-question">
                    <span>ASOSIY SAVOL</span>
                    Darsni qanday qilib samarali loyihalash mumkin?
                </div>
            </div>
        `
    },

    {
        label: "ASOSIY TUSHUNCHA",
        title: "Ta’lim texnologiyasi nima?",
        type: "concept",
        description: `
            Ta’lim texnologiyasi — ta’lim maqsadlariga erishish uchun
            o‘qitish jarayonini oldindan loyihalash, tashkil etish,
            amalga oshirish va natijani baholashga asoslangan tizimdir.
            
            Unda maqsad, mazmun, metod, vosita, faoliyat va baholash
            o‘zaro bog‘liq holda tashkil etiladi.
        `,
        visual: `
            <div class="concept-visual">
                <div class="concept-center">
                    <span>TA’LIM</span>
                    <strong>TEXNOLOGIYASI</strong>
                </div>

                <button class="concept-node node-top"
                    onclick="showConceptInfo('MAQSAD')">
                    MAQSAD
                </button>

                <button class="concept-node node-left"
                    onclick="showConceptInfo('JARAYON')">
                    JARAYON
                </button>

                <button class="concept-node node-right"
                    onclick="showConceptInfo('NATIJA')">
                    NATIJA
                </button>

                <div id="conceptInfo" class="concept-info">
                    Elementni tanlang
                </div>
            </div>
        `
    },

    {
        label: "METODLAR",
        title: "Ta’lim texnologiyalarining asosiy turlari",
        type: "methods",
        description: `
            Dars maqsadi va mazmuniga qarab turli pedagogik texnologiyalar
            tanlanadi. Texnologik ta’limda nazariya bilan amaliy faoliyatni
            birlashtirish ayniqsa muhimdir.
            
            Quyidagi usullardan birini tanlab, uning darsdagi rolini ko‘ring.
        `,
        visual: `
            <div class="methods-visual">
                <div class="scenario-grid">

                    <button onclick="selectMethod('MUAMMOLI TA’LIM')">
                        <span>01</span>
                        <strong>Muammoli ta’lim</strong>
                        <small>Muammo → izlanish → yechim</small>
                    </button>

                    <button onclick="selectMethod('HAMKORLIK')">
                        <span>02</span>
                        <strong>Hamkorlikdagi ta’lim</strong>
                        <small>Jamoa → muloqot → natija</small>
                    </button>

                    <button onclick="selectMethod('LOYIHA')">
                        <span>03</span>
                        <strong>Loyihaviy ta’lim</strong>
                        <small>G‘oya → loyiha → mahsulot</small>
                    </button>

                    <button onclick="selectMethod('AMALIY TA’LIM')">
                        <span>04</span>
                        <strong>Amaliy ta’lim</strong>
                        <small>Nazariya → amaliyot → ko‘nikma</small>
                    </button>

                </div>

                <div id="methodResult" class="method-result">
                    Texnologiyani tanlang
                </div>
            </div>
        `
    },

    {
        label: "KONSTRUKTOR",
        title: "Dars rejasining tuzilishi",
        type: "constructor",
        description: `
            Samarali dars rejasi o‘zaro bog‘langan elementlardan tashkil topadi.
            Avvalo maqsad belgilanadi. Keyin mazmun, metod va vositalar
            tanlanadi. O‘quvchi faoliyati va baholash mezonlari esa
            kutilayotgan natijaga moslashtiriladi.
        `,
        visual: `
            <div class="constructor-visual">

                <div class="constructor-track">

                    <div class="construct-block">
                        <span>01</span>
                        <strong>MAQSAD</strong>
                    </div>

                    <div class="construct-arrow">→</div>

                    <div class="construct-block">
                        <span>02</span>
                        <strong>MAZMUN</strong>
                    </div>

                    <div class="construct-arrow">→</div>

                    <div class="construct-block">
                        <span>03</span>
                        <strong>METOD</strong>
                    </div>

                    <div class="construct-arrow">→</div>

                    <div class="construct-block">
                        <span>04</span>
                        <strong>VOSITA</strong>
                    </div>

                </div>

                <div class="constructor-bottom">

                    <div>
                        <span>TOPSHIRIQ</span>
                        O‘quvchi nima qiladi?
                    </div>

                    <div>
                        <span>BAHOLASH</span>
                        Natija qanday aniqlanadi?
                    </div>

                    <div>
                        <span>DARS NATIJASI</span>
                        Qanday kompetensiya shakllanadi?
                    </div>

                </div>

            </div>
        `
    },

    {
        label: "TEXNOLOGIK XARITA",
        title: "Darsning texnologik xaritasi",
        type: "map",
        description: `
            Texnologik xarita darsning bosqichlarini izchil ko‘rsatadi.
            Unda o‘qituvchi va o‘quvchi faoliyati, qo‘llaniladigan metodlar,
            vositalar hamda baholash mezonlari o‘zaro bog‘lanadi.
            
            Har bir bosqichni tanlab, uning mazmunini ko‘ring.
        `,
        visual: `
            <div class="map-visual">

                <div class="map-header">
                    <span>BOSQICH</span>
                    <span>FAOLIYAT</span>
                    <span>NATIJA</span>
                </div>

                <button class="map-row"
                    onclick="openMapRow('KIRISH')">
                    <strong>01</strong>
                    <span>Kirish</span>
                    <small>Maqsad va motivatsiya</small>
                </button>

                <button class="map-row"
                    onclick="openMapRow('YANGI BILIM')">
                    <strong>02</strong>
                    <span>Yangi bilim</span>
                    <small>Tushuntirish va namoyish</small>
                </button>

                <button class="map-row"
                    onclick="openMapRow('AMALIY ISH')">
                    <strong>03</strong>
                    <span>Amaliy ish</span>
                    <small>Bilimni faol qo‘llash</small>
                </button>

                <button class="map-row"
                    onclick="openMapRow('NAZORAT')">
                    <strong>04</strong>
                    <span>Nazorat</span>
                    <small>Natijani baholash</small>
                </button>

                <div id="mapInfo" class="concept-info">
                    Bosqichni tanlang
                </div>

            </div>
        `
    },

    {
        label: "TEXNOLOGIK TA’LIM",
        title: "Texnologik ta’limga moslashtirish",
        type: "technology",
        description: `
            “Metallar va metallmaslarga ishlov berishni o‘qitish metodikasi”
            fanida dars rejasi nazariya va amaliy faoliyatning uzviy
            bog‘lanishini ta’minlashi kerak.
            
            O‘quvchi avval nazariy bilimni oladi, o‘qituvchi amaliy jarayonni
            namoyish etadi, keyin o‘quvchi mustaqil amaliy ish bajaradi
            va yakunda uning natijasi baholanadi.
        `,
        visual: `
            <div class="technology-visual">

                <div class="technology-image-card">
                    <img
                        src="images/interaktiv-dars.jpg"
                        alt="Metallga ishlov berish jarayoni"
                    >

                    <div class="image-caption">
                        METALLGA ISHLOV BERISH
                    </div>
                </div>

                <div class="tech-process">

                    <div class="tech-step">
                        <span>01</span>
                        <strong>NAZARIYA</strong>
                    </div>

                    <div class="process-arrow">→</div>

                    <div class="tech-step">
                        <span>02</span>
                        <strong>NAMOYISH</strong>
                    </div>

                    <div class="process-arrow">→</div>

                    <div class="tech-step">
                        <span>03</span>
                        <strong>AMALIY ISH</strong>
                    </div>

                    <div class="process-arrow">→</div>

                    <div class="tech-step">
                        <span>04</span>
                        <strong>NAZORAT</strong>
                    </div>

                </div>

            </div>
        `
    },

    {
        label: "XULOSA",
        title: "Darsni o‘zimiz tuzamiz",
        type: "final",
        description: `
            Endi dars rejasini mustaqil loyihalash uchun asosiy mantiq
            bizga ma’lum:
            
            MAQSAD → METOD → AMALIYOT → BAHOLASH.
            
            Ushbu ketma-ketlik darsning mazmuni va kutilayotgan natijalarini
            bir butun tizim sifatida tashkil etishga yordam beradi.
        `,
        visual: `
            <div class="final-visual">

                <div class="final-flow">

                    <div>
                        <span>01</span>
                        <strong>MAQSAD</strong>
                    </div>

                    <div>→</div>

                    <div>
                        <span>02</span>
                        <strong>METOD</strong>
                    </div>

                    <div>→</div>

                    <div>
                        <span>03</span>
                        <strong>AMALIYOT</strong>
                    </div>

                    <div>→</div>

                    <div>
                        <span>04</span>
                        <strong>BAHOLASH</strong>
                    </div>

                </div>

                <div class="ready-box">
                    <span>✓</span>
                    <strong>DARS LOYIHASI</strong>
                    <small>DARS REJASI TAYYOR</small>
                </div>

            </div>
        `
    }
];


const questions = [
    {
        question: "Ta’lim texnologiyasining asosiy maqsadi nima?",
        answers: [
            "Faqat nazariy ma’lumot berish",
            "Ta’lim jarayonini maqsadli va samarali tashkil etish",
            "Faqat baho qo‘yish",
            "Dars vaqtini qisqartirish"
        ],
        correct: 1
    },

    {
        question: "Dars rejasini tuzishda birinchi navbatda nima belgilanadi?",
        answers: [
            "Maqsad",
            "Ranglar",
            "Uy vazifasi",
            "Kompyuter dasturi"
        ],
        correct: 0
    },

    {
        question: "Texnologik xaritada nimalar o‘zaro bog‘lanadi?",
        answers: [
            "Faqat o‘qituvchi faoliyati",
            "Faqat o‘quvchi faoliyati",
            "O‘qituvchi va o‘quvchi faoliyati",
            "Faqat darslik"
        ],
        correct: 2
    },

    {
        question: "Texnologik ta’limda nazariy tushuntirishdan keyin qaysi faoliyat muhim?",
        answers: [
            "Faqat tanaffus",
            "Amaliy faoliyat",
            "Faqat yozma nazorat",
            "Darsni tugatish"
        ],
        correct: 1
    },

    {
        question: "Samarali dars natijasi eng avvalo nimaga bog‘liq?",
        answers: [
            "Faqat chiroyli slaydlarga",
            "Faqat uzun matnga",
            "Maqsad, jarayon va baholashning uyg‘unligiga",
            "Faqat o‘qituvchining nutqiga"
        ],
        correct: 2
    }
];


let currentSlide = 0;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let timer = null;
let timeLeft = 30;
let answered = false;


function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = document.getElementById(id);

    if (screen) {
        screen.classList.add("active");
    }
}


function startLesson() {
    currentSlide = 0;
    showScreen("lesson");
    renderSlide();
}


function renderSlide() {
    const slide = slides[currentSlide];

    document.getElementById("slideNumber").textContent =
        `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

    document.getElementById("progressBar").style.width =
        `${((currentSlide + 1) / slides.length) * 100}%`;

    document.querySelector("#lesson .section-label").textContent =
        slide.label;

    document.getElementById("slideTitle").textContent =
        slide.title;

    document.getElementById("slideDescription").innerHTML =
        slide.description;

    document.getElementById("slideVisual").innerHTML =
        slide.visual;

    const lessonScreen = document.getElementById("lesson");

    lessonScreen.className = "screen active slide-" + slide.type;

    const previousButton =
        document.querySelector(".lesson-navigation .nav-btn:first-child");

    const nextButton =
        document.querySelector(".lesson-navigation .next");

    previousButton.disabled = currentSlide === 0;

    if (currentSlide === slides.length - 1) {
        nextButton.textContent = "⚡ TESTGA O‘TISH";
    } else {
        nextButton.textContent = "KEYINGI →";
    }

    const visual = document.getElementById("slideVisual");

    visual.style.animation = "none";

    requestAnimationFrame(() => {
        visual.style.animation = "";
    });
}


function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        renderSlide();
    } else {
        startTest();
    }
}


function previousSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        renderSlide();
    }
}


function showConceptInfo(type) {
    const info = document.getElementById("conceptInfo");

    const data = {
        "MAQSAD":
            "Maqsad — dars yakunida o‘quvchi egallashi kerak bo‘lgan bilim, ko‘nikma va kompetensiyalarni belgilaydi.",

        "JARAYON":
            "Jarayon — maqsadga erishish uchun tanlangan metodlar, topshiriqlar, vositalar va o‘quvchi faoliyatidir.",

        "NATIJA":
            "Natija — dars yakunida o‘quvchida shakllangan bilim, ko‘nikma va amaliy kompetensiyalar."
    };

    if (info && data[type]) {
        info.innerHTML = `<strong>${type}</strong><br>${data[type]}`;
    }
}


function selectMethod(method) {
    const result = document.getElementById("methodResult");

    const data = {
        "MUAMMOLI TA’LIM":
            "O‘quvchiga muammoli vaziyat beriladi. U mustaqil fikrlash va izlanish orqali yechim topadi.",

        "HAMKORLIK":
            "O‘quvchilar guruhda ishlaydi, fikr almashadi va umumiy natijaga erishadi.",

        "LOYIHA":
            "O‘quvchi ma’lum muammoni o‘rganib, reja asosida loyiha yoki amaliy mahsulot yaratadi.",

        "AMALIY TA’LIM":
            "Nazariy bilim bevosita amaliy faoliyat bilan mustahkamlanadi. Texnologik ta’lim uchun ayniqsa muhim."
    };

    if (result && data[method]) {
        result.innerHTML =
            `<strong>${method}</strong><br>${data[method]}`;
    }
}


function openMapRow(row) {
    const info = document.getElementById("mapInfo");

    const data = {
        "KIRISH":
            "<strong>KIRISH</strong><br>Dars maqsadi tushuntiriladi, o‘quvchilarning e’tibori mavzuga yo‘naltiriladi va motivatsiya yaratiladi.",

        "YANGI BILIM":
            "<strong>YANGI BILIM</strong><br>O‘qituvchi yangi mavzuni tushuntiradi, ko‘rsatadi va asosiy tushunchalarni shakllantiradi.",

        "AMALIY ISH":
            "<strong>AMALIY ISH</strong><br>O‘quvchi olingan bilimlarni mustaqil yoki guruhda amaliy topshiriq orqali qo‘llaydi.",

        "NAZORAT":
            "<strong>NAZORAT</strong><br>O‘quvchi faoliyati va dars natijasi belgilangan mezonlar asosida baholanadi."
    };

    if (info && data[row]) {
        info.innerHTML = data[row];
    }
}


function startTest() {
    clearInterval(timer);

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;

    showScreen("test");
    loadQuestion();
}


function loadQuestion() {
    clearInterval(timer);

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `SAVOL ${currentQuestion + 1} / ${questions.length}`;

    document.getElementById("questionText").textContent =
        question.question;

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.type = "button";

        button.innerHTML = `
            <span class="answer-number">${index + 1}</span>
            <span>${answer}</span>
        `;

        button.onclick = () => selectAnswer(index);

        answersContainer.appendChild(button);
    });

    document.getElementById("feedback").textContent = "";

    const confirmButton =
        document.getElementById("confirmButton");

    confirmButton.disabled = true;
    confirmButton.textContent = "TASDIQLASH";

    selectedAnswer = null;
    answered = false;

    timeLeft = 30;

    document.getElementById("timer").textContent =
        timeLeft;

    startTimer();
}


function selectAnswer(index) {
    if (answered) {
        return;
    }

    selectedAnswer = index;

    document.querySelectorAll(".answer").forEach((button, i) => {
        button.classList.toggle("selected", i === index);
    });

    document.getElementById("confirmButton").disabled = false;
}


function confirmAnswer() {
    if (selectedAnswer === null || answered) {
        return;
    }

    answered = true;

    clearInterval(timer);

    const question = questions[currentQuestion];
    const answerButtons = document.querySelectorAll(".answer");

    answerButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        }

        if (
            index === selectedAnswer &&
            selectedAnswer !== question.correct
        ) {
            button.classList.add("wrong");
        }
    });

    const feedback = document.getElementById("feedback");

    if (selectedAnswer === question.correct) {
        score += 10;
        feedback.textContent = "✓ To‘g‘ri javob! +10 ball";
        feedback.className = "feedback correct-feedback";
    } else {
        feedback.textContent = "✕ Noto‘g‘ri javob.";
        feedback.className = "feedback wrong-feedback";
    }

    const confirmButton =
        document.getElementById("confirmButton");

    confirmButton.disabled = false;

    if (currentQuestion < questions.length - 1) {
        confirmButton.textContent = "KEYINGI SAVOL →";

        confirmButton.onclick = () => {
            currentQuestion++;
            confirmButton.onclick = confirmAnswer;
            loadQuestion();
        };
    } else {
        confirmButton.textContent = "NATIJANI KO‘RISH →";

        confirmButton.onclick = () => {
            confirmButton.onclick = confirmAnswer;
            showResult();
        };
    }
}


function startTimer() {
    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;

        document.getElementById("timer").textContent =
            timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timeIsUp();
        }
    }, 1000);
}


function timeIsUp() {
    if (answered) {
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    document.querySelectorAll(".answer").forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        }
    });

    document.getElementById("feedback").textContent =
        "⏱ Vaqt tugadi!";

    document.getElementById("feedback").className =
        "feedback wrong-feedback";

    const confirmButton =
        document.getElementById("confirmButton");

    confirmButton.disabled = false;

    if (currentQuestion < questions.length - 1) {
        confirmButton.textContent = "KEYINGI SAVOL →";

        confirmButton.onclick = () => {
            currentQuestion++;
            confirmButton.onclick = confirmAnswer;
            loadQuestion();
        };
    } else {
        confirmButton.textContent = "NATIJANI KO‘RISH →";

        confirmButton.onclick = () => {
            confirmButton.onclick = confirmAnswer;
            showResult();
        };
    }
}


function showResult() {
    clearInterval(timer);

    showScreen("result");

    document.getElementById("score").textContent =
        score;

    let resultText = "";

    if (score === 50) {
        resultText =
            "Ajoyib! Siz mavzuning asosiy tushunchalarini juda yaxshi o‘zlashtirdingiz.";
    } else if (score >= 40) {
        resultText =
            "Juda yaxshi natija! Asosiy tushunchalar yaxshi o‘zlashtirilgan.";
    } else if (score >= 30) {
        resultText =
            "Yaxshi natija. Ayrim tushunchalarni yana bir bor ko‘rib chiqish mumkin.";
    } else if (score >= 20) {
        resultText =
            "Mavzuning asosiy qismlarini qayta takrorlash foydali bo‘ladi.";
    } else {
        resultText =
            "Mavzuni yana bir bor ko‘rib chiqing va testni qayta ishlang.";
    }

    document.getElementById("resultText").textContent =
        resultText;
}


function showFinal() {
    showScreen("final");
}


function restartLesson() {
    clearInterval(timer);

    currentSlide = 0;
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    answered = false;

    showScreen("home");
}


document.addEventListener("keydown", event => {

    const lesson =
        document.getElementById("lesson");

    if (!lesson.classList.contains("active")) {
        return;
    }

    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        previousSlide();
    }
});