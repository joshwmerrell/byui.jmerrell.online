
const weeks = [
    'w01'
];

export const courseData = await (await fetch('./wdd231.json')).json();

export const weeksData = await Promise.all(weeks.map(async week => {
    const response = await fetch('./' + week + '/' + week + '.json');
    return await response.json();
}));