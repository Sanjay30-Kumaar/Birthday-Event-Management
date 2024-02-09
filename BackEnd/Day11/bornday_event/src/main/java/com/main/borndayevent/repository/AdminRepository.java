package com.main.borndayevent.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.main.borndayevent.model.AdminModel;
import com.main.borndayevent.model.User;


public interface AdminRepository extends CrudRepository<AdminModel, Integer>{
    Optional<AdminModel> findByUser(User user);
    Optional<AdminModel> findByUserEmail(String email);
}

