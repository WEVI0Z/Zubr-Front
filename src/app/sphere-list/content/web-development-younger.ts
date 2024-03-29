import { Sphere } from "../interface/sphere";

export const WEB_DEVELOPMENT_YOUNGER: Sphere = {
    name: "web-development-younger",
    viewName: "Web-разработка 8 класс",
    description: "Работа с веб-технологиями – это ключевой навык в мире, который все чаще ставит Интернет в центр современной цифровой платформы. Это также один из самых сложных и разнообразных навыков. Сильные дизайнерские и коммуникативные навыки в сочетании с пониманием целевой аудитории, рынков и тенденций – все это очень важно. В процессе разработки веб-дизайнеры и разработчики создают базы данных, создают программы, а также тестируют и отлаживают веб-сайты.",
    content: /*html*/`
        <ol>
            <li>ОБЩИЕ ПОЛОЖЕНИЯ</li>
        </ol>
        <p>Работа с веб-технологиями &ndash; это ключевой навык в мире, который все чаще ставит Интернет в центр современной
            цифровой платформы. Это также один из самых сложных и разнообразных навыков. Сильные дизайнерские и коммуникативные
            навыки в сочетании с пониманием целевой аудитории, рынков и тенденций &ndash; все это очень важно. В процессе
            разработки веб-дизайнеры и разработчики создают базы данных, создают программы, а также тестируют и отлаживают
            веб-сайты.</p>
        <ol start="2">
            <li>О СОРЕВНОВАНИИ</li>
        </ol>
        <p>В течение конкурса участники разрабатывают сайт с дизайном, соответствующим принципу единообразия в структуре страницы: единый размер элементов, одинаковая высота навигационных кнопок, одинаковое оформление заголовков, подзаголовков и основного текста, одинаковое оформление ссылок и изображений для всех страниц сайта. Ставится задача сверстать САЙТА.</p>
        <p>Советы не являются частью задания. Следуйте советам только в той мере, в которой они могут вам помочь.</p>
        <p>Верстка сайта может производится ТОЛЬКО в редакторе кода.</p>
        <p><strong>При выполнении конкурсного задания использование интернет-ресурсов запрещено. Нельзя использовать внешние
                библиотеки.</strong></p>
        <p>Вводные данные: предоставляются готовые скриншоты, показывающие как страницы выглядят при ширинах экрана 1920, 768px. Контрольная точка различий между узким и широким экраном составляет 800px.</p>
        <p>Предоставляются файлы шрифтов и изображений страниц. Выходные данные: файлы index.html, p1.html, p2.html, p3.html,
            style.css, а также набор других необходимых для корректного отображения страницы в браузерах файлов.</p>
        <ol start="3">
            <li>ТРЕБОВАНИЯ К УЧАСТНИКУ</li>
        </ol>
        <p>Участник привозит самостоятельно:</p>
        <ul>
            <li>компьютер (ноутбук) с программным обеспечением, необходимым для выполнения конкурсного задания – 1 шт.</li>
            <li>USB-флеш-накопитель (емкостью не менее 4 ГБ) – 1 шт.</li>
            <li>сетевой фильтр (удлинитель) 5 м – 1 шт.</li>
        </ul>
        <ol start="4">
            <li>ТРЕБОВАНИЯ К ВЁРСТКЕ</li>
        </ol>
        <p>4.1. вёрстка валидная. Для проверки валидности верстки используйте сервис <a
                href="https://validator.w3.org">https://validator.w3.org</a></p>
        <p>4.2. вёрстка семантическая</p>
        <p>4.3. при написании кода рекомендуется следовать гайдлайну <a
                href="https://codeguide.academy/html-css.html">https://codeguide.academy/html-css.html</a></p>
        <p>4.4. контент размещается в блоке, который горизонтально центрируется на странице</p>
        <p>4.5. страница сайта должна корректно отображаться в браузере Google Chrom, Firefox и Яндекс последней версии</p>
        <p>4.6. в footer необходимо, год создания приложения.</p>
        <ol start="5">
            <li>КРИТЕРИИ ОЦЕНКИ</li>
        </ol>
        <p>Максимальный балл за задание +130</p>
        <p>5.1. верстка валидная +10</p>
        <p>Для проверки валидности вёрстки используйте сервис <a href="https://validator.w3.org">https://validator.w3.org</a>.
            Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае
            баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors,
            выставляем половину баллов за пункт требований</p>
        <p>5.2. верстка семантическая +20</p>
        <p>5.3. В коде странице присутствуют и используются по назначению следующие элементы:</p>
        <p>Под "используются по назначению" имеется в виду, что у элементов есть какое-то содержание, соответствующее типу
            элемента, а не добавлены пустые теги для получения баллов. Правильность использования элементов не проверяется и на
            балл не влияет.</p>
        <p>5.3.1. header, main, footer +5</p>
        <p>5.3.2. элемент nav +5</p>
        <p>5.3.3. только один заголовок h1 +5</p>
        <p>5.3.4. заголовки h2 +5</p>
        <p>5.3.5. Footer со знаком авторского права - ©, с годом создания и его автором. +5</p>
        <p>5.3.6. для оформления сайта используются css-стили +10</p>
        <p>5.3.7. при уменьшении масштаба страницы браузера верстка размещается по центру по горизонтали, а не сдвигается в
            сторону +10</p>
        <p>5.3.8. на странице сайта есть изображение, пропорции изображения не искажены, у изображения есть атрибут alt +10</p>
        <p>5.3.9. навигация, контакты для связи и перечень навыков оформлены в виде списка ul &gt; li или ul &gt; li &gt; a +10<br>
        Также допускается использование нумерованого списка ol &gt; li или ol &gt; li &gt; a
        </p>
        <p>5.4. Соответствие CSS-оформления:</p>
        <p>5.4.1. самостоятельно нарисованное в вектором редакторе изображение +10</p>
        <p>5.4.2. обязательные элементы +10</p>
        <p>5.4.3. функциональные возможности при наведении, при нажатии +5</p>
        <p>5.4.4. при переходе страница открывается в новой вкладке +5</p>
        <p>5.5. Анимация + 5</p>
        <ol start="6">
            <li>ПОРЯДОК ПРОВЕДЕНИЯ СОРЕВНОВАНИЙ</li>
        </ol>
        <p>Во время проведения конкурса участник должен знать и строго соблюдать правила безопасного поведения учащихся на
            конкурсной площадке</p>
        <p>За грубые нарушения правила безопасного поведения учащихся, которые привели к порче оборудования, инструмента, травме или созданию аварийной ситуации, участник отстраняется от дальнейшего участия в конкурсе. Решение об отстранении принимает главный судья.</p>
        <ol start="7">
            <li>ПРАВИЛА ОПРЕДЕЛЕНИЯ ПОБЕДИТЕЛЯ</li>
        </ol>
        <p>Участник, набравший наибольшее количество баллов за выполнение двух конкурсных заданий, считается победителем.</p>
        <p>В случае набора участниками одинакового количества баллов, победителем конкурса считается участник, набравший
            наибольшее количество баллов и выполнивший конкурсные задания за наименьшее время.</p>
        <p>В случае разногласий окончательное решение оценки конкурса принимает главный судья.</p>
    `
}
