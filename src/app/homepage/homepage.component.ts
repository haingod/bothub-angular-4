import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mainpage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  rows = [{
    time: '2017-07-01',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-02',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-03',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-04',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-05',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-06',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  },{
    time: '2017-07-07',
    data1: '(XXXXXXX)',
    data2: '(XXXXXXX)'
  }
  ]
  constructor() { }

  ngOnInit() {
  }
}
