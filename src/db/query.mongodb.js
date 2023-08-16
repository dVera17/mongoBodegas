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

use('db_bodegas');
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

use('db_bodegas');
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

use('db_bodegas');
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
db.historiales.insertOne({
    id: 1,
    cantidad: 1,
    id_bodega_origen: 1,
    id_bodega_destino: 1,
    id_inventario: 1
})


use('db_bodegas');
db.inventarios.insertOne({
    id: 1,
    id_bodega: 1,
    id_producto: 1,
    cantidad: 1
})

use('db_bodegas');
db.bodegas.insertOne({
    id: 1,
    nombre: "nombre1",
    id_responsable: 1,
    estado: 1
})

use('db_bodegas');
db.productos.insertOne({
    id: 1,
    nombre: "nombre1",
    descripcion: "descripcion",
    estado: 1
})

use('db_bodegas');
db.users.insertOne({
    dni: 1,
    nombre: "nombre1",
    email: "mail@example.com",
    estado: 1,
    password: "admin123"
})

use('db_bodegas');
db.historiales.find({})