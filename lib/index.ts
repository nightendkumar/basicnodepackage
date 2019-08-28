import { resolve } from "path";
import { rejects } from "assert";
const properties = require("properties");

export function readPropertiesFile(filePath: string): Promise<any> {
  const promise = new Promise(function (resolve, reject) {
    properties.parse(filePath, { path: true }, function (error: any, obj: any) {
      if (error) {
        reject(error);
      }
      else {
        resolve(obj);
      }
    });
  });
  return promise;
}