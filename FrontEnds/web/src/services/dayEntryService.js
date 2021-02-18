import {entryTypes} from "../constants/enums";

export function getDayEntries(id) {
    return [
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
        },
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
        },
        {
            id: 3,
            type: entryTypes.calisthenics,
            name: "Pullup",
            reps: 20,
            extra: -15,
            intensity: 75,
            duration: 60 * 2,
            notes: "90s of rest between sets",
            count: 5
        },
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
        },
        {
            id: 5,
            type: entryTypes.activity,
            name: "Yoga",
            duration: 60 * 15,
            intensity: 45,
            notes: "90s of rest between sets",
            count: 1
        },
        {
            id: 6,
            type: entryTypes.weightTraining,
            name: "Bench Press",
            weight: 140,
            reps: 7,
            isHypertrophy: false,
            durration: 60 * 2,
            notes: "90s of rest between sets",
            count: 3
        }
    ];
}