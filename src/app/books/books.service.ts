import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){

    return [{
      name: 'Clean Code',
      author: 'Robert C Martin',
      image: '/assets/images1.jpg',
      amount: 700
    },
    {
      name:'Pragmatic Programmer',
      author: 'David Thomas',
      image: '/assets/images.jpg',
      amount: 800
    },
    {
      name:'art of computer programming',
      author: 'Donald john fuller',
      image: '/assets/images2.jpg',
      amount: 1000
    },
    {
      name:'Introduction to algorithms',
      author: 't cormen',
      image: '/assets/images3.jpg',
      amount: 1500
    },
    {
      name:'Introduction to angular',
      author: 'm collins',
      image: '/assets/images4.jpg',
      amount: 1200
    },
    {
      name:'asp.net core for beginers',
      author: 'l johnson',
      image: '/assets/images5.jpg',
      amount: 1500
    }
  ]
  
  }
}


