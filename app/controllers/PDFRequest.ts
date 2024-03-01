
import { PDF_DATA } from "../endPoints";


interface Peticiones{
   ApiGet ():void;
}

export default class PDFResquest implements Peticiones{

    private const ll:Peticiones;
    constructor(peticion:Peticiones){
        this.ll = peticion; 
    }
    public  ApiGet() {
        
    }

    

}
export const getPdfAction = async (method: string, route: string): Promise<string> => {
    const config = { method: method, headers: { 'Content-Type': 'application/json' } };
  
    try {
      const response = await fetch(PDF_DATA + route, config);
  
      if (!response.ok) {
        throw new Error('No existe documento');
      }
  
      const pdfText = await response.text();
      return pdfText;
    } catch (error) {
      throw new Error('Error de conexión: ' );
    }
  };
  
  export const PostPDf = ()=>{

  }

