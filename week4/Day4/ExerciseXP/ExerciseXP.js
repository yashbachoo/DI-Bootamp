// Exercise 1

let AccessDiv = document.getElementById("container");
alert(AccessDiv);

// ////////////////////////////////////////////////////////////////
document.querySelector(".list").children[1].textContent= "Richard";


// ////////////////////////////////////////////////////////////////

list.forEach (list=> list.firstElementChild.textContent="yash");

// ////////////////////////////////////////////////////////////////


list[1].children[1].remove();

////////////////////////////////////////////////////////////////

list.forEach (list=> list.classList.add("student_list"));
              
////////////////////////////////////////////////////////////////


// Exercise 3

const navbar = document.getElementById("navBar");

navbar.classList.add("my-Class");


let li = document.createElement("li");

const createTextNode = document.createTextNode("Logout");

li.appendChild(createTextNode);


const ul = navbar?.firstElementChild; 

ul.appendChild(li);

////////////////////////////////////////////////////////////////


// Exercise 4

const allbooks = []
console.log(allBooks);

const book1 = {
    title: "Book 1",
    author: "Author 1",
    year: 2000,
    isAvailable: true
}

const book2 = {
    title: "Book 2",
    author: "Author 2",
    year: 2005,
    isAvailable: false
}

allBooks.push(book1, book2);

const table = document.createElement("table");
table.innerHTML = 

<thead>
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Year</th>
        <th>Available</th>
    </tr>
</thead>


const bookListDiv = document.querySelector(".list-books")

bookListDiv?.appendChild(table);