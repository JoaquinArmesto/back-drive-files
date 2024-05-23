/*
*   Details:
*       Reads the DAT folder and creates a backup file for each file in the folder.
*
*   Date:
*       07-25-2022
*/

// ID constants for files and Backups folders
const data_folder = ''
const back_folder = ''

function backFiles() {
  // Reading back up folder and creating the file list object
  let data_folder = DriveApp
    .getFolderById(data_folder);
    
  let back_folder = DriveApp
    .getFolderById(back_folder);

  // Creating locale date
  let date = new Date()
    .toLocaleDateString()  + ':' + new Date().toLocaleTimeString();

  // Creating file list object
  file_folder = data_folder
    .getFiles();

  // Creates the back up file for each file
  while (file_folder.hasNext()) {
    file_objt = file_folder
      .next();

    id = file_objt
      .getId();
    
    file = DriveApp
      .getFileById(id);
      
    name = DriveApp
      .getFileById(id)
      .getName() + " [auto-backup-" + date + "]";

    file
      .makeCopy(name, back_folder);
    }
  }
