import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  getAllParent() {
    const url = `${environment.petURL}api/pet/parents/getAll`;
    return this.http.get(url);
  }
  getAllPetsByParent(ownerId: number) {
    const url = `${environment.petURL}api/pet/getPetParentDetails/${ownerId}`;
    return this.http.get(url);
  }

  createAppointment(data: any) {
    const url = `${environment.ConsultationMockURL}api/appointments/create`;
    return this.http.post(url, data);
  }
}
