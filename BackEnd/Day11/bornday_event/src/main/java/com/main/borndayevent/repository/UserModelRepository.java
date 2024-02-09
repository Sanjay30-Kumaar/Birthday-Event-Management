package com.main.borndayevent.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.borndayevent.model.User;
import com.main.borndayevent.model.UserModel;


public interface UserModelRepository extends JpaRepository<UserModel,Integer> {
    Optional<UserModel> findByUser(User user);
    Optional<UserModel> findByUserEmail(String email);
}
