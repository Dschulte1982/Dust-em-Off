import React from "react";

const DragAndDrop = (props) => {
  const { data, dispatch } = props;

  const handleDragEnter = (event) => {
    event.preventDefault();
    dispatch({ type: "AddToDropZone", inDropZone: true });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    dispatch({ type: "AddToDropZone", inDropZone: true });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    let files = [...event.dataTransfer.files];
    let files_with_preview = [];

    files.map((file) => {
      file["preview"] = URL.createObjectURL(file);
      files_with_preview.push(file);
      console.log(file)
    });

    if (files) {
      dispatch({ type: "AddToList", files });
      dispatch({ type: "AddToDropZone", inDropZone: false });
    }
  };

  return (
    <>
      <div
        id="container"
        className={"drag-drop-zone"}
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleDragOver(event)}
        onDragEnter={(event) => handleDragEnter(event)}
      >
        <p>Drag your files here</p>
        <ol>
          {data.fileList.map((file) => {
            return (
              <li key={file.name}>
                <p>{file.name}</p>
                <img
                  src={file.preview}
                  alt=""
                  style={{ width: 100, height: 100 }}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default function OtherApp() {
  const state = {
    inDropZone: false,
    fileList: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "AddToDropZone":
        return { ...state, inDropZone: action.inDropZone };
      case "AddToList":
        return {
          ...state,
          fileList: state.fileList.concat(action.files),
        };
      default:
        return state;
    }
  };

  const [data, dispatch] = React.useReducer(reducer, state);

  return (
    <div className="App">
      <h1>Upload Image</h1>
      <DragAndDrop data={data} dispatch={dispatch} />
    </div>
  );
}
