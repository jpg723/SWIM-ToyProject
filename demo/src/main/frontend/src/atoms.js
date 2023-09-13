import { atom } from "recoil";

export const loginAtom= atom({
 key: "loginState",
 default: false
});

export const studyCategoryAtom= atom({
    key: "studyCategoryState",
    default: ""
});
