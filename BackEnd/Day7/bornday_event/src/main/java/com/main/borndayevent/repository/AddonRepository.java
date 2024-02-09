package com.main.borndayevent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.borndayevent.model.AddonModel;

public interface AddonRepository extends JpaRepository<AddonModel,Integer> {

}
