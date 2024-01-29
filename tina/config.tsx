import {
  UsernamePasswordAuthJSProvider,
  TinaUserCollection,
} from "tinacms-authjs/dist/tinacms";
import { defineConfig, LocalAuthProvider } from "tinacms";

import { PageCollection } from "./collections/page";
import { FaqCollection } from "./collections/faq";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
const media = process.env.NO_S3 ? { tina: { mediaRoot: "", publicFolder: "public", static: true } } :
  { loadCustomStore: async () => {
      const pack = await import('next-tinacms-s3');

      return pack.TinaCloudS3MediaStore;
    }
  };

export default defineConfig({
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  contentApiUrlOverride: "/api/tina/gql",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media,
  schema: {
    collections: [TinaUserCollection, PageCollection, FaqCollection],
  },
});
