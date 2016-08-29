 export class Encounter {
  constructor (
    public atype: string,
    private date: string,
    public action: string,
    public colonist_id: string){}
    }

export interface IAlien {
  type: string;
  description: string;
  submitted_by:string;

}


export interface IOccupation {
  descrption: string;
  name:string;
}

export class Colonist {
  constructor(
    public name: string,
    public  age: string,
    public job_id: string
  ) {}
}
