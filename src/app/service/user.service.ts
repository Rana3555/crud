import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private userList: User[] = [{
        id: 1,
        name: 'Sriram',
        dob: new Date('01/21/1997'),
        email: 'ram@gmail.com',
        gender: 'Male',
        Mobile: 8978786938,
        isActive: true,
        userType: 'Admin'
    }];
    constructor() {}
    getUsers() {
        return this.userList
    }
    getUsersByID(id: number) {
        return this.userList.find(x => x.id == id)
    }
    addUser(user: User) {
        user.id = new Date().getTime();
        this.userList.push(user);
    }
    updateUser(user: User) {
        const userIndex = this.userList.findIndex(x => x.id == user.id);
        if (userIndex != null && userIndex != undefined) {
            this.userList[userIndex] = user;
        }
    }
    removeUser(id: number) {
        this.userList = this.userList.filter(x => x.id != id);
    }
}