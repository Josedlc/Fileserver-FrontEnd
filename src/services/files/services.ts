import { Department, FileDown, FileUp } from "../../models/files/types";

export const fetchDepartment = async (): Promise<Department[]> => {
  const response = await fetch(
    "http://104.237.129.63:8014/api/file/department/",
    {
      method: "GET",
    }
  );
  if (response.status === 200) {
    const Department: Department[] = await response.json();
    console.log(Department);
    return Department;
  } else {
    throw new Error("Error en solicitud");
  }
};

export const fetchAddFile = async (
  basicFile: Partial<FileUp>
): Promise<Partial<FileUp>> => {
  const response = await fetch("http://104.237.129.63:8014/api/file/", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(basicFile),
  });

  if (response.status === 200) {
    const FileUps: Partial<FileUp> = {
      id: basicFile.id,
      title: basicFile.title,
      department: basicFile.department,
      user: basicFile.user,
      file_save: basicFile.file_save,
    };

    return FileUps;
  } else {
    throw new Error("Error method");
  }
};

export const fetchGetFile = async (): Promise<FileDown[]> => {
  const response = await fetch("http://104.237.129.63:8014/api/file/fileup/", {
    method: "GET",
  });
  if (response.status === 200) {
    const File: FileDown[] = await response.json();
    console.log(File);
    return File;
  } else {
    throw new Error("Error en solicitud");
  }
};

export const fetchFileDelete = async (id: number) => {
  const response = await fetch(`http://104.237.129.63:8014/api/file/${id}/`, {
    method: "DELETE",
  });

  if (response.status === 200) {
    const responses = await response.json();
    console.log(responses);
    return responses;
  } else {
    throw new Error("Error en solicitud");
  }
};
