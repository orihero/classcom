import RNFetchBlob from 'rn-fetch-blob';
import {Platform, PermissionsAndroid} from 'react-native';

/// grant permission in android
export const getDownloadPermissionAndroid = async () => {
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
interface FileDownloadProps {
  fUrl: string;
  fName: string;
}
export const downloadFile = async ({fUrl, fName}: FileDownloadProps) => {
  // Get the app's cache directory
  const {fs} = RNFetchBlob;
  const cacheDir = fs.dirs.DownloadDir;

  // Generate a unique filename for the downloaded image
  // const filename = fUrl.split('/').pop() as '';
  const imagePath = `${cacheDir}/${fName}`;

  try {
    // Download the file and save it to the cache directory
    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: imagePath,
        appendExt: fName.split('.').pop(),
      },
      android: {
        fileCache: true,
        path: imagePath,
        appendExt: fName.split('.').pop(),
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: imagePath,
          description: 'File',
        },
      },
    });

    const response = await RNFetchBlob.config(configOptions as never).fetch(
      'GET',
      fUrl,
    );

    // Return the path to the downloaded file
    return response;
  } catch (error) {
    console.error(error, 'error');
    return null;
  }
};
