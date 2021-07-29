import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../../userServices/userapi.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  userlist : any ;
  userlistdata : any;
  closeResult = '';
  userdata : any ;
  userdataid : any = {};

  constructor(private http : UserapiService , private modalService: NgbModal) {
    
    this.http.getuserlist().subscribe((data)=>{
      this.userlistdata = data;
      this.userlist = this.userlistdata.data;
    },(error)=>{
       console.log(error)
    });

   }

  ngOnInit(): void {
  }

  open(content : any,id : any) {
    this.viewdata(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  viewdata(id : any){
    this.http.getuserdata(id).subscribe((data)=>{
     
      this.userdata = data;
      this.userdataid = this.userdata.data;
    },error=>{
      console.log(error);
    });
  }

}
