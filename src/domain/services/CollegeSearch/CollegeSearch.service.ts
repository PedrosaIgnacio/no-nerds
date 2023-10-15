import { AspectsCollegeSearch } from "../../api/CollegeSearch/CollegeSearch";

export default class CollegeSearchService{

    async getAspectsCollegeSearch() {
        const response = await AspectsCollegeSearch();
        return response;
    }

}