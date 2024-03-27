
import { PDF_DATA } from "../endPoints";


interface Peticiones{
   ApiGet ():void;
}


export const getPdfAction = async (method: string, route: string): Promise<string> => {
    const config = { method: method, headers: { 'Content-Type': 'application/json' } };
  
    try {
      console.log("Route=>"+route);
      const response = await fetch(PDF_DATA + route, config);
  
      if (!response.ok) {
        throw new Error('No existe documento');
      }
  
      const pdfText = await response.text();
      console.log(pdfText);
      return pdfText;
    } catch (error) {
      throw new Error('Error de conexión: ' );
    }
  };
  
  export const PostPDf = ()=>{

  }

