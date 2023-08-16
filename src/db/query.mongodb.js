use('db_bodegas');
db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["dni", "nombre", "email", "estado", "password"],
            properties: {
                dni: { bsonType: "int", description: "'dni' debe ser un entero y es requerido" },
                nombre: { bsonType: "string", description: "'nombre' debe ser un string y es requerido" },
                email: { bsonType: "string", description: "'email' debe ser una direccion de correo valido", pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$" },
                email_verified_at: { bsonType: "date", description: "'email_verified_at' debe ser una fecha valida" },
                estado: { bsonType: "int", description: "'estado' debe ser un entero y es requerido" },
                created_by: { bsonType: "int", minimum: 1, description: "'created_by' debe ser un entero" },
                update_by: { bsonType: "int", minimum: 1, description: "'update_by' debe ser un entero" },
                foto: { bsonType: "string", description: "'foto' debe ser un string" },
                password: { bsonType: "string", description: "'password' debe ser un string y es requerido" },
                created_at: { bsonType: "date", description: "'created_at' debe ser una fecha valida" },
                updated_at: { bsonType: "date", description: "'updated_at' debe ser una fecha valida" },
                deleted_at: { bsonType: "date", description: "'deleted_at' debe ser una fecha valida" }
            }
        }
    }
})

db.createCollection("productos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nombre", "descripcion", "estado"],
            properties: {
                id: { bsonType: "int", description: "'dni' debe ser un entero y es requerido" },
                nombre: { bsonType: "string", description: "'nombre' debe ser un string y es requerido" },
                descripcion: { bsonType: "string", description: "'nombre' debe ser un string y es requerido" },
                estado: { bsonType: "int", description: "'estado' debe ser un entero y es requerido" },
                created_by: { bsonType: "int", minimum: 1, description: "'created_by' debe ser un entero" },
                update_by: { bsonType: "int", minimum: 1, description: "'update_by' debe ser un entero" },
                created_at: { bsonType: "date", description: "'created_at' debe ser una fecha valida" },
                updated_at: { bsonType: "date", description: "'updated_at' debe ser una fecha valida" },
                deleted_at: { bsonType: "date", description: "'deleted_at' debe ser una fecha valida" }
            }
        }
    }
})

db.createCollection("bodegas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "nombre", "id_responsable", "estado"],
            properties: {
                id: { bsonType: "int", description: "'id' debe ser un entero y es requerido" },
                nombre: { bsonType: "string", description: "'nombre' debe ser un string y es requerido" },
                id_responsable: { bsonType: "int", description: "'dni' debe ser un entero y es requerido" },
                estado: { bsonType: "int", description: "'estado' debe ser un entero y es requerido" },
                created_by: { bsonType: "int", minimum: 1, description: "'created_by' debe ser un entero" },
                update_by: { bsonType: "int", minimum: 1, description: "'update_by' debe ser un entero" },
                created_at: { bsonType: "date", description: "'created_at' debe ser una fecha valida" },
                updated_at: { bsonType: "date", description: "'updated_at' debe ser una fecha valida" },
                deleted_at: { bsonType: "date", description: "'deleted_at' debe ser una fecha valida" }
            }
        }
    }
})

db.createCollection("inventarios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "id_bodega", "id_producto", "cantidad"],
            properties: {
                id: { bsonType: "int", description: "'id' debe ser un entero y es requerido" },
                id_bodega: { bsonType: "int", description: "'id_bodega' debe ser un entero y es requerido" },
                id_producto: { bsonType: "int", description: "'id_producto' debe ser un entero y es requerido" },
                cantidad: { bsonType: "int", description: "'cantidad' debe ser un entero y es requerido" },
                created_by: { bsonType: "int", minimum: 1, description: "'created_by' debe ser un entero" },
                update_by: { bsonType: "int", minimum: 1, description: "'update_by' debe ser un entero" },
                created_at: { bsonType: "date", description: "'created_at' debe ser una fecha valida" },
                updated_at: { bsonType: "date", description: "'updated_at' debe ser una fecha valida" },
                deleted_at: { bsonType: "date", description: "'deleted_at' debe ser una fecha valida" }
            }
        }
    }
})

db.createCollection("historiales", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "cantidad", "id_bodega_origen", "id_bodega_destino", "id_inventario"],
            properties: {
                id: { bsonType: "int", description: "'id' debe ser un entero y es requerido" },
                cantidad: { bsonType: "int", description: "'cantidad' debe ser un entero y es requerido" },
                id_bodega_origen: { bsonType: "int", description: "'id' debe ser un entero y es requerido" },
                id_bodega_destino: { bsonType: "int", description: "'id' debe ser un entero y es requerido" },
                id_inventario: { bsonType: "int", description: "'id' debe ser un entero y es requerido" },
                created_by: { bsonType: "int", minimum: 1, description: "'created_by' debe ser un entero" },
                update_by: { bsonType: "int", minimum: 1, description: "'update_by' debe ser un entero" },
                created_at: { bsonType: "date", description: "'created_at' debe ser una fecha valida" },
                updated_at: { bsonType: "date", description: "'updated_at' debe ser una fecha valida" },
                deleted_at: { bsonType: "date", description: "'deleted_at' debe ser una fecha valida" }
            }
        }
    }
})

use('db_bodegas');
db.users.insertMany([
    {
        dni: 11,
        nombre: "juan0",
        email: "juan0@gmail.com",
        estado: 1,
        password: "12345"
    },
    {
        dni: 12,
        nombre: "juan1",
        email: "juan1@gmail.com",
        estado: 1,
        password: "12345"
    },
    {
        dni: 13,
        nombre: "juan2",
        email: "juan2@gmail.com",
        estado: 1,
        password: "12345"
    },
    {
        dni: 14,
        nombre: "juan3",
        email: "juan3@gmail.com",
        estado: 1,
        password: "12345"
    },
    {
        dni: 15,
        nombre: "juan4",
        email: "juan4@gmail.com",
        estado: 1,
        password: "12345"
    },
    {
        dni: 16,
        nombre: "juan5",
        email: "juan5@gmail.com",
        estado: 1,
        password: "12345"
    },
    {
        dni: 17,
        nombre: "juan6",
        email: "juan6@gmail.com",
        estado: 1,
        password: "12345"
    },
    {
        dni: 18,
        nombre: "juan7",
        email: "juan7@gmail.com",
        estado: 1,
        password: "12345"
    },
    {
        dni: 19,
        nombre: "juan8",
        email: "juan8@gmail.com",
        estado: 1,
        password: "12345"
    },
    {
        dni: 20,
        nombre: "juan9",
        email: "juan9@gmail.com",
        estado: 1,
        password: "12345"
    }
]);

db.productos.insertMany([
    {
        id: 11,
        nombre: "producto0",
        descripcion: "producto0",
        estado: 1,
        created_by: 16
    },
    {
        id: 12,
        nombre: "producto1",
        descripcion: "producto1",
        estado: 1,
        created_by: 14
    },
    {
        id: 13,
        nombre: "producto2",
        descripcion: "producto2",
        estado: 1,
        created_by: 13
    },
    {
        id: 14,
        nombre: "producto3",
        descripcion: "producto3",
        estado: 1,
        created_by: 20
    },
    {
        id: 15,
        nombre: "producto4",
        descripcion: "producto4",
        estado: 1,
        created_by: 19
    },
    {
        id: 16,
        nombre: "producto5",
        descripcion: "producto5",
        estado: 1,
        created_by: 11
    },
    {
        id: 17,
        nombre: "producto6",
        descripcion: "producto6",
        estado: 1,
        created_by: 12
    },
    {
        id: 18,
        nombre: "producto7",
        descripcion: "producto7",
        estado: 1,
        created_by: 11
    },
    {
        id: 19,
        nombre: "producto8",
        descripcion: "producto8",
        estado: 1,
        created_by: 11
    },
    {
        id: 20,
        nombre: "producto9",
        descripcion: "producto9",
        estado: 1,
        created_by: 19
    }
]);

db.bodegas.insertMany([
    {
        id: 11,
        nombre: "bodega0",
        id_responsable: 16,
        estado: 1
    },
    {
        id: 12,
        nombre: "bodega1",
        id_responsable: 18,
        estado: 1
    },
    {
        id: 13,
        nombre: "bodega2",
        id_responsable: 18,
        estado: 1
    },
    {
        id: 18,
        nombre: "bodega7",
        id_responsable: 17,
        estado: 1
    },
    {
        id: 19,
        nombre: "bodega8",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 20,
        nombre: "bodega9",
        id_responsable: 18,
        estado: 1
    },
    {
        id: 22,
        nombre: "jsjsjss",
        id_responsable: 13,
        estado: 1
    },
    {
        id: 23,
        nombre: "leeche",
        id_responsable: 13,
        estado: 1
    },
    {
        id: 24,
        nombre: "soto1",
        id_responsable: 15,
        estado: 1
    },
    {
        id: 25,
        nombre: "soto2",
        id_responsable: 15,
        estado: 1
    },
    {
        id: 26,
        nombre: "prueba",
        id_responsable: 12,
        estado: 1
    },
    {
        id: 27,
        nombre: "fsfdf",
        id_responsable: 13,
        estado: 1
    },
    {
        id: 28,
        nombre: "prueba",
        id_responsable: 12,
        estado: 1
    },
    {
        id: 29,
        nombre: "bodegajuanpablo",
        id_responsable: 19,
        estado: 1
    },
    {
        id: 30,
        nombre: "micasa",
        id_responsable: 18,
        estado: 1
    },
    {
        id: 31,
        nombre: "casamedrano",
        id_responsable: 17,
        estado: 1
    },
    {
        id: 32,
        nombre: "centro",
        id_responsable: 18,
        estado: 1
    },
    {
        id: 35,
        nombre: "bodega35",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 36,
        nombre: "asdefg",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 37,
        nombre: "bodega fg",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 38,
        nombre: "bodega fg",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 39,
        nombre: "bodega fg 2",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 40,
        nombre: "bodega fg 2",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 41,
        nombre: "Bodega 13.2",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 42,
        nombre: "Bodega Developer 13.2",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 43,
        nombre: "Bodega Developer 13.2",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 44,
        nombre: "Bodega 59",
        id_responsable: 11,
        estado: 1
    },
    {
        id: 48,
        nombre: "Bodega Anderson Atuesta",
        id_responsable: 11,
        estado: 11
    },
    {
        id: 49,
        nombre: "Bodega Anderson Atuesta555",
        id_responsable: 11,
        estado: 11
    },
    {
        id: 50,
        nombre: "A Bodega",
        id_responsable: 11,
        estado: 1
    }
]);

db.inventarios.insertMany([
    {
        id: 12,
        id_bodega: 12,
        id_producto: 18,
        cantidad: 103
    },
    {
        id: 13,
        id_bodega: 19,
        id_producto: 18,
        cantidad: 220
    },
    {
        id: 14,
        id_bodega: 20,
        id_producto: 13,
        cantidad: 13
    },
    {
        id: 18,
        id_bodega: 19,
        id_producto: 14,
        cantidad: 7
    },
    {
        id: 20,
        id_bodega: 12,
        id_producto: 27,
        cantidad: 9
    },
    {
        id: 25,
        id_bodega: 19,
        id_producto: 23,
        cantidad: 45666
    },
    {
        id: 27,
        id_bodega: 26,
        id_producto: 24,
        cantidad: 45000
    },
    {
        id: 29,
        id_bodega: 26,
        id_producto: 25,
        cantidad: 45666
    },
    {
        id: 31,
        id_bodega: 26,
        id_producto: 26,
        cantidad: 6000
    },
    {
        id: 32,
        id_bodega: 28,
        id_producto: 27,
        cantidad: 89700
    },
    {
        id: 33,
        id_bodega: 23,
        id_producto: 28,
        cantidad: 9999
    },
    {
        id: 34,
        id_bodega: 18,
        id_producto: 18,
        cantidad: 7898
    },
    {
        id: 35,
        id_bodega: 18,
        id_producto: 27,
        cantidad: 55281
    },
    {
        id: 36,
        id_bodega: 29,
        id_producto: 29,
        cantidad: 5993
    },
    {
        id: 37,
        id_bodega: 29,
        id_producto: 27,
        cantidad: 5005
    },
    {
        id: 38,
        id_bodega: 24,
        id_producto: 30,
        cantidad: 52222
    },
    {
        id: 39,
        id_bodega: 30,
        id_producto: 29,
        cantidad: 7
    },
    {
        id: 40,
        id_bodega: 24,
        id_producto: 24,
        cantidad: 666
    },
    {
        id: 41,
        id_bodega: 19,
        id_producto: 31,
        cantidad: 50
    },
    {
        id: 42,
        id_bodega: 18,
        id_producto: 31,
        cantidad: 4500
    },
    {
        id: 43,
        id_bodega: 13,
        id_producto: 28,
        cantidad: 87000
    },
    {
        id: 44,
        id_bodega: 26,
        id_producto: 31,
        cantidad: 50
    },
    {
        id: 45,
        id_bodega: 32,
        id_producto: 32,
        cantidad: 200
    },
    {
        id: 46,
        id_bodega: 13,
        id_producto: 18,
        cantidad: 6666
    },
    {
        id: 47,
        id_bodega: 11,
        id_producto: 33,
        cantidad: 900
    },
    {
        id: 48,
        id_bodega: 30,
        id_producto: 13,
        cantidad: 100
    },
    {
        id: 49,
        id_bodega: 28,
        id_producto: 34,
        cantidad: 8000
    },
    {
        id: 50,
        id_bodega: 30,
        id_producto: 27,
        cantidad: 6777
    },
    {
        id: 51,
        id_bodega: 12,
        id_producto: 31,
        cantidad: 600
    },
    {
        id: 53,
        id_bodega: 13,
        id_producto: 35,
        cantidad: 10
    },
    {
        id: 54,
        id_bodega: 24,
        id_producto: 36,
        cantidad: 10
    },
    {
        id: 55,
        id_bodega: 20,
        id_producto: 37,
        cantidad: 10
    },
    {
        id: 60,
        id_bodega: 11,
        id_producto: 11,
        cantidad: 100
    },
    {
        id: 61,
        id_bodega: 11,
        id_producto: 54,
        cantidad: 100
    },
    {
        id: 62,
        id_bodega: 11,
        id_producto: 55,
        cantidad: 100
    },
    {
        id: 63,
        id_bodega: 11,
        id_producto: 48,
        cantidad: 200
    },
    {
        id: 67,
        id_bodega: 11,
        id_producto: 20,
        cantidad: 10
    },
    {
        id: 68,
        id_bodega: 12,
        id_producto: 20,
        cantidad: 92
    },
    {
        id: 69,
        id_bodega: 13,
        id_producto: 20,
        cantidad: 1080
    },
    {
        id: 70,
        id_bodega: 11,
        id_producto: 57,
        cantidad: 500
    },
    {
        id: 71,
        id_bodega: 11,
        id_producto: 58,
        cantidad: 500
    },
    {
        id: 72,
        id_bodega: 11,
        id_producto: 59,
        cantidad: 500
    },
    {
        id: 73,
        id_bodega: 11,
        id_producto: 34,
        cantidad: 500
    },
    {
        id: 74,
        id_bodega: 12,
        id_producto: 34,
        cantidad: 200
    },
    {
        id: 75,
        id_bodega: 12,
        id_producto: 33,
        cantidad: 600
    },
    {
        id: 76,
        id_bodega: 50,
        id_producto: 60,
        cantidad: 74
    },
    {
        id: 77,
        id_bodega: 12,
        id_producto: 12,
        cantidad: 124
    }
]);

db.historiales.insertMany([
    {
        id: 18,
        cantidad: 7,
        id_bodega_origen: 12,
        id_bodega_destino: 18,
        id_inventario: 18
    },
    {
        id: 20,
        cantidad: 9,
        id_bodega_origen: 11,
        id_bodega_destino: 12,
        id_inventario: 18
    },
    {
        id: 21,
        cantidad: 7,
        id_bodega_origen: 29,
        id_bodega_destino: 30,
        id_inventario: 36
    },
    {
        id: 22,
        cantidad: 666,
        id_bodega_origen: 26,
        id_bodega_destino: 24,
        id_inventario: 27
    },
    {
        id: 23,
        cantidad: 100,
        id_bodega_origen: 19,
        id_bodega_destino: 18,
        id_inventario: 41
    },
    {
        id: 24,
        cantidad: 25,
        id_bodega_origen: 19,
        id_bodega_destino: 26,
        id_inventario: 41
    },
    {
        id: 25,
        cantidad: 25,
        id_bodega_origen: 19,
        id_bodega_destino: 26,
        id_inventario: 41
    },
    {
        id: 26,
        cantidad: 300,
        id_bodega_origen: 18,
        id_bodega_destino: 12,
        id_inventario: 42
    },
    {
        id: 27,
        cantidad: 300,
        id_bodega_origen: 18,
        id_bodega_destino: 12,
        id_inventario: 42
    },
    {
        id: 28,
        cantidad: 1,
        id_bodega_origen: 12,
        id_bodega_destino: 11,
        id_inventario: 67
    },
    {
        id: 29,
        cantidad: 200,
        id_bodega_origen: 11,
        id_bodega_destino: 12,
        id_inventario: 75
    }
]);