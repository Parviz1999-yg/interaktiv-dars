/* =====================================================
   SLAYDLAR MA'LUMOTLARI
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
   O'ZGARUVCHILAR
===================================================== */

let currentSlide = 0;

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let timerInterval = null;

let timeLeft = 30;


/* =====================================================
   TEST SAVOLLARI
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
            "M