package com.example.birthday_event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.birthday_event.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking , Integer>{

}
