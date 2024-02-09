package com.main.borndayevent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.borndayevent.model.FoodModel;

public interface FoodRepository extends JpaRepository<FoodModel,Integer> {

}
