import {
  mediaHandlerConfig,
  createMediaHandler,
} from 'next-tinacms-s3/dist/handlers'
import { AuthJsBackendAuthProvider, TinaAuthJSOptions } from 'tinacms-authjs';
import databaseClient from '../../../tina/__generated__/databaseClient';

export const config = mediaHandlerConfig;

export default createMediaHandler({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY || '',
      secretAccessKey: process.env.S3_SECRET_KEY || '',
    },
    region: process.env.S3_REGION,
  },
  bucket: process.env.S3_BUCKET || '',
  authorized: async (req, _res) => {
    if (process.env.NODE_ENV === 'development') {
      return true;
    }

    try {
      const auth = AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient: databaseClient,
          secret: process.env.NEXTAUTH_SECRET!,
        }),
      });

      const result = await auth.isAuthorized(req, _res);

      return result.isAuthorized;
    } catch (e) {
      console.error(e);

      return false;
    }
  },
},
  {
    cdnUrl: "https://reports.atomica.org"
  },
);