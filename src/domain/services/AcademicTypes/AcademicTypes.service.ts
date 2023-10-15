import { AcademicTypes } from "../../api/AcademicTypes/AcademicTypes";

export default class AcademicTypesService{

    async getAcademicTypes() {
        const response = await AcademicTypes();
        return response;
    }

}