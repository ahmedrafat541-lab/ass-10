import joi from "joi";
import { generalRules } from "../../common/utils/generalRules.js";

export const createMessageSchema = {
    params: joi.object({
        receiverId: generalRules.id.required()
    }).required(),

    body: joi.object({
        content: joi.string().min(1).max(5000)
    }).required()
};