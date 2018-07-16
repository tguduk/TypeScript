///<reference path="fourslash.ts" />

////var x = Object.create(/**/

verify.completions({ marker: "", includes: "number", isNewIdentifierLocation: true });
edit.insert("nu");
verify.completions({ includes: { name: "number", kind: "keyword" }, isNewIdentifierLocation: true });
