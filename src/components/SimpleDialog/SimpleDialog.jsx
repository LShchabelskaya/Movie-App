import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default function SimpleDialog({ onClose, text, open, children }) {
    return (
        <Dialog open={open} onClose={onClose} >
            <DialogTitle sx={{margin: 'auto'}}>{text}</DialogTitle>
            {children}
        </Dialog>
    );
};

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};