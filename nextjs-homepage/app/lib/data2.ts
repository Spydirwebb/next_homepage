import {
    users,
    contacts,
    studies,
    websites,
    lab_kits,
    irbs
} from './placeholder-data2'

export async function fetchStudies() {
    // using placeholder data
    try {
        // only 1 user
        const user = users[0]
        const studies = user.studies

        return studies
    } catch (error) {
        console.error('Database Error', error);
        throw new Error('Failed to fetch list of studies.');
    }
}

export async function fetchStudyData(studyName: string) {
    console.log(studyName)
    //using placeholder data
    try{
        for(const study of studies) {
            if (study.name === studyName) {
                console.log('From fetch: '+study.name)
                return study;
        }
    }
    } catch (error) {
        console.error('Database Error', error);
        throw new Error('Failed to fetch study data.');
    }
}