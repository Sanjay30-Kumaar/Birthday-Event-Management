package com.example.birthday_event.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.birthday_event.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
