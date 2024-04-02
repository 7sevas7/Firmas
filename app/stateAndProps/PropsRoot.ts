//Es parte de los argumentos que cuenten con esta typ, para tomar en cuanta como estados en la peticiones de todos lo que necesiten llamar al api

export type PdfTypes={
    IdEvCom: number|undefined;
  };
  //Recuerda que esto son las vistas que hay route navigation cada objeto es un a vista 

export type RootParams = {
    Home: undefined;
    FirmaInput:{
      Type:string,
      DataPdf:PdfTypes    
    };  
    PdfView : {IdEvCom:number | undefined};
    Login:undefined;
  };