/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect} from 'react';
import RNFS from 'react-native-fs';
import {PermissionsAndroid, Platform} from 'react-native';

interface FileDownloadProps {
  fUrl: string;
  fName: string;
}

const FileDownloadHelper = () => {
  useEffect(() => {
    // Optional: Delete the file if it exists before downloading
    const filePath = RNFS.DocumentDirectoryPath + '/example.pdf';
    RNFS.unlink(filePath)
      .then(() => {
        console.log('Previous file deleted');
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const getDownloadPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'File Download Permission',
          message: 'Your permission is required to save Files to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const downloadFile = useCallback(
    async ({fName, fUrl}: FileDownloadProps) => {
      try {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        if (!granted) {
          await getDownloadPermissionAndroid();
          return;
        }

        const fileUrl = fUrl; // Replace with your file URL
        const fileName = fName; // Replace with your desired file name
        const downloadDest = `${RNFS.DownloadDirectoryPath}/${fileName}`;

        const options = Platform.select({
          ios: {
            fromUrl: fileUrl,
            toFile: downloadDest,
            background: true,
            discretionary: true,
            begin: (res: {contentLength: number}) => {
              console.log('begin', res);
              console.log(
                'contentLength:',
                res.contentLength / 1024 / 1024,
                'M',
              );
            },
          },
          android: {
            fromUrl: fileUrl,
            toFile: downloadDest,
            notification: true,
            useDownloadManager: true,
            mediaScannable: true,
            title: fileName,
            path: downloadDest,
            description: 'Downloading file.',
            progressDivider: 1,
            progress: (data: any) => {
              const progress = data.bytesWritten / data.contentLength;
              console.log(progress);
            },
          },
        }) || {
          fromUrl: fileUrl,
          toFile: downloadDest,
          begin: res => {
            console.log('begin', res);
            console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
          },
        };

        const ret = RNFS.downloadFile(options);
        ret.promise

          .then(res => {
            console.log('success', res);
            console.log('file://' + downloadDest);
          })
          .catch(err => {
            console.log('err', err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    [getDownloadPermissionAndroid],
  );

  return {downloadFile, getDownloadPermissionAndroid};
};

export default FileDownloadHelper;

// import RNFetchBlob from 'rn-fetch-blob';
// import {Platform, PermissionsAndroid} from 'react-native';

// /// grant permission in android

// export const downloadFile = async (url: any) => {
//   // Get the app's cache directory
//   const {fs} = RNFetchBlob;
//   const cacheDir = fs.dirs.DownloadDir;

//   // Generate a unique filename for the downloaded image
//   const filename = url.split('/').pop();
//   const imagePath = `${cacheDir}/${filename}`;

//   try {
//     // Download the file and save it to the cache directory
//     const configOptions = Platform.select({
//       ios: {
//         fileCache: true,
//         path: imagePath,
//         appendExt: filename.split('.').pop(),
//       },
//       android: {
//         fileCache: true,
//         path: imagePath,
//         appendExt: filename.split('.').pop(),
//         addAndroidDownloads: {
//           // Related to the Android only
//           useDownloadManager: true,
//           notification: true,
//           path: imagePath,
//           description: 'File',
//         },
//       },
//     });
//     const response = await RNFetchBlob.config(configOptions as never).fetch(
//       'GET',
//       url,
//     );

//     // Return the path to the downloaded file
//     return response;
//   } catch (error) {
//     console.error(error, 'error');
//   }
// };
