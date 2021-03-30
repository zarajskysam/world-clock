import { nanoid } from 'nanoid';
const timeZone = [
    {
        name: "Москва",
        zone: 3,
        id: nanoid()
    },
    {
        name: "Гонконг",
        zone: 7,
        id: nanoid()
    },
    {
        name: "Камчатка",
        zone: 12,
        id: nanoid()
    },
    {
        name: "Владивосток",
        zone: 10,
        id: nanoid()
    },
    {
        name: "Якутск",
        zone: 9,
        id: nanoid()
    },
    {
        name: "Иркутск",
        zone: 9,
        id: nanoid()
    },
    {
        name: "Среднеатлантическое время",
        zone: 0,
        id: nanoid()
    },
    {
        name: "США(Лос-Анжелес)",
        zone: -7,
        id: nanoid()
    },
    {
        name: "Канада",
        zone: -3,
        id: nanoid()
    }
]

export default timeZone;