import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../shared/services/server.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server;
  constructor(private serverSrv : ServerService , private route : ActivatedRoute , private  router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.server = this.serverSrv.findByid(params['id'])
    )
  }

  editServer() {
this.router.navigate(['edit'],{relativeTo: this.route , queryParams:{status : 'test'},queryParamsHandling: 'merge'})
  }
}
