
export const courseCode = (await (await fetch('../wdd231.json')).json()).code;

export const weekData = await (await fetch('./w01.json')).json();

export const stepsData = [
    {
        name: "Learning Contract",
        description: "learning contract description"
    },
    {
        name: "Result",
        description: "result description"
    }
];