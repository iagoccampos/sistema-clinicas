import { ClinicService } from './clinic.service';
import { ClinicDto } from './clinic.schema';
import { Request } from 'express';
export declare class ClinicController {
    private clinicService;
    constructor(clinicService: ClinicService);
    getClinics(req: Request): Promise<import("./clinic.schema").Clinic[]>;
    createClinic(req: Request, clinic: ClinicDto): Promise<import("./clinic.schema").Clinic>;
    getClinic(clinicId: any): Promise<import("./clinic.schema").Clinic>;
    updateClinic(params: any, clinic: ClinicDto): Promise<import("./clinic.schema").Clinic>;
    deleteClinic(params: any): Promise<void>;
}
