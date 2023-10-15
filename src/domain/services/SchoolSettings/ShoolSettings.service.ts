import { SchoolSize, TypeOfArea } from "../../api/SchoolSettings/SchoolSettings";

export default class SchoolSettingsService{

    async getTypeOfArea() {
        const response = await TypeOfArea();
        return response;
    }
    
    async getSchoolSize() {
        const response = await SchoolSize();
        return response;
    }

}