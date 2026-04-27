# SISTEMA DE VENTA DE PAQUETES DE VIAJES

La api es capaz de dejar crear un usuario y poder buscar vuelos, hoteles y paquetes segun el destino deseado.

# TECONOLOGIAS USADAS

*Node.js y Express para el entorno de ejecucion y el framework.
*MongoDB Atlas para la base de datos en la nube.
\*Mongoose para el modelado de objetos

# DOCUMENTACION DE ENDPOINTS PRINCIPALES

\*GET /api/packages/search?destination=X
Devuelve los paquetes de ese destino especifico.

\*POST /api/users/register
Recibe el username, email y password y crea un nuevo usuario.

# RESUMEN DE DATOS DE PRUEBA

VUELOS
{
\_id = 69efcabdb34f12327188b204
airline = "FlyBondi"
flightNumber = "FB1234"
destination = "Bariloche"
price = 15000
}
{
\_id = 69efceb3b34f12327188b214
airline = "FlyBondi"
flightNumber = "FB2026"
destination = "Mendoza"
price = 18000
}
{
\_id = 69efcef5b34f12327188b218
airline = "AerolineasArgentinas"
flightNumber = "FB2026"
destination = "Salta"
price = 32000
}
HOTELES
{
\_id = 69efcb11b34f12327188b209
name = "Llao Llao"
location = "Bariloche"
stars = 5
pricePerNight = 1250000
}
{
\_id = 69efcf44b34f12327188b220
name = "Hotel Aconcagua"
location = "Mendoza"
stars = 4
pricePerNight = 32000
}
{
\_id = 69efd34cb34f12327188b230
name = "Hilton"
location = "Mendoza"
stars = 5
pricePerNight = 80000
}
PAQUETES
{
\_id = 69efcb25b34f12327188b20c
name = "Luxury Bariloche"
description = "Flight and hotel."
flightID = "69efcabdb34f12327188b204"
hotelID = "69efcb11b34f12327188b209"
price = 1260000
}
{
\_id = 69efcf5eb34f12327188b223
name = "Tour Mendoza"
description = "Vuelo y estadía en Mendoza."
flightID = "69efceb3b34f12327188b214"
hotelID = "69efcf44b34f12327188b220"
price = 45000
}
{
\_id = 69efd370b34f12327188b233
name = "Tour de Viñedos"
description = "Vuelo y estadia de lujo."
flightID = "69efceb3b34f12327188b214"
hotelID = "69efd34cb34f12327188b230"
price = 130000
}
