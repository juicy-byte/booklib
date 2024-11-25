
class User {
    constructor(email, username, firstName, lastName, password) {
        this.email = email;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = this.loadBooks();
        this.users = this.loadUsers();
        this.loggedInUser = null;
        this.registeredUser = null;
    }

    loadUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    loadBooks() {
        return JSON.parse(localStorage.getItem('books')) || [];
    }

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    saveBooks() {
        localStorage.setItem('books', JSON.stringify(this.books));
    }

    registerUser() {


        const email = document.getElementById('reg-email').value;
        const username = document.getElementById('reg-username').value;
        const firstName = document.getElementById('regFirstName').value;
        const lastName = document.getElementById('regLastName').value
        const password = document.getElementById('regPassword').value

        let errors = [];
        const errorMsg = document.getElementById("message");
    
        if (!email.includes('@') && !email.includes('.')) {
            errors.push('Invalid email: Email must contain "@" and "."');
        }
        if (!password.includes('@') && !password.includes('*')){
            errors.push("Password must include '@' and '*'"); 
        }

        if (errors.length > 0) {
            errorMsg.classList.add("errors");
            errorMsg.textContent = errors.join(' ');
            setTimeout(() => {
                errorMsg.classList.remove("errors");
                errorMsg.textContent = ""; 
            }, 3000);
            return; 
        }

        const newUser = new User(email, username, firstName, lastName);
        this.users.push(newUser);
        this.saveUsers();   
        
        this.registeredUser = User
        document.getElementById('userReg').style.display = 'none';
        document.getElementById('userLogin').style.display = 'flex';
        console.log('i cant log in');

        console.log('User registered successfully:', newUser);
        alert('User registered successfully!');


        document.getElementById('userReg').addEventListener('submit', (e) => {
            e.preventDefault();
    })

    }

    loginUser() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('loginPassword').value;

        const user = this.users.find(u => u.email === email && u.password === password);


        // const login = document.getElementById('userLogin');
        // const register = document.getElementById('userReg');

        // if(login.style.display === 'block'){
        //     register.style.display = 'none;'
        // }

        if (user) {
            this.loggedInUser = user;
            document.getElementById('user-section').style.display = 'none';
            document.getElementById('book-section').style.display = 'block';
            this.displayBooks();
            alert('Logged in successfully!');
        } else {
            alert('User not found!');
        }
    }

    addBook() {
        // if (!this.loggedInUser) {
        //     alert('You must be logged in to add a book.');
        //     return;
        // }

        const title = document.getElementById('book-title').value;
        const author = document.getElementById('book-author').value;

        const newBook = new Book(title, author);
        this.books.push(newBook);
        this.saveBooks();

        document.getElementById('book-title').value = '';
        document.getElementById('book-author').value = '';

        this.displayBooks();
    }

    displayBooks() {
        const booksListDiv = document.getElementById('books-list');
        booksListDiv.innerHTML = '';

        this.books.forEach(book => {
            const bookDiv = document.createElement('div');
            // bookDiv.classlist.add = 'book-Div';
            bookDiv.textContent = `${book.title} by ${book.author}`;
            booksListDiv.appendChild(bookDiv);
        });
    }
}

const library = new Library();
console.log('library', library)
