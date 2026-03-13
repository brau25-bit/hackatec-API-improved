import prisma from "../../db/prisma.js";

export class ReportService{
    static async getReports(){
        try {
            
        } catch (error) {
            
        }
    }

    static async createReports(data, imgPath = ""){
        try {
            const report = await prisma.report.create({
                data: data
            })

            if(report===0) throw new Error("Fallo al crear el reporte");

            console.log(report)
            
            if(!imgPath) return {message: "Reporte creado exitosamente"}

            await prisma.reportImage.create({
                data: {
                    url: imgPath,
                    reportId: report.id
                }
            })

            return {
                data: report,
                message: "Reporte creado exitosamente, imagen almaecenada correctaments"
            }
        } catch (error) {
            
        }
    }
}