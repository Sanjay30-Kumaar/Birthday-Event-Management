package com.example.birthday_event.service;

import java.util.List;
import java.util.Optional;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.birthday_event.model.Register;
import com.example.birthday_event.repository.Register_Repo;

@Service
public class Register_Service {
    private final Register_Repo registerRepo;

    // @Autowired
    public Register_Service(Register_Repo registerRepo) {
        this.registerRepo = registerRepo;
    }

    public List<Register> getAllRegisters() {
        return registerRepo.findAll();
    }

    public Optional<Register> getRegisterById(int id) {
        return registerRepo.findById(id);
    }

    public Register saveRegister(Register register) {
        return registerRepo.save(register);
    }

    public void deleteRegister(int id) {
        registerRepo.deleteById(id);
    }
}

