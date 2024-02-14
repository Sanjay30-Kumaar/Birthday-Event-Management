
package com.example.birthday_event.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.birthday_event.model.Register;

public interface Register_Repo extends JpaRepository<Register, Integer> {
    
}
