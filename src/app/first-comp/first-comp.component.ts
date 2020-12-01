import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {

  @Input() largeur:any;
  @Input() hauteur:any;
  @Input() hauteurRect:any;
  @Input() compteARebours:any;
  dateActuelle:any;
  dateElection:any;


  constructor() { }

  ngOnInit() {
    this.hauteur = window.innerHeight;
    this.largeur = window.innerWidth;
    this.hauteurRect = document.getElementById("vainqueur").offsetHeight;
    console.log(this.largeur,this.hauteur,this.hauteurRect);

    this.dateActuelle=new Date();
    this.compteARebours = this.dateActuelle
  }
  onResize(event){
    console.log("loool");
    this.hauteur = window.innerHeight;
    this.largeur = window.innerWidth;
    // document.getElementById("background").style.height = window.innerHeight+'px';
    // document.getElementById("background").style.width = window.innerWidth+'px';
  }
  getTime(){

    // Set the date we're counting down to
    var countDownDate = new Date("Dec 10, 2020 15:37:25").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("countdown").innerHTML = days + "d : " + hours + "h : "
        + minutes + "m : " + seconds + "s " ;
      },1000);
  }
  getDateFromApi(){
    fetch("http://api.open-notify.org/astros.json", {
      "method": "GET",
      // "headers": {
      //   "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
      //   "x-rapidapi-key": "bc8e87f6afmsh441c628ca0e6b75p1db5a0jsn6d942fb6c91b"
      // }
    })
      .then(response => {
        console.log(response.json());
      })
      .catch(err => {
        console.log(err);
      });
  }



}
