package com.main.borndayevent.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.borndayevent.model.ThemeModel;

public interface ThemeRepository extends JpaRepository<ThemeModel,Integer> {

}
