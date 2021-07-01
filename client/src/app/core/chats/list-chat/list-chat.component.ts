import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/services/setup/setup.service';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.scss']
})
export class ListChatComponent implements OnInit {

  recent: boolean = false;
  groups: boolean = false;
  public: boolean = false;


  constructor(private setupService: SetupService) { }

  ngOnInit(): void {
    // this.setupService.tooltip()

  }

  choose(chosen:any){
    console.log(chosen)
  }

}
