import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { UserapiService } from '../../userServices/userapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {

  constructor(private http : UserapiService , private router : Router) { }

  successstatus : boolean = false;
   
  userreg = new FormGroup({
    UserName : new FormControl('' , Validators.required),
    job : new FormControl('' , Validators.required),
   })

  ngOnInit(): void {
  }

  get username(){ return this.userreg.get('UserName')}
  get job(){ return this.userreg.get('job')}


  
  reguser(){
    if(this.userreg.get('UserName')?.value == "" && this.userreg.get('job')?.value == "")
    {
      this.successstatus = true;
    }
    else{
      this.http.getuerreg(this.userreg.value).subscribe((data)=>{ 
      this.router.navigate(['/usersdetails']);
     }
     ,(error)=>{
      alert("invalid Username/Password...!!")
     })
    }
   
  }

}
