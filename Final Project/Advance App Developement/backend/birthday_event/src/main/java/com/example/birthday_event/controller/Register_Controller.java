package com.example.birthday_event.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.birthday_event.model.Register;
import com.example.birthday_event.service.Register_Service;

@RestController
@RequestMapping("/api/registers")
public class Register_Controller {

    private final Register_Service registerService;

   
    public Register_Controller(Register_Service registerService) {
        this.registerService = registerService;
    }

    @GetMapping("/get")
    public List<Register> getAllRegisters() {
        return registerService.getAllRegisters();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Register> getRegisterById(@PathVariable int id) {
        Optional<Register> register = registerService.getRegisterById(id);
        return register.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                       .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/post")
    public ResponseEntity<Register> createRegister(@RequestBody Register register) {
        Register savedRegister = registerService.saveRegister(register);
        return new ResponseEntity<>(savedRegister, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Register> updateRegister(@PathVariable int id, @RequestBody Register register) {
        if (!registerService.getRegisterById(id).isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        register.setId(id);
        Register updatedRegister = registerService.saveRegister(register);
        return new ResponseEntity<>(updatedRegister, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegister(@PathVariable int id) {
        if (!registerService.getRegisterById(id).isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        registerService.deleteRegister(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

