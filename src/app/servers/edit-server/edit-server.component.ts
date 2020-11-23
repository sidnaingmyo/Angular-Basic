import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../../shared/services/server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
allowEdit = false ;
serverName : string;
serverStatus : string;
id;
  constructor(private router : Router,private route : ActivatedRoute , private ServerSrv : ServerService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      parmas => {
        this.id = parmas['id']
        const server = this.ServerSrv.findByid(this.id);
        this.serverName = server.name;
        this.serverStatus = server.status;
      }
    )

    this.route.queryParams.subscribe(
      params => this.allowEdit = params['allowEdit'] == 1
    )
  }

  upDateServer() {
    this.ServerSrv.updateServer({id : this.id ,newServerName : this.serverName , newServerStatus: this.serverStatus })
    this.router.navigate(['/servers' , this.id])
  }
}
