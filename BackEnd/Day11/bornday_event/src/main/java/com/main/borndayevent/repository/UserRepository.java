package com.main.borndayevent.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.borndayevent.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
