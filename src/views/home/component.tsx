import { FC, useEffect, useState } from "react";
import Input from "../../components/Input/component";
import { popLoading, pushLoading } from "../../redux/ui/actions";
import { useDispatch } from "react-redux";
import "./styles.css";
import { Department } from "../../models/files/types";
import { fetchDepartment } from "../../services/files/services";
import { useShowError } from "../../utils/ui/stringError";
import { useFormik } from "formik";
import { initialValues, onSubmit } from "./form";

const Home: FC = () => {
  const [departments, setDepartments] = useState<Department[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDepartments = async () => {
      try {
        dispatch(pushLoading());
        const recievedDepartment = await fetchDepartment();
        setDepartments(recievedDepartment);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        dispatch(popLoading());
      }
    };

    if (departments === null) {
      getDepartments();
    }
  }, [dispatch, departments]);

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(values),
  });

  const errors = useShowError(formik.touched, formik.errors);

  return (
    <div className="home-container">
      <div className="top-white"></div>
      <div className="info-section">
        <div className="info-section-content-2">
          <p>Save documents</p>
        </div>
      </div>
      <div className="section-upload">
        <div className="section-form">
          <Input
            name="title"
            className="login-inputs"
            placeholder="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            ErrorComponent={errors("title")}
          />
          <select
            className="restaurants-form"
            name="department"
            id="department"
          >
            {departments?.map((department) => (
              <option value={department.id}>{department.name}</option>
            ))}
          </select>

          <input type="file" id="file_save" />
          <button
            className="button upload-button"
            onClick={() => formik.handleSubmit()}
          >
            <span>Enter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
