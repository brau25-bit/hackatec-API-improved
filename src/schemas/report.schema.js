import z from 'zod'
import reportRouter from '../modules/report/report.router.js'

export const reportSchema = z.object({

})

export const partialReportSchema = reportSchema.partial()