
import { HeaderApi } from "../stateAndProps/HeaderApi";
import { PDF_DATA,FIRMA_DATA } from "../endPoints";




export const PdfAction = async ({method,route,data}:HeaderApi): Promise<string> => {
    const config = { method: method, headers: { 'Content-Type': 'application/json' }, body:data };
  
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
      throw new Error('Error de conexión: =>'+error );
    }
  };

  export const FirmasAction= async(header:HeaderApi):Promise<boolean> =>{
     const config = { method: header.method, headers: { 'Content-Type': 'application/json' }, body:JSON.stringify(header.data) };
console.log(FIRMA_DATA+header.route);
try{   
const res = await  fetch(FIRMA_DATA+header.route,config); 
      
       return true;
      }catch(err){
        console.log(err);
        return false;
      }
  };