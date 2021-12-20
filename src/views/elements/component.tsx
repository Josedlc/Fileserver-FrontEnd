import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { popLoading, pushLoading } from "../../redux/ui/actions";

import { FileDown } from "../../models/files/types";
import { fetchFileDelete, fetchGetFile } from "../../services/files/services";
import { userSaga } from "../../redux/user/saga";

const Elements: FC = () => {
  const [files, setFiles] = useState<FileDown[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getFiles = async () => {
      try {
        dispatch(pushLoading());
        const recievedFile = await fetchGetFile();
        setFiles(recievedFile);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        dispatch(popLoading());
      }
    };

    if (files === null) {
      getFiles();
    }
  }, [dispatch, files]);

  const changeLocation = (id: number) => {
    fetchFileDelete(id);
  };

  return (
    <div className="home-container">
      <div className="top-white"></div>
      <div className="info-section">
        <div className="info-section-content-2">
          <p>Download or Delete</p>
        </div>
      </div>
      <div className="section-upload">
        <div className="section-form">
          <table>
            <tr>
              <th>Title</th>
              <th>Autor</th>
              <th>Department</th>
              <th>File</th>
              <th>Delete</th>
            </tr>
            {files
              ? files?.map((file) => (
                  <tr key="">
                    <td> {`${file.title}`}</td>
                    <td>{`${file.user?.username}`}</td>
                    <td>{`${file.department.name}`}</td>
                    <td>
                      <a href={`${file.file_save}`}>Download</a>
                    </td>
                    <td
                      key={`file-${file.id}`}
                      onClick={() => changeLocation(file.id)}
                    >
                      Delete
                    </td>
                  </tr>
                ))
              : null}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Elements;
