class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    render(id) {
        let article = document.createElement('article');

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = `${this.firstName} ${this.lastName}`;
        let infoButton = document.createElement('button');
        infoButton.innerHTML = '&#8505;';
        infoButton.addEventListener('click', () => {
            infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
        });
        titleDiv.appendChild(infoButton);

        let infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';
        infoDiv.innerHTML = `
            <span>&phone; ${this.phone}</span>
            <span>&#9993; ${this.email}</span>
        `;
        article.appendChild(titleDiv);
        article.appendChild(infoDiv);

        document.getElementById(id).appendChild(article);

        Object.defineProperty(this, 'online', {
            get: function() {
                return this._online;
            },
            set: function(value) {
                this._online = value;
                if (value) {
                    article.classList.add('online');
                } else {
                    article.classList.remove('online');
                }
            }
        });
    }
}

// Example usage:
let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    // ... other contacts
];

// Render all contacts
contacts.forEach((c, index) => c.render('main'));

// To test online status toggle
setTimeout(() => contacts[0].online = true, 2000);
