# Docu 
Objetivo consumir api, de usuario el cual muestra beneficiarios que require actualizar o añadir firma de manera electronica, al elegir al beneficiario, se mostrara su firma y la de la trabajadora social junto al documento nuevo, al seleccionar actualizar firma de las dos partes.
## Tecnologías 
- Gradle V7.2
- SDK v17
- Api android V34
## Views
- `HomeFirma`. Es la vista principal es donde se muetra la lista de los veneficiarios disponibles para el usuario
- `FirmaScreen`. Esta vista solo espara ingresar la firma de las dos partes 

>[!NOTE]
> Se creado una nueva version escrita en TS, para la actualizacion de la aplicación, es importante decir que se han reducido el uso de State, ya que la version anterior contaba con redu, el cual por lo qpequeño que es la app no es necesario, solo hace más complejo de lo que es

