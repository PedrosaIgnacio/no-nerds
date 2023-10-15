export const AcademicTypes = async () => {
    const academicTypes = {
        art:{
            active: false,
            label: 'Art'
        },
        business:{
            active: false,
            label: 'Business'
        },
        communication:{
            active: false,
            label: 'Communication'
        },
        education:{
            active: false,
            label: "Education",
            cleanAll: true,
        },
        computerScience:{
            active: false,
            label: 'Computer Science'
        },
        math:{
            active: false,
            label: 'Math',
        },
        engineering:{
            active: false,
            label: 'Engineering',
        },
        healthScience:{
            active: false,
            label: 'Health Science',
        },
        humanities:{
            active: false,
            label: 'Humanities',
        },
        socialScience:{
            active: false,
            label: 'Social Science',
        },
        naturalScience:{
            active: false,
            label: 'Natural Science',
        }
    }
    return await academicTypes;
}