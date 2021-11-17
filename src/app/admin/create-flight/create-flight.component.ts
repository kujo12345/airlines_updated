import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'shared/crud.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {
  

  constructor(private fb: FormBuilder, private crud: CrudService, private router: Router) { }
  
  flight$ = [];

  flightInformation = {
    destination: 'Cebu',
    origin: 'Manila',
    departure: '5:00',
    arrival: '14:00',
    type: 'Active', 
    code: '1100', 
    airline: 'Philippine Airlines'
  };

  flightForm = this.fb.group({  // the submission form 
    destination: ['', Validators.minLength(1), Validators.required],
    origin: ['', Validators.minLength(1), Validators.required],
    departure: ['', Validators.minLength(1), Validators.required],
    arrival: ['', Validators.minLength(1), Validators.required],
    type: ['', Validators.minLength(1), Validators.required],
    code: ['', Validators.minLength(1), Validators.required],
    airline: ['', Validators.minLength(1), Validators.required]
  });
  
  onSubmit(){
    console.warn(this.flightForm.value); //submitting the Username and Password Value
  } 

  ngOnInit(): void {

    this.crud.getFlight().subscribe((flightInformation) => {  //getting the flight information 
      this.flight$ = flightInformation;
    });
    
    this.loggedUser = JSON.parse(localStorage.getItem('flightInformation'));
    console.log(this.flight$['destination']);
    console.log(this.flight$['origin']);
    console.log(this.flight$['departure']);
    console.log(this.flight$['arrival']);
    console.log(this.flight$['type']);
    console.log(this.flight$['code']);
    console.log(this.flight$['airline']);
  }

}
