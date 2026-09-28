/* =====================================================
   INTERAKTIV DARS — SCRIPT
===================================================== */


/* =====================================================
   1. SLAYDLAR
===================================================== */

const slides = [

    {
        title: "Kirish",
        description: `
            <p>
                Ta'lim texnologiyalariga asoslangan dars rejasi —
                ta'lim jarayonini aniq maqsad, metod va natija
                asosida tashkil etishga xizmat qiladi.
            </p>

            <div class="flow">
                <span>MAQSAD</span>
                <b>→</b>
                <span>JARAYON</span>
                <b>→</b>
                <span>NATIJA</span>
            </div>
        `
    },

    {
        title: "Ta'lim texnologiyasi nima?",
        description: `
            <p>
                Ta'lim texnologiyasi — belgilangan ta'lim
                maqsadiga erishish uchun o'qitish jarayonini
                tizimli ravishda tashkil etish usulidir.
            </p>

            <div class="concepts">
                <div>
                    <strong>MAQSAD</strong>
                    <small>Nima uchun?</small>
                </div>

                <div>
                    <strong>JARAYON</strong>
                    <small>Qanday?</small>
                </div>

                <div>
                    <strong>NATIJA</strong>
                    <small>Nimaga erishildi?</small>
                </div>
            </div>
        `
    },

    {
        title: "Ta'lim texnologiyalarining asosiy turlari",
        description: `
            <p>
                Dars mazmuni va maqsadiga qarab turli ta'lim
                texnologiyalaridan foydalanish mumkin.
            </p>

            <div class="technology-list">
                <span>Muammoli ta'lim</span>
                <span>Loyihaviy ta'lim</span>
                <span>Interaktiv metodlar</span>
                <span>AKT</span>
                <span>Hamkorlikdagi ta'lim</span>
                <span>Aralash ta'lim</span>
            </div>
        `
    },

    {
        title: "Dars rejasining tuzilishi",
        description: `
            <p>
                Samarali dars rejasi bosqichma-bosqich
                tashkil etiladi.
            </p>

            <div class="timeline">

                <span>01<br>MAQSAD</span>
                <b>→</b>

                <span>02<br>MOTIV</span>
                <b>→</b>

                <span>03<br>YANGI BILIM</span>
                <b>→</b>

                <span>04<br>AMALIY ISH</span>
                <b>→</b>

                <span>05<br>NAZORAT</span>
                <b>→</b>

                <span>06<br>XULOSA</span>

            </div>
        `
    },

    {
        title: "Dars rejasini ishlab chiqish bosqichlari",
        description: `
            <p>
                Dars rejasini tuzishda avvalo maqsad belgilanadi,
                so'ngra mazmun, metod, vositalar va baholash
                mexanizmi aniqlanadi.
            </p>

            <div class="algorithm">
                <span>1. Maqsadni aniqlash</span>
                <span>2. Mazmunni tanlash</span>
                <span>3. Metodni tanlash</span>
                <span>4. Vositalarni belgilash</span>
                <span>5. Topshiriqni ishlab chiqish</span>
                <span>6. Baholash</span>
            </div>
        `
    },

    {
        title: "Texnologik ta'limda qo'llash",
        description: `
            <p>
                Texnologik ta'limda nazariya va amaliyot
                bir-birini to'ldiradi. O'quvchi bilimni
                amaliy faoliyat orqali mustahkamlaydi.
            </p>

            <div class="technology-chain">

                <span>NAZARIYA</span>
                <b>+</b>

                <span>KO'RSATMALI TA'LIM</span>
                <b>+</b>

                <span>AMALIY FAOLIYAT</span>
                <b>+</b>

                <span>NAZORAT</span>

                <strong>→ NATIJA</strong>

            </div>
        `
    },

    {
        title: "Namunaviy dars rejasi va xulosa",
        description: `
            <p>
                Darsning barcha bosqichlari yagona tizimga
                birlashtirilganda o'quv faoliyati maqsadli,
                izchil va natijaga yo'naltirilgan bo'ladi.
            </p>

            <div class="final-flow">

                <span>MAQSAD</span>
                <b>→</b>

                <span>METOD</span>
                <b>→</b>

                <span>JARAYON</span>
                <b>→</b>

                <span>AMALIY TOPSHIRIQ</span>
                <b>→</b>

                <span>BAHOLASH</span>
                <b>→</b>

                <strong>NATIJA</strong>

            </div>

            <h3 class="test-intro">
                Endi bilimni sinab ko'ramiz.
            </h3>
        `
    }

];


/* =====================================================
   2. O'ZGARUVCHILAR
===================================================== */

let currentSlide = 0;

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let timerInterval = null;

let timeLeft = 30;


/* =====================================================
   3. TEST SAVOLLARI
===================================================== */

const questions = [

    {
        question:
            "Ta'lim texnologiyasining asosiy tarkibiy qismlari qaysilar?",

        answers: [
            "Maqsad, jarayon va natija",
            "Faqat nazariya",
            "Faqat amaliy ish",
            "Faqat baholash"
        ],

        correct: 0
    },

    {
        question:
            "Dars rejasini tuzishda birinchi navbatda nima aniqlanadi?",

        answers: [
            "Uyga vazifa",
            "Maqsad",
            "Baholar",
            "Tanaffus vaqti"
        ],

        correct: 1
    },

    {
        question:
            "Texnologik ta'limning muhim tarkibiy qismi qaysi?",

        answers: [
            "Faqat matn o'qish",
            "Faqat nazorat",
            "Amaliy faoliyat",
            "Faqat ma'ruza"
        ],

        correct: 2
    },

    {
        question:
            "Dars rejasida baholashning vazifasi nima?",

        answers: [
            "Natijani aniqlash",
            "Darsni to'xtatish",
            "Vaqtni o'tkazish",
            "Faqat davomatni tekshirish"
        ],

        correct: 0
    },

    {
        question:
            "Ta'lim texnologiyasining asosiy maqsadi nima?",

        answers: [
            "Ko'proq topshiriq berish",
            "Darsni uzaytirish",
            "Ta'lim maqsadiga samarali erishish",
            "Faqat nazorat o'tkazish"
        ],

        correct: 2
    }

];


/* =====================================================
   4. EKRANNI ALMASHTIRISH
===================================================== */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (target) {
        target.classList.add("active");
    }
}


/* =====================================================
   5. DARSNI BOSHLASH
===================================================== */

function startLesson() {

    currentSlide = 0;

    showScreen("lesson");

    renderSlide();
}


/* =====================================================
   6. SLAYDNI CHIQARISH
===================================================== */

function renderSlide() {

    const slide = slides[currentSlide];

    document.getElementById("slideTitle").textContent =
        slide.title;

    document.getElementById("slideDescription").innerHTML =
        slide.description;

    document.getElementById("slideNumber").textContent =
        String(currentSlide + 1).padStart(2, "0") +
        " / " +
        String(slides.length).padStart(2, "0");

    const progress =
        ((currentSlide + 1) / slides.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

    const visual =
        document.getElementById("slideVisual");

    visual.innerHTML = `
        <div class="visual-circle"></div>

        <div class="visual-number">
            ${String(currentSlide + 1).padStart(2, "0")}
        </div>
    `;

    const nextButton =
        document.querySelector(".nav-btn.next");

    if (currentSlide === slides.length - 1) {

        nextButton.textContent =
            "⚡ TESTNI BOSHLASH";

    } else {

        nextButton.textContent =
            "KEYINGI →";
    }
}


/* =====================================================
   7. KEYINGI SLAYD
===================================================== */

function nextSlide() {

    if (currentSlide < slides.length - 1) {

        currentSlide++;

        renderSlide();

    } else {

        startTest();
    }
}


/* =====================================================
   8. OLDINGI SLAYD
===================================================== */

function previousSlide() {

    if (currentSlide > 0) {

        currentSlide--;

        renderSlide();
    }
}


/* =====================================================
   9. TESTNI BOSHLASH
===================================================== */

function startTest() {

    clearInterval(timerInterval);

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    showScreen("test");

    loadQuestion();
}


/* =====================================================
   10. SAVOLNI YUKLASH
===================================================== */

function loadQuestion() {

    clearInterval(timerInterval);

    selectedAnswer = null;

    timeLeft = 30;

    const question =
        questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        "SAVOL " +
        (currentQuestion + 1) +
        " / " +
        questions.length;

    document.getElementById("questionText").textContent =
        question.question;

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";

    question.answers.forEach(function(answer, index) {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent =
            String.fromCharCode(65 + index) +
            ". " +
            answer;

        button.onclick = function() {
            selectAnswer(index);
        };

        answersContainer.appendChild(button);

    });

    document.getElementById("feedback").textContent = "";

    document.getElementById("confirmButton").disabled = false;

    startTimer();
}


/* =====================================================
   11. JAVOBNI TANLASH
===================================================== */

function selectAnswer(index) {

    selectedAnswer = index;

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach(function(button, i) {

        if (i === index) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }

    });
}


/* =====================================================
   12. JAVOBNI TASDIQLASH
===================================================== */

function confirmAnswer() {

    if (selectedAnswer === null) {

        document.getElementById("feedback").textContent =
            "Avval javobni tanlang.";

        return;
    }

    clearInterval(timerInterval);

    const question =
        questions[currentQuestion];

    const feedback =
        document.getElementById("feedback");

    if (selectedAnswer === question.correct) {

        score += 10;

        feedback.textContent =
            "✓ TO‘G‘RI! +10 BALL";

    } else {

        feedback.textContent =
            "✕ NOTO‘G‘RI. To‘g‘ri javob: " +
            question.answers[question.correct];
    }

    document.getElementById("confirmButton").disabled = true;

    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showResult();
        }

    }, 1200);
}


/* =====================================================
   13. TIMER
===================================================== */

function startTimer() {

    const timer =
        document.getElementById("timer");

    timer.textContent = timeLeft;

    timerInterval =
        setInterval(function() {

            timeLeft--;

            timer.textContent = timeLeft;

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                timeIsUp();
            }

        }, 1000);
}


/* =====================================================
   14. VAQT TUGADI
===================================================== */

function timeIsUp() {

    const feedback =
        document.getElementById("feedback");

    feedback.textContent =
        "⏱ Vaqt tugadi!";

    document.getElementById("confirmButton").disabled = true;

    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showResult();
        }

    }, 1000);
}


/* =====================================================
   15. NATIJA
===================================================== */

function showResult() {

    clearInterval(timerInterval);

    showScreen("result");

    document.getElementById("score").textContent =
        score;

    const maxScore =
        questions.length * 10;

    const percentage =
        (score / maxScore) * 100;

    let resultText;

    if (percentage >= 80) {

        resultText =
            "Ajoyib natija! Mavzu yaxshi o‘zlashtirilgan.";

    } else if (percentage >= 60) {

        resultText =
            "Yaxshi natija. Mavzuni yana bir bor takrorlash foydali.";

    } else {

        resultText =
            "Mavzuni qayta ko‘rib chiqish tavsiya etiladi.";
    }

    document.getElementById("resultText").textContent =
        resultText;
}


/* =====================================================
   16. YAKUNIY EKRAN
===================================================== */

function showFinal() {

    showScreen("final");
}


/* =====================================================
   17. QAYTA BOSHLASH
===================================================== */

function restartLesson() {

    clearInterval(timerInterval);

    currentSlide = 0;

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    showScreen("home");
}