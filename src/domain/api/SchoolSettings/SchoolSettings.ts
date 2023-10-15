export const TypeOfArea = async () => {
    const typeOfArea = {
        urban:{
            active: false,
            label: 'Urban'
        },
        suburbal:{
            active: false,
            label: 'Suburban'
        },
        rural:{
            active: false,
            label: 'Rural'
        },
        collegeTown:{
            active: false,
            label: 'College Town'
        },
        imNotSure:{
            active: false,
            label: "I'm not sure",
            cleanAll: true,
        },
    }
    return await typeOfArea;
}

export const SchoolSize = async () => {
    const schoolSize = {
        bigger:{
            active: false,
            label: 'Bigger',
        },
        smaller:{
            active: false,
            label: "Smaller"
        },
        imOkay:{
            active: false,
            label: "I'm okay with either"
        }
    }
    return await schoolSize;
}