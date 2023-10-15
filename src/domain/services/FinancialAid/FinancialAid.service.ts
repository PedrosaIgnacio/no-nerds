import { FinancialAid } from "../../api/FinancialAid/FinancialAid";


export default class FinancialAidService{
    async getFinancialAid(){
        const response = await FinancialAid();
        return response;
    }
}