const myNums = [0,1,2,3,4,5,6,7,8,9,10]
const arr1 = myNums.filter( (item)=>{
  if(item%2 === 0){
    return item
  }
})
console.log(arr1);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'Fantasy', publish: 2000, edition: 2005 },
  { title: 'Book Eight', genre: 'Biography', publish: 2012, edition: 2015 },
  { title: 'Book Nine', genre: 'Philosophy', publish: 1995, edition: 1999 },
  { title: 'Book Ten', genre: 'Thriller', publish: 2010, edition: 2012 },
  { title: 'Book Eleven', genre: 'Self-Help', publish: 2018, edition: 2019 }
];

const userBooks = books.filter( (book)=> book.publish > 2000 && book.genre === 'Biography' )
console.log(userBooks);

