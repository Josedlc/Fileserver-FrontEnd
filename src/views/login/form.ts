import { sha512 } from "js-sha512";
import * as yup from "yup";
import { User } from "../../models/user/types";

export interface formValues {
  username: string;
  email: string;
  password: string;
  register?: boolean;
}

export const initialValues: formValues = {
  username: "",
  email: "",
  password: "",
  register: false,
};

export const validationSchema: yup.SchemaOf<formValues> = yup.object().shape({
  username: yup.string().required("El username es un campo requerido"),
  email: yup.string().email().required("El email es un campo requerido"),
  password: yup
    .string()
    .min(4, "Escribe mas de 5 caracteres")
    .max(18, "Escribe menos de 18 caracteres")
    .required("La contraseña es un campo requerido"),
  register: yup.boolean(),
});

export const onSubmit = (
  values: formValues,
  login: (user: Partial<User>) => void,
  signin: (user: Partial<User>) => void
) => {
  const possibleUser: Partial<User> = {
    username: values.username,
    email: values.email,
    password: sha512(values.password),
  };

  if (!values.register) {
    login(possibleUser);
  } else {
    signin(possibleUser);
  }
};
