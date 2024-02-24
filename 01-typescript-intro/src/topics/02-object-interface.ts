const skills:string[] =['Bash','Counter','Healing'];

interface Character{
    name:string;
    hp:number;
    skills: string[];
    hometown?:string;
}

const patas: Character ={
    name: 'patas',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

patas.hometown = 'Bogotá';

console.table(patas);

export{};