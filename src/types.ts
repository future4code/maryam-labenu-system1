export class Turma {
    private id: string;
    private nome: string;
    private modulo: string;

    constructor(id:string,nome:string, modulo:string){
        this.id = id;
        this.nome = nome;
        this.modulo = modulo;
    }
    public getId(): string{return this.id}
    public getNome(): string{return this.nome}
    public getModulo(): string{return this.modulo}
}

export class Estudante extends Turma {
    private email: string;
    private dataNasc: Date;
    private turmaId: string;
    private hobbies: string;

    constructor(
        id:string, 
        nome:string, 
        modulo:string, 
        email:string, 
        dataNasc:Date, 
        turmaId:string,
        hobbies: string){
            super(id, nome, modulo)
            this.email = email
            this.dataNasc = dataNasc
            this.turmaId = turmaId
            this.hobbies = hobbies
        }
    public getEmail(): string{return this.email}
    public getDataNasc(): Date{return this.dataNasc}
    public getTurmaId(): string{return this.turmaId}
    public getHobbies(): string{return this.hobbies}
}

export class Docente extends Turma {
    private email: string;
    private dataNasc: Date;
    private turmaId: string;
    private especialidades: string;

    constructor(
        id:string, 
        nome:string, 
        modulo:string, 
        email:string, 
        dataNasc:Date, 
        turmaId:string,
        especialidades: string){
            super(id, nome, modulo)
            this.email = email
            this.dataNasc = dataNasc
            this.turmaId = turmaId
            this.especialidades = especialidades
        }
    public getEmail(): string{return this.email}
    public getDataNasc(): Date{return this.dataNasc}
    public getTurmaId(): string{return this.turmaId}
    public getEspecialidades(): string{return this.especialidades}
}