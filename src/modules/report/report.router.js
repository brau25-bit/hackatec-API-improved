import { Router } from "express";
import { ReportController } from "./report.controller.js";
import { report } from "node:process";
import { validateSchema } from "../../middleware/validateSchema.js";
import { upload } from "../../middleware/upload.js";
import { reportSchema, partialReportSchema } from "../../schemas/report.schema.js";

const reportRouter = Router()

reportRouter.get('/', ReportController.getReports)

reportRouter.post('/', validateSchema(reportSchema), upload.single('file'), ReportController.createReport)

export default reportRouter