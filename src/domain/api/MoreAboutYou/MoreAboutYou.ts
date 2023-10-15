import { Ethnicity } from "../../models/Ethnicity";
import { Gender } from "../../models/Gender";
import { Race } from "../../models/Race";

export const Genders = async (): Promise<Gender[]> => {
    const genders = [
        {
            id: 1,
            name: 'Male',
        },
        {
            id: 2,
            name: 'Female',
        },
        {
            id: 3,
            name: 'Other',
        },
        {
            id: 4,
            name: 'Prefer not to say',
        },
    ]
    return await genders;
}

export const Races = async (): Promise<Race[]> => {
    const races = [
        {
            id: 1,
            name: "White",
        },
        {
            id: 2,
            name: "Black",
        },
        {
            id: 3,
            name: "Asian",
        },
        {
            id: 4,
            name: "Native American",
        },
        {
            id: 5,
            name: "Pacific Islander",
        },
        {
            id: 6,
            name: "Multi Racial",
        },
        {
            id: 7,
            name: 'Other',
        },
        {
            id: 8,
            name: 'Prefer not to say',
        }
    ]
    
    return await races;
}

export const Ethnicities = async (): Promise<Ethnicity[]> => {
    const ethnicities = [
        {
            id: 1,
            name: 'Hispanic or Latino',
        },
        {
            id: 2,
            name: 'Not Hispanic or Latino',
        }
    ]
    return await ethnicities;
}