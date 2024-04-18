# Docu 
Objetivo consumir api, de usuario el cual muestra beneficiarios que require actualizar o añadir firma de manera electronica, al elegir al beneficiario, se mostrara su firma y la de la trabajadora social junto al documento nuevo, al seleccionar actualizar firma de las dos partes.
## Tecnologías 
- Gradle V7.2
- SDK v17
- Api android V34
- openjdk17(Ya cuenta con la contabilidad para kotlin)
    ### Requisitos 
    Para lograr correr la app en debug conectado a usb, sera necesario instalar el sdk de anrodi en este caso se instalo con la ayuda de android studio 
## Views
- `HomeFirma`. Es la vista principal es donde se muetra la lista de los veneficiarios disponibles para el usuario
- `FirmaScreen`. Esta vista solo espara ingresar la firma de las dos partes 
- `PDFScreen`Muestra el pdf de las firmas con las firmas integradas y las opción para ingresar cualquiera de las dos firmas 
> Se creado una nueva version escrita en TS, para la actualizacion de la aplicación, es importante decir que se han reducido el uso de State, ya que la version anterior contaba con redu, el cual por lo qpequeño que es la app no es necesario, solo hace más complejo de lo que es

[Ver vistas](./documentation/Views.md)
<h2 style="color:red;">Importante</h2>
En la creacion del proyecto tuve problemas de compatibilidad ya que las ultimas versiones de react no utiliza java si no kotlin y el momento para añadir las dependencias y configuraciones en     

`android\app\src\main\java\com\firmas\MainApplication.kt` 
y en, las configuraciones de gradle ya que mucha de la documentación esta con maven, tal vez abra problemas con dependencias más adelante ya que por esta misma razón no ses logro guardar la session correctamente, ya que no habia la documentacion correcta en `Async Storage`, si estaba  la documentación para java pero no en kotlin, se probara haccerlo con la libreria parte de react , para hacer un correcto guardado de la session 




