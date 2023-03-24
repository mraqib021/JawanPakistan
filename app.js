var ramzan = {
    day1: {
      date: "24-March",
      day: "Friday",
      sehritime: "00:37 AM",
      iftaritime: "06:44 PM",
    },
    day2: {
      date: "25-March",
      day: "Saturday",
      sehritime: "05:16 AM",
      iftaritime: "06:45 PM",
    },
    day3: {
      date: "26-March",
      day: "Sunday",
      sehritime: "05:15 AM",
      iftaritime: "06:45 PM",
    },
    day4: {
      date: "27-March",
      day: "Monday",
      sehritime: "05:12 AM",
      iftaritime: "06:46 PM",
    },
    day5: {
      date: "28-March",
      day: "Tuesday",
      sehritime: "05:12 AM",
      iftaritime: "06:46 PM",
    },
    day6: {
      date: "29-March",
      day: "Wednesday",
      sehritime: "05:11 AM",
      iftaritime: "06:46 PM",
    },
    day7: {
      date: "30-March",
      day: "Thursday",
      sehritime: "05:10 AM",
      iftaritime: "06:47 PM",
    },
    day8: {
      date: "31-March",
      day: "friday",
      sehritime: "05:09 AM",
      iftaritime: "06:47 PM",
    },
    day9: {
      date: "01-April",
      day: "Saturday",
      sehritime: "05:08 AM",
      iftaritime: "06:48 PM",
    },
    day10: {
      date: "02-April",
      day: "Sunday",
      sehritime: "05:07 AM",
      iftaritime: "06:48 PM",
    },
    day11: {
      date: "03-April",
      day: "Monday",
      sehritime: "05:06 AM",
      iftaritime: "06:49 PM",
    },
    day12: {
      date: "04-April",
      day: "Tuesday",
      sehritime: "05:05 AM",
      iftaritime: "06:49 PM",
    },
    day13: {
      date: "05-April",
      day: "Wednesday",
      sehritime: "05:04 AM",
      iftaritime: "06:50 PM",
    },
    day14: {
      date: "06-April",
      day: "Thursday",
      sehritime: "05:02 AM",
      iftaritime: "06:50 PM",
    },
    day15: {
      date: "07-April",
      day: "friday",
      sehritime: "05:01 AM",
      iftaritime: "06:50 PM",
    },
    day16: {
      date: "08-April",
      day: "Saturday",
      sehritime: "05:00 AM",
      iftaritime: "06:51 PM",
    },
    day17: {
      date: "09-April",
      day: "Sunday",
      sehritime: "04:59 AM",
      iftaritime: "06:51 PM",
    },
    day18: {
      date: "09-April",
      day: "Monday",
      sehritime: "04:58 AM",
      iftaritime: "06:52 PM",
    },
    day19: {
      date: "10-April",
      day: "Tuesday",
      sehritime: "04:57 AM",
      iftaritime: "06:52 PM",
    },
    day20: {
      date: "11-April",
      day: "Wednesday",
      sehritime: "04:56 AM",
      iftaritime: "06:53 PM",
    },
    day21: {
      date: "12-April",
      day: "Thursday",
      sehritime: "04:55 AM",
      iftaritime: "06:53 PM",
    },
    day22: {
      date: "13-April",
      day: "friday",
      sehritime: "04:53 AM",
      iftaritime: "06:54 PM",
    },
    day23: {
      date: "14-April",
      day: "Saturday",
      sehritime: "04:52 AM",
      iftaritime: "06:54 PM",
    },
    day24: {
      date: "15-April",
      day: "Sunday",
      sehritime: "04:51 AM",
      iftaritime: "06:54 PM",
    },
    day25: {
      date: "16-April",
      day: "Monday",
      sehritime: "04:50 AM",
      iftaritime: "06:55 PM",
    },
    day26: {
      date: "17-April",
      day: "Tuesday",
      sehritime: "04:49 AM",
      iftaritime: "06:55 PM",
    },
    day27: {
      date: "18-April",
      day: "Wednesday",
      sehritime: "04:48 AM",
      iftaritime: "06:56 PM",
    },
    day28: {
      date: "19-April",
      day: "Thursday",
      sehritime: "04:47 AM",
      iftaritime: "06:56 PM",
    },
    day29: {
      date: "20-April",
      day: "friday",
      sehritime: "04:46 AM",
      iftaritime: "06:57 PM",
    },
    day30: {
      date: "21-April",
      day: "Saturday",
      sehritime: "04:45 AM",
      iftaritime: "06:58 PM",
    },
  };
  
  // console.log(ramzan.day1.date);
  
  var table = document.getElementById("table");
  
  var today = new Date();
  
  var curenthour = today.getHours();
  var curentminute = today.getMinutes();
  var curentsec = today.getSeconds();
  var timin = () => {
    if (curenthour <= 12) {
      if (curenthour == 10) {
        var time = curenthour + ":" + curentminute + " AM";
        // console.log(time);
        alert(time)
      }
      var time = "0" + curenthour + ":" + curentminute + " AM";
      // console.log(time);
      alert(time);
    } else if (curenthour >= 13) {
      var time = curenthour + ":" + curentminute + " PM";
      // console.log(time);
      alert(time);
    }
    
    var count = 1;
    for (let i = 1; i < 3; i++) {
      var dat = ramzan["day" + i];
      if (dat.sehritime == time) {
        // console.log(time + dat.sehritime);
        // alert("Sehri Time " + dat.sehritime + " ");
      } else {
        console.log(time + dat.sehritime);
        // alert("NUll")
      }
      // console.log(dat.iftaritime);
      count++;
    }
  };
  timin();
  // var a = () => {
  //   var count = 1;
  //   for (let i = 1; i < 3; i++) {
  //     var dat = ramzan["day" + i];
  //     if (dat.sehritime == time) {
  //       console.log(time + dat.sehritime);
  //       alert("Sehri Time " + dat.sehritime + " ");
  //     }else{
  //       console.log(time + dat.sehritime);
  //       // alert("NUll")
  //     }
  //     // console.log(dat.iftaritime);
  //     count++;
  //   }
  // };
  // a();
  // function call() {
  //   var count = 1;
  //   for (let i = 1; i < 3; i++) {
  //     var dat = ramzan["day" + i];
  //     if(dat.date == dat.date){
  //       alert("Ramzan Mubarak"+ dat.sehritime + " " + curenttime)
  //     }
  //     // console.log(dat.iftaritime);
  //     count++;
  //   }
  // }
  function call() {
    var count = 1;
    for (let i = 1; i < 30; i++) {
      var dat = ramzan["day" + i];
      table.innerHTML += `
          <tr>
              <td>${i}</td>
              <td>${dat.date}</td>
              <td>${dat.day}</td>
              <td>${dat.sehritime}</td>
              <td>${dat.iftaritime}</td>
          </tr>
      `;
      // console.log(dat.iftaritime);
      count++;
    }
  }
  
  console.log(typeof ramzan.day1.sehritime);
  // var today = new Date();