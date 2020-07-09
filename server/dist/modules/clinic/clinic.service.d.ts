import { Model } from 'mongoose';
import { Clinic, ClinicDto } from './clinic.schema';
export declare class ClinicService {
    private clinicModel;
    constructor(clinicModel: Model<Clinic>);
    createClinic(clinicDto: ClinicDto, ownerId: string): Promise<Clinic>;
    getClinicsByOwner(ownerId: string): Promise<Clinic[]>;
    getClinicById(id: string): Promise<Clinic>;
    updateClinicById(id: string, clinicDto: ClinicDto): Promise<Clinic>;
    deleteClinicById(id: string): Promise<Clinic>;
}
