const courseCodes = [
    'wdd231'
];

const baseUrl = 'jmerrell.online';
const byuiBaseUrl = `byui.${baseUrl}`;
const byuiBaseTitle = `BYUI | ${baseUrl}`;
const baseHeader = `
    <header>
        <p id="url-location">${byuiBaseUrl}</p>
        <h2>Joshua Merrell</h2>
        <p>2002 - <i>Present</i></p>
    </header>`;
const baseHero = `
    <section id="hero">
        <h1>Web Design and Development Major</h1>
        <h3>at BYUI</h3>
    </section>`;
const searchByUrlHint = `
    <p><i>To fast track what week you are looking for, type the following into the url: <b>byui.jmerrell.online/[course code, ex. wdd199]/[week number, ex. w08]</b></i></p>`;
const baseFooter = `
    <footer>
        <p>This website is currently under construction. Please be patient while it <i>develops</i>.</p>
        <p>&copy; 2026 JMERRELL. All Rights Reserved.</p>
    </footer>`;


export async function setupByuiPage() {

    const courses = await Promise.all(courseCodes.map(async code => {
        return await (await fetch('./' + code +'/' + code +'.json')).json();
    }));

    const head = document.querySelector('head');
    const title = document.createElement('title');
    title.textContent = byuiBaseTitle;
    head.appendChild(title);

    const body = document.querySelector('body');

    const coursesSection = `
        <section id="courses">
            <h2>Courses</h2>
            <ul id="courses-list">
                ${courses.map(course => `<li><a href="${course.code}">${course.code.toUpperCase()}: ${course.name}</a></li>`).join(``)}
            </ul>
        </section>`;

    const main = `
        <main>
            ${searchByUrlHint}
            ${coursesSection}
        </main>`;

    body.innerHTML = baseHeader + baseHero + main + baseFooter;

}


export function setupCoursePage(courseData, weeksData) {

    const courseCode = courseData.code;
    const courseName = courseData.name;
    const semesterYear = courseData.semesterYear;
    const semesterSeason = courseData.semesterSeason;
    const backNavLabel = courseData.previousIndexCapitlized;

    const head = document.querySelector('head');
    const title = document.createElement('title');
    title.textContent = `${courseCode.toUpperCase()} | ${byuiBaseTitle}`;
    head.appendChild(title);
    
    const header = `
        <header>
            <p id="url-location">${byuiBaseUrl}/${courseCode}</p>
            <h2>Joshua Merrell</h2>
            <p>2002 - <i>Present</i></p>
        </header>`;

    const body = document.querySelector('body');

    const courseBackNav = `
        <nav>
            <h4><a href="..">&larr; ${backNavLabel}</a></h4>
        </nav>`;

    const courseSection = `
        <section id="course">
            <h2>${courseCode.toUpperCase()}: ${courseName}</h2>
            <h3>${semesterSeason}, ${semesterYear}</h3>
            <hr>
            <h3>Weeks - Core Competencies</h3>
            <ul id="weeks-list">
                ${weeksData.map(week => `<li><a href="${week.name}">Week ${week.number} - ${week.competency}</a></li>`).join(``)}
            </ul>
        </section>`;

    const main = `
        <main>
            ${searchByUrlHint}
            ${courseBackNav}
            ${courseSection}
        </main>`;

    body.innerHTML = header + baseHero + main + baseFooter;

}


export function setupWeekPage(courseData, weekData, stepsData) {

    const courseCode = courseData.code;
    const courseName = courseData.name;
    const semesterYear = courseData.semesterYear;
    const semesterSeason = courseData.semesterSeason;
    const courseBackNavLabel = courseData.previousIndexCapitlized;

    const weekNumber = weekData.number;
    const weekName = weekData.name;
    const weekCompetency = weekData.competency;
    const weekBackNavLabel = weekData.previousIndexCapitlized;

    const head = document.querySelector('head');
    const title = document.createElement('title');
    title.textContent = `${weekName.toUpperCase()} | ${courseCode.toUpperCase()} | ${byuiBaseTitle}`;
    head.appendChild(title);
    
    const header = `
        <header>
            <p id="url-location">${byuiBaseUrl}/${courseCode}/${weekName}</p>
            <h2>Joshua Merrell</h2>
            <p>2002 - <i>Present</i></p>
        </header>`;

    const body = document.querySelector('body');

    const courseBackNav = `
        <nav>
            <h4><a href="../..">&larr; ${courseBackNavLabel}</a></h4>
        </nav>`;

    const weekBackNav = `
        <nav>
            <h4><a href="..">&larr; ${weekBackNavLabel}</a></h4>
        </nav>`;

    const weekSection = `
        <section id="week">
            <h2>${courseCode.toUpperCase()}: ${courseName}</h2>
            <h3>${semesterSeason}, ${semesterYear}</h3>
            <hr>
            ${weekBackNav}
            <h2>Week ${weekNumber} - ${weekCompetency}</h2>
            ${stepsData.map(step => `
                <article>
                <h3>${step.name}</h3>
                <p>${step.description}</p>
                </article>`).join(``)}
        </section>`;

    const main = `
        <main>
            ${searchByUrlHint}
            ${courseBackNav}
            ${weekSection}
        </main>`;

    body.innerHTML = header + baseHero + main + baseFooter;

}