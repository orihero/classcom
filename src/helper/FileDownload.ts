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

  // const getDownloadPermissionAndroid = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: 'File Download Permission',
  //         message: 'Your permission is required to save Files to your device',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       return true;
  //     }
  //   } catch (err) {
  //     console.log('err', err);
  //   }
  // };

  const requestFilePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'File Permission',
            message: 'App needs access to your files',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('File permission granted');
          return true;
        } else {
          console.log('File permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
    }
  };

  const downloadFile = useCallback(
    async ({fName, fUrl}: FileDownloadProps) => {
      try {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        if (!granted) {
          await requestFilePermission();
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
              const progress = (data.bytesWritten / data.contentLength) * 100;
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
    [requestFilePermission],
  );

  return {downloadFile, requestFilePermission};
};

export default FileDownloadHelper;
