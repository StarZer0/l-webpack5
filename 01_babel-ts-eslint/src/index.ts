enum Sex {
    MAN,
    WOMAN,
}

interface User {
    name: string;
    age: number;
    sex: Sex;
}

const users: User[] = [
    { name: 'wang', age: 12, sex: Sex.MAN },
    { name: 'li', age: 14, sex: Sex.WOMAN },
    { name: 'chen', age: 11, sex: Sex.MAN },
];

const womans = users.filter((user) => user.sex === Sex.WOMAN);

console.log(womans.map((user) => user.name).join());
