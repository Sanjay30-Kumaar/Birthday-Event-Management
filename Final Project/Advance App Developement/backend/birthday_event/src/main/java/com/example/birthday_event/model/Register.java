package com.example.birthday_event.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Register {
    @Id
    @GeneratedValue
	private int id;
	private String firstName;
	private long phoneNumber;
	private String emailId;
    private String birthdayDate;
	private String password;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirsName(String firstName) {
        this.firstName = firstName;
    }
    public long getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public String getBirthdayDate() {
        return birthdayDate;
    }
    public void setBirthdayDate(String birthdayDate) {
        this.birthdayDate = birthdayDate;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    @Override
    public String toString() {
        return "Register [id=" + id + ", firstName=" + firstName + ", phoneNumber=" + phoneNumber + ", emailId=" + emailId
                + ", birthdayDate=" + birthdayDate + ", password=" + password + "]";
    }
    

	

}
