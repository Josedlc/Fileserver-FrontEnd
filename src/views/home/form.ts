import { useSelector } from "react-redux";
import * as yup from "yup";
import { FileUp, Department, User } from "../../models/files/types";
import { userInfoSelector } from "../../redux/user/selectors";
import { fetchAddFile } from "../../services/files/services";
export interface formValues {
  title: string;
  department: number;
  user: number;
  file_save: File;
}

const files: File = {} as File;
export const initialValues: formValues = {
  title: "",
  department: 0,
  user: 0,
  file_save: files,
};

export const onSubmit = (values: formValues) => {
  const possibleFile: Partial<FileUp> = {
    title: values.title,
    user: 1,
    department: 1,
    file_save: values.file_save,
  };

  console.log(possibleFile);

  fetchAddFile(possibleFile);
};
