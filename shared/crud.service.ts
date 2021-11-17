import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root'
})

export class CrudService {
  
  private userCollection: AngularFirestoreCollection<Admin>;
  private flightCollection: AngularFirestoreCollection<Flight>;
  admin$!: Observable<Admin[]>;
  flight$!: Observable<Flight[]>;
  isLoggedIn = false;

  constructor(private firestore: AngularFirestore) {
    this.userCollection = this.firestore.collection<Admin>('users');
    this.admin$ = this.userCollection.valueChanges();
    this.flightCollection = this.firestore.collection<Flight>('Flights');
    this.flight$ = this.flightCollection.valueChanges();
  }
  
  getAdmin(){
    return this.admin$;
  }

  getFlight(){
    return this.flight$;
  }
}
