import { getPayId} from "./actionTypes";

export const getPay = (pay_id,trans_id) => {
    return {
        type: getPayId.GET_PAY_ID,
        payload: {
            pay_id,
            trans_id
      
        }
        
    };
};

export const removePay = (removed) => {
    return {
        type: getPayId.REMOVE_PAY_ID,
        payload: removed
    };
};