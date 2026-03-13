import { ReportService } from "./report.service.js";

export class ReportController{
    static async getReports(req, res){
        try {

        } catch (error) {
            throw error
        }
    }

    static async createReport(req, res){
        try {
            const data = req.validated
            const imgPath = req.file

            await ReportService.createReports(data, imgPath)

            return res.status(200).json({
                message: "Reporte creado exitosamente"
            })
        } catch (error) {
            throw error
        }
    }
}