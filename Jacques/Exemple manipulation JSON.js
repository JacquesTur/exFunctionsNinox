window.database.originalSchema.types.G.fields.L1 =
  window.database.originalSchema.types.G.fields.N1;
delete window.database.originalSchema.types.G.fields.N1;
window.database.setSchema(window.database.originalSchema);

window.database.schema.types.G.fields.L1 =
  window.database.schema.types.G.fields.N1;
delete window.database.schema.types.G.fields.N1;
window.database.saveSchema();


var field;
var type;

// récupération de la table (type) et du champ (field)
if (args.record) {
  type = database.schema.typeOf(args.record._id);
  field = type.findElement(args.multiField);
  if (field) {
    args.record[field.id] = util.multiEncode(args.id);
    return args.record[field.id];
  } else return "Le champ "+ args.multiFiled+ " esr introuvable dans la table " + type.caption;
} else return "Aucun enregistrement définit dans args.record";
