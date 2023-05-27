import React, { useState, useEffect } from 'react';

const ReportDetails = ({ report, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    console.log('close', setOpen);
  };
  const [reports, setReport] = useState(null);

  // useEffect(() => {
  //    setReport(props.report);
  //  }, [props.report]);

  // setOpen = props
  console.log('props', reports);
  //console.log('report', handleViewDetails);

  if (report) {
    return <button onClick={handleClose}>hello</button>;
  }

  switch (reports) {
    /* case "hazard report":
      return(
     <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
             <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper',
          p: 1,
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: 4, textAlign: 'center' }}
          >
            Hazard Reporting
          </Typography>{' '}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem',
              flexDirection: 'column',
            }}
          >
            <AreaField onSelectArea={handleSelectArea} />
            <DepartmentField onSelectDepartment={handleSelectDepartment} />
            <TextField
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              multiline
              rows={4}
              label="Description"
              color="warning"
              style={{ marginBottom: '1rem' }}
            />
          </div>
          <Box
            sx={{
              display: 'flex',
              p: 1,
              gap: '1rem',
              marginBottom: '1rem',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <DateSelector
              selectedDate={reportDate}
              onDateChange={handleReportDateChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Time"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                color="warning"
              />
            </LocalizationProvider>
          </Box>

         
            <Input
              type="file"
              id="photos"
              value={photos}
              onChange={(event) => setPhotos(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <CameraAltIcon sx={{ fontSize: 40 }} />
                </InputAdornment>
              }
              label="Add photo"
            />
          
          <FormControl sx={{ mt: 3, mb: 3, display: 'flex' }}>
            <InputLabel id="demo-simple-select-helper-label">
              Responsibility
            </InputLabel>
            <Select
              value={responsibility}
              label="Responsibility"
              onChange={handleResponsibilityChange}
              variant="outlined"
            >
              <MenuItem value="">Select Manager</MenuItem>
              {managers.map((manager) => (
                <MenuItem key={manager.id} value={manager.fullName}>
                  {manager.fullName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </form>
      </Box>
      </Modal> 
      )
      break;*/
    case 'Tuesday':
      //  message = 'It\'s Tuesday, already into the week!';
      break;
    case 'Wednesday':
      //   message = 'It\'s Wednesday, halfway through the week!';
      break;
    case 'Thursday':
      //    message = 'It\'s Thursday, almost there!';
      break;
    case 'Friday':
      //     message = 'It\'s Friday, weekend is near!';
      break;
    default:
    //    message = 'It\'s the weekend, time to relax!';
  }

  return (
    <div>
      <h1>Report Details</h1>
      <p>Department: {report.department ? report.department : 'NA'}</p>
      <p>Area: {report.area || 'NA'}</p>
      <p>Description: {report.description || 'NA'}</p>
      <p>Date: {report.endDate || 'NA'}</p>
      <div>
        <h3>Photos</h3>
        <ul>
          {/* {report.photos.map(photo => (
            <li key={photo.id}>
              <img src={photo.url} alt="Report Photo" />
            </li>
          ))} */}
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png"
              alt="Report Photo"
              width="40%"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportDetails;
