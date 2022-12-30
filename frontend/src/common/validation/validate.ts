export interface ValidateOne {
  One: (name: any, value: any, schema: any) => Promise<any>  
}

export interface ValidateMany { 
  Many: (obj: any, schema: any) => Promise<any>
}