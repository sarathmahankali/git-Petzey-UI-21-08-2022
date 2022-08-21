import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {

  constructor(private http: HttpClient) {}
  roleName = 'vet';
  roleId = 1;
  getAllAppointmentsByRole(
    roleId: number,
    roleName: string,
    startDate,
    endDate
  ) {
    return this.http.get(
      `${environment.ConsultationMockURL}api/appointments/getappointments/${roleId}/${roleName}/${startDate}/${endDate}`
    );
  }

  getAllAppointmentFilteredWithStatusAndDate(
    vetId: number,
    status: string,
    startDate,
    endDate
  ) {
    return this.http.get(
      `${environment.ConsultationMockURL}/api/appointments/${vetId}/${status}/${startDate}/${endDate}`
    );
  }
}
