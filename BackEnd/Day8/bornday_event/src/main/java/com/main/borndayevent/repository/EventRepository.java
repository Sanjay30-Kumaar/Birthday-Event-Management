package com.main.borndayevent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.borndayevent.model.EventModel;


public interface EventRepository extends JpaRepository<EventModel,Integer> {

}
