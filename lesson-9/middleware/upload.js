import path from "node:path";
import crypto from "node:crypto";

import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.resolve("tmp"));
  },
  filename(req, file, cb) {
    // file.originalname = TrevorPhilips-GTAV.png
    // 1. var1 = "TrevorPhilips-GTAV"; var2 = ".png"
    // 2. var3 = "d5b395cf-04fe-4b50-9c59-927efed93805"
    // 3. var1 + "-" + var3 + var2 -> TrevorPhilips-GTAV-d5b395cf-04fe-4b50-9c59-927efed93805.png
    const extname = path.extname(file.originalname); // .png
    const basename = path.basename(file.originalname, extname); // TrevorPhilips-GTAV
    const suffix = crypto.randomUUID();

    console.log(`${basename}-${suffix}${extname}`);
    cb(null, `${basename}-${suffix}${extname}`);
  },
});

export default multer({ storage });
