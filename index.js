let express = require('express');
let hbs = require('hbs');
let app = express();
let port = 3000;
app.set('view engine', 'hbs');
app.set(`views`, `views`);
app.use(express.static('public'));
app.use(express.static('assets'));
app.listen(port, function () {
    console.log(`Сервер запущен: http://localhost:${port}`)
});
let articles = [
    {
        "title": "Личный путь и опыт в становлении Python разработчиком",
        "author": "thepythonicway",
        "description": "В этой статье, а вернее целой истории, я хотел бы поделиться своим путем становления в качестве разработчика на Python и рассказать о некоторых идеях и советах, которые я усвоил за это время. Начиная с моих первых проектов и заканчивая моей текущей деятельнос…",
        "urlToImage": "https://habr.com/share/publication/717424/761dd8cc3a0b3373804ea2a1f2b0b7e4/",
        "url": "https://habr.com/ru/post/717424/#post-content-body",
        "publishedAt": "2023-02-16T19:00:00Z"
    },
    {
        "author": "qmzik",
      "title": "[Перевод] Что нового в Lighthouse 10",
      "description": "Lighthouse - это инструмент для аудита веб-сайтов, который помогает разработчикам с помощью возможностей и диагностики улучшить пользовательский опыт их сайтов.Lighthouse 10 доступен в командной строке через npm и в Chrome Canary. В ближайшие недели он появит…",
      "url": "https://habr.com/ru/post/717476/#post-content-body",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/e4f/ce7/78f/e4fce778f33c7766d8782402ba529dec.jpg",
      "publishedAt": "2023-02-16T17:05:34Z"
    },
    {
      "author": "little-brother",
      "title": "Сказ про написание pet-проекта с помощью Хабра",
      "description": "При проектировании системы видеонаблюдения большого объекта потребовалось разместить камеры на плане, учитывая их углы обзора/наклона и получаемую плотность пикселей (необходима для определения зон задач идентификации, распознавания и т.п.). Вcпомнил математи…",
      "url": "https://habr.com/ru/post/706442/#post-content-body",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/d48/3c3/c1c/d483c3c1cfbaacf92405dd2c1d26610a.png",
      "publishedAt": "2023-02-16T06:48:48Z"
    },
    {
        "author": "rshaibakov",
        "title": "Как начать тестировать frontend: гайд для новичков",
        "description": "Хабр, привет. Меня зовут Рамиль Шайбаков, я фронтенд-разработчик в СберЗдоровье. Последние несколько лет я часто собеседую кандидатов на позицию frontend-разработчика в нашу компанию и заметил одну закономерность — у большинства специалистов нет опыта в тести…",
        "url": "https://habr.com/ru/company/docdoc/blog/716526/#post-content-body",
        "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/c07/964/ffb/c07964ffbb8f0ec6a7801ebb89cc5866.png",
        "publishedAt": "2023-02-13T09:18:34Z"
    },
    {
        "author": "Mstikh",
      "title": "[recovery mode] Чистый Vue, или Как правильно настроить линтинг",
      "description": "Линтинг — это автоматизированный процесс анализа кода и поиска потенциальных ошибок. Более того, помимо поиска ошибок, линтер во многих случаях может исправить те самые ошибки автоматически.Данный инструмент является отличным помощником как для отдельно взято…",
      "url": "https://habr.com/ru/post/711574/#post-content-body",
      "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/633/d9d/23e/633d9d23eaa0eee61324a081eefb11c9.jpeg",
      "publishedAt": "2023-01-19T14:52:30Z"
    },
    {
        "author": "ru_vds",
        "title": "[Перевод] Условные выражения в CSS",
        "description": "Мне нравится думать о CSS как о языке дизайна с условными выражениями. На протяжении многих лет CSS был известен как способ стилизации веб-страниц. Однако сегодня этот язык эволюционировал настолько, что в нём уже есть правила условных выражений. Любопытно то…",
        "url": "https://habr.com/ru/company/ruvds/blog/716496/#post-content-body",
        "urlToImage": "https://habrastorage.org/webt/od/j4/cd/odj4cdqkszr4exf6muavvgk6d3s.jpeg",
        "publishedAt": "2023-02-13T13:00:02Z"
    },
    {
        "author": "jean_i",
        "title": "Компетенции для устройства на работу в IT-сфере",
        "description": "В данной статье мы рассмотрим как компетентностный подход может помочь нам с трудоустройством. Какие soft-skills и hard-skills востребованы на рынке труда. А так же какие технологии и языки программирования потребуются тем, кто только планирует связать свою ж…",
        "url": "https://habr.com/ru/post/711926/#post-content-body",
        "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/406/810/69f/40681069f4ee46b5c0d30e8ac8254560.jpg",
        "publishedAt": "2023-01-20T18:03:16Z"
    },
    {
        "author": "Sbermarket",
        "title": "За что мы любим Go, Ruby, React Native, ReactJS и Redux",
        "description": "Привет! Это tech-команда СберМаркет. Сегодня кто-то празднует день влюбленных, а для нас с вами это ещё и профессиональный праздник — день компьютерщика. Если совместить два повода, получим день влюблённых в компьютеры. Кто-то любит копаться в железе, кто-то …",
        "url": "https://habr.com/ru/company/sbermarket/blog/716848/#post-content-body",
        "urlToImage": "https://habrastorage.org/getpro/habr/upload_files/747/65b/62f/74765b62fe138d8b4372e85dd0971327.png",
        "publishedAt": "2023-02-14T10:21:05Z"
    },
    {
        "author": "[Zero]",
      "title": "Появление ChatGPT по значимости сравнимо с выходом первого iPhone – глава NVIDIA Дженсен Хуанг",
      "description": "Руководитель компании поделился своими мыслями в рамках семинара в Школе бизнеса имени Уолтера Хааса Калифорнийского университета в Беркли",
      "url": "https://overclockers.ru/blog/Zeroblog/show/85957/poyavlenie-chatgpt-po-znachimosti-sravnimo-s-vyhodom-pervogo-iphone-glava-nvidia-dzhensen-huang",
      "urlToImage": "https://overclockers.ru/st/legacy/blog/378660/358248_O.png",
      "publishedAt": "2023-02-15T04:35:45Z"
    },
    {
        "author": null,
        "title": "Победителями IT-чемпионата VK Cup стали двадцать программистов",
        "description": "В московском офисе VK состоялся финал IT-чемпионата VK Cup.",
        "url": "https://www.fontanka.ru/2023/02/08/72042338/",
        "urlToImage": "https://cdn.iportal.ru/news/2015/social/cd8ffe9349676bc27b3d5c876412e8.png",
        "publishedAt": "2023-02-08T10:04:00Z"
    },
    {
        "author": "Alexander Antipov",
        "title": "Основные типы кибератак и способы борьбы с ними",
        "description": "Существует множество различных киберинцидентов, которые могут представлять угрозу для вашего бизнеса. В этой статье перечислены 7 самых распространенных типов кибератак и способы защиты от них.",
        "url": "https://www.securitylab.ru/analytics/535598.php",
        "urlToImage": "https://www.securitylab.ru/upload/iblock/3df/tq57axc9ynti2kasroeqf9s5tu9e210g.jpg",
        "publishedAt": "2023-01-23T07:00:00Z"
    }
]

app.get('/', function (req, res) {
   res.render('index');
});

app.get('/news', function (req, res) {        
    res.render(`news`, 
        {articles: articles}
    );

});

app.get('/article', function (req, res) {        
    let id = req.query.id;
    let article = articles[id];

if (!article) {
    res.send('404');
} else {
    res.render('article', 
        {article: article})
}
});
