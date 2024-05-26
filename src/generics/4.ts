type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser<T extends User>(initialValues: Partial<T>): User {
    const defaultUserParam: User = {
        name: '',
        surname: '',
        email: '',
        password: '',

    }
    return {...defaultUserParam, ...initialValues}
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});