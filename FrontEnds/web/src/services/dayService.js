export function getDays() {
    return localDays;
};

const day = {
    date: new Date("01/13/2021"),
    weight: 287.3,
    notes: "Chest & Arm Day"
};

const localDays = [
    {...day, id:1, date:new Date("01/11/2021")},
    {...day, id:2, date:new Date("01/12/2021")},
    {...day, id:3, date:new Date("01/13/2021")},
    {...day, id:4, date:new Date("01/14/2021")}
];