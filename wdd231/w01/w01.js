
export const courseData = await (await fetch('../wdd231.json')).json();

export const weekData = await (await fetch('./w01.json')).json();

export const stepsData = [
    {
        name: "Review",
        description: "This week was just review of the previous courses' material. Go to another week or course for learning and content."
    }
];