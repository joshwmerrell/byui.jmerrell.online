
export const courseData = await (await fetch('../wdd231.json')).json();

export const weekData = await (await fetch('./w02.json')).json();

export const stepsData = [
    {
        name: "Learning Contract 1",
        description: "Learning Contract 1 description."
    },
    {
        name: "Result",
        description: "Result description."
    }
];