import React from "react";
import { ReactComponent as Uploading } from '../images/upload.svg';

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
      return files_with_preview;
    });

    if (files) {
      dispatch({ type: "AddToList", files });
      dispatch({ type: "AddToDropZone", inDropZone: false });
    }
  };

  return (
    <>
      <div
        id="drag-drop-container"
        className={"drag-drop-zone"}
        onDrop={(event) => handleDrop(event)}
        onDragOver={(event) => handleDragOver(event)}
        onDragEnter={(event) => handleDragEnter(event)}
      >
        <div id="drag-drop-zone">
          Upload Image
          <div id="uploading-icon"><Uploading></Uploading></div>
        </div>
        <div id="image-preview">
          {data.fileList.map((file) => {
            return (
              <div key={file.name}>
                <img
                  src={file.preview}
                  alt=""
                  style={{ width: 100, height: 100 }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default function DragDropBox() {
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
      <DragAndDrop data={data} dispatch={dispatch} />
    </div>
  );
}
