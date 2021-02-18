import {entryTypes} from "../constants/enums";

export function getDayEntries(id) {
    return localEntries.filter(e => e.dayId === id);
};

const baseWeightTraining = 
{
    id: 1,
    type: entryTypes.weightTraining,
    name: "Chest Press",
    weight: 190,
    reps: 7,
    isHypertrophy: false,
    durration: 60 * 2,
    notes: "90s of rest between sets",
    count: 2
};

const baseCalisthenics = 
{
    id: 2,
    type: entryTypes.calisthenics,
    name: "Situp",
    reps: 20,
    extra: 5,
    intensity: 75,
    duration: 60 * 2,
    notes: "90s of rest between sets",
    count: 5
};

const baseDistanceExcercise = 
{
    id: 4,
    type: entryTypes.distanceExcercise,
    name: "Jog",
    extra: 15,
    duration: 60 * 20,
    distance: 1.5,
    intensity: 75,
    notes: "",
    count: 1
};

const baseActivity = 
{
    id: 5,
    type: entryTypes.activity,
    name: "Yoga",
    duration: 60 * 15,
    intensity: 45,
    notes: "90s of rest between sets",
    count: 1
};


const localEntries = [
    {dayId:1, ...baseWeightTraining, id:1, },
    {dayId:1, ...baseCalisthenics, id:2},
    {dayId:1, ...baseCalisthenics, id:3, name:"Pullups", reps:10, extra:-15},
    {dayId:1, ...baseDistanceExcercise, id:4},
    {dayId:1, ...baseActivity, id:5},
    {dayId:1, ...baseWeightTraining, id:6, name:"Bench Press", weight:140, count:4},
    {dayId:2, ...baseWeightTraining, id:7, },
    {dayId:2, ...baseCalisthenics, id:8, name:"Pullups", reps:7, extra:-15},
    {dayId:2, ...baseActivity, id:9},
    {dayId:2, ...baseWeightTraining, id:10, name:"Bench Press", weight:135, count:4},
    {dayId:3, ...baseWeightTraining, id:11, },
    {dayId:3, ...baseCalisthenics, id:12},
    {dayId:3, ...baseCalisthenics, id:13, name:"Pullups", reps:14, extra:-15},
    {dayId:3, ...baseActivity, id:15, name: "Soccer"},
    {dayId:3, ...baseWeightTraining, id:16, name:"Bench Press", weight:140, count:4},
    {dayId:4, ...baseWeightTraining, id:17, },
    {dayId:4, ...baseCalisthenics, id:18},
    {dayId:4, ...baseCalisthenics, id:19, name:"Pullups", reps:17, extra:-15},
    {dayId:4, ...baseWeightTraining, id:22, name:"Bench Press", weight:145, count:4},
];