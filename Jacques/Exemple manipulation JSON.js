 window.database.originalSchema.types.G.fields.L1 = window.database.originalSchema.types.G.fields.N1;
 delete window.database.originalSchema.types.G.fields.N1;
 window.database.setSchema(window.database.originalSchema);

window.database.schema.types.G.fields.L1 = window.database.schema.types.G.fields.N1;
delete window.database.schema.types.G.fields.N1;
 window.database.saveSchema();