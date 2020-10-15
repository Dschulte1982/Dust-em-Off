import React from 'react';
import { DropTarget } from 'react-dnd';

const TargetBox = ({ canDrop, isOver, connectDropTarget, }) => {
    const isActive = canDrop && isOver;
    return connectDropTarget(<div className="drop-box">{isActive ? 'Release to drop' : 'Upload Images'}<i className="fa fa-upload fa_custom"></i></div>);
};
export default DropTarget((props) => props.accepts, {
    drop(props, monitor) {
        if (props.onDrop) {
            props.onDrop(props, monitor);
        }
    },
}, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))(TargetBox);
