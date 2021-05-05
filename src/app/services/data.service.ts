/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cares } from '../models/cares';
import { Drug } from '../models/drug';
import { HealthRecord } from '../models/health-record';
import { Instruction } from '../models/instruction';
import { Invoice } from '../models/invoice';
import { Nurse } from '../models/nurse';
import { Patient } from '../models/patient';
import { Payment } from '../models/payment';
import { Physician } from '../models/physician';
import { Room } from '../models/room';
import { Stays } from '../models/stays';

const baseUrl = 'http://localhost:8084/api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Cares
  getAllCares(): Observable<Cares[]> {
    return this.http.get<Cares[]>('${baseUrl}/cares');
  }

  getCares(patient_id: any): Observable<Cares> {
    return this.http.get(`${baseUrl}/cares/${patient_id}`);
  }

  createCares(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/cares/create`, data);
  }

  updateCares(patient_id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/cares/${patient_id}`, data);
  }

  deleteCares(patient_id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/cares/${patient_id}`);
  }

  // Drug
  getAllDrug(): Observable<Drug[]> {
    return this.http.get<Drug[]>(baseUrl);
  }

  getDrug(patient_id: any): Observable<Drug> {
    return this.http.get(`${baseUrl}/${patient_id}`);
  }

  createDrug(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateDrug(patient_id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${patient_id}`, data);
  }

  deleteDrug(patient_id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${patient_id}`);
  }

  //Health Record
  getAllHealthRecord(): Observable<HealthRecord[]> {
    return this.http.get<HealthRecord[]>(baseUrl);
  }

  getHealthRecord(patient_id: any): Observable<HealthRecord> {
    return this.http.get(`${baseUrl}/${patient_id}`);
  }

  createHealthRecord(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateHealthRecord(patient_id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${patient_id}`, data);
  }

  deleteHealthRecord(patient_id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${patient_id}`);
  }

  // Instruction
  getAllInstruction(): Observable<Instruction[]> {
    return this.http.get<Instruction[]>(baseUrl);
  }

  getInstruction(patient_id: any): Observable<Instruction> {
    return this.http.get(`${baseUrl}/${patient_id}`);
  }

  createInstruction(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateInstruction(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteInstruction(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // Invoice
  getAllInvoice(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(baseUrl);
  }

  getInvoice(id: any): Observable<Invoice> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createInvoice(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateInvoice(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteInvoice(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllInvoice(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitleInvoice(title: any): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${baseUrl}?title=${title}`);
  }

  // Nurse
  getAllNurse(): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(baseUrl);
  }

  getNurse(id: any): Observable<Nurse> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createNurse(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateNurse(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteNurse(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllNurse(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitleNurse(title: any): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(`${baseUrl}?title=${title}`);
  }

  // Patient
  getAllPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(baseUrl);
  }

  getPatient(id: any): Observable<Patient> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createPatient(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updatePatient(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deletePatient(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllPatient(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitlePatient(title: any): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${baseUrl}?title=${title}`);
  }

  // Payment
  getAllPayment(): Observable<Payment[]> {
    return this.http.get<Payment[]>(baseUrl);
  }

  getPayment(id: any): Observable<Payment> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createPayment(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updatePayment(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deletePayment(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllPayment(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitlePayment(title: any): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${baseUrl}?title=${title}`);
  }

  // Physician
  getAllPhysician(): Observable<Physician[]> {
    return this.http.get<Physician[]>(baseUrl);
  }

  getPhysician(id: any): Observable<Physician> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createPhysician(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updatePhysician(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deletePhysician(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllPhysician(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitlePhysician(title: any): Observable<Physician[]> {
    return this.http.get<Physician[]>(`${baseUrl}?title=${title}`);
  }

  // Room
  getAllRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(baseUrl);
  }

  getRoom(id: any): Observable<Room> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createRoom(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateRoom(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteRoom(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllRoom(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitleRoom(title: any): Observable<Room[]> {
    return this.http.get<Room[]>(`${baseUrl}?title=${title}`);
  }

  // Stays
  getAllStays(): Observable<Stays[]> {
    return this.http.get<Stays[]>(baseUrl);
  }

  getStays(patient_id: any): Observable<Stays> {
    return this.http.get(`${baseUrl}/${patient_id}`);
  }

  createStays(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateStays(patient_id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${patient_id}`, data);
  }

  deleteStays(patient_id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${patient_id}`);
  }

  deleteAllStays(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitleStays(title: any): Observable<Stays[]> {
    return this.http.get<Stays[]>(`${baseUrl}?title=${title}`);
  }
}
