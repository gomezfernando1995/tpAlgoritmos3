export class ClaseCoche {
    public nombre:string="";
    public marca:string="";
    public precio:number=0;
    public tipoCoche:TipoCoche=TipoCoche.indefinido;
}

export enum  TipoCoche{
    indefinido,
    Urbano,
    Subcompacto,
    Hatchback,
    Familiar,
    Sedán,
    Berlina,
    Descapotable,
    Coupé,
    MuscleCar,
    Deportivos,
    SUV,
    comercial,
    Motorhome,
    PickUp,
    históricos,
    Limusina

}
