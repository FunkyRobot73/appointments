import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {

  // appointment: Appointment = {
  //   id: 1,
  //   title: "CEO",
  //   date: new Date(2024-12-12)
  // }

  newAppointmentTitle : any = "";
  newAppointmentDate : Date = new Date();

  appointments: Appointment[] = [];

  addAppointment() {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id:Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      // alert(this.appointments.length);
      localStorage.setItem("appoinments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index,1)
  }

}
