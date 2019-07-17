import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../member';
import { SendmailService } from '../sendmail.service';

@Component({
 selector: 'app-contact',
 templateUrl: './contact.component.html',
 styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 public visitor: Member;
 private littleclient: HttpClient;

 // here i initialise the variable as the member class

 public lastName: string = null;
 public firstName: string = null;
 public phoneNumber: string = null;
 public email: string = null;
 public comment: string = null;

 constructor(private emailService: SendmailService) {
   this.visitor = new Member();
 }
 submit() {
   this.visitor.lastName = this.lastName;
   this.visitor.firstName = this.firstName;
   this.visitor.phoneNumber = this.phoneNumber;
   this.visitor.email = this.email;
   this.visitor.comment = this.comment;

   this.emailService.sendmail(this.visitor).subscribe(
     () => {
       alert("L'email a bien été envoyé !");
     }

   );
   console.log(this.visitor)
 }

 ngOnInit() {
 }

}