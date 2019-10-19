var contactApp = angular.module('contact-app', []);

contactApp.controller('contact-app-controller', ContactAppController);
contactApp.controller('header-controller', HeaderController);
contactApp.controller('footer-controller', FooterController);

function HeaderController(AppNameSvc) {
  this.appTitle = AppNameSvc;  
}

function FooterController(AppNameSvc) {
  this.appTitle = AppNameSvc;  
}

function ContactAppController(AppDataSvc, LoggingSvc) {
  this.contacts = AppDataSvc.contacts;

  this.selectContact = function(index) {
    this.selectedContact = this.contacts[index];
    LoggingSvc('contact selected: ' + index);
  }
}

contactApp.value('LoggingSvc', function(message) {
  console.log(message);
});

contactApp.value('AppNameSvc', "My Contact Application");

contactApp.value('AppDataSvc', {
  "contacts": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Davut",
        "last": "Ekici"
      },
      "location": {
        "street": {
          "number": 1790,
          "name": "Anafartalar Cd"
        },
        "city": "Şanlıurfa",
        "state": "Adana",
        "country": "Turkey",
        "postcode": 42700,
        "coordinates": {
          "latitude": "70.4013",
          "longitude": "-112.6140"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "davut.ekici@example.com",
      "login": {
        "uuid": "45121c05-cd54-4083-b9db-5440b7ec47bf",
        "username": "ticklishpanda437",
        "password": "monica",
        "salt": "X2trdFm8",
        "md5": "a5425e14a878ed2a43276db73f37dc3b",
        "sha1": "86d74dec0ae85f552e4d64d1ef04478cd1aa33c8",
        "sha256": "96f192c2b6f5f254d01cf66d0592859a0701103adf8c53e201afef279ad00a87"
      },
      "dob": {
        "date": "1959-01-04T23:31:31.696Z",
        "age": 60
      },
      "registered": {
        "date": "2007-05-21T18:52:05.489Z",
        "age": 12
      },
      "phone": "(748)-724-7903",
      "cell": "(372)-562-2762",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/2.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Riley",
        "last": "Hunter"
      },
      "location": {
        "street": {
          "number": 1462,
          "name": "Alexander Road"
        },
        "city": "Salisbury",
        "state": "Isle of Wight",
        "country": "United Kingdom",
        "postcode": "QV6 0NE",
        "coordinates": {
          "latitude": "-74.7715",
          "longitude": "-61.1371"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "riley.hunter@example.com",
      "login": {
        "uuid": "6b48944c-a393-4c70-a0b8-185a92844c8c",
        "username": "lazypeacock622",
        "password": "scandinavian",
        "salt": "FuPLiHsq",
        "md5": "37c491e691f5546109a2402137409a57",
        "sha1": "4fe0a046e5fc18ed792bae5e9f9dae1bb8df4e3a",
        "sha256": "36299795069b02efe59c306c97f2b9682b0ba9520846f7b50f9eb886e74e2c35"
      },
      "dob": {
        "date": "1964-01-29T12:32:02.166Z",
        "age": 55
      },
      "registered": {
        "date": "2012-06-16T17:28:41.764Z",
        "age": 7
      },
      "phone": "017683 54758",
      "cell": "0737-383-442",
      "id": {
        "name": "NINO",
        "value": "RA 40 68 90 C"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/8.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/8.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/8.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Ana",
        "last": "Gutierrez"
      },
      "location": {
        "street": {
          "number": 9944,
          "name": "Calle de Alcalá"
        },
        "city": "Arrecife",
        "state": "Comunidad de Madrid",
        "country": "Spain",
        "postcode": 69669,
        "coordinates": {
          "latitude": "14.4559",
          "longitude": "-50.7193"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "ana.gutierrez@example.com",
      "login": {
        "uuid": "91630949-967e-4618-b3b7-e2bb76967c47",
        "username": "whitedog837",
        "password": "margaret",
        "salt": "QtBgHCq2",
        "md5": "d571bf6eb11bb9f69863318e21dfc68a",
        "sha1": "07d9aa0a1ffd0f54ff8b6bd1407d4d6c6022cb25",
        "sha256": "7150a5ba3e56ae487072154a0e7991c26fdc1cb7698b2a17e1f2b30516c6772d"
      },
      "dob": {
        "date": "1951-03-08T04:40:43.496Z",
        "age": 68
      },
      "registered": {
        "date": "2009-04-19T12:01:58.034Z",
        "age": 10
      },
      "phone": "957-628-556",
      "cell": "631-809-302",
      "id": {
        "name": "DNI",
        "value": "81326406-E"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Eline",
        "last": "Muller"
      },
      "location": {
        "street": {
          "number": 9768,
          "name": "Rue de la Baleine"
        },
        "city": "Clermont-Ferrand",
        "state": "Bouches-du-Rhône",
        "country": "France",
        "postcode": 28580,
        "coordinates": {
          "latitude": "42.4966",
          "longitude": "134.9099"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "eline.muller@example.com",
      "login": {
        "uuid": "b7d1b8e4-ba50-4b82-b41a-751a7f2a8d4f",
        "username": "yellowelephant225",
        "password": "caprice",
        "salt": "Oh0cQWc3",
        "md5": "1bfe5c81d727d8ec5faf7fb20c033b9d",
        "sha1": "d4ec443f51b55e04e3a28d0dc631b866d7550126",
        "sha256": "e1ee9255c96209cb1c7aca77fa149463182ea26cfa0b339c74047ef8ff327ef7"
      },
      "dob": {
        "date": "1992-12-27T15:17:09.014Z",
        "age": 27
      },
      "registered": {
        "date": "2017-03-17T22:57:35.126Z",
        "age": 2
      },
      "phone": "04-06-01-98-18",
      "cell": "06-13-85-03-17",
      "id": {
        "name": "INSEE",
        "value": "2NNaN15443676 96"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/3.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Begoña",
        "last": "Soto"
      },
      "location": {
        "street": {
          "number": 4564,
          "name": "Calle Mota"
        },
        "city": "Talavera de la Reina",
        "state": "Castilla la Mancha",
        "country": "Spain",
        "postcode": 51159,
        "coordinates": {
          "latitude": "57.3232",
          "longitude": "29.5616"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "begona.soto@example.com",
      "login": {
        "uuid": "e8de0081-02c5-4136-996c-9e5322e8da63",
        "username": "organicwolf189",
        "password": "7894",
        "salt": "sS7sbLsf",
        "md5": "1e8236b47c3584d28ab395ab820d4bdd",
        "sha1": "583ce634b1cb26d3cff6f9e11d7df4a792bdeebd",
        "sha256": "9d1aacda6fdbcb5c03321ff267d3c39b59b7be9a98eb33b7423264bb3365b149"
      },
      "dob": {
        "date": "1960-01-01T12:03:23.967Z",
        "age": 59
      },
      "registered": {
        "date": "2005-04-25T19:15:01.156Z",
        "age": 14
      },
      "phone": "925-073-069",
      "cell": "684-998-562",
      "id": {
        "name": "DNI",
        "value": "07253452-H"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Albert",
        "last": "Johnston"
      },
      "location": {
        "street": {
          "number": 5137,
          "name": "W Campbell Ave"
        },
        "city": "College Station",
        "state": "New Mexico",
        "country": "United States",
        "postcode": 47502,
        "coordinates": {
          "latitude": "-37.3396",
          "longitude": "153.4363"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "albert.johnston@example.com",
      "login": {
        "uuid": "4c59aa1c-f1cb-4b6c-8e66-74edf89ada07",
        "username": "beautifulladybug845",
        "password": "nine",
        "salt": "ko54lwCH",
        "md5": "7208eea7e2f15e4c42b1b406c1e00550",
        "sha1": "9e7e70075013e0f06875832afffdcaf9d617fd61",
        "sha256": "1f48fa03fb6181121ac5a1d14937c435dcdff7f2f1d8733678abab669a1c6012"
      },
      "dob": {
        "date": "1969-03-02T16:16:52.368Z",
        "age": 50
      },
      "registered": {
        "date": "2010-10-24T13:27:27.529Z",
        "age": 9
      },
      "phone": "(173)-133-2491",
      "cell": "(232)-288-4217",
      "id": {
        "name": "SSN",
        "value": "020-86-8425"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/27.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/27.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/27.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Johan",
        "last": "Meyer"
      },
      "location": {
        "street": {
          "number": 753,
          "name": "Avenue Debourg"
        },
        "city": "Aulnay-sous-Bois",
        "state": "Haute-Corse",
        "country": "France",
        "postcode": 16438,
        "coordinates": {
          "latitude": "-62.6474",
          "longitude": "65.4798"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "johan.meyer@example.com",
      "login": {
        "uuid": "a81d7a92-bee9-47dc-83b1-7852843a070a",
        "username": "bigdog116",
        "password": "kirby",
        "salt": "jOGBMMwG",
        "md5": "e00079f6232193338366335bfa58314f",
        "sha1": "95849e886af9778ff65be566df96c94afb551902",
        "sha256": "26d4fb3c3910c53bc1ff6749d98ac05c1c89acdf8af1ebf71fe1eb541b1a308b"
      },
      "dob": {
        "date": "1995-06-29T15:33:28.454Z",
        "age": 24
      },
      "registered": {
        "date": "2007-12-05T04:30:31.066Z",
        "age": 12
      },
      "phone": "03-37-82-28-76",
      "cell": "06-10-68-91-54",
      "id": {
        "name": "INSEE",
        "value": "1NNaN34126186 17"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/14.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/14.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/14.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Nolhan",
        "last": "Vidal"
      },
      "location": {
        "street": {
          "number": 1047,
          "name": "Rue Louis-Blanqui"
        },
        "city": "Rueil-Malmaison",
        "state": "Creuse",
        "country": "France",
        "postcode": 65611,
        "coordinates": {
          "latitude": "54.9430",
          "longitude": "146.1704"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "nolhan.vidal@example.com",
      "login": {
        "uuid": "015d0665-f418-4aa5-b187-4d9e2d16e8bb",
        "username": "organicladybug627",
        "password": "whitesox",
        "salt": "crHZGP6x",
        "md5": "803869285d6c17ae447ac7a4518e5abf",
        "sha1": "5ea018efdc56701de732a0ca260734296bf5f3c6",
        "sha256": "3df556ea200a9a360d34b80bacd43310f4fad2ef38bb4fd7ade9eb54a8fb04ce"
      },
      "dob": {
        "date": "1975-06-06T09:44:46.485Z",
        "age": 44
      },
      "registered": {
        "date": "2012-01-28T13:21:48.347Z",
        "age": 7
      },
      "phone": "02-08-69-17-47",
      "cell": "06-11-43-57-79",
      "id": {
        "name": "INSEE",
        "value": "1NNaN34506686 37"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/52.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/52.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Filippa",
        "last": "Madsen"
      },
      "location": {
        "street": {
          "number": 2371,
          "name": "Lundevej"
        },
        "city": "Billum",
        "state": "Nordjylland",
        "country": "Denmark",
        "postcode": 63323,
        "coordinates": {
          "latitude": "-40.7216",
          "longitude": "112.3068"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "filippa.madsen@example.com",
      "login": {
        "uuid": "99a41d0f-513e-4153-a70a-28f4b3dfa313",
        "username": "angrybutterfly825",
        "password": "draco",
        "salt": "KB0g2x2a",
        "md5": "018d8c82c0bdd191a5f509cf8e5549df",
        "sha1": "a3cf7c2ec1bb8ccaed0ccce15a06ead51d300620",
        "sha256": "a02015ccdf1ce059055fa5647da80d95313f3e3160fa23207e0dbcb069daf02a"
      },
      "dob": {
        "date": "1976-08-18T21:11:53.364Z",
        "age": 43
      },
      "registered": {
        "date": "2006-08-28T23:41:53.744Z",
        "age": 13
      },
      "phone": "54753889",
      "cell": "82367147",
      "id": {
        "name": "CPR",
        "value": "180876-9787"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/93.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/93.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/93.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Helmer",
        "last": "Lundgård"
      },
      "location": {
        "street": {
          "number": 9347,
          "name": "Lindemans gate"
        },
        "city": "Kvernaland",
        "state": "Trøndelag",
        "country": "Norway",
        "postcode": "1597",
        "coordinates": {
          "latitude": "26.8522",
          "longitude": "-136.9499"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "helmer.lundgard@example.com",
      "login": {
        "uuid": "f0ac0d3f-42ed-40c1-b11e-e2d25e8151b1",
        "username": "greenswan444",
        "password": "blue22",
        "salt": "e7LQOfSu",
        "md5": "4b33b7b37bd5492d6833a9cdf490201d",
        "sha1": "d8483c89641e02b197e7c3ba805ac0d983e693c1",
        "sha256": "bd04e51ca156e4342e8f0a1fa8ed027e3bfcd48d6c96b1e5ea7af1a9a629efcc"
      },
      "dob": {
        "date": "1951-09-01T15:36:39.891Z",
        "age": 68
      },
      "registered": {
        "date": "2002-09-08T10:51:00.909Z",
        "age": 17
      },
      "phone": "32269216",
      "cell": "41481477",
      "id": {
        "name": "FN",
        "value": "01095110327"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/59.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
      },
      "nat": "NO"
    }
  ]
});
