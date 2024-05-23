/*
*   Details:
*       Iterates all the files in the back up folder, if the week day is not 7 (Sunday) then the backup file gets deleted.
*
*   Date:
*       07-25-2022
*/

const back_folder = ''

function cleanFiles() {
    // Reading back up folder and creating the file list object
    let back_folder = DriveApp
      .getFolderById(back_folder);
    
    let back_rfiles = back_folder
      .getFiles();
  
    while (back_rfiles.hasNext()) {
      let file_object = back_rfiles
        .next();
  
      let file_creation_date = new Date(file_object
        .getLastUpdated())
        .getDay();
  
      if (file_creation_date != 7) {
        file_object
          .setTrashed(true);
        }
      }
    }