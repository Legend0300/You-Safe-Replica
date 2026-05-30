import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Typography, Chip, Divider, Button, Stack, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const STATUS_COLOR = {
  'In Progress': 'warning',
  Pending: 'default',
  Completed: 'success',
  Enabled: 'info',
  Disabled: 'default',
  reported: 'success',
};

const Field = ({ label, value }) =>
  value ? (
    <Box>
      <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>
        {label}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        {value}
      </Typography>
    </Box>
  ) : null;

const ReportDetails = ({ report, open, onOpenChange }) => {
  if (!report) return null;
  const close = () => onOpenChange(false);
  const status = report.status || report.reportedStatus;
  const title = report.formName || report.type || 'Report';
  const photo = (report.imagesURL && report.imagesURL[0]) || report.img;

  return (
    <Modal open={open} onClose={close}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 4,
            width: '100%',
            maxWidth: 460,
            overflow: 'hidden',
            boxShadow: 24,
          }}
        >
          {/* header */}
          <Box sx={{ bgcolor: 'primary.main', color: '#fff', px: 3, py: 2.5, position: 'relative' }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 1.5 }}>
              {report.type || 'Report'}
            </Typography>
            <Typography variant="h5" sx={{ color: '#fff' }}>{title}</Typography>
            <IconButton onClick={close} sx={{ position: 'absolute', top: 10, right: 10, color: 'rgba(255,255,255,0.8)' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* body */}
          <Box sx={{ p: 3 }}>
            {status && (
              <Chip label={status} color={STATUS_COLOR[status] || 'default'} size="small" sx={{ fontWeight: 600, mb: 2 }} />
            )}
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Field label="Department" value={report.department} />
                <Field label="Area" value={report.area} />
              </Box>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Field label="Responsibility" value={report.responsibility} />
                <Field label="Due Date" value={report.endDate} />
              </Box>
              <Field label="Act Type" value={report.actType} />
              <Field label="Leader" value={report.leader} />
              <Field label="Topic" value={report.topic} />
              <Field label="Description" value={report.description} />
              <Field label="Action Remarks" value={report.actionRemarks} />
              <Field label="Outline of Facts" value={report.outlineOfFacts} />
            </Stack>

            {photo && (
              <>
                <Divider sx={{ my: 2.5 }} />
                <Typography variant="subtitle2" sx={{ mb: 1 }}>Attachment</Typography>
                <Box
                  component="img"
                  src={photo}
                  alt="Report attachment"
                  sx={{ width: 120, height: 120, objectFit: 'contain', borderRadius: 2, bgcolor: '#f4f6f8', p: 1 }}
                />
              </>
            )}

            <Button onClick={close} fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
              Close
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReportDetails;
