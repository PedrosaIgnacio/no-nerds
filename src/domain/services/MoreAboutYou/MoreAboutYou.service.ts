import { Ethnicities, Genders, Races } from "../../api/MoreAboutYou/MoreAboutYou";

export default class MoreAboutYouService{

    async getEthnicities(){
        const response = await Ethnicities();
        return response;
    }

    async getRaces(){
        const response = await Races();
        return response;
    }

    async getGenders(){
        const response = await Genders();
        return response;
    }
}