import { ItemTypes } from "../../store/data";
import { DropdowItemType } from "../Dropdown/types";

type MainDropdownData = DropdowItemType & {
    value: ItemTypes | ""
}

export const dropDownData: MainDropdownData[] = [
    {
        id: 1,
        text: "Не выбрано",
        value: ""
    },
    {
        id: 2,
        text: "Сделка",
        value: "lead"
    },
    {
        id: 3,
        text: "Контакт",
        value: "contact"
    },
    {
        id: 4,
        text: "Компания",
        value: "company"
    }
]