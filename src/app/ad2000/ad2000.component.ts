import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad2000',
  templateUrl: './ad2000.component.html',
  styleUrls: ['./ad2000.component.css']
})
export class AD2000Component implements OnInit {
  rows = [{
    data1: '株式会社XXXXXXX',
    data2: 'XXXX課',
    data3: '山田 太郎',
    data4: 'XXX県XX市XX町00-00-00',
    data5: '鈴木 花子',
    data6: '00-0000-0000'
  },
    {
      data1: '株式会社XXXXXXX',
      data2: 'XXXX課',
      data3: '山田 太郎',
      data4: 'XXX県XX市XX町00-00-00',
      data5: '鈴木 花子',
      data6: '00-0000-0000'
    },
    {
      data1: '株式会社XXXXXXX',
      data2: 'XXXX課',
      data3: '山田 太郎',
      data4: 'XXX県XX市XX町00-00-00',
      data5: '鈴木 花子',
      data6: '00-0000-0000'
    }]
  constructor() { }

  ngOnInit() {
  }

}
