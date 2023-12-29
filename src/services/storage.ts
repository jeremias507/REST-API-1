import { Storage } from "../interface/storage";
import StorageModel from "../models/storage";

const registerUpload = async (data: Storage, fileBuffer: Buffer | undefined): Promise<any> => {
  // Desestructura los datos de Storage
  const { fileName, idUser, path } = data;

  // Si hay un fileBuffer, también lo puedes usar en tu lógica
  // Por ejemplo, puedes guardarlo en la base de datos junto con los demás datos
  // Ajusta esto según tus necesidades específicas
  const additionalData = fileBuffer ? { fileBuffer } : {};

  // Combina los datos de Storage y el fileBuffer para la creación en la base de datos
  const responseItem = await StorageModel.create({
    fileName,
    idUser,
    path,
    ...additionalData,
  });

  return responseItem;
};
;

export { registerUpload };