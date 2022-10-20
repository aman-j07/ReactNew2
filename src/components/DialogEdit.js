import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogEdit(props) {
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.open]);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <input onChange={props.changeHandlerNoteTitle} id="scroll-dialog-title" className='inpEditTitle' defaultValue={props.note[0]}/>
        <DialogContent dividers={"paper" === 'paper'}>
          <textarea
            id="scroll-dialog-description"
            className='inpEditNote'
            ref={descriptionElementRef}
            tabIndex={-1}
            value={props.note[1]}
            onChange={props.changeHandlerNote}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.setEdit}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
