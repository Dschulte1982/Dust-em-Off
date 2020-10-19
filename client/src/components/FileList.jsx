// import React from 'react';
// function list(files) {
//     // const label = (file) => `'${file.name}' of size '${file.size}' and type '${file.type}'`;
//     const label = (file) => console.log(file);
//     return files.map((file) => <li key={file.name}><p>{file.name}</p><img src={file.preview} alt="" style={{ width: 50, height: 50 }} /></li>);
// }
// export const FileList = ({ files }) => {
//     // return files.length === 0 ? (<div className="drop-display">Nothing to display</div>) : (<div>{list(files)}</div>);
//     return files.length === 0 ? (<div className="drop-display">Nothing to display</div>) : (<img src={list(files)} />);
// };

import React from 'react';
function list(file) {
    // const label = (file) => `'${file.name}' of size '${file.size}' and type '${file.type}'`;
    file["preview"] = URL.createObjectURL(file)
    return <li key={file.name}><p>{file.name}</p><img src={file.preview} alt="" style={{ width: 50, height: 50 }} /></li>;
}
export const FileList = ({ files }) => {
    // return files.length === 0 ? (<div className="drop-display">Nothing to display</div>) : (<div>{list(files)}</div>);
    return files.length === 0 ? (<div className="drop-display">Nothing to display</div>) : (<img src={list(files)} />);
};
