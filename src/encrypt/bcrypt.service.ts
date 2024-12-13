import * as bcrypt from "bcrypt";

export function encrypt(textPlain: string) {
  return bcrypt.hashSync(textPlain, 10);
}

export function compare(textPlain: string, textHashed: string) {
  return bcrypt.compareSync(textPlain, textHashed);
}
